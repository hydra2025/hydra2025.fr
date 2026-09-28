from datetime import datetime, timedelta
import json
import random
import time

from fastapi import FastAPI, WebSocket, WebSocketDisconnect, Request
from sqlmodel import (
    SQLModel,
    create_engine,
    Field,
    Session,
    select,
    delete,
)
import pydantic
from secrets import token_urlsafe

ALLOWED_CHARS = (
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_[]()!@#$%^&*+-=/?|"
    + "éèêëàâäùûüîïôöçÉÈÊËÀÂÄÙÛÜÎÏÔÖÇ"
)


WHITELISTED_IPS = [
    "157.159.48.96",
    "127.0.0.1",
]

MAX_STRIKES = 3


class Leaderboard(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str
    score: int
    ip: str
    suspicious: bool = False


class LeaderboardEntry(pydantic.BaseModel):
    score: int
    name: str

    @staticmethod
    def from_sqlmodel(entry: Leaderboard):
        return LeaderboardEntry(name=entry.name, score=entry.score)


class ConnectedClient(pydantic.BaseModel):
    ip: str = None
    challenge: str = None
    username: str = None
    score: int = 0
    events: list[tuple[datetime, str]] = pydantic.Field(default_factory=list)
    challenge_passed: bool = False
    game_over: bool = False
    game_suspicous: bool = False
    last_pipe: datetime = datetime.now()
    strike: int = 0

    def add_strike(self):
        self.strike += 1
        if self.strike >= MAX_STRIKES:
            self.game_suspicous = True
            print(f"[{self.username}] Game is suspicious because of too many strikes.")


banned_ips = set()


def banned(ip: str) -> bool:
    return (ip in banned_ips) and ip not in WHITELISTED_IPS


with open("challenges_js/normal.js", "r") as f:
    challenge_normal = f.read()

with open("challenges_js/banned.js", "r") as f:
    challenge_banned = f.read()


def normal_cipher(text: str) -> str:
    return "".join(
        chr((ord(c) - 32 + 95) % 95 + 32) if c.isprintable() else c for c in text
    )


app = FastAPI(docs_url=None, redoc_url=None)

# Initialize the database
engine = create_engine("sqlite:///leaderboard.db")
SQLModel.metadata.create_all(engine)


@app.get("/cleanup")
def clean_up():
    with Session(engine) as session:
        session.exec(delete(Leaderboard).where(Leaderboard.suspicious == True))  # noqa: E712
        session.exec(
            delete(Leaderboard).where(
                Leaderboard.id.not_in(
                    select(Leaderboard.id).order_by(Leaderboard.score.desc()).limit(10)
                )
            )
        )
        session.commit()


@app.get("/leaderboard")
def get_leaderboard(request: Request):
    # Check if the client is banned
    banned = request.client.host in banned_ips
    with Session(engine) as session:
        leaderboard = (
            (select(Leaderboard).order_by(Leaderboard.score.desc()).limit(10))
            if banned
            else (
                select(Leaderboard)
                .where(Leaderboard.suspicious == False)  # noqa: E712
                .order_by(Leaderboard.score.desc())
                .limit(11)
            )
        )
        return [
            LeaderboardEntry.from_sqlmodel(entry) for entry in session.exec(leaderboard)
        ]


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()

    ip = websocket.client[0]
    client = ConnectedClient(ip=ip, challenge=token_urlsafe(127))

    await websocket.send_json(dict(type="login"))

    try:
        while True:
            try:
                data = await websocket.receive_text()
            except WebSocketDisconnect as e:
                print(f"Client disconnected: {e}")
                break
            data = json.loads(data)

            # Check for jump message
            match data["type"]:
                case "flap" | "stopFlap":
                    now = datetime.now()
                    if client.game_over:
                        continue
                    delta = (
                        client.events[-1][0] - client.events[-2][0]
                        if len(client.events) > 1
                        else timedelta(seconds=1)
                    )
                    if data["p"] < -50 or data["p"] > 550:
                        print(f"[{client.username}] Went out of bounds.")
                        client.add_strike()

                    if delta > timedelta(seconds=10):
                        print(f"[{client.username}] Did not flap for 10 seconds.")
                        client.add_strike()

                    client.events.append((now, data["type"]))

                case "pipeDeleted":
                    if not client.challenge_passed:
                        print(f"[{client.username}] Client did not pass the challenge.")
                        banned_ips.add(ip)
                        continue
                    if client.game_over:
                        print(f"[{client.username}] The game is already over.")
                        continue
                    client.score += 1
                    await websocket.send_json(
                        {"type": "scoreUpdate", "score": client.score}
                    )
                    if datetime.now() - client.last_pipe < timedelta(seconds=0.3):
                        print(f"[{client.username}] Too fast pipe deletion.")
                        client.add_strike()
                    client.last_pipe = datetime.now()

                case "gameOver":
                    await websocket.send_json(
                        {"type": "gameOver", "score": client.score}
                    )
                    client.game_over = True
                    if client.score > 3:
                        if client.score > 881:
                            banned_ips.add(ip)
                            print(
                                f"[{client.username}] IP {ip} has been banned (score: {client.score})."
                            )
                            break
                        print(f"[{client.username}] Game Over: {client.score}")
                        with Session(engine) as session:
                            # Get the best score for the user
                            best_score = session.exec(
                                select(Leaderboard.score)
                                .where(Leaderboard.name == client.username)
                                .order_by(Leaderboard.score.desc())
                            ).first()
                            if best_score and best_score >= client.score:
                                print(f"[{client.username}] Best score is {best_score}")
                                continue
                            # Remove any previous entries with the same name and a lower score
                            session.exec(
                                delete(Leaderboard).where(
                                    (Leaderboard.name == client.username)
                                    & (Leaderboard.score <= client.score)
                                    & (
                                        Leaderboard.suspicious
                                        == (banned(ip) or client.game_suspicous)
                                    )
                                )
                            )
                            session.add(
                                Leaderboard(
                                    name=client.username,
                                    score=client.score,
                                    ip=ip,
                                    suspicious=(banned(ip)) or client.game_suspicous,
                                )
                            )
                            session.commit()
                case "b":
                    banned_ips.add(ip)
                    print(f"[{client.username}] IP {ip} has been banned.")
                case "setUsername":
                    username: str = data.get("username", "").strip()[0:16]
                    # Replace any non-alphanumeric characters with an underscore
                    # This is to prevent XSS attacks
                    username = "".join(
                        c if c in ALLOWED_CHARS else "_" for c in username
                    )

                    if not username:
                        username = "Anonymous"
                    if client.username:
                        print(f"[{client.username}] Changed username to {username}")

                    print(f"[{client.username}] Registered, sending challenge")
                    # Send the challenge to the client
                    await websocket.send_json(
                        {
                            "type": "challenge",
                            "challenge": (
                                challenge_banned if banned(ip) else challenge_normal
                            ).replace("{CONTENT}", client.challenge),
                        }
                    )
                    client.username = username
                case "challenge":
                    challenge = data["challenge"]
                    if challenge == client.challenge:
                        client.challenge_passed = True
                        print(f"[{client.username}] Challenge passed")
                    else:
                        print(f"[{client.username}] Challenge failed, banning IP {ip}")
                        banned_ips.add(ip)
                    await websocket.send_json({"type": "challengeComplete"})
                case "restart":
                    client.score = 0
                    client.events = []
                    client.game_over = False
                    client.game_suspicous = False
                    client.strike = 0
                case "login":
                    await websocket.send_json(dict(type="login"))
                case _:
                    print(f"Received unknown message: {data['type']} : {data}")

    except WebSocketDisconnect as e:
        print(f"Client disconnected: {e}")
    except json.JSONDecodeError:
        if data:
            print(f"Received invalid JSON: {data}")
            # ban the IP
            banned_ips.add(ip)
            await websocket.send_json(
                {
                    "type": "error",
                    "message": "On vous voit les HackademINT !",
                    "redirect": "to the shadow realm",
                }
            )
    except KeyError as e:
        print(f"Missing key: {e}")
        banned_ips.add(ip)
        if random.random() < 0.5:
            await websocket.send_json(
                {
                    "type": "error",
                    "message": "Il faut lire le code avant d'envoyer des requêtes !",
                    "redirect": "to the shadow realm",
                }
            )
        else:
            await websocket.send_json({"type": "success"})
    finally:
        try:
            await websocket.close()
        except:  # noqa: E722
            pass


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

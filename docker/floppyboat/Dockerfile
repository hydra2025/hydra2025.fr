FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY server.py .

# leaderboard.db is opened as a relative path ("sqlite:///leaderboard.db"),
# so run from the volume-backed cwd to persist it across container recreation.
VOLUME /app/data
WORKDIR /app/data

EXPOSE 8000
CMD ["uvicorn", "server:app", "--app-dir", "/app", "--host", "0.0.0.0", "--port", "8000"]

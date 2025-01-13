import os
import argparse
import paramiko
import random

COMMANDS = [
    "ffmpeg -i {input} -c:v libx265 -crf 28 -preset medium -c:a aac -b:a 128k {output}.mp4",
    "ffmpeg -i {input} -c:v libx264 -crf 23 -profile:v baseline -level 3.0 -pix_fmt yuv420p -c:a aac -ac 2 -b:a 128k -movflags faststart {output}.mp4",
    "ffmpeg -y -i {input} -c:v libvpx-vp9 -b:v 2000k -minrate 500k -maxrate 2500k -c:a libopus -pass 1 -f webm /dev/null && ffmpeg -i {input} -c:v libvpx-vp9 -b:v 2000k -minrate 500k -maxrate 2500k -c:a libopus -pass 2 {output}.webm",
]

COMMAND_ZIP_RESULT = "zip -r /ssd/{project_name}.zip /ssd/{project_name}"

COMPUTE_SERVER_IP = "192.168.0.4"

LOCAL = True


if not LOCAL:
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(
        COMPUTE_SERVER_IP,
        username=os.environ["USER"],
        key_filename=os.path.expanduser("~/.ssh/id_ed25519"),
    )

    session_id = random.randint(0, 10000)
    print(f"Session ID: {session_id}")

    # Open screen session
    stdin, stdout, stderr = ssh.exec_command(f"screen -S reencoder{session_id} -d -m")


def send_command(command):
    if LOCAL:
        print(f"Executing command: {command}")
        os.system(command)
        return
    ssh.exec_command(f"screen -S reencoder{session_id} -X stuff '{command}\n'")
    print(f"Sent command: {command}")


def send_file(local_path, remote_path):
    if LOCAL:
        print(f"Copying file {local_path} to /tmp/reencoder/{remote_path}")
        os.system(f"cp '{local_path}' '/tmp/reencoder/{remote_path}'")
        return
    print(f"Sending file {local_path} to {remote_path}")
    sftp = ssh.open_sftp()
    sftp.put(
        local_path,
        f"/tmp/reencoder/{remote_path}",
        callback=lambda x, y: print(f"Progress: {x}/{y}", end="\r"),
    )
    sftp.close()
    print()
    print("File sent")


argparser = argparse.ArgumentParser()
argparser.add_argument("input", type=str)
argparser.add_argument("project_name", type=str)
args = argparser.parse_args()


send_command("mkdir -p /tmp/reencoder/")
send_command("cd /tmp/reencoder/")
send_command(f"mkdir -p /ssd/{args.project_name}")


send_file(args.input, f"{args.project_name}.mp4")

combined_commands = " && ".join(
    [
        command.format(
            input=f"/tmp/reencoder/{args.project_name}.mp4",
            output=f"/ssd/{args.project_name}/output_{i}",
        )
        for i, command in enumerate(COMMANDS)
    ]
)
combined_commands += " && " + COMMAND_ZIP_RESULT.format(project_name=args.project_name)
send_command(combined_commands)

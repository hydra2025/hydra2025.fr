#!/bin/sh
set -e

# server.py opens "leaderboard.db" relative to its cwd (/app) and creates it
# automatically if missing. Keep the real file on the named volume at
# /app/dbdata and symlink it into place so data persists across recreation.
ln -sf /app/dbdata/leaderboard.db /app/leaderboard.db

exec uvicorn server:app --host 0.0.0.0 --port 8000

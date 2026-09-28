FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY server.py .
COPY challenges_js ./challenges_js
COPY entrypoint.sh .
RUN chmod +x entrypoint.sh && mkdir -p dbdata

EXPOSE 8000
ENTRYPOINT ["./entrypoint.sh"]

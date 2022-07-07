---
title: docker-compose
sidebar_position: 1
---

## 1. Install Docker

Follow [the official instructions](https://docs.docker.com/get-docker/).

## 2. Obtain docker-compose.yml

```bash
curl -O https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml
```

## 3. Set up environment variables (optional)

Follow [How to configure Re:Earth](config) to configure Re:Earth if needed.

## 4. Run Re:Earth

```bash
docker compose up -d
```

Once running, access [http://localhost:8080](http://localhost:8080) with your web browser (only when Re:Earth is running in integrated mode).

If Re:Earth doesn't start, check to see if port 8080 is already in use by another application.

:::info
`docker-compose` command has been replaced to `docker compose` command. It is no longer necessary to install docker-compsoe separately.
:::

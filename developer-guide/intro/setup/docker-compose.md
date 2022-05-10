---
title: docker-compose
sidebar_position: 1
---

## 1. Install Docker and docker-compose

Follow [the official instructions](https://docs.docker.com/get-docker/).

## 2. Obtain docker-compose.yml

Download [docker-compose.yml](https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml) from GitHub and put it into an appropriate working directory:

```bash
curl -O https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml
```

## 3. Set up environment variables

Follow [How to configure Re:Earth](config) to configure Re:Earth if needed.

## 4. Run Re:Earth

```bash
docker-compose up -d
```

Once running, access [http://localhost:8080](http://localhost:8080) with your web browser (only when Re:Earth is running in integrated mode).

If Re:Earth doesn't start, check to see if port 8080 is already in use by another application.

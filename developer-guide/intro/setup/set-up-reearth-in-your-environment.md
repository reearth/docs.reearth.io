---
sidebar_position: 1
---
# Set up Re:Earth in your environment
------

There are some available ways to deploy Re:Earth to your server or cloud platform:

- Your local machine with Docker
- AWS Fargate + Mongo Atlas
- Google Cloud Run + Mongo Atlas
- Kubernetes
- Linux server

## Commonly needed: set up Auth0

Follow [this article](/developer-guide/intro/setup/how-to-set-up-auth0) to set up Auth0. For now, Re:Earth won't work without Auth0.

## Your local machine with Docker

### 1. Install Docker

Follow [the official instructions](https://docs.docker.com/get-docker/).

### 2. Obtain docker-compose.yml

Download `[docker-compose.yml](https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml)` from GitHub and put it into an appropriate working directory:

```bash
curl -OL https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml
```

### 3. Set up environment variables

Create a `.env` file in the same directory and fill the following variables from Auth0:

```
REEARTH_AUTH0_AUDIENCE=hogehoge
REEARTH_AUTH0_CLIENTID=hogehoge
REEARTH_AUTH0_CLIENTSECRET=hogehoge
REEARTH_AUTH0_DOMAIN=hogehoge
REEARTH_AUTH0_WEBCLIENTID=hogehoge
```

### 4. Run Re:Earth

```bash
docker-compose up -d
```

Once running, access [http://localhost:8080](http://localhost:8080) with your web browser.

If Re:Earth doesn't start, check to see if port 8080 is already in use by another application.

## AWS Fargate + Mongo Atlas

Coming soon

Note: this environment is not recommended yet, because Re:Earth does not support S3 yet.

## Google Cloud Run + Mongo Atlas

Coming soon

Note: the test environment for the core team and production environment for the SaaS version adopt this way.

## Kubernetes

Help wanted

## Linux server

Coming soon

Obtain an executable binary of reearth-backend and an artifact built with reearth-web, and then set up systemd to start up Re:Earth and set up Nginx or an equivalent web server.

Note: If you are interested, the Dockerfile ([central](https://github.com/reearth/reearth/blob/main/Dockerfile) and [back-end](https://github.com/reearth/reearth-backend/blob/main/Dockerfile)) will give you a rough idea of what kind of setup you will need.

## Q&A

### Is there any plan for a desktop application edition?

We are also looking at developing that, though not immediately.
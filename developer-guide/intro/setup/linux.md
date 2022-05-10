---
title: Linux server
sidebar_position: 4
---

:::info
Currently, **running Re:Rearth on a serverless platform in the cloud is easier and safer, with less maintenance, and is strongly recommended**. The installation method described here should only be performed if you really want to host it on a server that you manage yourself.

See also:

- AWS + Mongo Atlas
- [GCP + Mongo Atlas](gcp)
:::

:::warning
This page does not apply if you are using upstart, sysvinit, and so on. We will not explain it here, so please do your own research...
:::

## 1. Set up a systemd unit file

1. [Run Re:Earth with an executable binary](#1-1-run-reearth-with-an-executable-binary)
2. [Run Re:Earth with docker-compose](#1-2-run-reearth-with-docker-compose)

### 1-1. Run Re:Earth with an executable binary

First, place a binary file of the web server app and front-end files of Re:Earth at anywhere you like.

Check a version and CPU architecture you want to install at [GitHub releases](https://github.com/reearth/reearth/releases)

```bash
VERSION=0.6.1
ARCH=x86_64
mkidr -p /usr/local/reearth # If you want to run Re:Earth in user mode, ~/reearth is better.
cd $_
curl -Ls https://github.com/reearth/reearth-backend/releases/download/v${VERSION}/reearth-backend_${VERSION}_linux_${ARCH}.tar.gz | tar xvz
curl -Ls https://github.com/reearth/reearth-web/releases/download/v${VERSION}/reearth-web_v${VERSION}.tar.gz | tar xvz
mv reearth-web web
```

It is OK if the directory structure is as follows:

```
/usr/local/reearth
├ reearth-backend
└ web
　 ├ index.html
　 └ ...
```

Then, give  permission of the binary file.

```bash
chmod a+x reearth-backend
```

Place a unit file at `/lib/systemd/system/reearth.service` (root mode) or `~/.config/systemd/user/reearth.service` (user mode) as following:

```systemd
[Unit]
After=network.target

[Service]
ExecStart=/usr/local/reearth/reearth-backend
Restart=always
Type=simple

[Install]
WantedBy=multi-user.target
```

Next, install MongoDB. See https://www.mongodb.com/docs/manual/installation/.

Next, create a config file at `/user/local/reearth/.env`. See [How to configure Re:Earth](config).

Then reload systemd:

```bash
sudo systemctl daemon-reload
```

### 1-2. Run Re:Earth with docker-compose

First, install Docker and docker-compose.

Next, download Re:Earth's `docker-compose.yml` at anywhere you like.

```bash
mkidr -p /usr/local/reearth # If you want to run Re:Earth in user mode, ~/reearth is better.
cd $_
curl -LOs https://raw.githubusercontent.com/reearth/reearth/main/docker-compose.yml
```

Next, place a unit file at `/lib/systemd/system/reearth.service` (root mode) or `~/.config/systemd/user/reearth.service` (user mode) as following:

```systemd
[Unit]
Requires=docker.service

[Service]
Type=simple
ExecStartPre=-/usr/local/bin/docker-compose -f ${COMPOSE_FILE} down
ExecStart=/usr/local/bin/docker-compose -f ${COMPOSE_FILE} up
ExecStop=/usr/local/bin/docker-compose -f ${COMPOSE_FILE} down
Environment=COMPOSE_FILE=/usr/local/reearth/docker-compose.yml

[Install]
WantedBy=multi-user.target
```

Then reload systemd:

```bash
sudo systemctl daemon-reload
```

## 2. Start Re:Earth with systemd

:::info
If you want to run Re:Earth in user mode, `sudo` is not required but `--user` option for systemctl is always required.
:::

Enable and start Re:Earth:

```bash
sudo systemctl enable reearth
sudo systemctl start reearth
```

You can see logs from Re:Earth:

```bash
sudo journalctl -u reearth
```

If you want to stop and disable Re:Earth:

```bash
sudo systemctl stop reearth
sudo systemctl disable reearth
```

## 3. Set up reverse proxy of your web server

By default, Re:Earth is delivered on the unprivileged port 8080. The easiest way to make this available to the outside world is to use the reverse proxy function of the web server used in your server beforehand.

- [Apache](#3-1-apache)
- [Ngnix](#3-2-nginx)

### 3-1. Apache

:::info
Someone please write. Or [google](https://www.google.com/search?q=apache+reverse+proxy)
:::

### 3-2. Nginx

Edit config and then reload Nginx.

The config here are for reference only. Please change them as you see fit to suit your environment.

```nginx title="/etc/nginx/sites-available/reearth.conf"
server {
  listen 80;
  server_name reearth.example.com, *.reearth.example.com;

  proxy_http_version                 1.1;
  proxy_set_header Upgrade           $http_upgrade;
  proxy_set_header Connection        "upgrade";
  proxy_set_header Host              $host;
  proxy_set_header X-Real-IP         $remote_addr;
  proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
  proxy_set_header X-Forwarded-Host  $host;
  proxy_set_header X-Forwarded-Port  $server_port;

  location / {
    proxy_pass http://127.0.0.1:8080;
  }
}
```

```bash
sudo nginx -t # test nginx config
sudo systemctl reload nginx
curl http://reearth.example.com
```

## 4. Set up HTTPS and IDaaS

ReEarth strongly recommends that you use HTTPS for delivery to protect users' personal information, so please issue a TLS certificate using [Let's Encrypt](https://letsencrypt.org/) or similar and set it up on your web server.

Also using an IDaaS is recommended instead of Re:Earth build-in authentication server for security in production environments.

I will not explain it here, so please do your own research.

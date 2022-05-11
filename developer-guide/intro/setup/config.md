---
title: How to configure Re:Earth
sidebar_position: 5
---

You can configure for Re:Earth in two ways. One is to place a `.env` file in the Re:Earth working directory. The other is to set environment variables directly.

If you change the configuration while Re:Earth is running, you will need to restart it to reload the configuration.

Re:Earth is flexible and can be combined with several configurations. Below are the main configuration options:

- **Database** (MongoDB): Select either
  - MongoDB running on your local host (default)
  - Mongo Atlas
- **Mode**: Select either
  - **Integrated mode** (default) - A front-end web application is delivered directly from the back-end application. It is easy to set up and suitable for local PCs or small environments.
  - **Isolated mode** - Deliver the back-end and front-end from different environments. For example, the back-end can be run on Google Cloud Run while the front-end is delivered from Google Cloud Storage.
- **Auth server**: Select one of the following
  - **Built-in** (default) - No additional configuration is required, but it can be used for development purposes only. Also it does not have a UI to manage accounts.
  - **Auth0** - One of IDaaS supporting OpenID Connect. Recommended for production environment.
  - **Other OpenID provider and IDaaS** - Recommended for production environment.

## Database (MongoDB)

`REEARTH_DB` accepts the connection string of MongoDB. The default value is `mongodb://localhost`.

### MongoDB running on your local host

No configuration is required, but if you want to change the port,

```
REEARTH_DB=mongodb://localhost:20000
```

### MongoDB Atlas

First, check the connection string of your database such as `mongodb+srv://hogehoge` in the Mongo Atlas admin page.

```
REEARTH_DB=mongodb+srv://hogehoge
```

## Mode

### Integrated mode

No configuration is required.

### Isolated mode

Specify `REEARTH_HOST_WEB` as the URL where the front-end application is deployed.

If you are at your local PC, a typical setup might look like this:

```
REEARTH_HOST_WEB=http://localhost:3000
```

## Auth server

### Built-in

No configuration is required.

### Auth0

Refer to [this article](auth0) to set up Auth0. Then, collect your Auth0 tenant settings such as domain, audience, client ID, etc.

```
REEARTH_AUTH0_DOMAIN=hoge.auth0.com
REEARTH_AUTH0_AUDIENCE=https://hoge.example.com
REEARTH_AUTH0_CLIENTID=hogehoge
REEARTH_AUTH0_CLIENTSECRET=hogehoge
REEARTH_AUTH0_WEBCLIENTID=hogehoge
REEARTH_AUTHSRV_DISABLED=true
```

- `REEARTH_AUTH0_CLIENTID`: Required to update an account profile from the screen in Re:Earth. It should be ID of a machine-to-machine application.
- `REEARTH_AUTH0_CLIENTSECRET`: Required to update an account profile from the screen in Re:Earth. It should be secret of a machine-to-machine application.
- `REEARTH_AUTH0_WEBCLIENTID`: Required in integrated mode. It should be ID of a single page application.
- `REEARTH_AUTHSRV_DISABLED`: Disable the uilt-in auth server if any value is set.

### Other OpenID provider and IDaaS

Before configuring Re:Earth, you may need to configure the OpenID provider you are using. Then, set up environment variables as follows:

```
REEARTH_AUTH_ISS=https://example.auth0.com/
REEARTH_AUTH_AUD=https://reearth.example.com
REEARTH_AUTHSRV_DISABLED=true
```

- `REEARTH_AUTH_ISS` is the JWT issuer URL specified in the `iss` field of JWTs issued by the ID provider.
- `REEARTH_AUTH_AUD` is the allowed audience included in the `aud` field of JWTs issued by the ID provider. If not specified, any audience is allowed. If you want to allow multiple audiences, refer to the configuration documentation.
- `REEARTH_AUTHSRV_DISABLED`: Disable the uilt-in auth server if any value is set.

## Other configuration options

Refer to the configuration documentation.

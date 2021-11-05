---
title: Environment variables
sidebar_position: 2
---

The application environment variables should be provided in an `.env` file as follows:

```
REEARTH_AUTH0_DOMAIN=hogehoge.auth0.com
REEARTH_AUTH0_AUDIENCE=reearth
REEARTH_AUTH0_CLIENTID=xxxxx
REEARTH_AUTH0_CLIENTSECRET=xxxxxxx
```

Those environment variables are loaded through the [GoDotEnv](https://github.com/joho/godotenv) library. Then the app configs are loaded through the [envconfig](https://github.com/kelseyhightower/envconfig) library as follows:

|||||
|---|---|---|---|
|Name|Is Required|Default Value|Description|
|PORT|true|8080|int to configure server port|
|REEARTH_DB|true|mongodb://localhost|string to declare database connection string|
|REEARTH_AUTH0_DOMAIN|true||Auth config for more details: Link|
|REEARTH_AUTH0_AUDIENCE|true||Auth config for more details: Link|
|REEARTH_AUTH0_CLIENTID|true||Auth config for more details: Link|
|REEARTH_AUTH0_CLIENTSECRET|false||Auth config for more details: Link|
|REEARTH_AUTH0_WEBCLIENTID|false||Auth config for more details: Link|
|REEARTH_GRAPHQL_COMPLEXITYLIMIT|false|4000|Set complexity limit for graphql: Link|
|REEARTH_GCS_BUCKETNAME|false|||
|REEARTH_GCS_PUBLICATIONCACHECONTROL|false|||
|GOOGLE_CLOUD_PROJECT|false|||
|REEARTH_WEB|false||A map and will be injected and exposed as /reearth_config.json for more details see FE section.|
|REEARTH_PROFILER|false||string to select profiler type, for now the only supported type is gcp|
|REEARTH_TRACER|false||string to select tracer type, for now the supported types are gcp , jaeger|
|REEARTH_TRACERSAMPLE||0|float64 sample fraction for cloud tracer|
|REEARTH_ASSETBASEURL|||string|
|REEARTH_ORIGINS|||[]string comma separated values of allowed origins|
|REEARTH_SIGNUPSECRET|||string|
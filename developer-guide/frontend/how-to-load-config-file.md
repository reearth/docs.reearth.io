---
title: How to load config file
sidebar_position: 9
---

## Webpack config

### .env

Like most web applications, sensitive environment variables are stored in the `.env` file. Re:Earth only needs to worry about: `REEARTH_WEB_AUTH0_DOMAIN`, `REEARTH_WEB_AUTH0_AUDIENCE` and `REEARTH_WEB_AUTH0_CLIENT_ID`. 

webpack will check for a `.env` file and if available will load all environment variables on application start. 

```jsx
let envfile = "";
  try {
    envfile = fs.readFileSync(`.env`);
  } catch {
    // ignore
  }
```

Then, the `.env` file's variables and any variables whose key starts with `REEARTH_WEB_` in `process.env` are parsed and set to a record called config.

```jsx
const config = readEnv("REEARTH_WEB", {
    source: {
      ...dotenv.parse(envfile),
      ...process.env,
    },
  });
```

### reearth_config.json

With the above config set, we make an API request to the backend's `/reearth_config.json` route, and with that file returned to us, we inject the config into it at `webpack.config.js`.

This step will be omitted for a production build.

```jsx
// ...inside the return of webpack config file
before(app) {
  app.get("/reearth_config.json", (_req, res) => {
    res.json({
      api: "http://localhost:8080/api",
      published: "http://localhost:8080/p/{}",
      ...Object.fromEntries(Object.entries(config).filter(([, v]) => Boolean(v))),
    });
  });
}
```

## Loading the config

Now that webpack has been run and has injected environment variables into the `reearth_config.json` file retrieved from the backend the app is able to load the configuration data through the `src/config.ts` file found in the `src` directory. 

```jsx
export default async function loadConfig() {
  if (window.REEARTH_CONFIG) return;
  window.REEARTH_CONFIG = defaultConfig;
  window.REEARTH_CONFIG = {
    ...defaultConfig,
    ...(await (await fetch("/reearth_config.json")).json()),
  };
}
```
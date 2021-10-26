---
sidebar_position: 1
---

# Whole system architecture and stack
------

Re:Earth is built for a modern cloud native application, and it allows easily to deploy a Re:Earth application anywhere powered by Docker, even a server-less CaaS platform.

![image_0](./architecture.svg)
## Front-end stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cesium](https://cesium.com/platform/cesiumjs/) is used for the digital earth on web browsers.
- [Resium](https://github.com/reearth/resium) (built by the Re:Earth team's @rot 1024) is used to make working with Cesium in React a breeze.
- [Apollo Client](https://github.com/apollographql/apollo-client) is used to manage API calls to the backend with [GraphQL](https://graphql.org/) queries and mutations.
- [QuickJS on WebAssembly](https://github.com/justjake/quickjs-emscripten) to safety execute codes of plugins.

For further detail please refer to the Front-end guide, in particular [Project and component architecture](/developer-guide/frontend/architecture).

## Back-end stack

The back-end is written in [Go](https://golang.org/) with the [Echo](https://echo.labstack.com/) framework. It is connected to a [MongoDB](https://www.mongodb.com/) database  and API calls between the front-end are managed through [GraphQL](https://graphql.org/).

For further detail please refer to the Back-end guide, in particular [Backend architecture](/developer-guide/backend/architecture).

## Authentication

Currently [Auth0](https://auth0.com) (IDaaS) is used to authenticate users.

When a user tries to log in, they are redirected to Auth0 where an email or username and password are required to gain access to the user's projects, shared workspaces, assets and datasets.

For further detail how the front-end handles authentication please refer to the Front-end guide's [How users are authenticated](/developer-guide/frontend/authentication) section. If you are after how the back-end handles authentication, please refer to its Authentication  section under How does it work. 

In the near future, we plan to make it possible to authenticate only with Re:Earth, without using Auth0.


---
title: Whole system architecture and stack
sidebar_position: 1
---

Re:Earth is built for a modern cloud native application, and it allows easily to deploy a Re:Earth application anywhere powered by Docker, even a server-less CaaS platform.

![image_0](./architecture.svg)

## Front-end stack

- [React](https://reactjs.org/): UI framework
- [TypeScript](https://www.typescriptlang.org/): A language to add a robust type system to JavaScript
- [Cesium](https://cesium.com/platform/cesiumjs/): A map engine powered that renders the 3D globe with WebGL on web browsers
- [Resium](https://github.com/reearth/resium) (built by the Re:Earth team's @rot 1024): Used to make working with Cesium in React a breeze
- [Apollo Client](https://github.com/apollographql/apollo-client): Used to manage API calls to the backend with [GraphQL](https://graphql.org/) queries and mutations
- [QuickJS on WebAssembly](https://github.com/justjake/quickjs-emscripten): Safety executes plugin codes

For further detail please refer to the Front-end guide, in particular [Project and component architecture](/developer-guide/frontend/project-and-component-architectur).

## Back-end stack

- [Go](https://golang.org/): A programming language
- [Echo](https://echo.labstack.com/): A web framework
- [MongoDB](https://www.mongodb.com/): A document-oriented NoSQL database
- [GraphQL](https://graphql.org/): A query language for APIs between the front-end and back-end
- [OpenID Connect](https://openid.net/connect/): Authenticates and authorizes user accounts

For further detail please refer to the Back-end guide, in particular [Backend architecture](/developer-guide/backend/back-end-architecture).

## Authentication

Currently [Auth0](https://auth0.com) (IDaaS) is used to authenticate users.

When a user tries to log in, they are redirected to Auth0 where an email or username and password are required to gain access to the user's projects, shared workspaces, assets and datasets.

For further detail how the front-end handles authentication please refer to the Front-end guide's [How users are authenticated](/developer-guide/frontend/how-users-are-authenticated) section. If you are after how the back-end handles authentication, please refer to its Authentication  section under How does it work.

In the near future, we plan to make it possible to authenticate only with Re:Earth, without using Auth0.

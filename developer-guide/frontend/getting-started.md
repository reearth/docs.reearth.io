---
title: Getting started
sidebar_position: 1
---
# How to start the app

To start the front-end, follow these instructions.

## 1. Install required tools

Please install following tools:

- [Node.js](https://nodejs.org/ja/download/): the latest LTS is recommended
- [Yarn](https://yarnpkg.com/) v1

## 2. Start up the back-end app

Follow [this article](/developer-guide/backend/getting-started).

## 3. Fork and clone the repository

Fork and clone the front-end repository to your local machine using `git clone ...` , and then run the `yarn` command to install dependencies:

```bash
git clone git@github.com:xxxx/reearth-web.git
cd reearth-web
yarn
```

## 4. Set environment variables

These are the front-end environment variables necessary to get authorization before being able to access the backend:

```
REEARTH_WEB_AUTH0_DOMAIN=
REEARTH_WEB_AUTH0_AUDIENCE=
REEARTH_WEB_AUTH0_CLIENT_ID=
```

You can get this data from your Auth0 dashboard. Please set those variables by creating a `.env` file in the root directory of reearth-web.

## 5. Start up the app

Lastly, run the command:

```bash
yarn start
```

# Code styles, best practice, and IDE settings

Re:Earth is set up as best as possible to warn you of any divergences from the project's expected code styles and best practices while using an appropriate IDE (the core team has a preference for VS Code). 

We are setup to use ESLint and TypeScript to maintain a consistent code base. Please refer to [.eslintrc](https://github.com/reearth/reearth-web/blob/main/.eslintrc.yml), [.prettierrc](https://github.com/reearth/reearth-web/blob/main/.prettierrc) or [tsconfig.json](https://github.com/reearth/reearth-web/blob/main/tsconfig.json) for their respective settings if you are curious. 

**Please make sure you only have the ESLint extension enabled as we leverage prettier through ESLint. Enabling both can lead to issues.** 

# Unit testing

We use two libraries for unit testing: react-testing-library and react-hooks-testing-library. 

A nice example is the testing code for the PluginAccordion, where it has two simple tests:

1. Make sure the component renders
2. Since the default state of the accordion is closed, check to see if the component displays a header but not the body

As a reference, the code for this test is shown here:

```tsx
import React from "react";
import { render, screen } from "@reearth/test/utils";
import PluginAccordion from "./index";

describe("Accordion should display header and body", () => {
  const items = [
    {
      id: "hogehoge",
      thumbnail: `${process.env.PUBLIC_URL}/sample.svg`,
      title: "Sample",
      isInstalled: true,
      bodyMarkdown: "# Hoge ## Hoge",
    },
    {
      id: "fugafuga",
      thumbnail: `${process.env.PUBLIC_URL}/sample.svg`,
      title: "Sample2",
      isInstalled: false,
      bodyMarkdown: "# Fuga ## Fuga",
    },
  ];
  test("Accordion should be rendered", () => {
    render(<PluginAccordion items={items} />);
  });
  test("PluginAccordion should display header and not display body", () => {
    render(<PluginAccordion items={items} />);
    expect(screen.getByText("Sample")).toBeInTheDocument();
  });
});
```

Please note all test files should be named `index.test.tsx` and be placed in the same folder as the component being tested.

# Design system

Re:Earth's full design system is available on Figma [here](https://www.figma.com/file/T7o1ItZPmuHqnHBCOQfUzf/Re%3AEarth-Design-OSS?node-id=0%3A1). It is there as a reference for designers interested in Re:Earth's design system and principles or for OSS developers helping with design fixes, new UI implementation, etc.
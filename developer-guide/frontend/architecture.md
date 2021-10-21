---
sidebar_position: 2
---

# Project and component architecture
------

## Project structure

- .storybook - Config for Storybook
- cypress - E2E test code by Cypress
- src
    - auth - Authentication (auth0-spa-js)
    - components - please refer to the [README.md](https://github.com/reearth/reearth-web/blob/main/src/components/README.md) found in the `src/components` directory for full component classification
    - gql - Generated code for GraphQL and definitions of fragments (Apollo Client)
    - theme - Theme and globally used styles (Emotion)
    - state - Local state management (Redux)
    - locale - Internationalization setup (react-intl)
    - util - Helper functions and convenient custom hooks
- .env - Config for environment variables. They can be used with `window.REEARTH_CONFIG` as JSON.
- .eslintrc.yml - Configuration file for ESLint
- codegen.yml - Configuration file for graphql-codegen
- webpack.config - Configuration file for webpack
- tsconfig.json - Configuration file for TypeScript

## Providers and hooks

Some directories in the `src` directory expose Provider components and some hooks to wrap and provide some functionality provided by external libraries. It allows the scope of influence by changes in external libraries is reduced. 

- auth: wraps Auth0 (auth0-spa-js)
- gql: wraps generated code for GraphQL by graphql-codegen
- theme: wraps Emotion
- local: wraps Redux
- i18n: wraps react-intl

## Component structure

Re:Earth refers to the Atomic Design, but In order to clarify the interpretation of terms used in the Atomic Design, the meaning of each term has been clearly defined. 

All components can have an unlimited number of child components in a folder.

### Pages

Thin components that combine organisms. Page components will be routed by the top-level App component and loaded lazily via dynamic imports.

**Prohibitions**

- Styling (If you feel the need to style, split the organism into atoms and/or molecules. Use the children and render prop patterns to reverse any dependencies.

**Notes**

- You can make GraphQL calls for the entire page.
- If it doesn't seem necessary, you don't need to create a Storybook story.

### Organisms

Components that operate independently and are a combination of molecules. They are allowed to access the outside world (ie. this is where GraphQL queries and mutations can be directly used).

**Responsibility**

- Placement of molecule components.
- Connecting to the local state.
- Calling GraphQL queries and mutations.
- Convert GraphQL data to the view model published by molecules.

**Recommendations**

- Consider moving all hooks into a separate custom hooks file as components on this level tend to become very bloated.
- Display spinners and placeholders while the GraphQL calls are in progress.
- Display an error message if a query/mutation call fails.
- Wrap the component in an ErrorBoundary to prevent the entire app from crashing when an uncaught exception is thrown.

**Prohibitions**

- Styling (If you feel the need to style, split the organism into atoms and/or molecules. Use the children and render prop patterns to reverse any dependencies.

**Notes**

- If it doesn't seem necessary, you don't need to create a Storybook story.
- Unless your implementation requires unique user feedback(ex. a retry button) GraphQL error handling is essentially unnecessary as GraphQL errors will automatically be caught and displayed to the user.

### Molecules

Application-specific UI components made from a combination of atoms and fellow molecules. Make use of technology and knowledge unique to the application. 

Separate directories by the page name where the component will be used in.

**Responsibility**

- Layout and styling.
- Defining and publishing the type of view modal.

**Recommendations**

- Create a Storybook story.

**Allowed**

- Implementation of drag and drop.
- If a component becomes large, consider dividing it into multiple files within the same directory. But they must keep the reference completely closed (no external references).

**Prohibitions**

- Using GraphQL (`@reearth/gql`).
- Using router in any way (including Link and RedirectTo)
- Using local state (`@reearth/state`)

### Atoms

The smallest unit, responsible for only UI and event publishing. Some people call them the "design system".

**Responsibility**

- Implementation with styling (`@rearth/theme`)
- Publishing events related to user interaction

**Recommendations**

- Create a Storybook story
- Keep prop types simple
- Make sure they are modular and re-useable as a design system with no reliance on application-specific technologies, knowledge and create no side effects

**Prohibitions**

- Using GraphQL directly (`@reearth/gql`)
- Using drag and drop a.k.a dnd unless the whole dnd process is contained within the component
- Using router in any way (including Link and RedirectTo)

## Component files

In a directory of a typical component, you'll see these files:

- `index.tsx` - Component definition
- `index.stories.tsx` - Storybook stories for the component
- `index.test.tsx` - Unit tests for the component
- `hooks.ts` - Exports a custom hook. We recommend to wrap hooks into one custom hook for each component.
- `hooks.test.ts` - Unit tests for the custom hook If needed.
- `queries.ts` - GraphQL queries for the component (for only organisms)
- Some directories for children components
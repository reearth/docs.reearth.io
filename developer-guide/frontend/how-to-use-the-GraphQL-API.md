---
title: How to use the GraphQL API
sidebar_position: 5
---

The GraphQL calls to retrieve data from the backend is limited to the organisms components and leverages Apollo Client.

## Create a query or mutation

The first step is to create the query or mutation that will be used. (This step is skippable if the query or mutation is already generated and being used elsewhere in the app. Refer to GraphQL generated code in `src/gql/graphql-client-api.tsx`.)

In the component's directory alongside the `index.tsx` file create a `queries.ts` file. Here you will declare and export any and all new queries or mutations. Reference the backend code for available queries and mutations.

Then you need to regenerate the GraphQL files with:

```bash
yarn gql
```

Please refer to the Apollo Client documentation for more in depth information, but the general syntax you will find in queries.ts files is:

```tsx
export const CHANGE_SOMETHING = gql`
	mutation ChangeSomething(
		$value: Any
		$id: ID!
	) {
		updateSomething(
			input: {
				id: $id
				value: $value
			}
		) {
			something {
				...
			}
		}
	}
`;

```

## Import and use

In a separate `hooks.ts` file, you will import the query/mutation and call it. One common pattern you will see is a callback function using the query/mutation that is passed along as a prop to another organism component or used in a molecule component.

From the custom hooks file using a query/string should look something like this:

```tsx
import { useChangeSomethingMutation } from "@reearth/gql;

...
// from within hooks function
const [changeSomethingMutation] = useChangeSomethingMutation();

// then, use changeSomethingMutation as a normal function where needed
```

Note: it is not allowed to pass a query/mutation directly to a molecule and atom component.

---
title: How to develop a new feature
sidebar_position: 3
---
## How to add a new query and mutation to GraphQL schema

Implementation can be done in any order.

### Implement the domain layer

Domain models should be implemented under `pkg` 

### Implement the infrastructure layer (if needed)

It should be implemented under `internal/infrastructure`

### Implement the usecase layer

To implement the feature use case layer we have 2 main steps:

1. Create a usecase interface in `internal/usecase/interfaces`
2. Create the usecase under `internal/usecase/interactor`  and it should accept the `context.Context` as its first parameter. Also most usecases may accept `*usecase.Operator` which can be used to handle some authorization stuff.
3. Implement the Interface: it should done under `internal/usecase/interactor/`, and it should contain calls of the domain layer and the infrastucture layer.

### Define GraphQL schema and run go generate → Implement adapter layer

[gqlgen](https://gqlgen.com/) library is used to generate the graphql code, Its a schema first approach so to develop new types or mutations, the declaration should done in `schema.graphql` file, after schema declaration `go generate ./internal/graphql` should be run to generate the related code.

The gqlgen library will generate the related code up down to the adapter layer represented in `internal/adapter/graphql/controller_*.go`.

The adapter layer normally should relay on the use case layer. In this layer, codes should contains no business logic, but conversion between domain models and GraphQL types, and a call of the usecase layer.

## Unit testing

It's recommended to unit test your code. [Table driven design](https://github.com/golang/go/wiki/TableDrivenTests) is the preferred way to provide multiple test cases for each function. You may use the [assert](https://github.com/stretchr/testify#assert-package) package from testify to assert test results.

A simple code example for testing `math.Max(x, y)` method:

```go
package math

import (
	"math"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMax(t *testing.T) {
	testCases := []struct {
		name     string
		arg1     float64
		arg2     float64
		expected float64
	}{
		{
			name:     "arg1 < arg2",
			arg1:     1.0,
			arg2:     2.0,
			expected: 2.0,
		},
		{
			name:     "arg1 > arg (with negative)",
			arg1:     -100,
			arg2:     -200,
			expected: -100,
		},
		{
			name:     "arg1 < arg2 (floating point)",
			arg1:     -8.31373e-02,
			arg2:     1.84273e-02,
			expected: 1.84273e-02,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Parallel()

		t.Run(tc.name, func(tt *testing.T) {
			tt.Parallel()
			actual := math.Max(tc.arg1, tc.arg2)
			assert.Equal(tt, tc.expected, actual)
		})
	}
}
```

Points to consider while writing tests:

- Cover all possible cases
    - Testing private functions is not required but recommended when possible
- Use a good name for the test method and for each test case
    - example: `Test{FuncName}`,  `Test{TypeName}_{MethodName}`
- Use parallel when possible
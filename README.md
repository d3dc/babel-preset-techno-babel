# babel-preset-techno-babel

### New operators

- `|>` - pipeline
  - compose function calls left to right instead of right to left
- `??` - nullish coalescing
  - stricter `maybe || 'default'`
- `?.` - optional chaining
  - only access properties if the receiver is defined

### New blocks

- do
  - evaluates a block as an expressions
  - keeps your scopes isolated - `let` statements don't leak

### Scala lambdas

- argument placeholders
  - `reduce(_ + _)` becomes `reduce((a, b) => a + b)`
- accessor
  - `_.prop` becomes `obj => obj.prop`

### Misc

- numeric literal separator
  - `9_000_000`

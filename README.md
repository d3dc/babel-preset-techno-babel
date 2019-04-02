# babel-preset-techno-babel

babel needs more babble.

### New operators

- `|>` - pipeline

  - compose function calls left to right instead of right to left
  - `array |> sortBy(_.name) |> partitionBy(_.age)`

- `??` - nullish coalescing

  - stricter `maybe || 'default'`
  - `maybe ?? 'default'`

- `?.` - optional chaining

  - only access properties if the receiver is defined
  - `user?.address?.state`

### Logical assignment operators

- `||=`
- `&&=`
- `??=`

### New blocks

- do
  - evaluates a block as an expressions
  - keeps your scopes isolated - `let` statements don't leak

### Misc

- `export default from`
  - `export Footer from './Footer'`
- numeric literal separator
  - `9_000_000`

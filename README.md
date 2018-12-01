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

- `~` - implicit function
  - shorter anonymous functions
  - `~dispatch.articles.save({ article: { ...this.props.article, this.state.edits }})`

### Logical assignment operators

- `||=`
- `&&=`
- `??=`

### New blocks

- do
  - evaluates a block as an expressions
  - keeps your scopes isolated - `let` statements don't leak

### Holey lambdas

- argument placeholders
  - `reduce(_ + _)` becomes `reduce((a, b) => a + b)`
- accessor
  - `_.prop` becomes `obj => obj.prop`
- binary accessors
  - `_.length >= 8` becomes `obj => obj.length > = 8`

### Misc

- `export default from`
  - `export Footer from './Footer'`
- numeric literal separator
  - `9_000_000`

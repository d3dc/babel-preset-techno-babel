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

- [basic placeholders](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#basic-placeholders): `add(1, _)`
- [spread placeholders](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#spread-placeholders): `Math.max(..._)`
- [object placeholders](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#object-placeholders): `_.hasOwnProperty('dapper')`
- [lambda parameters](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#lambda-parameters): `people.map(_.name)`
- [positional placeholders](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#positional-placeholders): `` const isSameThing = _`1` === _`1` ``
- [binary expressions](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#binary-expressions): `_ === 'awesome'`, `_.getPower().level > 9000`
- [default parameters](https://github.com/citycide/babel-plugin-partial-application/blob/master/readme.md#default-parameters): `const stringify = JSON.stringify(_, null, _ = 2)`

### Misc

- `export default from`
  - `export Footer from './Footer'`
- numeric literal separator
  - `9_000_000`

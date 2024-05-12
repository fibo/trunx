# trunx classnames

> Super Saiyan classnames, son of awesome Bulma

## Installation

With [npm](https://npmjs.org/) do

```sh
npm install @trunx/classnames
```

## Usage

This package provides a utility for conditionally joining CSS classes together.

```js
import { classnames } from "@trunx/classnames"}

classnames("foo", "bar") // 'foo bar'
classnames<string>("foo", ["bar"]) // 'foo bar'
classnames<string>({ foo: true }, { bar: false }) // 'foo'
```

It accepts a generic "class names" type.

```ts
type T = "foo" | "bar" // my CSS classes
classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]
```

## Annotated source

```js
export const classnames = (...args) =>
  args
    .map((arg) => {
      if (Array.isArray(arg))
        // Recursively call `classnames` or return empty string if arg is an empty array.
        return arg.length ? classnames(...arg) : ""

      if (
        // Here we know that `arg` is not an array.
        // Make sure `arg` is not null,
        arg &&
        // and `arg` is a proper object.
        typeof arg === "object"
      )
        return classnames(
          // Map `arg` object to an array of its keys, having a truthy value.
          Object.entries(arg).reduce(
            (keys, keyValue) => (keyValue[1] ? keys.concat(keyValue[0]) : keys),
            []
          )
        )

      // Here `arg` should be a string or `undefined`.
      return arg
    })
    .filter(
      // Avoid more than one white space in the join below, by filtering falsy values.
      (str) => !!str
    )
    .join(" ")
```

export type ClassnamesArg<Classname extends string> =
  | Classname
  | { [key in Classname]?: unknown }
  | ClassnamesArg<Classname>[]
  | undefined
  | null

/**
 * Utility for conditionally joining CSS classes together.
 *
 * @example
 * ```ts
 * classnames("foo", "bar") // 'foo bar'
 * classnames<string>("foo", ["bar"]) // 'foo bar'
 * classnames<string>({ foo: true }, { bar: false }) // 'foo'
 * ```
 *
 * @example It accepts a generic "class names" type.
 * ```ts
 * type T = "foo" | "bar" // my CSS classes
 * classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]
 * ```
 */
export const classnames = <T extends string>(...args: ClassnamesArg<T>[]) =>
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
        typeof arg == "object"
      )
        return classnames(
          // Map `arg` object to an array of its keys, having a truthy value.
          Object.entries(arg).reduce(
            (keys, keyValue) => (keyValue[1] ? keys.concat(keyValue[0]) : keys),
            [],
          ),
        )

      // Here `arg` should be a string or `undefined`.
      return arg
    })
    .filter(
      // Avoid more than one white space in the join below, by filtering falsy values.
      (str) => !!str,
    )
    .join(" ")

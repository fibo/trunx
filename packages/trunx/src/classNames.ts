export type ClassNamesArg<ClassName extends string> =
  | ClassName
  | { [key in ClassName]?: unknown }
  | ClassNamesArg<ClassName>[]

/**
 * Utility for conditionally joining CSS classes together.
 *
 * @example
 *
 * ```ts
 * classNames("foo", "bar") // 'foo bar'
 * classNames<string>("foo", ["bar"]) // 'foo bar'
 * classNames<string>({ foo: true }, { bar: false }) // 'foo'
 * ```
 *
 * It accepts a generic "class names" type.
 *
 * @example
 *
 * ```ts
 * type T = "foo" | "bar" // my CSS classes
 * classNames<T>("foo", "quz") // ERROR: not assignable to type ClassNamesArg<T>[]
 * ```
 */
export const classNames = <T extends string>(
  ...args: ClassNamesArg<T>[]
): string =>
  args
    .map((arg) => {
      if (Array.isArray(arg))
        // Recursively call `classNames` or return empty string if arg is an empty array.
        return arg.length ? classNames(...arg) : ""

      if (
        // Here we know that `arg` is not an array.
        // Make sure `arg` is not null,
        arg &&
        // and `arg` is a proper object.
        typeof arg === "object"
      )
        return classNames(
          // Map `arg` object to an array its keys, having a truthy value.
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

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
 * classnames("foo", "bar") // 'foo bar'
 * classnames("foo", ["bar"]) // 'foo bar'
 * classnames({ foo: true }, { bar: false }) // 'foo'
 *
 * @example It accepts a generic "class names" type.
 * type T = "foo" | "bar" // my CSS classes
 * classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]
 */
export const classnames = <T extends string>(
  // Arguments.
  ...x: ClassnamesArg<T>[]
): string =>
  x
    .map(
      (
        // Argument.
        a
      ) =>
        // Recursively call `classnames` if argument is an array.
        Array.isArray(a)
          ? classnames(...a)
          : // Here we know that argument is not an array.
        // Make sure argument is not null and that is an object.
          a && typeof a == "object"
            ? classnames(
              // Map argument object to a list of its keys, having a truthy value.
              Object.entries(a).reduce(
                (
                  // list of keys.
                  l,
                  // k(ey), v(value)
                  [k, v]
                ) => (v ? [...l, k] : l),
                []
              )
            )
            : // Here argument should be a string or falsy.
            (a as string | undefined | null)
    )
    .reduce(
      // Join the array of classes into a string.
      // Avoid more than one white space, filter falsy elements.
      (
        // accumulator
        a,
        // element
        e
      ) => (e ? (a ? a + " " + e : e) : a),
      ""
    )

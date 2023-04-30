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
      if (Array.isArray(arg)) {
        // Recursively call classNames or return empty string if arg is an empty array.
        return arg.length ? classNames(...arg) : ""
      } else if (
        // In this `else` branch, arg is not an Array.
        // Make sure arg is not null,
        arg &&
        // and arg is a proper Object.
        typeof arg === "object"
      ) {
        return classNames(
          // Map object to an array of its keys,
          Object.entries(arg)
            // with a truthy value.
            .filter(([_, value]) => value)
            .map(([key]) => key)
        )
      }
      // Return arg if it is a string, or fallback to empty string.
      return typeof arg === "string" ? arg : ""
    })
    .filter(
      // Avoid more than one white space in the join below, by filtering empty strings.
      (str) => str !== ""
    )
    .join(" ")

export type ClassnamesArg<Classname extends string> =
	| Classname
	| {[key in Classname]?: unknown}
	| ClassnamesArg<Classname>[]

/**
 * Utility for conditionally joining CSS classes together.
 *
 * @example
 *
 * ```ts
 * classnames("foo", "bar") // 'foo bar'
 * classnames<string>("foo", ["bar"]) // 'foo bar'
 * classnames<string>({ foo: true }, { bar: false }) // 'foo'
 * ```
 *
 * It accepts a generic "class names" type.
 *
 * @example
 *
 * ```ts
 * type T = "foo" | "bar" // my CSS classes
 * classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]
 * ```
 */
export declare const classnames: <T extends string>(...args: ClassnamesArg<T>[]) => string;

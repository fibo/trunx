import BulmaClass from "./bulma.js"

export type Size = "small" | "medium" | "large" | "normal"

export type SizeArg<S extends Size = Size> = Partial<{size: S}>

export const pluralSizeClass = (
  size: Exclude<Size, "normal"> | undefined
): Extract<BulmaClass, `are-${typeof size}`> | undefined =>
  size ? `are-${size}` : undefined

export const sizeClass = (
  size: Size | undefined
): Extract<BulmaClass, `is-${typeof size}`> | undefined =>
  size ? `is-${size}` : undefined

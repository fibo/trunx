import { BulmaClass } from "./bulma.js"

export type Size = "small" | "medium" | "large" | "normal"

export const sizeClass = (
  size: Size | undefined
): Extract<BulmaClass, `is-${typeof size}`> | undefined =>
  size ? `is-${size}` : undefined

export type SizeArg<S extends Size = Size> = Partial<{ size: S }>

type PluralSize = Extract<Size, "small" | "medium" | "large">

export type PluralSizeArg = SizeArg<PluralSize>

export const pluralSizeClass = (
  size: PluralSize | undefined
): Extract<BulmaClass, `are-${typeof size}`> | undefined =>
  size ? `are-${size}` : undefined

import { BulmaClassName } from '../bulma.js'

export type Size = 'small' | 'medium' | 'large' | 'normal'

export type SizeModifierProp<S extends Size = Size> = Partial<{ size: S }>

export const pluralSizeClassName = (
  size: Exclude<Size, 'normal'> | undefined
): Extract<BulmaClassName, `are-${typeof size}`> | undefined => (size ? `are-${size}` : undefined)

export const sizeClassName = (
  size: Size | undefined
): Extract<BulmaClassName, `is-${typeof size}`> | undefined => (size ? `is-${size}` : undefined)

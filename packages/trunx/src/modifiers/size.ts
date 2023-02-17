import { BulmaClassName } from '../bulma.js'

export type Size = 'small' | 'medium' | 'large'

export type SizeModifierProp<S extends Size = Size> = Partial<{ size: S }>

export const pluralSizeClassName = (
  size: Size | undefined
): Extract<BulmaClassName, 'are-small' | 'are-medium' | 'are-large'> | undefined =>
  size ? `are-${size}` : undefined

export const sizeClassName = (
  size: Size | undefined
): Extract<BulmaClassName, 'is-small' | 'is-medium' | 'is-large'> | undefined =>
  size ? `is-${size}` : undefined

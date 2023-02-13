import { BulmaClassName } from './bulma.js'
import { Size } from './modifiers.js'

export const centeredClassName = (
  centered: boolean | undefined
): Extract<BulmaClassName, 'is-centered'> | undefined => (centered ? 'is-centered' : undefined)

export const pluralSizeClassName = (
  size: Size | undefined
): Extract<BulmaClassName, 'are-small' | 'are-medium' | 'are-large'> | undefined => {
  switch (size) {
    case 'small':
      return 'are-small'
    case 'medium':
      return 'are-medium'
    case 'large':
      return 'are-large'
    default:
      return undefined
  }
}

export const sizeClassName = (
  size: Size | undefined
): Extract<BulmaClassName, 'is-small' | 'is-medium' | 'is-large'> | undefined => {
  switch (size) {
    case 'small':
      return 'is-small'
    case 'medium':
      return 'is-medium'
    case 'large':
      return 'is-large'
    default:
      return undefined
  }
}

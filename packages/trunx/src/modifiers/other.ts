import { BulmaClassName } from '../bulma.js'

export type ActiveProp = Partial<{ isActive: boolean }>

export const activeClassName = (
  arg: boolean | undefined
): Extract<BulmaClassName, 'is-active'> | undefined => (arg ? 'is-active' : undefined)

export type CenteredProp = Partial<{ centered: boolean }>

export const centeredClassName = (
  arg: boolean | undefined
): Extract<BulmaClassName, 'is-centered'> | undefined => (arg ? 'is-centered' : undefined)

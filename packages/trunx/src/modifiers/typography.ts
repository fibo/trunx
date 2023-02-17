import { BulmaClassName } from '../bulma.js'

export type TextAlignment = 'centered' | 'justified' | 'left' | 'right'

export type TextAlignProp = Partial<{
  textAlign: TextAlignment
}>

export const textAlignClassName = (
  alignment: TextAlignment | undefined
):
  | Extract<BulmaClassName, 'has-text-centered' | 'has-text-left' | 'has-text-right' | 'has-text-justified'>
  | undefined => (alignment ? `has-text-${alignment}` : undefined)

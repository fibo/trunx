import { BulmaClassName } from '../bulma.js'
import { MainColor } from './color.js'

export type TextAlignment = 'centered' | 'justified' | 'left' | 'right'

export type TextAlignProp = Partial<{
  hasText: TextAlignment
}>

export const textAlignClassName = (
  alignment: TextAlignProp['hasText']
): Extract<BulmaClassName, `has-text-${typeof alignment}`> | undefined =>
  alignment ? `has-text-${alignment}` : undefined

export const textColorClassName = (
  color: MainColor
): Extract<BulmaClassName, `has-text-${typeof color}`> | undefined =>
  color ? `has-text-${color}` : undefined

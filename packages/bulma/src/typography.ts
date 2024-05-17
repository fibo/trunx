import {BulmaClass} from "./bulma.js"
import {MainColor} from "./color.js"

export type TextAlignment = "centered" | "justified" | "left" | "right"

export const textAlignClass = (
  alignment: TextAlignment
): Extract<BulmaClass, `has-text-${typeof alignment}`> | undefined =>
  alignment ? `has-text-${alignment}` : undefined

export type TextAlignArg = Partial<{hasText: TextAlignment}>

export type TextColor = MainColor

export const textColorClass = (
  color: TextColor
): Extract<BulmaClass, `has-text-${typeof color}`> | undefined =>
  color ? `has-text-${color}` : undefined

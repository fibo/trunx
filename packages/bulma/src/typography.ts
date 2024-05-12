import BulmaClassname from "./bulma.js"
import { MainColor } from "./color.js"

export type TextAlignment = "centered" | "justified" | "left" | "right"

export const textAlignClass = (
  alignment: TextAlignment
): Extract<BulmaClassname, `has-text-${typeof alignment}`> | undefined =>
  alignment ? `has-text-${alignment}` : undefined

export type TextColor = MainColor

export const textColorClass = (
  color: TextColor
): Extract<BulmaClassname, `has-text-${typeof color}`> | undefined =>
  color ? `has-text-${color}` : undefined

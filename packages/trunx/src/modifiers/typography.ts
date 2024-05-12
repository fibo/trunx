import { BulmaClassname } from "../bulma.js"
import { MainColor } from "./color.js"

export type TextAlignment = "centered" | "justified" | "left" | "right"

export type TextAlignProp = Partial<{
  hasText: TextAlignment
}>

export const textAlignClassName = (
  alignment: TextAlignProp["hasText"]
): Extract<BulmaClassname, `has-text-${typeof alignment}`> | undefined =>
  alignment ? `has-text-${alignment}` : undefined

export type TextColor = MainColor

export const textColorClassName = (
  color: TextColor
): Extract<BulmaClassname, `has-text-${typeof color}`> | undefined =>
  color ? `has-text-${color}` : undefined

import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { ColorArg, MainColor, colorClass } from "./color.js"
import { Alignment } from "./layout.js"
import { SizeArg, sizeClass } from "./size.js"

export type FieldClassArg = Partial<{
  hasAddons: boolean | Alignment
  isGrouped: boolean | Alignment | "multiline"
}>

export const fieldClass = ({ hasAddons, isGrouped }: FieldClassArg) =>
  classnames(
    "field",
    hasAddons
      ? hasAddons === true
        ? "has-addons"
        : `has-addons-${hasAddons}`
      : undefined,
    isGrouped !== undefined ? "is-grouped" : undefined,
    typeof isGrouped === "string" ? `is-grouped-${isGrouped}` : undefined
  )

export type InputClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClassArg, "isFocused" | "isHovered" | "isRounded" | "isStatic">

export const inputClass = ({ color, size, ...bools }: InputClassArg) =>
  classnames("input", colorClass(color), sizeClass(size), boolClass(bools))

export type InputFileClassArg = Pick<
  BoolClassArg,
  "isBoxed" | "isFullwidth" | "isRight"
>

export const inputFileClass = (arg: InputFileClassArg) =>
  classnames("file", boolClass(arg))

export type SelectClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClassArg, "isFocused" | "isHovered" | "isLoading">

export const selectClass = ({ color, size, ...bools }: SelectClassArg) =>
  classnames("select", colorClass(color), boolClass(bools), sizeClass(size))

export type TextareaClassArg = SizeArg &
  Pick<BoolClassArg, "isActive" | "isFocused" | "isHovered" | "isLoading">

export const textareaClass = ({ size, ...bools }: TextareaClassArg) =>
  classnames("textarea", boolClass(bools), sizeClass(size))

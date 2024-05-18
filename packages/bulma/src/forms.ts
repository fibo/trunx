import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"
import { BoolClasslistArg, boolClasslist } from "./bool.js"
import { ColorArg, MainColor, colorClass } from "./color.js"
import { Alignment } from "./layout.js"
import { SizeArg, sizeClass } from "./size.js"

export type FieldClassArg = Partial<{
  hasAddons: boolean | Alignment
  isGrouped: boolean | Alignment | "multiline"
}>

export const fieldClass = ({ hasAddons, isGrouped }: FieldClassArg) =>
  classnames<BulmaClass>(
    "field",
    hasAddons
      ? hasAddons === true
        ? ("has-addons" as BulmaClass)
        : (`has-addons-${hasAddons}` as BulmaClass)
      : undefined,
    isGrouped !== undefined ? "is-grouped" : undefined,
    typeof isGrouped === "string" ? `is-grouped-${isGrouped}` : undefined
  )

export type InputClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClasslistArg, "isFocused" | "isHovered" | "isRounded" | "isStatic">

export const inputClass = ({ color, size, ...bools }: InputClassArg) =>
  classnames<BulmaClass>(
    "input",
    colorClass(color),
    sizeClass(size),
    boolClasslist(bools)
  )

export type InputFileClassArg = Pick<
  BoolClasslistArg,
  "isBoxed" | "isFullwidth" | "isRight"
>

export const inputFileClass = (arg: InputFileClassArg) =>
  classnames<BulmaClass>("file", boolClasslist(arg))

export type SelectClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClasslistArg, "isFocused" | "isHovered" | "isLoading">

export const selectClass = ({ color, size, ...bools }: SelectClassArg) =>
  classnames<BulmaClass>(
    "select",
    colorClass(color),
    boolClasslist(bools),
    sizeClass(size)
  )

export type TextareaClassArg = SizeArg &
  Pick<BoolClasslistArg, "isActive" | "isFocused" | "isHovered" | "isLoading">

export const textareaClass = ({ size, ...bools }: TextareaClassArg) =>
  classnames<BulmaClass>("textarea", boolClasslist(bools), sizeClass(size))

import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { ColorArg, MainColor, colorClass } from "./color.js"
import { SizeArg, sizeClass } from "./size.js"
import { TextAlignArg, textAlignClass } from "./typography.js"

export type ContentClassArg = SizeArg & TextAlignArg

export const contentClass = ({ hasText, size }: ContentClassArg) =>
  classnames("content", textAlignClass(hasText), sizeClass(size))

export type ControlClassArg = Pick<
  BoolClassArg,
  "hasIconsLeft" | "hasIconsRight" | "isExpanded" | "isLoading"
>

export const controlClass = (arg: ControlClassArg) =>
  classnames("control", boolClass(arg))

export type FileClassArg = Pick<
  BoolClassArg,
  "isBoxed" | "isFullwidth" | "isRight"
>

export const fileClass = (arg: FileClassArg) =>
  classnames("file", boolClass(arg))

export type HelpClassArg = ColorArg<MainColor>

export const helpClass = ({ color }) => classnames("help", colorClass(color))

export type LabelClassArg = SizeArg

export const labelClass = ({ size }: LabelClassArg) =>
  classnames("label", sizeClass(size))

export type SectionClassArg = SizeArg<"medium" | "large">

export const sectionClass = ({ size }: SectionClassArg) =>
  classnames("section", sizeClass(size))

import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { ColorArg, MainColor, colorClass } from "./color.js"
import { Breakpoint } from "./responsiveness.js"
import { SizeArg, sizeClass } from "./size.js"
import { TextAlignArg, textAlignClass } from "./typography.js"

export type ContainerClassArg = ColorArg<MainColor> &
  Pick<BoolClassArg, "isFluid"> &
  Partial<{
    fullWidth: Extract<Breakpoint, "fullhd" | "widescreen">
    maxWidth: Extract<Breakpoint, "desktop" | "widescreen">
  }>

export const containerClass = ({
  color,
  fullWidth,
  maxWidth,
  isFluid,
}: ContainerClassArg) =>
  classnames(
    "container",
    colorClass(color),
    fullWidth ? `is-${fullWidth}` : undefined,
    maxWidth ? `is-max-${maxWidth}` : undefined,
    boolClass({ isFluid })
  )

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

export type HeroClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClassArg, "isFullheight" | "isFullheightWithNavbar" | "isHalfheight">

export const heroClass = ({ color, size, ...bools }: HeroClassArg) =>
  classnames("hero", colorClass(color), sizeClass(size), boolClass(bools))

export type LabelClassArg = SizeArg

export const labelClass = ({ size }: LabelClassArg) =>
  classnames("label", sizeClass(size))

export type SectionClassArg = SizeArg<"medium" | "large">

export const sectionClass = ({ size }: SectionClassArg) =>
  classnames("section", sizeClass(size))

export type TableClassArg = Pick<
  BoolClassArg,
  "isBordered" | "isNarrow" | "isStriped" | "isFullwidth" | "isHoverable"
>

export const tableClass = (arg: TableClassArg) =>
  classnames("table", boolClass(arg))

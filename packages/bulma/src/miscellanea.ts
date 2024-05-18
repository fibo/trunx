import { classnames } from "@trunx/classnames"
import { BoolClassArg, boolClass } from "./bool.js"
import { ColorArg, MainColor, ShadeColor, colorClass } from "./color.js"
import { HalfDozen } from "./numbers.js"
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

export type MessageClassArg = ColorArg<MainColor | ShadeColor> & SizeArg

export const messageClass = ({ color, size }: MessageClassArg) =>
  classnames("message", colorClass(color), sizeClass(size))

export type NotificationClassArg = ColorArg<MainColor> &
  Pick<BoolClassArg, "isLight">

export const notificationClass = ({ color, isLight }: NotificationClassArg) =>
  classnames("notification", colorClass(color), boolClass({ isLight }))

export type SectionClassArg = SizeArg<"medium" | "large">

export const sectionClass = ({ size }: SectionClassArg) =>
  classnames("section", sizeClass(size))

export type TitleClassArg = Pick<BoolClassArg, "isSpaced"> &
  Partial<{
    h: HalfDozen
    size: HalfDozen
    subtitle: boolean
  }>

export const titleClass = ({ isSpaced, size, subtitle }: TitleClassArg) =>
  classnames(
    subtitle ? "subtitle" : "title",
    size ? `is-${size}` : undefined,
    boolClass({ isSpaced })
  )

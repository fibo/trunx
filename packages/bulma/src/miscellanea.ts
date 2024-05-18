import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"
import { BoolClasslistArg, boolClasslist } from "./bool.js"
import { ColorArg, MainColor, ShadeColor, colorClass } from "./color.js"
import { HalfDozen } from "./numbers.js"
import { Breakpoint } from "./responsiveness.js"
import { SizeArg, sizeClass } from "./size.js"
import { TextAlignArg, textAlignClass } from "./typography.js"

export type ContainerClassArg = ColorArg<MainColor> &
  Pick<BoolClasslistArg, "isFluid"> &
  Partial<{
    fullWidth: Extract<Breakpoint, "fullhd" | "widescreen">
  }>

export const containerClass = ({
  color,
  fullWidth,
  isFluid,
}: ContainerClassArg) =>
  classnames<BulmaClass>(
    "container",
    colorClass(color),
    fullWidth ? `is-${fullWidth}` : undefined,
    boolClasslist({ isFluid })
  )

export type ContentClassArg = SizeArg & TextAlignArg

export const contentClass = ({ hasText, size }: ContentClassArg) =>
  classnames<BulmaClass>("content", textAlignClass(hasText), sizeClass(size))

export type ControlClassArg = Pick<
  BoolClasslistArg,
  "hasIconsLeft" | "hasIconsRight" | "isExpanded" | "isLoading"
>

export const controlClass = (arg: ControlClassArg) =>
  classnames<BulmaClass>("control", boolClasslist(arg))

export type HelpClassArg = ColorArg<MainColor>

export const helpClass = ({ color }) =>
  classnames<BulmaClass>("help", colorClass(color))

export type HeroClassArg = ColorArg<MainColor> &
  SizeArg &
  Pick<
    BoolClasslistArg,
    "isFullheight" | "isFullheightWithNavbar" | "isHalfheight"
  >

export const heroClass = ({ color, size, ...bools }: HeroClassArg) =>
  classnames<BulmaClass>(
    "hero",
    colorClass(color),
    sizeClass(size),
    boolClasslist(bools)
  )

export type LabelClassArg = SizeArg

export const labelClass = ({ size }: LabelClassArg) =>
  classnames<BulmaClass>("label", sizeClass(size))

export type MessageClassArg = ColorArg<MainColor | ShadeColor> & SizeArg

export const messageClass = ({ color, size }: MessageClassArg) =>
  classnames<BulmaClass>("message", colorClass(color), sizeClass(size))

export type NotificationClassArg = ColorArg<MainColor> &
  Pick<BoolClasslistArg, "isLight">

export const notificationClass = ({ color, isLight }: NotificationClassArg) =>
  classnames<BulmaClass>(
    "notification",
    colorClass(color),
    boolClasslist({ isLight })
  )

export type SectionClassArg = SizeArg<"medium" | "large">

export const sectionClass = ({ size }: SectionClassArg) =>
  classnames<BulmaClass>("section", sizeClass(size))

export type TitleClassArg = Pick<BoolClasslistArg, "isSpaced"> &
  Partial<{
    h: HalfDozen
    size: HalfDozen
    subtitle: boolean
  }>

export const titleClass = ({ isSpaced, size, subtitle }: TitleClassArg) =>
  classnames<BulmaClass>(
    subtitle ? "subtitle" : "title",
    size ? `is-${size}` : undefined,
    boolClasslist({ isSpaced })
  )

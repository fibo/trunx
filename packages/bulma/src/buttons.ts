import { classnames } from "@trunx/classnames"
import { BulmaClass } from "./bulma.js"
import { BoolClasslistArg, boolClasslist } from "./bool.js"
import {
  ColorArg,
  MainColor,
  ShadeColor,
  OtherColor,
  colorClass,
} from "./color.js"
import { PluralSizeArg, SizeArg, pluralSizeClass, sizeClass } from "./size.js"

export type ButtonClassArg = ColorArg<MainColor | ShadeColor | OtherColor> &
  SizeArg &
  Pick<
    BoolClasslistArg,
    | "isActive"
    | "isExpanded"
    | "isFocused"
    | "isFullwidth"
    | "isInverted"
    | "isLight"
    | "isLoading"
    | "isOutlined"
    | "isRounded"
    | "isStatic"
  >

export const buttonClass = ({
  color,
  size,
  isActive,
  isExpanded,
  isFocused,
  isFullwidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  isStatic,
}: ButtonClassArg) =>
  classnames<BulmaClass>(
    "button",
    colorClass(color),
    sizeClass(size),
    boolClasslist({
      isActive,
      isExpanded,
      isFocused,
      isFullwidth,
      isInverted,
      isLight,
      isLoading,
      isOutlined,
      isRounded,
      isStatic,
    })
  )

export type ButtonDeleteClassArg = SizeArg<"small" | "medium" | "large">

export const buttonDeleteClass = ({ size }: ButtonDeleteClassArg) =>
  classnames("delete", sizeClass(size))

export type ButtonsClassArg = PluralSizeArg &
  Pick<BoolClasslistArg, "isCentered">

export const buttonsClass = ({ isCentered, size }: ButtonsClassArg) =>
  classnames("buttons", boolClasslist({ isCentered }), pluralSizeClass(size))

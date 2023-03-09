import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import {
  ColorModifierProp,
  SizeModifierProp,
  TextColor,
  sizeClassName,
  textColorClassName,
} from "../modifiers/index.js"

export type IconProps = HTMLAttributes<HTMLSpanElement> &
  ColorModifierProp<TextColor> &
  SizeModifierProp<"small" | "medium" | "large">

export const Icon: FC<PropsWithChildren<IconProps>> = ({ children, className, color, size, ...props }) => {
  const _class = classNames("icon", textColorClassName(color), sizeClassName(size), className)

  return (
    <span className={_class} {...props}>
      {children}
    </span>
  )
}

export type IconTextProps = HTMLAttributes<HTMLSpanElement>

export const IconText: FC<PropsWithChildren<IconTextProps>> = ({ children, className, ...props }) => {
  const _class = classNames("icon-text", className)

  return (
    <span className={_class} {...props}>
      {children}
    </span>
  )
}

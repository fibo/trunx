import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
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

export const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  className,
  color,
  size,
  ...props
}) => {
  return (
    <span
      className={classnames(
        "icon",
        textColorClassName(color),
        sizeClassName(size),
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export type IconTextProps = HTMLAttributes<HTMLSpanElement>

export const IconText: FC<PropsWithChildren<IconTextProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={classnames("icon-text", className)} {...props}>
      {children}
    </span>
  )
}

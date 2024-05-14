import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {ColorArg, SizeArg, TextColor, sizeClass, textColorClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type IconProps = HTMLAttributes<HTMLSpanElement> &
  ColorArg<TextColor> &
  SizeArg<"small" | "medium" | "large">

export const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  className,
  color,
  size,
  ...props
}) => (
  <span
    className={classnames(
      "icon",
      textColorClass(color),
      sizeClass(size),
      className
    )}
    {...props}
  >
    {children}
  </span>
)

export type IconTextProps = HTMLAttributes<HTMLSpanElement>

export const IconText: FC<PropsWithChildren<IconTextProps>> = ({
  children,
  className,
  ...props
}) => (
  <span className={classnames("icon-text", className)} {...props}>
    {children}
  </span>
)

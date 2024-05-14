import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react"
import {
  BoolClassArg,
  ColorArg,
  MainColor,
  ShadeColor,
  SizeArg,
  OtherColor,
  boolClass,
  colorClass,
  sizeClass
} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ColorArg<MainColor | ShadeColor | OtherColor> &
  SizeArg &
  Pick<
    BoolClassArg,
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

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  color,
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
  size,
  ...props
}) => (
  <button
    className={classnames(
      "button",
      colorClass(color),
      sizeClass(size),
      boolClass({
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
      }),
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export type ButtonDeleteProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> &
  ColorArg<MainColor | ShadeColor | OtherColor> &
  SizeArg<"small" | "medium" | "large">

export const ButtonDelete: FC<ButtonDeleteProps> = ({size, ...props}) => (
  <button className={classnames("delete", sizeClass(size))} {...props} />
)

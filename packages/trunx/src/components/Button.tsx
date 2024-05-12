import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  ShadeColor,
  OtherColor,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ColorModifierProp<MainColor | ShadeColor | OtherColor> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
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
}) => {
  return (
    <button
      className={classnames(
        "button",
        colorClassName(color),
        sizeClassName(size),
        modifier({
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
}

export type ButtonDeleteProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> &
  ColorModifierProp<MainColor | ShadeColor | OtherColor> &
  SizeModifierProp<"small" | "medium" | "large">

export const ButtonDelete: FC<ButtonDeleteProps> = ({ size, ...props }) => {
  return (
    <button className={classnames("delete", sizeClassName(size))} {...props} />
  )
}

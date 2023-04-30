import {
  ButtonHTMLAttributes,
  FC,
  PointerEventHandler,
  PropsWithChildren,
} from "react"
import { classNames } from "../classNames.js"
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
  className,
  children,
  isActive,
  size,
  isExpanded,
  isStatic,
  isFocused,
  isLight,
  isLoading,
  isInverted,
  isOutlined,
  color,
  ...props
}) => {
  const _class = classNames(
    "button",
    colorClassName(color),
    sizeClassName(size),
    modifier({
      isActive,
      isExpanded,
      isFocused,
      isInverted,
      isLight,
      isLoading,
      isOutlined,
      isStatic,
    }),
    className
  )

  return (
    <button className={_class} {...props}>
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
  const _class = classNames("delete", sizeClassName(size))

  return <button className={_class} {...props} />
}

/**
 * Callback helper, alias for `React.PointerEventHandler<HTMLButtonElement>`.
 *
 * @example
 *
 * ```ts
 * useCallback<ButtonOnClick>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type ButtonOnClick = PointerEventHandler<HTMLButtonElement>

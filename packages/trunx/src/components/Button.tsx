import { ButtonHTMLAttributes, FC, PointerEventHandler, PropsWithChildren, useMemo } from "react"
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
  const _className = useMemo(
    () =>
      classNames(
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
      ),
    [
      className,
      color,
      isActive,
      isFocused,
      isExpanded,
      isInverted,
      isLight,
      isLoading,
      isOutlined,
      isStatic,
      size,
    ]
  )

  return (
    <button className={_className} {...props}>
      {children}
    </button>
  )
}

/**
 * Callback helper, alias for `React.PointerEventHandler<HTMLButtonElement>`.
 *
 * @example
 * ```ts
 * useCallback<ButtonOnClick>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type ButtonOnClick = PointerEventHandler<HTMLButtonElement>

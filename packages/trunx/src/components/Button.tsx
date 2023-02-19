import { ButtonHTMLAttributes, FC, PointerEventHandler, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  BooleanModifierProps,
  MainColor,
  ShadeColor,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from '../modifiers/index.js'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    | 'isActive'
    | 'isExpanded'
    | 'isFocused'
    | 'isFullwidth'
    | 'isGhost'
    | 'isInverted'
    | 'isLight'
    | 'isLoading'
    | 'isOutlined'
    | 'isRounded'
    | 'isStatic'
    | 'isText'
  >

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  isActive,
  size,
  isGhost,
  isExpanded,
  isStatic,
  isFocused,
  isLoading,
  isText,
  isInverted,
  isOutlined,
  color,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'button',
        colorClassName(color),
        sizeClassName(size),
        modifier({
          isActive,
          isExpanded,
          isFocused,
          isGhost,
          isInverted,
          isLoading,
          isOutlined,
          isStatic,
          isText,
        }),
        className
      ),
    [
      className,
      color,
      isActive,
      isFocused,
      isExpanded,
      isGhost,
      isInverted,
      isLoading,
      isOutlined,
      isStatic,
      isText,
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

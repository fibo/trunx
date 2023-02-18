import { ButtonHTMLAttributes, FC, PointerEventHandler, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  CommonModifierProps,
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
    CommonModifierProps,
    'isExpanded' | 'isActive' | 'isFocused' | 'isFullwidth' | 'isLoading' | 'isRounded' | 'isStatic'
  > &
  Partial<{
    isGhost: boolean
    isInverted: boolean
    isOutlined: boolean
    isText: boolean
  }>

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
        modifier({ isFocused, isLoading }),
        colorClassName(color),
        sizeClassName(size),
        modifier({ isActive, isExpanded, isStatic, isFocused, isLoading }),
        {
          'is-ghost': isGhost,
          'is-outlined': isOutlined,
          'is-inverted': isInverted,
          'is-text': isText,
        },
        className
      ),
    [className, isGhost, isText, isExpanded, isOutlined, isInverted, isStatic, isFocused, isLoading, size]
  )
  return (
    <button className={_className} {...props}>
      {children}
    </button>
  )
}

/**
 * Callback helper, alias for `PointerEventHandler<HTMLButtonElement>`
 * @example
 * useCallback<ButtonOnClick>((event) => {
 *   // `event` has the correct type.
 * })
 */
export type ButtonOnClick = PointerEventHandler<HTMLButtonElement>

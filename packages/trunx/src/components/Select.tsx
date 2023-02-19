import { FC, ChangeEventHandler, SelectHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  ColorModifierProp,
  MainColor,
  colorClassName,
  sizeClassName,
} from '../modifiers/index.js'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, 'isFocused' | 'isHovered' | 'isLoading' | 'isMultiple'>

export const Select: FC<PropsWithChildren<SelectProps>> = ({
  children,
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  isMultiple,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'select',
        colorClassName(color),
        modifier({ isFocused, isHovered, isLoading, isMultiple }),
        sizeClassName(size),
        className
      ),
    [className, color, size, isFocused, isHovered, isLoading, isMultiple]
  )

  return (
    <div className={_className}>
      <select {...props}>{children}</select>
    </div>
  )
}

/**
 * Callback helper, alias for `React.ChangeEventHandler<HTMLSelectElement>`.
 *
 * ```ts
 * @example
 * useCallback<SelectOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type SelectOnChange = ChangeEventHandler<HTMLSelectElement>

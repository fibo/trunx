import classnames from 'classnames'
import { FC, SelectHTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  ColorModifierProp,
  MainColor,
  colorClassName,
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

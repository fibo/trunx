import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  SizeModifierProp,
  TextColor,
  sizeClassName,
  textColorClassName,
} from '../modifiers/index.js'

export type IconProps = HTMLAttributes<HTMLSpanElement> &
  ColorModifierProp<TextColor> &
  SizeModifierProp<'small' | 'medium' | 'large'>

export const Icon: FC<PropsWithChildren<IconProps>> = ({ children, className, color, size, ...props }) => {
  const _className = useMemo(
    () => classNames('icon', textColorClassName(color), sizeClassName(size), className),
    [className, color, size]
  )
  return (
    <span className={_className} {...props}>
      {children}
    </span>
  )
}

export type IconTextProps = HTMLAttributes<HTMLSpanElement>

export const IconText: FC<PropsWithChildren<IconTextProps>> = ({ children, className, ...props }) => {
  const _className = useMemo(() => classNames('icon-text', className), [className])
  return (
    <span className={_className} {...props}>
      {children}
    </span>
  )
}

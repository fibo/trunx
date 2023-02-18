import { ProgressHTMLAttributes, FC, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  MainColor,
  SizeModifierProp,
  colorClassName,
  sizeClassName,
} from '../modifiers/index.js'

export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp

export const Progress: FC<ProgressProps> = ({ className, color, size, ...props }) => {
  const _className = useMemo(
    () => classNames('progress', colorClassName(color), sizeClassName(size), className),
    [className, color, size]
  )
  return <progress className={_className} {...props} />
}

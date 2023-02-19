import { AnchorHTMLAttributes, FC, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  ColorModifierProp,
  MainColor,
  ShadeColor,
  Size,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from '../modifiers/index.js'

export type TagProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  SizeModifierProp<Extract<Size, 'normal' | 'medium' | 'large'>> &
  Pick<BooleanModifierProps, 'isDelete' | 'isLight' | 'isRounded'>

export const Tag: FC<PropsWithChildren<TagProps>> = ({
  children,
  className,
  color,
  isDelete,
  isLight,
  isRounded,
  size,
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'tag',
        colorClassName(color),
        sizeClassName(size),
        modifier({ isDelete, isLight, isRounded }),
        className
      ),
    [className, color, isDelete, isLight, isRounded, size]
  )
  return <div className={_className}>{children}</div>
}

import { AnchorHTMLAttributes, FC, PointerEventHandler, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  ColorModifierProp,
  CommonModifierProps,
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
  Pick<CommonModifierProps, 'isLight' | 'isRounded'> &
  Partial<{
    isDelete: boolean
  }>

export const Tag: FC<TagProps> = ({ children, className, color, isDelete, isLight, isRounded, size }) => {
  const _className = useMemo(
    () =>
      classNames(
        'tag',
        colorClassName(color),
        sizeClassName(size),
        modifier({ isLight, isRounded }),
        {
          'is-delete': isDelete,
        },
        className
      ),
    [className, color, size]
  )
  return <div className={_className}>{children}</div>
}

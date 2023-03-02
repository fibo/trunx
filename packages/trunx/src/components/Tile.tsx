import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, Dozen, modifier } from '../modifiers/index.js'

export type TileProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isAncestor' | 'isParent' | 'isVertical'> &
  Partial<{
    size: Dozen
  }>

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  children,
  className,
  isAncestor,
  isParent,
  isVertical,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'tile',
        size ? `is-${size}` : undefined,
        modifier({ isAncestor, isParent, isVertical }),
        className
      ),
    [className, isAncestor, isParent, isVertical, size]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

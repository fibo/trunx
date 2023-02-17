import { FC, HTMLAttributes, PropsWithChildren, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { Dozen } from '../modifiers/common.js'

export type TileProps = HTMLAttributes<HTMLDivElement> &
  Partial<{
    isAncestor: boolean
    isParent: boolean
    isVertical: boolean
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
        { 'is-ancestor': isAncestor, 'is-parent': isParent },
        size ? `is${size}` : undefined,
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

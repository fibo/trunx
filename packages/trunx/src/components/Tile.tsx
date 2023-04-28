import { FC, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, Dozen, modifier } from "../modifiers/index.js"

export type TileProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BooleanModifierProps,
    "isAncestor" | "isChild" | "isParent" | "isVertical"
  > &
  Partial<{
    size: Dozen
  }>

export const Tile: FC<PropsWithChildren<TileProps>> = ({
  children,
  className,
  isAncestor,
  isChild,
  isParent,
  isVertical,
  size,
  ...props
}) => {
  const _class = classNames(
    "tile",
    size ? `is-${size}` : undefined,
    modifier({ isAncestor, isChild, isParent, isVertical }),
    className
  )

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

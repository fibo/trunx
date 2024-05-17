import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, Dozen, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type TileProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BoolClassArg,
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
}) => (
  <div
    className={classnames(
      "tile",
      size ? `is-${size}` : undefined,
      boolClass({isAncestor, isChild, isParent, isVertical}),
      className
    )}
    {...props}
  >
    {children}
  </div>
)

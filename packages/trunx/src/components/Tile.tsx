import {FC, HTMLAttributes, PropsWithChildren} from "react"
import {Dozen} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {BooleanModifierProps, modifier} from "../modifiers/index.js"

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
  return (
    <div
      className={classnames(
        "tile",
        size ? `is-${size}` : undefined,
        modifier({isAncestor, isChild, isParent, isVertical}),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

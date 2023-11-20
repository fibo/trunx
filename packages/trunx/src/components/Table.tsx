import { FC, TableHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type TableProps = TableHTMLAttributes<HTMLTableElement> &
  Pick<
    BooleanModifierProps,
    "isBordered" | "isNarrow" | "isStriped" | "isFullwidth" | "isHoverable"
  > &
  Partial<{
    responsive: boolean
  }>

export const Table: FC<PropsWithChildren<TableProps>> = ({
  children,
  className,
  isHoverable,
  isFullwidth,
  isNarrow,
  isBordered,
  isStriped,
  responsive = true,
  ...props
}) => {
  const containerClassName = responsive ? "table-container" : undefined

  const _class = classNames(
    "table",
    modifier({ isBordered, isFullwidth, isHoverable, isNarrow, isStriped }),
    className
  )

  return (
    <div className={containerClassName}>
      <table className={_class} {...props}>
        {children}
      </table>
    </div>
  )
}

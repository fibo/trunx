import { FC, TableHTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <div className={responsive ? "table-container" : undefined}>
      <table
        className={classnames(
          "table",
          modifier({
            isBordered,
            isFullwidth,
            isHoverable,
            isNarrow,
            isStriped,
          }),
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

import { FC, TableHTMLAttributes, PropsWithChildren } from "react"
import { BoolClassArg, boolClass } from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type TableProps = TableHTMLAttributes<HTMLTableElement> &
  Pick<
    BoolClassArg,
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
          boolClass({
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

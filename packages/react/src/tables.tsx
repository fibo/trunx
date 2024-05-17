import { FC, TableHTMLAttributes, PropsWithChildren } from "react"
import { TableClassArg, tableClass } from "@trunx/bulma"

export type TableProps = Omit<
  TableHTMLAttributes<HTMLTableElement>,
  "className"
> &
  TableClassArg &
  Partial<{
    responsive: boolean
  }>

export const Table: FC<PropsWithChildren<TableProps>> = ({
  isHoverable,
  isFullwidth,
  isNarrow,
  isBordered,
  isStriped,
  responsive = true,
  children,
  ...props
}) => (
  <div className={responsive ? "table-container" : undefined}>
    <table
      className={tableClass({
        isBordered,
        isFullwidth,
        isHoverable,
        isNarrow,
        isStriped,
      })}
      {...props}
    >
      {children}
    </table>
  </div>
)

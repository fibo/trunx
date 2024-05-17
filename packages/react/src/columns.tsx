import { FC, PropsWithChildren } from "react"
import {
  ColumnClassArg,
  ColumnsClassArg,
  columnClass,
  columnsClass,
} from "@trunx/bulma"

export type ColumnProps = ColumnClassArg

export const Column: FC<PropsWithChildren<ColumnProps>> = ({
  children,
  ...props
}) => <div className={columnClass(props)}>{children}</div>

export type ColumnsProps = ColumnsClassArg

export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
  children,
  ...props
}) => <div className={columnsClass(props)}>{children}</div>

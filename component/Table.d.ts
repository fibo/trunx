import * as React from 'react'
interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}
declare type TableContainerProps = React.HTMLAttributes<HTMLDivElement>
declare class TableContainer extends React.Component<TableContainerProps> {
  render(): React.ReactNode
}
export declare class Table extends React.Component<TableProps> {
  static Container: typeof TableContainer
  render(): React.ReactNode
}
export {}

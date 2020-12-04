import * as React from 'react'
import { HelpersProps } from './modifiers'
interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    HelpersProps {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}
declare type TableContainerProps = React.HTMLAttributes<HTMLDivElement>
declare class TableContainer extends React.Component<TableContainerProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Table extends React.Component<TableProps> {
  static Container: typeof TableContainer
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}

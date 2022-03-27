import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isBordered?: boolean
  isFullwidth?: boolean
  isHoverable?: boolean
  isNarrow?: boolean
  isStriped?: boolean
}
export interface TableContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps {}
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

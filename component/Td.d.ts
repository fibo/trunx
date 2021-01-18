import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
export interface TdProps
  extends React.HTMLAttributes<HTMLTableDataCellElement>,
    BackgroundColorHelpersProps,
    ErrorBoundaryProps {}
export declare class Td extends React.Component<TdProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

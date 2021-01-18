import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
export interface ThProps
  extends React.HTMLAttributes<HTMLTableHeaderCellElement>,
    BackgroundColorHelpersProps,
    ErrorBoundaryProps {}
export declare class Th extends React.Component<ThProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

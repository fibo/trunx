import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
export interface TrProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    BackgroundColorHelpersProps,
    ErrorBoundaryProps {}
export declare class Tr extends React.Component<TrProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

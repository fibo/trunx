import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
export interface ColProps
  extends React.ColHTMLAttributes<HTMLTableColElement>,
    BackgroundColorHelpersProps,
    ErrorBoundaryProps {}
export declare class Col extends React.Component<ColProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

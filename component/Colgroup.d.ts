import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
export interface ColgroupProps
  extends React.ColgroupHTMLAttributes<HTMLTableColElement>,
    BackgroundColorHelpersProps,
    ErrorBoundaryProps {}
export declare class Colgroup extends React.Component<ColgroupProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

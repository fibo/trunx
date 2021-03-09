import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface SupProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export declare class Sup extends React.Component<SupProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface UlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export declare class Ul extends React.Component<UlProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

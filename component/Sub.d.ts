import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface SubProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export declare class Sub extends React.Component<SubProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

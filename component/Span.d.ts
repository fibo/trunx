import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export declare class Span extends React.Component<SpanProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

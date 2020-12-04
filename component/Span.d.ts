import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
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

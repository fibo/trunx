import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Span extends React.Component<SpanProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

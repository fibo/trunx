import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Span extends React.Component<SpanProps> {
  render(): React.ReactNode
}

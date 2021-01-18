import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, SizeProps } from './modifiers'
interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {}
export declare class Label extends React.Component<LabelProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}

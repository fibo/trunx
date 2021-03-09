import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface TbodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export declare class Tbody extends React.Component<TbodyProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

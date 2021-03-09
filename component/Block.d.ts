import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface BlockProps extends ErrorBoundaryProps, HelpersProps {
  className?: string
  as?: 'div' | 'p'
}
export declare class Block extends React.Component<BlockProps> {
  static defaultProps: {
    as: string
  }
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

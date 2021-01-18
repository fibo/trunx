import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface ColumnsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}
export declare class Columns extends React.Component<ColumnsProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

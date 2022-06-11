import * as React from 'react'
export interface ErrorBoundaryProps {
  fallbackUI?: React.ReactNode
}
export declare class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>
> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}

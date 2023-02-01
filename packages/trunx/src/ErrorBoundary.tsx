import * as React from 'react'

export interface ErrorBoundaryProps {
  fallbackUI?: React.ReactNode
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>
> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { children, fallbackUI } = this.props

    if (this.state.hasError) return fallbackUI

    return <>{children}</>
  }
}

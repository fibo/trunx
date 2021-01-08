import * as React from 'react'

export interface ErrorBoundaryProps {
  fallbackUI?: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { children, fallbackUI } = this.props

    return this.state.hasError ? fallbackUI : <>{children}</>
  }
}

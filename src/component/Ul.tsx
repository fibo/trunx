import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { renderElement } from './renderElement'
import { HelpersProps } from './modifiers'

interface UlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export class Ul extends React.Component<UlProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('ul', props)
  }
}

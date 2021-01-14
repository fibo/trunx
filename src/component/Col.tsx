import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ColProps
  extends React.ColHTMLAttributes<HTMLTableColElement>,
BackgroundColorHelpersProps,
    ErrorBoundaryProps  {}

export class Col extends React.Component<ColProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('col', props)
  }
}

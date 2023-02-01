import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ThProps
  extends React.HTMLAttributes<HTMLTableHeaderCellElement>,
BackgroundColorHelpersProps, ErrorBoundaryProps {}

export class Th extends React.Component<ThProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('th', props)
  }
}


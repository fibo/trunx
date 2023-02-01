import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface TfootProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
BackgroundColorHelpersProps, ErrorBoundaryProps {}

export class Tfoot extends React.Component<TfootProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('tfoot', props)
  }
}

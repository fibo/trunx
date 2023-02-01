import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface TdProps
  extends React.HTMLAttributes<HTMLTableDataCellElement>,
BackgroundColorHelpersProps,
    ErrorBoundaryProps {}

export class Td extends React.Component<TdProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('td', props)
  }
}

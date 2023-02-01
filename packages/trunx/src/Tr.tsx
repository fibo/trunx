import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import {
BackgroundColorHelpersProps
} from './modifiers'
import { renderElement } from './renderElement'

export interface TrProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
BackgroundColorHelpersProps,
    ErrorBoundaryProps
    {}

export class Tr extends React.Component<TrProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('tr', props)
  }
}

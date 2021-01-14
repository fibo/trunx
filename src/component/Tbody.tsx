import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface TbodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export class Tbody extends React.Component<TbodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('tbody', props)
  }
}

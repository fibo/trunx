import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, ErrorBoundaryProps, HelpersProps {}

export class Box extends React.Component<BoxProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.box)
  }
}

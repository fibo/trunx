import * as React from 'react'

import { bulmaClassName } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface FooterProps extends React.HTMLAttributes<HTMLElement>, ErrorBoundaryProps, HelpersProps {}

export class Footer extends React.Component<FooterProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('footer', props, bulmaClassName.footer)
  }
}

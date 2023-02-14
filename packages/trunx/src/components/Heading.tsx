import * as React from 'react'

import { bulmaClassName } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export class Heading extends React.Component<HeadingProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('p', props, bulmaClassName.heading)
  }
}

import * as React from 'react'

import { bulmaClassName } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { BackgroundColorHelpersProps, MainColorsProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface HelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    ErrorBoundaryProps,
    BackgroundColorHelpersProps,
    MainColorsProps {}

export class Help extends React.Component<HelpProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('p', props, bulmaClassName.help)
  }
}

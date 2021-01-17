import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { BackgroundColorHelpersProps, MainColorsProps } from './modifiers'
import { renderElement } from './renderElement'

interface HelpProps
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

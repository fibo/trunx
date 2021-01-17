import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {}

export class Label extends React.Component<LabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('label', props, bulmaClassName.label)
  }
}

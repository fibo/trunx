import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface LabelProps
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

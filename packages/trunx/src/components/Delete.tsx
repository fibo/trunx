import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface DeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {}

export class Delete extends React.Component<DeleteProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('button', props, bulmaClassName.delete)
  }
}

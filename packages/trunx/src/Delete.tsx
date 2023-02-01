import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

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

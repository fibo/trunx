import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface ControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export class Control extends React.Component<ControlProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, hasIconsLeft, hasIconsRight, isExpanded, isLoading, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.control, {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
    })
  }
}

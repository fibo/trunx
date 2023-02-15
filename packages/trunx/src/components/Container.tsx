import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export class Container extends React.Component<ContainerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isFluid, isFullhd, isWidescreen, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.container, {
      isFluid,
      isFullhd,
      isWidescreen,
    })
  }
}

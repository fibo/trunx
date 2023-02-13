import * as React from 'react'

import { bulmaClassName } from './classNames.js'
import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { HelpersProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface BlockProps extends ErrorBoundaryProps, HelpersProps {
  className?: string
  as?: 'div' | 'p'
}

export class Block extends React.Component<BlockProps> {
  static defaultProps = { as: 'div' }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { as: tag, fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement(tag as string, props, bulmaClassName.block)
  }
}

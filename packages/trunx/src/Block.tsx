import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

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

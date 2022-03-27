import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isLarge?: boolean
  isMedium?: boolean
}

export class Section extends React.Component<SectionProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const { fallbackUI, isLarge, isMedium, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('section', props, bulmaClassName.section, {
      isLarge,
      isMedium,
    })
  }
}

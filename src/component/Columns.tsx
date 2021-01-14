import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ColumnsProps
  extends React.HTMLAttributes<HTMLDivElement>,
ErrorBoundaryProps,
    HelpersProps {
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}

export class Columns extends React.Component<ColumnsProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isDesktop, isGapless, isMobile, isMultiline, ...props } = this.props

    if (this.state.hasError)  return null

    return renderElement('div', props, bulmaClassName.columns, {
      isDesktop,
      isGapless,
      isMobile,
      isMultiline,
    })
  }
}

import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
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
    if (this.state.hasError) {
      return null
    }

    const { isDesktop, isGapless, isMobile, isMultiline, ...props } = this.props

    return renderElement('div', props, bulmaClassName.columns, {
      isDesktop,
      isGapless,
      isMobile,
      isMultiline,
    })
  }
}

import * as React from 'react'

import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}

export class Span extends React.Component<SpanProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('span', this.props)
  }
}

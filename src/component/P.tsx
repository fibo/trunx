import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}

export class P extends React.Component<PProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('p', this.props)
  }
}

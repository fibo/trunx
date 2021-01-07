import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SupProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class Sup extends React.Component<SupProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('sup', this.props)
  }
}

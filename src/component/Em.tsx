import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface EmProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class Em extends React.Component<EmProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('em', this.props)
  }
}

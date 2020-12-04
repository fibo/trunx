import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export class Div extends React.Component<DivProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props)
  }
}

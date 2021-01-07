import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SubProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class Sub extends React.Component<SubProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('sub', this.props)
  }
}

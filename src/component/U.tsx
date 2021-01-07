import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface UProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export class U extends React.Component<UProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('u', this.props)
  }
}

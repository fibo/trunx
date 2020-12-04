import * as React from 'react'

import { renderElement } from './renderElement'
import { HelpersProps } from './modifiers'

interface UlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    HelpersProps {}

export class Ul extends React.Component<UlProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('ul', this.props)
  }
}

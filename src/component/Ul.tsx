import * as React from 'react'

import { renderElement } from './renderElement'

type UlProps = React.HTMLAttributes<HTMLUListElement>

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

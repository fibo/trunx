import * as React from 'react'

import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface BProps
  extends React.HTMLAttributes<HTMLElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}

export class B extends React.Component<BProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('b', this.props)
  }
}

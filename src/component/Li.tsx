import * as React from 'react'

import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface LiProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    HelpersProps {
  isActive?: boolean
}

export class Li extends React.Component<LiProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, ...props } = this.props

    return renderElement('li', props, undefined, { isActive })
  }
}

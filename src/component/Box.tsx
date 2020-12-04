import * as React from 'react'

import { bulmaClassName } from './classNames'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}

export class Box extends React.Component<BoxProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.box)
  }
}

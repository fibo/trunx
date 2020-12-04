import * as React from 'react'

import { bulmaClassName } from './classNames'
import { TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    TextColorHelpersProps {}

export class Heading extends React.Component<HeadingProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('p', this.props, bulmaClassName.heading)
  }
}

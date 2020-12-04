import * as React from 'react'

import {
  BackgroundColorHelpersProps,
  FloatHelpersProps,
  TextColorHelpersProps,
} from './modifiers'
import { renderElement } from './renderElement'

export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BackgroundColorHelpersProps,
    FloatHelpersProps,
    TextColorHelpersProps {}

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

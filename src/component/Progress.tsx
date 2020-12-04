import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
import { renderElement } from './renderElement'

export interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {}

export class Progress extends React.Component<ProgressProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('progress', this.props, bulmaClassName.progress)
  }
}

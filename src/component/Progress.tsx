import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
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
    ErrorBoundaryProps,
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
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('progress', props, bulmaClassName.progress)
  }
}

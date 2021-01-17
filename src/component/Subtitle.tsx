import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    ErrorBoundaryProps,
    HelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}

export class Subtitle extends React.Component<SubtitleProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, is1, is2, is3, is4, is5, is6, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('p', props, bulmaClassName.subtitle, {
      is1,
      is2,
      is3,
      is4,
      is5,
      is6,
    })
  }
}

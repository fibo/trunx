import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {
  isNormal?: boolean
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export class Content extends React.Component<ContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isNormal, hasTextCentered, hasTextJustified, hasTextLeft, hasTextRight, ...props } =
      this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.content, {
      isNormal,
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
    })
  }
}

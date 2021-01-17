import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface TagsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  hasAddons?: boolean
}

export class Tags extends React.Component<TagsProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    const { areLarge, areMedium, fallbackUI, hasAddons, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.tags, {
      areLarge,
      areMedium,
      hasAddons,
    })
  }
}

import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface TagsProps extends React.HTMLAttributes<HTMLDivElement>, HelpersProps {
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
    if (this.state.hasError) {
      return null
    }

    const { areLarge, areMedium, hasAddons, ...props } = this.props

    return renderElement('div', props, bulmaClassName.tags, {
      areLarge,
      areMedium,
      hasAddons,
    })
  }
}

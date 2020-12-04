import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

interface SectionProps extends React.HTMLAttributes<HTMLElement>, HelpersProps {
  isLarge?: boolean
  isMedium?: boolean
}

export class Section extends React.Component<SectionProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render() {
    if (this.state.hasError) {
      return null
    }

    const { isLarge, isMedium, ...props } = this.props

    return renderElement('section', props, bulmaClassName.section, {
      isLarge,
      isMedium,
    })
  }
}

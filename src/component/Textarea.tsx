import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
}

export class Textarea extends React.Component<TextareaProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isFocused, isHovered, ...props } = this.props

    return renderElement('textarea', props, bulmaClassName.textarea, {
      isFocused,
      isHovered,
    })
  }
}

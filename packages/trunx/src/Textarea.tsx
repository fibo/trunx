import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary.js'
import { bulmaClassName } from './classNames.js'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers.js'
import { renderElement } from './renderElement.js'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    ErrorBoundaryProps,
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
    const { fallbackUI, isFocused, isHovered, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('textarea', props, bulmaClassName.textarea, {
      isFocused,
      isHovered,
    })
  }
}

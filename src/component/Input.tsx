import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
}

export class Input extends React.Component<IInputProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const {
      fallbackUI,
      isFocused,
      isHovered,
      isRounded,
      isStatic,
      type,
      ...props
    } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('input', { type, ...props }, bulmaClassName.input, {
      isFocused,
      isHovered,
      isRounded,
      isStatic,
    })
  }
}

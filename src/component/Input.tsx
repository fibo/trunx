import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  inputRef?: React.Ref<HTMLInputElement>
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
}

export class Input extends React.Component<InputProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const {
      fallbackUI,
      inputRef,
      isFocused,
      isHovered,
      isRounded,
      isStatic,
      type,
      ...props
    } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement(
      'input',
      { ref: inputRef, type, ...props },
      bulmaClassName.input,
      {
        isFocused,
        isHovered,
        isRounded,
        isStatic,
      }
    )
  }
}

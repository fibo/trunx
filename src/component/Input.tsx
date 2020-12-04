import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
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
    if (this.state.hasError) {
      return null
    }

    const {
      isFocused,
      isHovered,
      isRounded,
      isStatic,
      type,
      ...props
    } = this.props

    return renderElement('input', { type, ...props }, bulmaClassName.input, {
      isFocused,
      isHovered,
      isRounded,
      isStatic,
    })
  }
}

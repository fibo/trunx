import * as React from 'react'

import { bulmaClassName } from './classNames'
import { MainColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>, MainColorsProps, SizeProps {
  isFocused?: boolean;
  isHovered?: boolean;
  isRounded?: boolean;
  isStatic?: boolean;
}

export class Input extends React.Component<IInputProps> {
  render () {
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
      isStatic
    })
  }
}

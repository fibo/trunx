import * as classnames from "classnames"
import * as React from "react"

import { renderElement } from './renderElement'
import { MainColorsProps, SizeProps, TextColorHelpersProps } from "./modifiers"
import {bulmaClassName}from './classNames'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, MainColorsProps, SizeProps, TextColorHelpersProps {
  isFocused?: boolean
  isHovered?: boolean
}

export class Textarea extends React.Component<TextareaProps> {
  render() {
    const {
      isFocused,
      isHovered,
      ...props
    } = this.props

    return renderElement('textarea', props, bulmaClassName.textarea, {
      isFocused,
      isHovered,
    })
  }
}

import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassnames,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ITextareaProps extends IMainColorsProps,
                                 ISizeProps,
                                 ITextColorHelpersProps,
                                 React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFocused?: boolean
  isHovered?: boolean
  placeholder?: string
  rows?: number
}

export default class Textarea extends React.Component<ITextareaProps> {
  render() {
    const {
      isFocused,
      isHovered,
      placeholder,
      rows,
      ...props
    } = this.props

    const className = classnames("textarea",
      {
        "is-focused": isFocused,
        "is-hovered": isHovered,
      },
      mainColorsPropsToClassnames(this.props),
      sizePropsToClassnames(this.props),
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <textarea
        {...props}
        className={className}
        placeholder={placeholder}
        rows={rows}
      />
    )
  }
}

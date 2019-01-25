import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
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
    } = this.props

    const className = classnames("textarea",
      {
        "is-focused": isFocused,
        "is-hovered": isHovered,
      },
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <textarea
        className={className}
        placeholder={placeholder}
        rows={rows}
      />
    )
  }
}

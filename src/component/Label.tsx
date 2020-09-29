import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  ITextColorHelpersProps,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ILabelProps extends ISizeProps, ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
}

export default class Label extends React.Component<ILabelProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <label
        className={classnames(
          "label",
          className,
          sizePropsToClassnames(this.props),
          textColorHelpersPropsToClassnames(this.props),
        )}
      >{children}</label>
    )
  }
}

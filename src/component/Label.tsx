import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  ITextColorHelpersProps,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ILabelProps extends ISizeProps, ITextColorHelpersProps {}

export default class Label extends React.Component<ILabelProps> {
  render() {
    const className = classnames("label",
      sizePropsToClassnames(this.props),
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <label className={className}>{this.props.children}</label>
    )
  }
}

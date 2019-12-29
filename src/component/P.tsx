import * as classnames from "classnames"
import * as React from "react"

import {
  IAlignementHelpersProps,
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  alignementPropsToClassnames,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IPProps extends IAlignementHelpersProps,
                          IBackgroundColorHelpersProps,
                          ITextColorHelpersProps,
                          React.HTMLAttributes<HTMLParagraphElement> {}

export default class P extends React.Component<IPProps> {
  render() {
    const {
      children,
      ...props
    } = this.props

    const className = classnames(
      alignementPropsToClassnames(props),
      backgroundColorHelpersPropsToClassnames(props),
      textColorHelpersPropsToClassnames(props),
    )

    return (
      <p className={className}>{children}</p>
    )
  }
}

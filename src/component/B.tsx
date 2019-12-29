import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IBProps extends IBackgroundColorHelpersProps,
                          ITextColorHelpersProps {}

export default class B extends React.Component<IBProps> {
  render() {
    const {
      children,
      ...props
    } = this.props

    const className = classnames(
      backgroundColorHelpersPropsToClassnames(props),
      textColorHelpersPropsToClassnames(props),
    )

    return (
      <b className={className}>{children}</b>
    )
  }
}

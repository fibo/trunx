import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IStrongProps extends IBackgroundColorHelpersProps,
                               ITextColorHelpersProps {}

export default class Strong extends React.Component<IStrongProps> {
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
      <strong className={className}>{children}</strong>
    )
  }
}

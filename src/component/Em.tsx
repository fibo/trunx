import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IEmProps extends IBackgroundColorHelpersProps,
                           ITextColorHelpersProps {}

export default class Em extends React.Component<IEmProps> {
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
      <em className={className}>{children}</em>
    )
  }
}

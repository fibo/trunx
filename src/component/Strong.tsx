import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IStrongProps extends IBackgroundColorHelpersProps,
                               ITextColorHelpersProps {}

export default class Strong extends React.Component<IStrongProps> {
  render() {
    const className = classnames(
      backgroundColorHelpersPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <strong className={className}>{this.props.children}</strong>
    )
  }
}

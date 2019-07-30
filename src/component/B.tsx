import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IBProps extends IBackgroundColorHelpersProps,
                          ITextColorHelpersProps {}

export default class B extends React.Component<IBProps> {
  render() {
    const className = classnames(
      backgroundColorHelpersPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <b className={className}>{this.props.children}</b>
    )
  }
}

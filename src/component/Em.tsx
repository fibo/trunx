import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IEmProps extends IBackgroundColorHelpersProps,
                           ITextColorHelpersProps {}

export default class Em extends React.Component<IEmProps> {
  render() {
    const className = classnames(
      backgroundColorHelpersPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <em className={className}>{this.props.children}</em>
    )
  }
}

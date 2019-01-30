import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface ISpanProps extends IBackgroundColorHelpersProps,
                             ITextColorHelpersProps {}

export default class Span extends React.Component<ISpanProps> {
  render() {
    const className = classnames(
      backgroundColorHelpersPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <span className={className}>{this.props.children}</span>
    )
  }
}

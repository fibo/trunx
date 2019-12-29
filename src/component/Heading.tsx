import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IHeadingProps extends ITextColorHelpersProps {}

export default class Footer extends React.Component<IHeadingProps> {
  render() {
    const className = classnames("heading",
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}

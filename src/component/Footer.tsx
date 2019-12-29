import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IFooterProps extends ITextColorHelpersProps {}

export default class Footer extends React.Component<IFooterProps> {
  render() {
    const className = classnames("footer",
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <footer className={className}>{this.props.children}</footer>
    )
  }
}

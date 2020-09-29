import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IHeadingProps extends ITextColorHelpersProps {
  className?: string;
  children?: React.ReactNode
}

export default class Heading extends React.Component<IHeadingProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <p
        className={classnames(
          "heading",
          className,
          textColorHelpersPropsToClassnames(this.props),
        )}
      >{children}</p>
    )
  }
}

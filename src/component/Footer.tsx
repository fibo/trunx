import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IFooterProps extends ITextColorHelpersProps {
  className?: string;
  children?: React.ReactNode
}

export default class Footer extends React.Component<IFooterProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <footer
        className={classnames(
          "footer",
          className,
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</footer>
    )
  }
}

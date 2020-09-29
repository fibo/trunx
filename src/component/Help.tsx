import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IHelpProps extends IMainColorsProps, ITextColorHelpersProps {
  children?: React.ReactNode
  className?: string
}

export default class Help extends React.Component<IHelpProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <p
        className={classnames(
          "help",
          className,
          mainColorsPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</p>
    )
  }
}

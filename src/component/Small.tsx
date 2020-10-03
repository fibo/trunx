import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ISmallProps extends React.HTMLAttributes<HTMLElement>,
                               IBackgroundColorHelpersProps,
                               ITextColorHelpersProps {}

export default class Small extends React.Component<ISmallProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <small
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</small>
    )
  }
}

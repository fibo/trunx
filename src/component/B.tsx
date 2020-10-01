import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IBProps extends React.HTMLAttributes<HTMLElement>,
                          IBackgroundColorHelpersProps,
                          ITextColorHelpersProps {}

export default class B extends React.Component<IBProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <b
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >
        {children}
      </b>
    )
  }
}

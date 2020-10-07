import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  extractModifiersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IBProps extends React.HTMLAttributes<HTMLElement>,
                          IBackgroundColorHelpersProps,
                          ITextColorHelpersProps {}

export default class B extends React.Component<IBProps> {
  render() {
    const [{
      backgroundColorHelpersProps,
      textColorHelpersProps,
    }, {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <b
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(backgroundColorHelpersProps),
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
        {children}
      </b>
    )
  }
}

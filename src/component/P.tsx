import * as classnames from "classnames"
import * as React from "react"

import {
  IAlignementHelpersProps,
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  alignementPropsToClassnames,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface PProps extends IAlignementHelpersProps,
                          IBackgroundColorHelpersProps,
                          ITextColorHelpersProps,
                          React.HTMLAttributes<HTMLParagraphElement> {}

export default class P extends React.Component<PProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <p
        className={classnames(
          alignementPropsToClassnames(props),
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >
        {children}
      </p>
    )
  }
}

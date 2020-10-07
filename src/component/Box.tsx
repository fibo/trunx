import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  extractModifiersProps,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IBoxProps extends IBackgroundColorHelpersProps,
                            ITextColorHelpersProps,
                            React.HTMLAttributes<HTMLDivElement> {}

export default class Box extends React.Component<IBoxProps> {
  render() {
    const [{
      backgroundColorHelpersProps,
      textColorHelpersProps,
    },
    {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          "box",
          className,
          backgroundColorHelpersPropsToClassnames(backgroundColorHelpersProps),
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
       {children}
      </div>
    )
  }
}

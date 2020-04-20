import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  ITextColorHelpersProps,
  helpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IButtonsProps extends IHelpersProps,
                                ITextColorHelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
  className?: string
}

export default class Buttons extends React.Component<IButtonsProps> {
  render() {
    const {
      areLarge,
      areMedium,
      areSmall,
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "buttons",
          className,
          {
            "are-large": areLarge,
            "are-medium": areMedium,
            "are-small": areSmall,
          },
          helpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >
       {children}
      </div>
    )
  }
}

import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  ITextColorHelpersProps,
  helpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IButtonsProps extends IHelpersProps, ITextColorHelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
}

export default class Buttons extends React.Component<IButtonsProps> {
  render() {
    const {
      areLarge,
      areMedium,
      areSmall,
      children,
      ...props
    } = this.props

    const className = classnames("buttons",
      {
        "are-large": areLarge,
        "are-medium": areMedium,
        "are-small": areSmall,
      },
      helpersPropsToClassnames(props),
      textColorHelpersPropsToClassnames(props),
    )

    return (
      <div className={className}>{children}</div>
    )
  }
}

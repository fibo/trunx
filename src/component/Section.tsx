import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  helpersPropsToClassnames,
} from "./modifiers"

interface ISectionProps extends IHelpersProps {
  children?: React.ReactNode
  className?: string
  isLarge?: boolean
  isMedium?: boolean
}

export default class Section extends React.Component<ISectionProps> {
  render() {
    const {
      children,
      className,
      isInvisible,
      isLarge,
      isMarginLess,
      isMedium,
      isPaddingLess,
      isSrOnly,
    } = this.props

    return (
      <div
        className={classnames(
          "section",
          className,
          {
            "is-large": isLarge,
            "is-medium": isMedium,
          },
          helpersPropsToClassnames({
            isInvisible,
            isMarginLess,
            isPaddingLess,
            isSrOnly,
          }),
        )}
      >{children}</div>
    )
  }
}

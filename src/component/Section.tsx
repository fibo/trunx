import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  helpersPropsToClassenames,
} from "./modifiers"

interface ISectionProps extends IHelpersProps {
  isLarge?: boolean
  isMedium?: boolean
}

export default class Section extends React.Component<ISectionProps> {
  render() {
    const {
      isInvisible,
      isLarge,
      isMarginLess,
      isMedium,
      isPaddingLess,
      isSrOnly,
    } = this.props

    const className = classnames("section",
      {
        "is-large": isLarge,
        "is-medium": isMedium,
      },
      helpersPropsToClassenames({
        isInvisible,
        isMarginLess,
        isPaddingLess,
        isSrOnly,
      }),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IContentProps extends ISizeProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export default class Content extends React.Component<IContentProps> {
  render() {
    const {
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
    } = this.props

    const className = classnames("content",
      {
        "has-text-centered": hasTextCentered,
        "has-text-justified": hasTextJustified,
        "has-text-left": hasTextLeft,
        "has-text-right": hasTextRight,
      },
      sizePropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

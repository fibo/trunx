import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IContentProps extends ISizeProps {
  children?: React.ReactNode
  className?: string;
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export default class Content extends React.Component<IContentProps> {
  render() {
    const {
      children,
      className,
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
    } = this.props

    return (
      <div
        className={classnames(
          "content",
          className,
          {
            "has-text-centered": hasTextCentered,
            "has-text-justified": hasTextJustified,
            "has-text-left": hasTextLeft,
            "has-text-right": hasTextRight,
          },
          sizePropsToClassnames(this.props),
        )}
      >{children}</div>
    )
  }
}

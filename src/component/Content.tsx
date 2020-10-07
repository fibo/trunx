import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  extractModifiersProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IContentProps extends ISizeProps,
                                React.HTMLAttributes<HTMLDivElement> {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export default class Content extends React.Component<IContentProps> {
  render() {
    const [{
      sizeProps,
    }, {
      children,
      className,
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
      ...props
    }] = extractModifiersProps(this.props)

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
          sizePropsToClassnames(sizeProps),
          {...props}
        )}
      >
        {children}
      </div>
    )
  }
}

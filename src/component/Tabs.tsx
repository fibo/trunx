import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface ITabsProps extends ISizeProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isRight?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
}

export default class Tabs extends React.Component<ITabsProps> {
  render() {
    const {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      isToggle,
      isToggleRounded,
      ...props
    } = this.props

    const className = classnames("tabs",
      {
        "is-boxed": isBoxed,
        "is-centered": isCentered,
        "is-fullwidth": isFullwidth,
        "is-right": isRight,
        "is-toggle": isToggle,
        "is-toggle-rounded": isToggleRounded,
      },
      sizePropsToClassnames({
        isLarge,
        isMedium,
        isSmall,
      }),
    )

    return (
      <nav {...props} className={className}>{this.props.children}</nav>
    )
  }
}

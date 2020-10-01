import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface ITabsProps extends ISizeProps {
  children?: React.ReactNode
  className?: string
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
      className,
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

    return (
      <nav
        {...props}
        className={classnames(
          "tabs",
          className,
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
        )}
      >{this.props.children}</nav>
    )
  }
}

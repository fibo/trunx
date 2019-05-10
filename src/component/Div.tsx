import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassenames,
} from "./modifiers"

interface ITabsProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isRight?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
  tabs?: boolean
}

interface IDivProps extends ISizeProps,
                            ITabsProps,
                            React.HTMLAttributes<HTMLDivElement> {
}

export default class Div extends React.Component<IDivProps> {
  render() {
    const {
      isBoxed,
      isCentered,
      isFullwidth,
      isLarge,
      isMedium,
      isRight,
      isToggle,
      isToggleRounded,
      isSmall,
      tabs,
      ...props
    } = this.props

    const className = classnames(
      {
        "is-boxed": isBoxed,
        "is-centered": isCentered,
        "is-fullwidth": isFullwidth,
        "is-right": isRight,
        "is-toggle": isToggle,
        "is-toggle-rounded": isToggleRounded,
        tabs,
      },
      sizePropsToClassenames({
        isLarge,
        isMedium,
        isSmall,
      }),
    )

    return (
      <div {...props} className={className}>{this.props.children}</div>
    )
  }
}

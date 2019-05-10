import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassenames,
} from "./modifiers"

interface IBreadcrumbProps {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}

interface INavProps extends IBreadcrumbProps,
                            ISizeProps,
                            React.HTMLAttributes<HTMLElement> {
  breadcrumb?: boolean
}

export default class Nav extends React.Component<INavProps> {
  render() {
    const {
      breadcrumb,
      hasArrowSeparator,
      hasBulletSeparator,
      hasDotSeparator,
      hasSuccedesSeparator,
      isCentered,
      isLarge,
      isMedium,
      isRight,
      isSmall,
      ...props
    } = this.props

    const className = classnames(
      {
        "breadcrumb": breadcrumb,
        "has-arrow-separator": hasArrowSeparator,
        "has-bullet-separator": hasBulletSeparator,
        "has-dot-separator": hasDotSeparator,
        "has-succedes-separator": hasSuccedesSeparator,
        "is-centered": isCentered,
        "is-right": isRight,
        },
      sizePropsToClassenames({
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

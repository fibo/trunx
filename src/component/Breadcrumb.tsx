import classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  ITextColorHelpersProps,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IBreadcrumbProps extends ISizeProps,
                                   ITextColorHelpersProps,
                                   React.HTMLAttributes<HTMLElement> {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}

export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
  render() {
    const {
      hasArrowSeparator,
      hasBulletSeparator,
      hasDotSeparator,
      hasSuccedesSeparator,
      isCentered,
      isRight,
      ...props
    } = this.props

    const className = classnames("breadcrumb",
      {
        "has-arrow-separator": hasArrowSeparator,
        "has-bullet-separator": hasBulletSeparator,
        "has-dot-separator": hasDotSeparator,
        "has-succedes-separator": hasSuccedesSeparator,
        "is-centered": isCentered,
        "is-right": isRight,
      },
      sizePropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <nav
        {...props}
        aria-label="breadcrumbs"
        className={className}
      >
        <ul>{this.props.children}</ul>
      </nav>
    )
  }
}

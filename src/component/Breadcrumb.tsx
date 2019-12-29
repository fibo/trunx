import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IBreadcrumbProps extends ISizeProps,
                            React.HTMLAttributes<HTMLElement> {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}

interface IBreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}

class BreadcrumbItem extends React.Component<IBreadcrumbItemProps> {
  render() {
    const {
      children,
      isActive,
      ...props
    } = this.props

    const className = classnames({
      "is-active": isActive,
    })

    return (
      <li {...props} className={className}>{children}</li>

    )
  }
}

export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
  static Item = BreadcrumbItem

  render() {
    const {
      children,
      hasArrowSeparator,
      hasBulletSeparator,
      hasDotSeparator,
      hasSuccedesSeparator,
      isCentered,
      isLarge,
      isMedium,
      isRight,
      isSmall,
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
      sizePropsToClassnames({
        isLarge,
        isMedium,
        isSmall,
      }),
    )

    return (
      <nav aria-label="breadcrumbs" className={className}>
        <ul>
          {children}
        </ul>
      </nav>
    )
  }
}

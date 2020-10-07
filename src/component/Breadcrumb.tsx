import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  extractModifiersProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IBreadcrumbProps extends React.HTMLAttributes<HTMLElement>,
                                   ISizeProps {
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
      className,
      isActive,
      ...props
    } = this.props

    return (
      <li
        className={classnames({
          className,
          "is-active": isActive,
        })}
        {...props}
      >
        {children}
      </li>
    )
  }
}

export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
  static Item = BreadcrumbItem

  render() {
    const [{
      sizeProps,
    }, {
      children,
      className,
      hasArrowSeparator,
      hasBulletSeparator,
      hasDotSeparator,
      hasSuccedesSeparator,
      isCentered,
      isRight,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <nav
        aria-label="breadcrumbs"
        className={classnames(
          "breadcrumb",
          className,
          {
            "has-arrow-separator": hasArrowSeparator,
            "has-bullet-separator": hasBulletSeparator,
            "has-dot-separator": hasDotSeparator,
            "has-succedes-separator": hasSuccedesSeparator,
            "is-centered": isCentered,
            "is-right": isRight,
          },
          sizePropsToClassnames(sizeProps)
        )}
        {...props}
      >
        <ul>
          {children}
        </ul>
      </nav>
    )
  }
}

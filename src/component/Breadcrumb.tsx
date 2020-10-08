import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
  BulmaClassModifiers,
} from "./classNames"
import {
  ISizeProps,
  extractModifiersProps,
  sizePropsToClassnames,
} from "./modifiers"

interface BreadcrumbModifiers extends Pick<
  BulmaClassModifiers, 'hasArrowSeparator'
                     | 'hasBulletSeparator'
                     | 'hasDotSeparator'
                     | 'hasSuccedesSeparator'
                     | 'isCentered'
                     | 'isRight'
>

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>,
                                         ISizeProps,
                                         BreadcrumbModifiers
{}
}

interface BreadcrumbItemModifiers extends Pick<BulmaClassModifiers, 'isActive'>

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement>,
                                             BreadcrumbItemModifiers
{}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
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

export default class Breadcrumb extends React.Component<BreadcrumbProps> {
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
          bulmaClassName.breadcrumb
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

import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    SizeProps {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { children, className, isActive, ...props } = this.props

    return (
      <li
        className={classnames(
          className,
          trunxPropsToClassnamesObject({ isActive })
        )}
        {...props}
      >
        {children}
      </li>
    )
  }
}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  static Item = BreadcrumbItem

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      {
        children,
        className,
        hasArrowSeparator,
        hasBulletSeparator,
        hasDotSeparator,
        hasSuccedesSeparator,
        isCentered,
        isRight,
        ...props
      },
    ] = extractModifiersProps(this.props)

    return (
      <nav
        aria-label='breadcrumbs'
        className={classnames(
          bulmaClassName.breadcrumb,
          className,
          trunxPropsToClassnamesObject({
            hasArrowSeparator,
            hasBulletSeparator,
            hasDotSeparator,
            hasSuccedesSeparator,
            isCentered,
            isRight,
          }),
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        <ul>{children}</ul>
      </nav>
    )
  }
}

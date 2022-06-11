import classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    SizeProps {
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSuccedesSeparator?: boolean
  isCentered?: boolean
  isRight?: boolean
}

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    ErrorBoundaryProps {
  isActive?: boolean
}

class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { children, className, fallbackUI, isActive, ...props } = this.props

    if (this.state.hasError) return fallbackUI

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
        fallbackUI,
        hasArrowSeparator,
        hasBulletSeparator,
        hasDotSeparator,
        hasSuccedesSeparator,
        isCentered,
        isRight,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

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

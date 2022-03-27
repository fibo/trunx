import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'
import { renderElement } from './renderElement'

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isCurrent?: boolean
}

export interface PaginationListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface PaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class PaginationEllipsis extends React.Component<PaginationEllipsisProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [modifiersProps, { className, fallbackUI, ...props }] =
      extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    return (
      <li>
        <span
          className={classnames(
            bulmaClassName.paginationEllipsis,
            className,
            modifierPropsToClassnamesObject(modifiersProps)
          )}
          {...props}
        >
          &hellip;
        </span>
      </li>
    )
  }
}

class PaginationLink extends React.Component<PaginationLinkProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isCurrent, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return (
      <li>
        {renderElement('a', props, bulmaClassName.paginationLink, {
          isCurrent,
        })}
      </li>
    )
  }
}

class PaginationList extends React.Component<PaginationListProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('ul', props, bulmaClassName.paginationList)
  }
}

class PaginationNext extends React.Component<PaginationNextProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('a', props, bulmaClassName.paginationNext)
  }
}

class PaginationPrevious extends React.Component<PaginationPreviousProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('a', props, bulmaClassName.paginationPrevious)
  }
}

export class Pagination extends React.Component<PaginationProps> {
  static defaultProps = {
    'aria-label': 'pagination',
    role: 'navigation',
  }

  static Ellipsis = PaginationEllipsis
  static Link = PaginationLink
  static List = PaginationList
  static Next = PaginationNext
  static Previous = PaginationPrevious

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('nav', props, bulmaClassName.pagination)
  }
}

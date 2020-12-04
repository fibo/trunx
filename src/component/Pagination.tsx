import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export type PaginationProps = React.HTMLAttributes<HTMLElement>

export type PaginationEllipsisProps = React.HTMLAttributes<HTMLSpanElement>

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrent?: boolean
}

export type PaginationListProps = React.HTMLAttributes<HTMLUListElement>

export type IPaginationNextProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type PaginationPreviousProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>

class PaginationEllipsis extends React.Component<PaginationEllipsisProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { className, ...props } = this.props

    return (
      <li>
        <span
          className={classnames(bulmaClassName.paginationEllipsis, className)}
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
    if (this.state.hasError) {
      return null
    }

    const { isCurrent, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    return renderElement('ul', this.props, bulmaClassName.paginationList)
  }
}

class PaginationNext extends React.Component<IPaginationNextProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('a', this.props, bulmaClassName.paginationNext)
  }
}

class PaginationPrevious extends React.Component<PaginationPreviousProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('a', this.props, bulmaClassName.paginationPrevious)
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
    if (this.state.hasError) {
      return null
    }

    return renderElement('nav', this.props, bulmaClassName.pagination)
  }
}

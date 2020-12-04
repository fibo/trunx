import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import {
  HelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'
import { renderElement } from './renderElement'

export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isCurrent?: boolean
}

export interface PaginationListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    HelpersProps {}

export interface IPaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}

export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}

class PaginationEllipsis extends React.Component<PaginationEllipsisProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const [modifiersProps, { className, ...props }] = extractModifiersProps(
      this.props
    )

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

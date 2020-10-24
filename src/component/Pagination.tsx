import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface PaginationProps extends React.HTMLAttributes<HTMLElement> {}

interface PaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {}

interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrent?: boolean
}

interface PaginationListProps extends React.HTMLAttributes<HTMLUListElement> {}

interface IPaginationNextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

interface PaginationPreviousProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

class PaginationEllipsis extends React.Component<PaginationEllipsisProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <li>
        <span
          className={classnames(
            bulmaClassName.paginationEllipsis,
            className,
          )}
          {...props}
        >&hellip;</span>
      </li>
    )
  }
}

class PaginationLink extends React.Component<PaginationLinkProps> {
  render() {
    const {
      isCurrent,
      ...props
    } = this.props

    return (
      <li>
        {renderElement('a', props, bulmaClassName.paginationLink, { isCurrent })}
      </li>
    )
  }
}

class PaginationList extends React.Component<PaginationListProps> {
  render() {
    return renderElement('ul', this.props, bulmaClassName.paginationList)
  }
}

class PaginationNext extends React.Component<IPaginationNextProps> {
  render() {
return renderElement('a', this.props, bulmaClassName.paginationNext)
  }
}

class PaginationPrevious extends React.Component<PaginationPreviousProps> {
  render() {
return renderElement('a', this.props, bulmaClassName.paginationPrevious)
  }
}

export default class Pagination extends React.Component<PaginationProps> {
static defaultProps = {
        'aria-label': "pagination",
role: "navigation",
}

  static Ellipsis = PaginationEllipsis
  static Link = PaginationLink
  static List = PaginationList
  static Next = PaginationNext
  static Previous = PaginationPrevious

  render() {
    return renderElement('nav', this.props, bulmaClassName.pagination)
  }
}

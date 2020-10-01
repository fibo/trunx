import * as classnames from "classnames"
import * as React from "react"

interface IPaginationProps {
  children?: React.ReactNode
  className?: string
}

interface IPaginationEllipsisProps {
  className?: string
}

interface IPaginationLinkProps {
  children?: React.ReactNode
  className?: string
  isCurrent?: boolean
}

interface IPaginationListProps {
  children?: React.ReactNode
  className?: string
}

interface IPaginationNextProps {
  children?: React.ReactNode
  className?: string
}

interface IPaginationPreviousProps {
  children?: React.ReactNode
  className?: string
}

class PaginationEllipsis extends React.Component<IPaginationEllipsisProps> {
  render() {
    const {
      className,
    } = this.props

    return (
      <li>
        <span
          className={classnames(
            "pagination-ellipsis",
            className,
          )}
        >&hellip;</span>
      </li>
    )
  }
}

class PaginationLink extends React.Component<IPaginationLinkProps> {
  render() {
    const {
      className,
      children,
      isCurrent,
      ...props
    } = this.props

    return (
      <li>
        <a
          {...props}
          className={classnames(
            "pagination-link",
            className,
            {
              "is-current": isCurrent,
            })
          }
        >{children}</a>
      </li>
    )
  }
}

class PaginationList extends React.Component<IPaginationListProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <ul
        className={classnames(
          "pagination-list",
          className,
        )}
      >{children}</ul>
    )
  }
}

class PaginationNext extends React.Component<IPaginationNextProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <a
        className={classnames(
          "pagination-next",
          className,
        )}
      >{children}</a>
    )
  }
}

class PaginationPrevious extends React.Component<IPaginationPreviousProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <a
        className={classnames(
          "pagination-previous",
          className,
        )}
      >{children}</a>
    )
  }
}

export default class Pagination extends React.Component<IPaginationProps> {
  static Ellipsis = PaginationEllipsis
  static Link = PaginationLink
  static List = PaginationList
  static Next = PaginationNext
  static Previous = PaginationPrevious

  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <nav
        aria-label="pagination"
        className={classnames(
          "pagination",
          className,
        )}
        role="navigation"
      >{children}</nav>
    )
  }
}

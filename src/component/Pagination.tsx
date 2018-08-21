import * as classnames from 'classnames'
import * as React from 'react'

interface PaginationLinkProps {
  isCurrent?: boolean
}

class PaginationEllipsis extends React.Component {
  render() {
    return (
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
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

    const className = classnames('pagination-link', {
      'is-current': isCurrent,
    })

    return (
      <li>
        <a className={className} {...props}>{this.props.children}</a>
      </li>
    )
  }
}

class PaginationList extends React.Component {
  render() {
    return (
      <ul className="pagination-list">{this.props.children}</ul>
    )
  }
}

class PaginationNext extends React.Component {
  render() {
    return (
      <a className="pagination-next">{this.props.children}</a>
    )
  }
}

class PaginationPrevious extends React.Component {
  render() {
    return (
      <a className="pagination-previous">{this.props.children}</a>
    )
  }
}

export default class Pagination extends React.Component {
  static Ellipsis = PaginationEllipsis
  static Link = PaginationLink
  static List = PaginationList
  static Next = PaginationNext
  static Previous = PaginationPrevious

  render() {
    return (
      <nav className="pagination" role="navigation"aria-label="pagination">{this.props.children}</nav>
    )
  }
}

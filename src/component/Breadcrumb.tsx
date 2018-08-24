import classnames from 'classnames'
import * as React from 'react'

interface Props {
  isCentered?: boolean
}

export default class Breadcrumb extends React.Component<Props> {
  render() {
    const {
      isCentered,
    } = this.props

    const className = classnames('breadcrumb', {
      'is-centered': isCentered,
    })

    return (
      <nav
        aria-label="breadcrumbs"
        className={className}
      >
        <ul>{this.props.children}</ul>
      </nav>
    )
  }
}

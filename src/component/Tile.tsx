import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isAncestor?: boolean
  isChild?: boolean
  isParent?: boolean
}

export default class Tile extends React.Component<Props> {
  render() {
    const {
      isAncestor,
      isChild,
      isParent,
    } = this.props

    const className = classname(['tile'], {
      'is-ancestor': isAncestor,
      'is-child': isChild,
      'is-parent': isParent,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

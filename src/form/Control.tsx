import * as classname from 'classname'
import * as React from 'react'

interface Props {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
}

export default class Control extends React.Component<Props> {
  public render() {
    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded
    } = this.props

    const className = classname(['control'], {
      'has-icons-left': hasIconsLeft,
      'has-icons-right': hasIconsRight,
      'is-expanded': isExpanded
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

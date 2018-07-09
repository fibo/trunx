import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isLarge?: boolean
  isMedium?: boolean
}

export default class Section extends React.Component<Props> {
  public render() {
    const {
      isLarge,
      isMedium,
    } = this.props

    const className = classname(['section'], {
      'is-large': isLarge,
      'is-medium': isMedium,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

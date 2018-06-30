import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

export default class Content extends React.Component<Props> {
  public render() {
    const {
      isLarge,
      isMedium,
      isSmall
    } = this.props

    const className = classname(['content'], {
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-small': isSmall
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

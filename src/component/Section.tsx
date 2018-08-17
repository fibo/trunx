import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  isLarge?: boolean
  isMedium?: boolean
}

export default class Section extends React.Component<Props> {
  render() {
    const {
      isLarge,
      isMedium,
    } = this.props

    const className = classnames('section', {
      'is-large': isLarge,
      'is-medium': isMedium,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

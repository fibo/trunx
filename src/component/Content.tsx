import * as classname from 'classname'
import * as React from 'react'

interface Props {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

export default class Content extends React.Component<Props> {
  render() {
    const {
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
      isLarge,
      isMedium,
      isSmall
    } = this.props

    const className = classname(['content'], {
      'has-text-centered': hasTextCentered,
      'has-text-justified': hasTextJustified,
      'has-text-left': hasTextLeft,
      'has-text-right': hasTextRight,
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-small': isSmall
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

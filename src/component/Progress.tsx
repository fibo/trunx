import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isDanger?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLink?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  max: number
  value: number
}

export default class Progress extends React.Component<Props> {
  render() {
    const {
      isDanger,
      isInfo,
      isLarge,
      isLink,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      max,
      value
    } = this.props

    const className = classname(['tag'], {
      'is-danger': isDanger,
      'is-info': isInfo,
      'is-large': isLarge,
      'is-link': isLink,
      'is-medium': isMedium,
      'is-primary': isPrimary,
      'is-small': isSmall,
      'is-success': isSuccess,
      'is-warning': isWarning
    })

    return (
      <progress
        className={className}
        max={max}
        value={value}
      >
        {this.props.children}
      </progress>
    )
  }
}

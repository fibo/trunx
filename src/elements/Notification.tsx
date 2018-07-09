import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isDanger?: boolean
  isLink?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export default class Notification extends React.Component<Props> {
  render() {
    const {
      isDanger,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning
    } = this.props

    const className = classname(['notification'], {
      'is-danger': isDanger,
      'is-info': isInfo,
      'is-link': isLink,
      'is-primary': isPrimary,
      'is-success': isSuccess,
      'is-warning': isWarning
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

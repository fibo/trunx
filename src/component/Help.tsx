import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isDanger?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export default class Help extends React.Component<Props> {
  render() {
    const {
      isDanger,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning
    } = this.props

    const className = classname(['help'], {
      'is-danger': isDanger,
      'is-info': isInfo,
      'is-primary': isPrimary,
      'is-success': isSuccess,
      'is-warning': isWarning
    })

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}

import React, { Component } from 'react'

import classname from 'classname'

export default class Notification extends Component {
  render () {
    const {
      isDanger,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning
    } = this.props

    return (
      <div
        className={classname(['notification'], {
          'is-danger': isDanger,
          'is-link': isLink,
          'is-info': isInfo,
          'is-primary': isPrimary,
          'is-success': isSuccess,
          'is-warning': isWarning
        })}
      >{this.props.children}</div>
    )
  }
}

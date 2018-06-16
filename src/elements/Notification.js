import React, { Component } from 'react'

export default class Notification extends Component {
  render () {
    const {
      children
    } = this.props

    return (
      <div className='notification'>{children}</div>
    )
  }
}

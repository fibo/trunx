import React, { Component } from 'react'

export default class Button extends Component {
  render () {
    const {
      children
    } = this.props

    return (
      <button className='button'>{children}</button>
    )
  }
}

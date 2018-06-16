import React, { Component } from 'react'

export default class Delete extends Component {
  render () {
    const {
      onClick
    } = this.props

    return (
      <button
        className='delete'
        onClick={onClick}
      />
    )
  }
}

Delete.defaultProps = {
  onClick: Function.prototype
}

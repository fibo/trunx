import React, { Component } from 'react'

export default class Title extends Component {
  render () {
    return (
      <p className='title'>this.props.children</p>
    )
  }
}

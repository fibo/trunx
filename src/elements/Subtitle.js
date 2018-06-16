import React, { Component } from 'react'

export default class Subtitle extends Component {
  render () {
    return (
      <p className='subtitle'>this.props.children</p>
    )
  }
}

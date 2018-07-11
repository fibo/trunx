import * as React from 'react'

export default class Box extends React.Component {
  render() {
    return (
      <div className="box">{this.props.children}</div>
    )
  }
}

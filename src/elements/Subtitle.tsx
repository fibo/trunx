import * as React from 'react'

export default class Subtitle extends React.Component {
  public render() {
    return (
      <p className="subtitle">{this.props.children}</p>
    )
  }
}

import * as React from 'react'

export default class Title extends React.Component<{}, {}> {
  public render() {
    return (
      <p className="title">this.props.children</p>
    )
  }
}

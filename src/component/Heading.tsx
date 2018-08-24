import * as React from "react"

export default class Heading extends React.Component {
  render() {
    return (
      <p className="heading">{this.props.children}</p>
    )
  }
}

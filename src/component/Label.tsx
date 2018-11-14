import * as React from "react"

export default class Label extends React.Component {
  render() {
    return (
      <label className="label">{this.props.children}</label>
    )
  }
}

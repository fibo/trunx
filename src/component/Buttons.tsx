import * as React from "react"

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">{this.props.children}</div>
    )
  }
}

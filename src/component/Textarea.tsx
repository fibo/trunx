import * as React from "react"

export default class Textarea extends React.Component {
  render() {
    return (
      <textarea className="textarea" {...this.props} />
    )
  }
}

import * as classnames from "classnames"
import * as React from "react"

interface IUlProps extends React.HTMLAttributes<HTMLUListElement> {}

export default class Ul extends React.Component<IUlProps> {
  render() {
    const {
      ...props
    } = this.props

    return (
      <ul {...props}>{this.props.children}</ul>
    )
  }
}

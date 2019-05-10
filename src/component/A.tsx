import * as classnames from "classnames"
import * as React from "react"

interface IAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default class A extends React.Component<IAProps> {
  render() {
    const {
      ...props
    } = this.props

    return (
      <a {...props}>{this.props.children}</a>
    )
  }
}

import * as React from "react"

interface IUlProps extends React.HTMLAttributes<HTMLUListElement> {}

export default class Ul extends React.Component<IUlProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <ul {...props} className={className}>{children}</ul>
    )
  }
}

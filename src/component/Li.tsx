import * as classnames from "classnames"
import * as React from "react"

interface ILiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}

export default class Li extends React.Component<ILiProps> {
  render() {
    const {
      children,
      isActive,
      ...props
    } = this.props

    const className = classnames(
      {
        "is-active": isActive,
      },
    )

    return (
      <li {...props} className={className}>{children}</li>
    )
  }
}

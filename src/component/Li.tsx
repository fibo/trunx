import * as classnames from "classnames"
import * as React from "react"

interface ILiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}

export default class Li extends React.Component<ILiProps> {
  render() {
    const {
      children,
      className,
      isActive,
      ...props
    } = this.props

    return (
      <li
        className={classnames(
          className,
          {
            "is-active": isActive,
          },
        )}
        {...props}
      >{children}</li>
    )
  }
}

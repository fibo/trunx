import * as classnames from "classnames"
import * as React from "react"

interface IContainerProps {
  children?: React.ReactNode
  className?: string
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export default class Container extends React.Component<IContainerProps> {
  render() {
    const {
      children,
      className,
      isFluid,
      isFullhd,
      isWidescreen,
    } = this.props

    return (
      <div
        className={classnames(
          "container",
          className,
          {
            "is-fluid": isFluid,
            "is-fullhd": isFullhd,
            "is-widescreen": isWidescreen,
          },
        )}
      >{children}</div>
    )
  }
}

import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IDeleteProps extends ISizeProps {
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default class Delete extends React.Component<IDeleteProps> {
  render() {
    const {
      className,
      onClick,
    } = this.props

    return (
      <button aria-label="delete"
        className={classnames(
          className,
          "delete",
          className,
          sizePropsToClassnames(this.props),
        )}
        onClick={onClick}
      />
    )
  }
}

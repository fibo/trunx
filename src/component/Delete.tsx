import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IDeleteProps extends ISizeProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class Delete extends React.Component<IDeleteProps> {
  render() {
    const {
      onClick,
    } = this.props

    const className = classnames("delete",
      sizePropsToClassnames(this.props),
    )

    return (
      <button aria-label="delete" className={className} onClick={onClick}/>
    )
  }
}

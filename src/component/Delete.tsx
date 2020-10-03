import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  extractModifiersProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IDeleteProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
                               ISizeProps {
  children?: React.ReactNode
  className?: string
}

export default class Delete extends React.Component<IDeleteProps> {
  render() {
    const [{
      className,
      ...props
    }, modifiersProps] = extractModifiersProps(this.props)

    return (
      <button
        className={classnames(
          className,
          "delete",
          className,
          sizePropsToClassnames(modifiersProps),
        )}
        {...props}
      />
    )
  }
}

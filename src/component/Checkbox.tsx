import * as classnames from "classnames"
import * as React from "react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

import { bulmaClassName } from "./classNames"

export class Checkbox extends React.Component<CheckboxProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <label
        className={classnames(
          bulmaClassName.checkbox
          className,
        )}
      >
        <input
          type="checkbox"
          {...props}
        />

        {" "/* adding a space looks better*/}

        {children}
      </label>
    )
  }
}

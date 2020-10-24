import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from "./classNames"

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export class Radio extends React.Component<RadioProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <label
        className={classnames(bulmaClassName.radio, className)}
      >
        <input
          {...props}
          type="radio"
        />

        {children}
      </label>
    )
  }
}

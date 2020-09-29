import * as classnames from "classnames"
import * as React from "react"

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <label
        className={classnames(
          "checkbox",
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

import * as React from "react"

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const {
      children,
      ...props
    } = this.props

    return (
      <label className="checkbox">
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

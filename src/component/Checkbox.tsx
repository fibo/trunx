import * as React from "react"

interface ICheckboxProps {
  disabled?: boolean
}

export default class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const {
      disabled,
    } = this.props

    return (
      <label className="checkbox">
        <input
          disabled={disabled}
          type="checkbox"
        />

        {" "/* adding a space looks better*/}

        {this.props.children}
      </label>
    )
  }
}

import * as React from "react"

interface ICheckboxProps {
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
}

export default class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const {
      disabled,
      inputRef,
    } = this.props

    return (
      <label className="checkbox">
        <input
          disabled={disabled}
          ref={inputRef}
          type="checkbox"
        />

        {" "/* adding a space looks better*/}

        {this.props.children}
      </label>
    )
  }
}

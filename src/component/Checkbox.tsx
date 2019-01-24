import * as React from "react"

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export default class Checkbox extends React.Component<ICheckboxProps> {
  render() {
    const {
      children,
      inputRef,
      ...props
    } = this.props

    return (
      <label className="checkbox">
        <input
          ref={inputRef}
          type="checkbox"
          {...props}
        />

        {" "/* adding a space looks better*/}

        {children}
      </label>
    )
  }
}

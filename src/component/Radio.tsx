import * as React from "react"

interface IRadioProps {
  checked?: boolean
  disabled?: boolean
  name: string
}

export default class Radio extends React.Component<IRadioProps> {
  render() {
    const {
      checked,
      disabled,
      name,
    } = this.props

    return (
      <label className="radio">
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          name={name}
        />

        {" "/* adding a space looks better*/}

        {this.props.children}
      </label>
    )
  }
}

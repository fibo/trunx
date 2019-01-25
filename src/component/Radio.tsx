import * as React from "react"

interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export default class Radio extends React.Component<IRadioProps> {
  render() {
    const {
      inputRef,
      ...props
    } = this.props

    return (
      <label className="radio">
        <input {...props} type="radio"/>

        {" "/* adding a space looks better*/}

        {this.props.children}
      </label>
    )
  }
}

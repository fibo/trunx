import * as classnames from "classnames"
import * as React from "react"

interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.RefObject<HTMLInputElement>
}

export default class Radio extends React.Component<IRadioProps> {
  render() {
    const {
      children,
      className,
      inputRef,
      ...props
    } = this.props

    return (
      <label
        className={classnames("radio", className)}
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

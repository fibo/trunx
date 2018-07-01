import * as React from 'react'

interface Props {
  disabled?: boolean
}

export default class Checkbox extends React.Component<Props> {
  public render() {
    const {
      disabled
    } = this.props

    return (
      <label
        className="checkbox"
      >
        <input
          disabled={disabled}
          type="checkbox"
        />
        {this.props.children}
      </label>
    )
  }
}

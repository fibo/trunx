import * as React from 'react'

interface Props {
  disabled?: boolean
}

export default class Checkbox extends React.Component<Props> {
  render() {
    const {
      disabled
    } = this.props

    return (
      <label className="checkbox">
        <input
          disabled={disabled}
          type="checkbox"
        />

        {' '/* adding a space looks better*/}

        {this.props.children}
      </label>
    )
  }
}

import * as classname from 'classname'
import * as React from 'react'

interface Props {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  label?: string
}

export default class Field extends React.Component<Props> {
  public render() {
    const {
      hasAddons,
      hasAddonsCentered,
      label
    } = this.props

    const className = classname(['field'], {
      'has-addons': hasAddons,
      'has-addons-centered': hasAddonsCentered
    })

    return (
      <div className={className}>
        {label && <label className="label">{label}</label>}
        {this.props.children}
      </div>
    )
  }
}

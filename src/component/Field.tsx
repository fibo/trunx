import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  label?: string
}

export default class Field extends React.Component<Props> {
  render() {
    const {
      hasAddons,
      hasAddonsCentered,
      isGrouped,
      isGroupedMultiline,
      label,
    } = this.props

    const className = classnames('field', {
      'has-addons': hasAddons,
      'has-addons-centered': hasAddonsCentered,
      'is-grouped': isGrouped,
      'is-grouped-multiline': isGroupedMultiline,
    })

    return (
      <div className={className}>
        {label && <label className="label">{label}</label>}

        {this.props.children}
      </div>
    )
  }
}

import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  hasAddons?: boolean
}

export default class Tags extends React.Component<Props> {
  render() {
    const {
      hasAddons,
    } = this.props

    const className = classnames('tags', {
      'has-addons': hasAddons,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

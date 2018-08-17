import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export default class Container extends React.Component<Props> {
  render() {
    const {
      isFluid,
      isFullhd,
      isWidescreen,
    } = this.props

    const className = classnames('container', {
      'is-fluid': isFluid,
      'is-fullhd': isFullhd,
      'is-widescreen': isWidescreen,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

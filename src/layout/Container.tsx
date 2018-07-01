import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}

export default class Container extends React.Component<Props> {
  public render() {
    const {
      isFluid,
      isFullhd,
      isWidescreen,
    } = this.props

    const className = classname(['container'], {
      'is-fluid': isFluid,
      'is-fullhd': isFullhd,
      'is-widescreen': isWidescreen,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

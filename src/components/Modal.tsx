import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isActive?: boolean
}

export default class Modal extends React.Component<Props> {
  public render() {
    const {
      isActive
    } = this.props

    const className = classname(['modal'], {
      'is-active': isActive,
    })

    return (
      <div className={className}>
        <div className="modal-background" />
        {this.props.children}
      </div>
    )
  }
}

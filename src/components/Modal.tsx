import * as React from 'react'

export default class Modal extends React.Component {
  public render() {
    return (
      <div className="modal">
        <div className="modal-background" />
        this.props.children
      </div>
    )
  }
}

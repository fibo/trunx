import * as React from 'react'

export default class ModalCardHead extends React.Component {
  public render() {
    return (
      <header className="modal-card-head">
        {this.props.children}
      </header>
    )
  }
}

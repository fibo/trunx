import * as React from 'react'

export default class ModalCard extends React.Component {
  public render() {
    return (
      <div className="modal-card">
        {this.props.children}
      </div>
    )
  }
}

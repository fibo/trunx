import * as React from 'react'

export default class ModalContent extends React.Component {
  public render() {
    return (
      <div className="modal-content">this.props.children</div>
    )
  }
}

import * as React from 'react'

export default class ModalCardFoot extends React.Component {
  public render() {
    return (
      <footer className="modal-card-foot">
        {this.props.children}
      </footer>
    )
  }
}

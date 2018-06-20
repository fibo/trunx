import * as React from 'react'

export default class ModalCardBody extends React.Component {
  public render() {
    return (
      <section className="modal-card-body">
        {this.props.children}
      </section>
    )
  }
}

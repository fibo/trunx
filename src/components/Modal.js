import React, { Component } from 'react'

import classname from 'classname'

class Modal extends Component {
  render () {
    return (
      <div className='modal'>
        <div className='modal-background' />
        this.props.children
      </div>
    )
  }
}

class ModalCard extends Component {
  render () {
    return (
      <div className='modal-card'>this.props.children</div>
    )
  }
}

Modal.Card = ModalCard

class ModalCardBody extends Component {
  render () {
    return (
      <section className='modal-card-body'>this.props.children</section>
    )
  }
}

Modal.Card.Body = ModalCardBody

class ModalCardFoot extends Component {
  render () {
    return (
      <footer className='modal-card-foot'>this.props.children</footer>
    )
  }
}

Modal.Card.Foot = ModalCardFoot

class ModalCardHead extends Component {
  render () {
    return (
      <header className='modal-card-head'>this.props.children</header>
    )
  }
}

Modal.Card.Head = ModalCardHead

class ModalClose extends Component {
  render () {
    const {
      isLarge
    } = this.props

    return (
      <button
        aria-label='close'
        className={classname(['modal-close'], { 'is-large': isLarge })}
      />
    )
  }
}

Modal.Close = ModalClose

class ModalContent extends Component {
  render () {
    return (
      <div className='modal-content'>this.props.children</div>
    )
  }
}

Modal.Content = ModalContent

export default Modal

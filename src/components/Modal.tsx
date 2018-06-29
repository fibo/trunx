import * as classname from 'classname'
import * as React from 'react'

interface ModalProps {
  isActive?: boolean
}

interface ModalCloseProps {
  isLarge?: boolean
}

class ModalCardBody extends React.Component {
  public render() {
    return (
      <section className="modal-card-body">
        {this.props.children}
      </section>
    )
  }
}

class ModalCardFoot extends React.Component {
  public render() {
    return (
      <footer className="modal-card-foot">
        {this.props.children}
      </footer>
    )
  }
}

class ModalCardHead extends React.Component {
  public render() {
    return (
      <header className="modal-card-head">
        {this.props.children}
      </header>
    )
  }
}

class ModalCardTitle extends React.Component {
  public render() {
    return (
      <p className="modal-card-title">
        {this.props.children}
      </p>
    )
  }
}

class ModalCard extends React.Component {
  public static Body = ModalCardBody
  public static Foot = ModalCardFoot
  public static Head = ModalCardHead
  public static Title = ModalCardTitle

  public render() {
    return (
      <div className="modal-card">
        {this.props.children}
      </div>
    )
  }
}

class ModalClose extends React.Component<ModalCloseProps> {
  public render() {
    const {
      isLarge
    } = this.props

    const className = classname(['modal-close'], {
      'is-large': isLarge,
    })

    return (
      <button
        aria-label="close"
        className={className}
      />
    )
  }
}

class ModalContent extends React.Component {
  public render() {
    return (
      <div className="modal-content">
        {this.props.children}
      </div>
    )
  }
}

export default class Modal extends React.Component<ModalProps> {
  public static Card = ModalCard
  public static Close = ModalClose
  public static Content = ModalContent

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

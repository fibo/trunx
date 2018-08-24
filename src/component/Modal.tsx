import * as classnames from "classnames"
import * as React from "react"

interface IModalProps {
  isActive?: boolean
}

interface IModalBackgroundProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

interface IModalCloseProps {
  isLarge?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

class ModalCardBody extends React.Component {
  render() {
    return (
      <section className="modal-card-body">{this.props.children}</section>
    )
  }
}

class ModalCardFoot extends React.Component {
  render() {
    return (
      <footer className="modal-card-foot">{this.props.children}</footer>
    )
  }
}

class ModalCardHead extends React.Component {
  render() {
    return (
      <header className="modal-card-head">{this.props.children}</header>
    )
  }
}

class ModalCardTitle extends React.Component {
  render() {
    return (
      <p className="modal-card-title">{this.props.children}</p>
    )
  }
}

class ModalBackground extends React.Component<IModalBackgroundProps> {
  render() {
    const {
      onClick
    } = this.props

    return (
      <div className="modal-background" onClick={onClick} />
    )
  }
}

class ModalCard extends React.Component {
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Head = ModalCardHead
  static Title = ModalCardTitle

  render() {
    return (
      <div className="modal-card">{this.props.children}</div>
    )
  }
}

class ModalClose extends React.Component<IModalCloseProps> {
  render() {
    const {
      isLarge,
      onClick,
    } = this.props

    const className = classnames("modal-close", {
      "is-large": isLarge,
    })

    return (
      <button
        aria-label="close"
        className={className}
        onClick={onClick}
      />
    )
  }
}

class ModalContent extends React.Component {
  render() {
    return (
      <div className="modal-content">
        {this.props.children}
      </div>
    )
  }
}

export default class Modal extends React.Component<IModalProps> {
  static Background = ModalBackground
  static Card = ModalCard
  static Close = ModalClose
  static Content = ModalContent

  render() {
    const {
      isActive
    } = this.props

    const className = classnames("modal", {
      "is-active": isActive,
    })

    return (
      <div className={className}>
        {this.props.children}
      </div>
    )
  }
}

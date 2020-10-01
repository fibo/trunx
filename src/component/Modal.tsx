import * as classnames from "classnames"
import * as React from "react"

interface IModalProps {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}

interface IModalBackgroundProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

interface IModalCardProps {
  cthildren?: React.ReactNode
  className?: string
}

interface IModalCardBodyProps {
  children?: React.ReactNode
  className?: string
}

interface IModalCardFootProps {
  children?: React.ReactNode
  className?: string
}

interface IModalCardHeadProps {
  children?: React.ReactNode
  className?: string
}

interface IModalCardTitleProps {
  children?: React.ReactNode
  className?: string
}

interface IModalCloseProps {
  className?: string
  isLarge?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface IModalContentProps {
  children?: React.ReactNode
  className?: string
}

class ModalCardBody extends React.Component<IModalCardBodyProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <section
        className={classnames(
          "modal-card-body",
          className,
        )}
      >{children}</section>
    )
  }
}

class ModalCardFoot extends React.Component<IModalCardFootProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <footer
        className={classnames(
          "modal-card-foot",
          className,
        )}
      >{children}</footer>
    )
  }
}

class ModalCardHead extends React.Component<IModalCardHeadProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <header
        className={classnames(
          "modal-card-head",
          className,
        )}
      >{children}</header>
    )
  }
}

class ModalCardTitle extends React.Component<IModalCardTitleProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <p
        className={classnames(
          "modal-card-title",
          className,
        )}
      >{children}</p>
    )
  }
}

class ModalBackground extends React.Component<IModalBackgroundProps> {
  render() {
    const {
      className,
      onClick
    } = this.props

    return (
      <div
        className={classnames(
          "modal-background",
          className,
        )}
        onClick={onClick}
      />
    )
  }
}

class ModalCard extends React.Component<IModalCardProps> {
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Head = ModalCardHead
  static Title = ModalCardTitle

  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "modal-card",
          className,
        )}
      >{children}</div>
    )
  }
}

class ModalClose extends React.Component<IModalCloseProps> {
  render() {
    const {
      className,
      isLarge,
      onClick,
    } = this.props

    return (
      <button
        aria-label="close"
        className={classnames(
          "modal-close",
          className,
          {
            "is-large": isLarge,
          }
        )}
        onClick={onClick}
      />
    )
  }
}

class ModalContent extends React.Component<IModalContentProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "modal-content",
          className,
        )}
      >{children}</div>
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
      className,
      children,
      isActive,
    } = this.props

    return (
      <div
        className={classnames(
          "modal",
          className,
          {
            "is-active": isActive,
          }
        )}
      >{children}</div>
    )
  }
}

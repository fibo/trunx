import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from './classNames'
import {
  renderDiv,
  renderHeader,
} from './commonRenders'

interface IModalProps {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
}

interface IModalBackgroundProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

interface IModalCardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IModalCardBodyProps extends React.HTMLAttributes<HTMLElement> {}

interface IModalCardFootProps extends React.HTMLAttributes<HTMLElement> {}

interface IModalCardHeadProps extends React.HTMLAttributes<HTMLElement> {}

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
      ...props
    } = this.props

    return (
      <section
        className={classnames(
          bulmaClassName.modalCardBody,
          className,
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
}

class ModalCardFoot extends React.Component<IModalCardFootProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <footer
        className={classnames(bulmaClassName.modalCardFoot, className)}
        {...props}
      >
        {children}
      </footer>
    )
  }
}

class ModalCardHead extends React.Component<IModalCardHeadProps> {
  render() {
    return renderHeader(this.props, bulmaClassName.modalCardHead)
  }
}

class ModalCardTitle extends React.Component<IModalCardTitleProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "modal-card-title",
          className,
        )}
      >{children}</div>
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
    return renderDiv(this.props, bulmaClassName.modalCard)
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
          bulmaClassName.modalClose,
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

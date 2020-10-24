import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

interface ModalBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ModalCardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ModalCardBodyProps extends React.HTMLAttributes<HTMLElement> {}

interface ModalCardFootProps extends React.HTMLAttributes<HTMLElement> {}

interface ModalCardHeadProps extends React.HTMLAttributes<HTMLElement> {}

interface ModalCardTitleProps  extends React.HTMLAttributes<HTMLElement> {}

interface ModalCloseProps extends React.MouseEventHandler<HTMLButtonElement> {
  isLarge?: boolean
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

class ModalCardBody extends React.Component<ModalCardBodyProps> {
  render() {
return renderElement('section', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardFoot extends React.Component<ModalCardFootProps> {
  render() {
return renderElement('footer', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardHead extends React.Component<ModalCardHeadProps> {
  render() {
    return renderElement('header', this.props, bulmaClassName.modalCardHead)
  }
}

class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.modalCardTitle)
  }
}

class ModalBackground extends React.Component<ModalBackgroundProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.modalBackground)
  }
}

class ModalCard extends React.Component<ModalCardProps> {
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Head = ModalCardHead
  static Title = ModalCardTitle

  render() {
    return renderElement('div',this.props, bulmaClassName.modalCard)
  }
}

class ModalClose extends React.Component<ModalCloseProps> {
static defaultProps = {
'aria-label':"close"
}

  render() {
    const {
      isLarge,
...props
    } = this.props

return renderElement('button', props, bulmaClassName.modalClose, {isLarge})
  }
}

class ModalContent extends React.Component<ModalContentProps> {
  render() {
return renderElement('div', this.props, bulmaClassName.modalContent)
  }
}

export default class Modal extends React.Component<ModalProps> {
  static Background = ModalBackground
  static Card = ModalCard
  static Close = ModalClose
  static Content = ModalContent

  render() {
    const {
      isActive,
...props
    } = this.props

return renderElement('div', props, bulmaClassName.modal)
  }
}

import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export type ModalBackgroundProps = React.HTMLAttributes<HTMLDivElement>

export type ModalCardProps = React.HTMLAttributes<HTMLDivElement>

export type ModalCardBodyProps = React.HTMLAttributes<HTMLElement>

export type ModalCardFootProps = React.HTMLAttributes<HTMLElement>

export type ModalCardHeadProps = React.HTMLAttributes<HTMLElement>

export type ModalCardTitleProps = React.HTMLAttributes<HTMLElement>

interface ModalCloseProps extends React.MouseEventHandler<HTMLButtonElement> {
  isLarge?: boolean;
}

export type ModalContentProps = React.HTMLAttributes<HTMLDivElement>

class ModalCardBody extends React.Component<ModalCardBodyProps> {
  render (): React.ReactNode {
    return renderElement('section', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardFoot extends React.Component<ModalCardFootProps> {
  render (): React.ReactNode {
    return renderElement('footer', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardHead extends React.Component<ModalCardHeadProps> {
  render (): React.ReactNode {
    return renderElement('header', this.props, bulmaClassName.modalCardHead)
  }
}

class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.modalCardTitle)
  }
}

class ModalBackground extends React.Component<ModalBackgroundProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.modalBackground)
  }
}

class ModalCard extends React.Component<ModalCardProps> {
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Head = ModalCardHead
  static Title = ModalCardTitle

  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.modalCard)
  }
}

class ModalClose extends React.Component<ModalCloseProps> {
static defaultProps = {
  'aria-label': 'close'
}

render () : React.ReactNode{
  const {
    isLarge,
    ...props
  } = this.props

  return renderElement('button', props, bulmaClassName.modalClose, { isLarge })
}
}

class ModalContent extends React.Component<ModalContentProps> {
  render () : React.ReactNode{
    return renderElement('div', this.props, bulmaClassName.modalContent)
  }
}

export class Modal extends React.Component<ModalProps> {
  static Background = ModalBackground
  static Card = ModalCard
  static Close = ModalClose
  static Content = ModalContent

  render () : React.ReactNode{
    const {
      isActive,
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.modal)
  }
}

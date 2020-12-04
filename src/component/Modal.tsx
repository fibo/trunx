import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}

export type ModalBackgroundProps = React.HTMLAttributes<HTMLDivElement>

export type ModalCardProps = React.HTMLAttributes<HTMLDivElement>

export type ModalCardBodyProps = React.HTMLAttributes<HTMLElement>

export type ModalCardFootProps = React.HTMLAttributes<HTMLElement>

export type ModalCardHeadProps = React.HTMLAttributes<HTMLElement>

export type ModalCardTitleProps = React.HTMLAttributes<HTMLElement>

export interface ModalCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLarge?: boolean
}

export type ModalContentProps = React.HTMLAttributes<HTMLDivElement>

class ModalCardBody extends React.Component<ModalCardBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('section', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardFoot extends React.Component<ModalCardFootProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('footer', this.props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardHead extends React.Component<ModalCardHeadProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('header', this.props, bulmaClassName.modalCardHead)
  }
}

class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.modalCardTitle)
  }
}

class ModalBackground extends React.Component<ModalBackgroundProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.modalBackground)
  }
}

class ModalCard extends React.Component<ModalCardProps> {
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Head = ModalCardHead
  static Title = ModalCardTitle

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.modalCard)
  }
}

class ModalClose extends React.Component<ModalCloseProps> {
  static defaultProps = {
    'aria-label': 'close',
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isLarge, ...props } = this.props

    return renderElement('button', props, bulmaClassName.modalClose, {
      isLarge,
    })
  }
}

class ModalContent extends React.Component<ModalContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.modalContent)
  }
}

export class Modal extends React.Component<ModalProps> {
  static Background = ModalBackground
  static Card = ModalCard
  static Close = ModalClose
  static Content = ModalContent

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, ...props } = this.props

    return renderElement('div', props, bulmaClassName.modal, { isActive })
  }
}

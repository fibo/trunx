import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isActive?: boolean
}

export interface ModalBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCardBodyProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCardFootProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCardHeadProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCardTitleProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface ModalCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ErrorBoundaryProps {
  isLarge?: boolean
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class ModalCardBody extends React.Component<ModalCardBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('section', props, bulmaClassName.modalCardBody)
  }
}

class ModalCardFoot extends React.Component<ModalCardFootProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('footer', props, bulmaClassName.modalCardFoot)
  }
}

class ModalCardHead extends React.Component<ModalCardHeadProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('header', props, bulmaClassName.modalCardHead)
  }
}

class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.modalCardTitle)
  }
}

class ModalBackground extends React.Component<ModalBackgroundProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.modalBackground)
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
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.modalCard)
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
    const { fallbackUI, isLarge, ...props } = this.props

    if (this.state.hasError) return fallbackUI

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
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.modalContent)
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
    const { fallbackUI, isActive, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.modal, { isActive })
  }
}

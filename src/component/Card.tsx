import * as classnames from 'classnames'
import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { Image, ImageProps } from './Image'
import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
ErrorBoundaryProps,
    HelpersProps {}

export interface CardFooterItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
ErrorBoundaryProps,
    HelpersProps {}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLElement>,
ErrorBoundaryProps,
    HelpersProps {}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLElement>,
ErrorBoundaryProps,
    HelpersProps {}

export interface CardHeaderIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
ErrorBoundaryProps,
    HelpersProps {}

export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLElement>,
ErrorBoundaryProps,
    HelpersProps {
  isCentered?: boolean
}

export type CardImageProps = ImageProps

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
ErrorBoundaryProps,
    HelpersProps {}

class CardContent extends React.Component<CardContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.cardContent)
  }
}

class CardFooterItem extends React.Component<CardFooterItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, href, onClick, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    if (href || onClick) {
      return renderElement(
        'a',
        { href, onClick, ...props },
        bulmaClassName.cardFooterItem
      )
    } else {
      return renderElement('div', props, bulmaClassName.cardFooterItem)
    }
  }
}

class CardFooter extends React.Component<CardFooterProps> {
  static Item = CardFooterItem

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('footer', props, bulmaClassName.cardFooter)
  }
}

class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, href, onClick, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    if (href || onClick) {
      return renderElement(
        'a',
        { href, onClick, ...props },
        bulmaClassName.cardHeaderIcon
      )
    } else {
      return renderElement('div', props, bulmaClassName.cardHeaderIcon)
    }
  }
}

class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isCentered, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.cardHeaderTitle, {
      isCentered,
    })
  }
}

class CardHeader extends React.Component<CardHeaderProps> {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('header', props, bulmaClassName.cardHeader)
  }
}

class CardImage extends React.Component<CardImageProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { className, fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return (
      <div className={classnames(bulmaClassName.cardImage, className)}>
        <Image {...props} />
      </div>
    )
  }
}

export class Card extends React.Component<CardProps> {
  static Content = CardContent
  static Footer = CardFooter
  static Header = CardHeader
  static Image = CardImage

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.card)
  }
}

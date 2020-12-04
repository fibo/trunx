import * as classnames from 'classnames'
import * as React from 'react'

import { Image, ImageProps } from './Image'
import { bulmaClassName } from './classNames'
import {
  TextColorHelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'
import { renderElement } from './renderElement'

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}

export type CardFooterItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export type CardFooterProps = React.HTMLAttributes<HTMLElement>

export type CardHeaderProps = React.HTMLAttributes<HTMLElement>

export type CardHeaderIconProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLElement> {
  isCentered?: boolean
}

export type CardImageProps = ImageProps

export type CardProps = React.HTMLAttributes<HTMLDivElement>

class CardContent extends React.Component<CardContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      { children, className, ...props },
    ] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          bulmaClassName.cardContent,
          className,
          modifierPropsToClassnamesObject(modifiersProps)
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

class CardFooterItem extends React.Component<CardFooterItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { href, onClick, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    return renderElement('footer', this.props, bulmaClassName.cardFooter)
  }
}

class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { href, onClick, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    const { isCentered, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    return renderElement('header', this.props, bulmaClassName.cardHeader)
  }
}

class CardImage extends React.Component<CardImageProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { className, ...props } = this.props

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
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.card)
  }
}

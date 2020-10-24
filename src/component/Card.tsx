import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
} from "./classNames"
import {
  TextColorHelpersProps,
  extractModifiersProps,
modifierPropsToClassnamesObject,
} from "./modifiers"
import { renderElement } from './renderElement'

import { Image, ImageProps } from "./Image"

interface CardContentProps
extends React.HTMLAttributes<HTMLDivElement>,
        TextColorHelpersProps
{}

interface CardFooterItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {}

interface CardHeader extends React.HTMLAttributes<HTMLElement> {}

interface CardHeaderIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface CardHeaderTitleProps extends
  React.HTMLAttributes<HTMLElement>
  {
    isCentered?: boolean
  }

interface CardImageProps extends ImageProps {}

interface CardProps extends extends React.HTMLAttributes<HTMLDivElement> {}

class CardContent extends React.Component<CardContentProps> {
  render() {
    const [
      modifiersProps,
    {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

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
  render() {
    const {
      href,
      onClick,
      ...props
    } = this.props

    if (href || onClick) {
      return renderElement('a', { href, onClick, ...props }, bulmaClassName.cardFooterItem)
    } else {
      return renderElement('div', props, bulmaClassName.cardFooterItem)
    }
  }
}

class CardFooter extends React.Component<CardFooterProps> {
  static Item = CardFooterItem

  render() {
return renderElement('footer', this.props, bulmaClassName.cardFooter)
  }
}

class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  render() {
    const {
      href,
      onClick,
      ...props
    } = this.props

    if (href || onClick) {
      return renderElement('a', {href, onClick, ...props}, bulmaClassName.cardHeaderIcon)
    } else {
return renderElement('div', props, bulmaClassName.cardHeaderIcon)
    }
  }
}

class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  render() {
    const {
      isCentered,
      ...props
    } = this.props

return renderElement('div', props, bulmaClassName.cardHeaderTitle, { isCentered })
  }
}

class CardHeader extends React.Component<CardHeader> {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  render() {
    return renderElement('header', this.props, bulmaClassName.cardHeader)
  }
}

class CardImage extends React.Component<CardImageProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(bulmaClassName.cardImage, className)}
      >
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

  render() {
    return renderElement('div', this.props, bulmaClassName.card)
  }
}

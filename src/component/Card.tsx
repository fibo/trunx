import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
  BulmaClassModifiers,
} from "./classNames"
import {
  renderDiv,
  renderHeader
} from './commonRenders'
import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  extractModifiersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

import { Image, ImageProps } from "./Image"

interface ICardContentProps
extends React.HTMLAttributes<HTMLDivElement>,
        ITextColorHelpersProps
{}

interface ICardFooterItemProps {
  children?: React.ReactNode
  className?: string
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface ICardFooterProps extends React.HTMLAttributes<HTMLElement> {}

interface ICardHeader extends React.HTMLAttributes<HTMLElement> {}

interface ICardHeaderIconProps {
  children?: React.ReactNode
  className?: string
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface CardHeaderTitleModifiers extends Pick<BulmaClassModifiers, 'isCentered'>

export interface CardHeaderTitleProps extends
  React.HTMLAttributes<HTMLElement>
  CardHeaderTitleModifiers
{}

interface ICardImageProps extends ImageProps {
  className?: string
}

interface ICardProps extends IBackgroundColorHelpersProps,
                             React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

class CardContent extends React.Component<ICardContentProps> {
  render() {
    const [{
      textColorHelpersProps
    }, {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          bulmaClassNames.cardContent,
          className,
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

class CardFooterItem extends React.Component<ICardFooterItemProps> {
  render() {
    const {
      className: classNameProp,
      children,
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames(
      "card-footer-item",
      classNameProp,
    )

    if (href || onClick) {
      return (
        <Anchor
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
          {...props}
        >
          {children}
        </Anchor>
      )
    } else {
      return (
        <div
          className={className}
          {...props}
        >
          {children}
        </div>
      )
    }
  }
}

class CardFooter extends React.Component<ICardFooterProps> {
  static Item = CardFooterItem

  render() {
    const [{
      textColorHelpersProps,
    }, {
      children,
      className,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <footer
        className={classnames(
          "card-footer",
          className,
          textColorHelpersPropsToClassnames(textColorHelpersProps),
        )}
        {...props}
      >
        {children}
      </footer>
    )
  }
}

class CardHeaderIcon extends React.Component<ICardHeaderIconProps> {
  render() {
    const {
      children,
      className: classNameProp,
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames(
      bulmaClassName.cardHeaderIcon,
      classNameProp
    )

    if (href || onClick) {
      return (
        <Anchor
          {...props}
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {children}
        </Anchor>
      )
    } else {
      return (
        renderDiv({ className, ...props })
      )
    }
  }
}

class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  render() {
    const {
      children,
      className,
      isCentered,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          bulmaClassName.cardHeaderTitle
          className,
          {
            "is-centered": isCentered,
          },
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

class CardHeader extends React.Component<ICardHeader> {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  render() {
    return renderHeader(this.props, "card-header")
  }
}

class CardImage extends React.Component<ICardImageProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "card-image",
          className,
        )}
      ><Image {...props} /></div>
    )
  }
}

export default class Card extends React.Component<ICardProps> {
  static Content = CardContent
  static Footer = CardFooter
  static Header = CardHeader
  static Image = CardImage

  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "card",
          className,
          backgroundColorHelpersPropsToClassnames(props),
        )}
      >{children}</div>
    )
  }
}

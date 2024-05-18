import { FC, ImgHTMLAttributes, PropsWithChildren, ReactNode } from "react"
import {
  HeroClassArg,
  ImageClassArg,
  LabelClassArg,
  MessageClassArg,
  TitleClassArg,
  heroClass,
  imageClass,
  messageClass,
  titleClass,
} from "@trunx/bulma"

export type CardProps = Partial<{
  header: ReactNode
  image: ReactNode
  footer: ReactNode
}>

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  header,
  footer,
  image,
}) => (
  <div className="card">
    {header ? <header className="card-header">{header}</header> : null}
    {image ? <div className="card-image">{image}</div> : null}
    <div className="card-content">{children}</div>
    {footer ? <footer className="card-footer">{footer}</footer> : null}
  </div>
)

export type HeroProps = HeroClassArg &
  Partial<{
    head: ReactNode
    foot: ReactNode
    tag: "section" | "div"
  }>

export const Hero: FC<PropsWithChildren<HeroProps>> = ({
  color,
  head,
  foot,
  isFullheight,
  size,
  children,
  tag: Tag = "div",
  ...bools
}) => (
  <Tag
    className={heroClass({
      color,
      size,
      // For the fullheight hero to work, you will also need a hero-head and a hero-foot.
      isFullheight: isFullheight && Boolean(head) && Boolean(foot),
      ...bools,
    })}
  >
    {head ? <div className="hero-head">{head}</div> : null}
    <div className="hero-body">{children}</div>
    {foot ? <div className="hero-foot">{foot}</div> : null}
  </Tag>
)

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "className"
> &
  ImageClassArg

export const Image: FC<ImageProps> = ({ dimension, ratio, ...props }) => (
  <figure className={imageClass({ dimension, ratio })}>
    <img {...props} />
  </figure>
)

export type LabelProps = LabelClassArg

export type MessageProps = MessageClassArg &
  Partial<{
    header: ReactNode
    tag: "article" | "div"
  }>

export const Message: FC<PropsWithChildren<MessageProps>> = ({
  color,
  header,
  size,
  children,
  tag: Tag = "div",
}) => (
  <Tag className={messageClass({ color, size })}>
    {header && <div className="message-header">{header}</div>}
    <div className="message-body">{children}</div>
  </Tag>
)

export type TitleProps = Omit<TitleClassArg, "type"> &
  Partial<{
    tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }>

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  tag: Tag = "p",
  ...props
}) => <Tag className={titleClass(props)}>{children}</Tag>

export type SubtitleProps = Omit<TitleClassArg, "type">

export const Subtitle: FC<PropsWithChildren<SubtitleProps>> = ({
  children,
  ...props
}) => <p className={titleClass({ subtitle: true, ...props })}>{children}</p>

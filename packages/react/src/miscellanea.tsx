import {
  FC,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react"
import {
  ContainerClassArg,
  ContentClassArg,
  ControlClassArg,
  HelpClassArg,
  HeroClassArg,
  ImageClassArg,
  LabelClassArg,
  MessageClassArg,
  SectionClassArg,
  TitleClassArg,
  containerClass,
  contentClass,
  controlClass,
  helpClass,
  heroClass,
  imageClass,
  labelClass,
  messageClass,
  sectionClass,
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

export type ContainerProps = ContainerClassArg

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  ...props
}) => <div className={containerClass(props)}> {children} </div>

export type ContentProps = ContentClassArg

export const Content: FC<PropsWithChildren<ContentProps>> = ({
  children,
  hasText,
  size,
}) => <div className={contentClass({ hasText, size })}> {children} </div>

export type ControlProps = HTMLAttributes<HTMLDivElement> & ControlClassArg

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  children,
  className,
  hasIconsLeft,
  hasIconsRight,
  isExpanded,
  isLoading,
  ...props
}) => (
  <div
    className={controlClass({
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
    })}
    {...props}
  >
    {children}
  </div>
)

export type HelpProps = HelpClassArg

export const Help: FC<PropsWithChildren<HelpProps>> = ({ children, color }) => (
  <p className={helpClass({ color })}>{children}</p>
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

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  size,
}) => <label className={labelClass({ size })}>{children}</label>

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

export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
>

export const Radio: FC<PropsWithChildren<RadioProps>> = ({
  children,
  ...props
}) => (
  <label className="radio">
    <input type="radio" {...props} />
    {children}
  </label>
)

export type SectionProps = SectionClassArg

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  size,
}) => <section className={sectionClass({ size })}>{children}</section>

export type TitleProps = Omit<TitleClassArg, "type"> &
  Partial<{
    tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }>

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  tag: Tag = "p",
  ...props
}) => <Tag className={titleClass({ type: "title", ...props })}>{children}</Tag>

export type SubtitleProps = Omit<TitleClassArg, "type">

export const Subtitle: FC<PropsWithChildren<SubtitleProps>> = ({
  children,
  ...props
}) => <p className={titleClass({ type: "subtitle", ...props })}>{children}</p>

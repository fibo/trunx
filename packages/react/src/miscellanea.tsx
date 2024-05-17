import {
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react"
import {
  ContainerClassArg,
  ContentClassArg,
  ControlClassArg,
  FileClassArg,
  HelpClassArg,
  HeroClassArg,
  LabelClassArg,
  SectionClassArg,
  containerClass,
  contentClass,
  controlClass,
  fileClass,
  helpClass,
  heroClass,
  labelClass,
  sectionClass,
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

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type"
>

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({
  children,
  ...props
}) => (
  <label className="checkbox">
    <input type="checkbox" {...props} />
    {children}
  </label>
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

export type FileUploadProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> &
  FileClassArg &
  Partial<{
    cta: ReactNode
    hasName: ReactNode
  }>

export const FileUpload: FC<FileUploadProps> = ({
  className,
  cta,
  hasName,
  isBoxed,
  isFullwidth,
  isRight,
  ...props
}) => (
  <div className={fileClass({ isBoxed, isFullwidth, isRight })}>
    <label className="file-label">
      <input type="file-input" {...props} />
      {cta ? <span className="file-cta">{cta}</span> : null}
      {hasName ? <span className="file-name">{hasName}</span> : null}
    </label>
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
  }>

export const Hero: FC<PropsWithChildren<HeroProps>> = ({
  color,
  head,
  foot,
  isFullheight,
  size,
  children,
  ...bools
}) => (
  <section
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
  </section>
)

export type LabelProps = LabelClassArg

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  size,
}) => <label className={labelClass({ size })}>{children}</label>

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

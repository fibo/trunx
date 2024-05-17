import {
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react"
import {
  ContentClassArg,
  ControlClassArg,
  HelpClassArg,
  LabelClassArg,
  SectionClassArg,
  contentClass,
  controlClass,
  helpClass,
  labelClass,
  sectionClass,
} from "@trunx/bulma"

export type CardProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> &
  Partial<{
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

export type HelpProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  "className"
> &
  HelpClassArg

export const Help: FC<PropsWithChildren<HelpProps>> = ({ children, color }) => (
  <p className={helpClass({ color })}>{children}</p>
)

export type LabelProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "size" | "className"
> &
  LabelClassArg

export const Label: FC<PropsWithChildren<LabelProps>> = ({
  children,
  size,
  ...props
}) => (
  <label className={labelClass({ size })} {...props}>
    {" "}
    {children}{" "}
  </label>
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
    {" "}
    <input type="radio" {...props} /> {children}{" "}
  </label>
)

export type SectionProps = HTMLAttributes<HTMLElement> & SectionClassArg

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  size,
  ...props
}) => (
  <section className={sectionClass({ size })} {...props}>
    {" "}
    {children}{" "}
  </section>
)

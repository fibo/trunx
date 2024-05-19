import {
  FC,
  PropsWithChildren,
  HTMLAttributes,
  ProgressHTMLAttributes,
  ButtonHTMLAttributes,
  TableHTMLAttributes,
  AnchorHTMLAttributes,
  LiHTMLAttributes,
  ReactNode,
} from "react"
import { ClassnamesArg, classnames } from "./classnames.js"
import { ClassNames as Bulma } from "./bulma.js"

type BulmaProp = {
  bulma?: ClassnamesArg<Bulma>
}

// Size
//////////////////////////////////////////////////////////////////////

export type Size = "small" | "medium" | "large" | "normal"

export type SizeProp<S extends Size = Extract<Size, "small" | "medium" | "large">> = Partial<{ size: S }>

export type PluralSize = Extract<Size, "small" | "medium" | "large">

export type PluralSizeProp = SizeProp<PluralSize>

const are = (arg: PluralSize | undefined): Extract<Bulma, `are-${typeof arg}`> | undefined =>
  arg ? `are-${arg}` : undefined

// Colors
//////////////////////////////////////////////////////////////////////

export type MainColor = "danger" | "link" | "info" | "primary" | "success" | "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

export type Color = MainColor | ShadeColor | OtherColor

export type ColorProp<C extends Color = Color> = Partial<{ color: C }>

export type ColorVariant = "light" | "dark"

// Other helpers
//////////////////////////////////////////////////////////////////////

export type isActiveProp = Partial<{
  isActive: boolean
}>

export const is = (arg: Color | ColorVariant | Size | undefined): Extract<Bulma, `is-${typeof arg}`> | undefined =>
  arg ? `is-${arg}` : undefined

// Components
//////////////////////////////////////////////////////////////////////

export const A: FC<PropsWithChildren<AProps>> = ({ bulma, className, children, ...props }) => (
  <a className={classnames<string>(className, bulma)} {...props}>
    {children}
  </a>
)
export type AProps = AnchorHTMLAttributes<HTMLAnchorElement> & BulmaProp

export const Article: FC<PropsWithChildren<ArticleProps>> = ({ bulma, className, children, ...props }) => (
  <article className={classnames<string>(className, bulma)} {...props}>
    {children}
  </article>
)
export type ArticleProps = HTMLAttributes<HTMLElement> & BulmaProp

export const Breadcbrum: FC<PropsWithChildren<BreadcbrumProps> & BulmaProp> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <nav className={classnames<string>(className, "breadcbrum", bulma)} {...props}>
    {children}
  </nav>
)
export type BreadcbrumProps = HTMLAttributes<HTMLElement>

/**
 * The classic button, in different colors, sizes, and states.
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/button/)
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  isLoading,
  isFullwidth,
  isOutlined,
  color,
  isInverted,
  isRounded,
  size,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <button
    className={classnames<Bulma>(
      className as Bulma,
      "button",
      is(color),
      is(variant),
      is(size),
      {
        "is-fullwidth": isFullwidth,
        "is-loading": isLoading,
        "is-inverted": isInverted,
        "is-outlined": isOutlined,
        "is-rounded": isRounded,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </button>
)
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> &
  BulmaProp &
  ColorProp &
  SizeProp &
  Partial<{
    isLoading: boolean
    isInverted: boolean
    isFullwidth: boolean
    isOutlined: boolean
    isResponsive: boolean
    isRounded: boolean
    variant: ColorVariant
  }>

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({ size, bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "buttons", are(size), bulma)} {...props}>
    {children}
  </div>
)
export type ButtonsProps = HTMLAttributes<HTMLDivElement> & BulmaProp & PluralSizeProp

export const ButtonDelete: FC<ButtonDeleteProps> = ({ size, className, children, ...props }) => (
  <button className={classnames<Bulma>(className as Bulma, "delete", { "is-large": size === "large" })} {...props} />
)
export type ButtonDeleteProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeProp<"large">

export const Div: FC<PropsWithChildren<DivProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </div>
)
export type DivProps = HTMLAttributes<HTMLDivElement> & BulmaProp

export const Figure: FC<PropsWithChildren<FigureProps>> = ({ bulma, className, children, ...props }) => (
  <figure className={classnames<Bulma>(className as Bulma, "image", bulma)} {...props}>
    {children}
  </figure>
)
export type FigureProps = HTMLAttributes<HTMLElement> & BulmaProp

export const Footer: FC<PropsWithChildren<FooterProps>> = ({ bulma, className, children, ...props }) => (
  <footer className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </footer>
)
export type FooterProps = HTMLAttributes<HTMLElement> & BulmaProp

/**
 * Renders h1,h2,... h6 tag.
 *
 * @example
 *
 * ```ts
 * ;<Heading tag="h1"></Heading>
 * ```
 */
export const Heading: FC<PropsWithChildren<HeadingProps>> = ({ tag: Tag, bulma, className, children, ...props }) => (
  <Tag className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </Tag>
)
export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  BulmaProp & {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  }

export const Header: FC<PropsWithChildren<HeaderProps>> = ({ bulma, className, children, ...props }) => (
  <header className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </header>
)
export type HeaderProps = HTMLAttributes<HTMLElement> & BulmaProp

export const Icon: FC<PropsWithChildren<IconProps>> = ({ bulma, className, children, ...props }) => (
  <span className={classnames<Bulma>(className as Bulma, "icon", bulma)} {...props}>
    {children}
  </span>
)
export type IconProps = HTMLAttributes<HTMLSpanElement> & BulmaProp

export const Label: FC<PropsWithChildren<LabelProps>> = ({ bulma, className, children, ...props }) => (
  <label className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </label>
)
export type LabelProps = HTMLAttributes<HTMLLabelElement> & BulmaProp

export const Li: FC<PropsWithChildren<LiProps>> = ({ bulma, className, children, ...props }) => (
  <li className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </li>
)
export type LiProps = LiHTMLAttributes<HTMLLIElement> & BulmaProp

export const Menu: FC<PropsWithChildren<MenuProps>> = ({ bulma, className, children, ...props }) => (
  <aside className={classnames<Bulma>(className as Bulma, "menu", bulma)} {...props}>
    {children}
  </aside>
)
export type MenuProps = HTMLAttributes<HTMLElement> & BulmaProp

export const MenuLabel: FC<PropsWithChildren<MenuLabelProps>> = ({ bulma, className, children, ...props }) => (
  <p className={classnames<Bulma>(className as Bulma, "menu-label", bulma)} {...props}>
    {children}
  </p>
)
export type MenuLabelProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

export const MenuList: FC<PropsWithChildren<MenuListProps>> = ({ bulma, className, children, ...props }) => (
  <ul className={classnames<Bulma>(className as Bulma, "menu-list", bulma)} {...props}>
    {children}
  </ul>
)
export type MenuListProps = HTMLAttributes<HTMLUListElement> & BulmaProp

export const Message: FC<PropsWithChildren<MessageProps>> = ({ header, bulma, className, children, ...props }) => (
  <article className={classnames<Bulma>(className as Bulma, "message", bulma)} {...props}>
    {header ? <div className="message-header">{header}</div> : null}
    <div className="message-body">{children}</div>
  </article>
)
export type MessageProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  Partial<{
    header: ReactNode
  }>

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  noBackground,
  size,
  bulma,
  className,
  children,
  ...props
}) => (
  <div className={classnames<Bulma>(className as Bulma, "modal", is(size), bulma)} {...props}>
    {noBackground ? null : <div className="modal-background" />}
    {children}
  </div>
)
export type ModalProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    noBackground: boolean
  }>

export const ModalCard: FC<PropsWithChildren<ModalCardProps>> = ({ head, foot, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "modal-card")} {...props}>
    <div className="modal-card-head">{head}</div>
    {children}
    <div className="modal-card-foot"> {foot} </div>
  </div>
)
export type ModalCardProps = HTMLAttributes<HTMLDivElement> & {
  head: ReactNode
  foot: ReactNode
}

export const ModalClose: FC<ModalCloseProps> = ({ size, className, children, ...props }) => (
  <button className={classnames<Bulma>(className as Bulma, "modal-close", is(size))} {...props} />
)
export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeProp<"large">

export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "modal-content", bulma)} {...props}>
    {children}
  </div>
)
export type ModalContentProps = HTMLAttributes<HTMLDivElement> & BulmaProp

export const Nav: FC<PropsWithChildren<NavProps>> = ({ bulma, className, children, ...props }) => (
  <nav className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </nav>
)
export type NavProps = HTMLAttributes<HTMLElement> & BulmaProp

export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  color,
  role = "navigation",
  bulma,
  className,
  children,
  ...props
}) => (
  <nav className={classnames<Bulma>(className as Bulma, "navbar", is(color), bulma)} role={role} {...props}>
    {children}
  </nav>
)
export type NavbarProps = Omit<HTMLAttributes<HTMLElement>, "color"> & BulmaProp & ColorProp<MainColor | ShadeColor>

export const NavbarBurger: FC<NavbarBurgerProps> = ({ isActive, ...props }) => (
  <a
    className={classnames<Bulma>("navbar-burger", { "is-active": isActive })}
    role="button"
    aria-expanded={isActive ? "true" : "false"}
    {...props}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
)
export type NavbarBurgerProps = Omit<HTMLAttributes<HTMLElement>, "aria-label" | "className" | "role"> & isActiveProp

export const P: FC<PropsWithChildren<PProps>> = ({ bulma, className, children, ...props }) => (
  <p className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </p>
)
export type PProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

export const Progress: FC<PropsWithChildren<ProgressProps>> = ({ bulma, className, children, ...props }) => (
  <progress className={classnames<Bulma>(className as Bulma, "progress", bulma)} {...props}>
    {children}
  </progress>
)
export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & BulmaProp

export const Span: FC<PropsWithChildren<SpanProps>> = ({ bulma, className, children, ...props }) => (
  <span className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </span>
)
export type SpanProps = HTMLAttributes<HTMLSpanElement> & BulmaProp

export const Table: FC<PropsWithChildren<TableProps>> = ({ bulma, className, children, ...props }) => (
  <div className="table-container">
    <table className={classnames<Bulma>(className as Bulma, "table", bulma)} {...props}>
      {children}
    </table>
  </div>
)
export type TableProps = TableHTMLAttributes<HTMLTableElement> & BulmaProp

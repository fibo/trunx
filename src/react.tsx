import {
  FC,
  PropsWithChildren,
  HTMLAttributes,
  ProgressHTMLAttributes,
  ButtonHTMLAttributes,
  TableHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  InputHTMLAttributes,
} from "react"
import { ClassnamesArg, classnames } from "./classnames.js"
import { ClassNames as Bulma } from "./Bulma.js"

type BulmaProp = {
  bulma?: ClassnamesArg<Bulma>
}

// Size
//////////////////////////////////////////////////////////////////////

export type Size = "small" | "medium" | "large" | "normal"

export type SizeProp<S extends Size = Extract<Size, "small" | "medium" | "large">> = Partial<{ size: S }>

export type PluralSize = Extract<Size, "small" | "medium" | "large">

export type PluralSizeProp = SizeProp<PluralSize>

// Colors
//////////////////////////////////////////////////////////////////////

export type MainColor = "danger" | "link" | "info" | "primary" | "success" | "warning"

export type ShadeColor = "black" | "dark" | "light" | "white"

export type OtherColor = "text" | "ghost"

export type Color = MainColor | ShadeColor | OtherColor

export type ColorProp<C extends Color = Color> = Partial<{ color: C }>

export type ColorVariant = "light" | "dark"

export type ColorVariantProp<V extends ColorVariant = ColorVariant> = Partial<{ variant: V }>

// Helpers
//////////////////////////////////////////////////////////////////////

const are = (arg: PluralSize | undefined): Extract<Bulma, `are-${typeof arg}`> | undefined =>
  arg ? `are-${arg}` : undefined

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
 * @example
 *
 * ```tsx
 * <Button color="primary" variant="light" isLoading>Login</Button>
 * ```
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
  ColorVariantProp &
  SizeProp &
  Partial<{
    isLoading: boolean
    isInverted: boolean
    isFullwidth: boolean
    isOutlined: boolean
    isResponsive: boolean
    isRounded: boolean
  }>

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({ size, bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "buttons", are(size), bulma)} {...props}>
    {children}
  </div>
)
export type ButtonsProps = HTMLAttributes<HTMLDivElement> & BulmaProp & PluralSizeProp

export const ButtonDelete: FC<ButtonDeleteProps> = ({ size, className, children, ...props }) => (
  <button className={classnames<Bulma>(className as Bulma, "delete", is(size))} {...props} />
)
export type ButtonDeleteProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeProp<"large">

export const Cell: FC<PropsWithChildren<CellProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "cell", bulma)} {...props}>
    {children}
  </div>
)
export type CellProps = HTMLAttributes<HTMLDivElement> & BulmaProp

export const Checkbox: FC<PropsWithChildren<CheckboxProps>> = ({ children, ...props }) => (
  <label className="checkbox">
    <input type="checkbox" {...props} />
    {children}
  </label>
)
export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

export const Column: FC<PropsWithChildren<ColumnProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "column", bulma)} {...props}>
    {children}
  </div>
)
export type ColumnProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * The power of Flexbox in a simple interface.
 *
 * @see [bulma docs](https://bulma.io/documentation/columns/)
 */
export const Columns: FC<PropsWithChildren<ColumnsProps>> = ({
  isDesktop,
  isGapless,
  isMobile,
  isMultiline,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "columns",
      {
        "is-gapless": isGapless,
        "is-desktop": isDesktop,
        "is-mobile": isMobile,
        "is-multiline": isMultiline,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ColumnsProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isGapless: boolean
    isDesktop: boolean
    isMobile: boolean
    isMultiline: boolean
  }>

/**
 * A simple container to center your content horizontally.
 *
 * @example
 *
 * ```tsx
 * <Container isFluid>
 *   <Notification color="primary">
 *     This container is <strong>fluid</strong>
 *   </Notification>
 * </Container>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/container/)
 */
export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  isWidescreen,
  isFluid,
  isMaxDesktop,
  isMaxWidescreen,
  isFullhd,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<string>(
      className,
      "container",
      {
        "is-widescreen": isWidescreen,
        "is-fullhd": isFullhd,
        "is-fluid": isFluid,
        // Bulma generated types do not contain `is-max-desktop`.
        "is-max-desktop": isMaxDesktop,
        "is-max-widescreen": isMaxWidescreen,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isMaxDesktop: boolean
    isMaxWidescreen: boolean
    isWidescreen: boolean
    isFluid: boolean
    isFullhd: boolean
  }>

export const Control: FC<PropsWithChildren<ControlProps>> = ({
  hasIconsLeft,
  hasIconsRight,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "control",
      {
        "has-icons-left": hasIconsLeft,
        "has-icons-right": hasIconsRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type ControlProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    hasIconsLeft: boolean
    hasIconsRight: boolean
  }>

export const Div: FC<PropsWithChildren<DivProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </div>
)
export type DivProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * Form field.
 *
 * @example
 *
 * ```tsx
 * <Field>
 *   <Label>Name</Label>
 *   <Control>
 *     <Input placeholder="e.g Alex Smith" />
 *   </Control>
 * </Field>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/form/general/#form-field)
 */
export const Field: FC<PropsWithChildren<FieldProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "field", bulma)} {...props}>
    {children}
  </div>
)
export type FieldProps = HTMLAttributes<HTMLDivElement> & BulmaProp

export const Figure: FC<PropsWithChildren<FigureProps>> = ({ bulma, className, children, ...props }) => (
  <figure className={classnames<Bulma>(className as Bulma, "image", bulma)} {...props}>
    {children}
  </figure>
)
export type FigureProps = HTMLAttributes<HTMLElement> & BulmaProp

export const FixedGrid: FC<PropsWithChildren<FixedGridProps>> = ({
  hasAutoCount,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "fixed-grid",
      {
        "has-auto-count": hasAutoCount,
      },
      bulma,
    )}
    {...props}
  >
    <div className="grid">{children}</div>
  </div>
)
export type FixedGridProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    hasAutoCount: boolean
  }>

/** Renders footer tag with footer class. */
export const Footer: FC<PropsWithChildren<FooterProps>> = ({ bulma, className, children, ...props }) => (
  <footer className={classnames<Bulma>(className as Bulma, "footer", bulma)} {...props}>
    {children}
  </footer>
)
export type FooterProps = HTMLAttributes<HTMLElement> & BulmaProp

export const Grid: FC<PropsWithChildren<GridProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "grid", bulma)} {...props}>
    {children}
  </div>
)
export type GridProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * Renders h1,h2,... h6 tags.
 *
 * @example Create an h1 tag.
 *
 * ```ts
 * <Heading tag="h1"></Heading>
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

export const Help: FC<PropsWithChildren<HelpProps>> = ({ color, bulma, className, children, ...props }) => (
  <p className={classnames<Bulma>(className as Bulma, "help", is(color), bulma)} {...props}>
    {children}
  </p>
)
export type HelpProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp & ColorProp

export const Icon: FC<PropsWithChildren<IconProps>> = ({ bulma, className, children, ...props }) => (
  <span className={classnames<Bulma>(className as Bulma, "icon", bulma)} {...props}>
    {children}
  </span>
)
export type IconProps = HTMLAttributes<HTMLSpanElement> & BulmaProp

export const Input: FC<InputProps> = ({ bulma, className, color, size, ...props }) => (
  <input className={classnames<Bulma>(className as Bulma, "input", is(color), is(size), bulma)} {...props} />
)
export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & BulmaProp & ColorProp & SizeProp

/** Renders label tag with label class. */
export const Label: FC<PropsWithChildren<LabelProps>> = ({ bulma, className, children, ...props }) => (
  <label className={classnames<Bulma>(className as Bulma, "label", bulma)} {...props}>
    {children}
  </label>
)
export type LabelProps = HTMLAttributes<HTMLLabelElement> & BulmaProp

/**
 * A simple menu, for any type of vertical navigation.
 *
 * Renders aside tag with menu class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/menu/)
 */
export const Menu: FC<PropsWithChildren<MenuProps>> = ({ bulma, className, children, ...props }) => (
  <aside className={classnames<Bulma>(className as Bulma, "menu", bulma)} {...props}>
    {children}
  </aside>
)
export type MenuProps = HTMLAttributes<HTMLElement> & BulmaProp

/** Renders p tag with menu-label class. */
export const MenuLabel: FC<PropsWithChildren<MenuLabelProps>> = ({ bulma, className, children, ...props }) => (
  <p className={classnames<Bulma>(className as Bulma, "menu-label", bulma)} {...props}>
    {children}
  </p>
)
export type MenuLabelProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

/** Renders ul tag with menu-list class. */
export const MenuList: FC<PropsWithChildren<MenuListProps>> = ({ bulma, className, children, ...props }) => (
  <ul className={classnames<Bulma>(className as Bulma, "menu-list", bulma)} {...props}>
    {children}
  </ul>
)
export type MenuListProps = HTMLAttributes<HTMLUListElement> & BulmaProp

/**
 * Colored message blocks, to emphasize part of your page.
 *
 * Renders article tag with message class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/message/)
 */
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

/**
 * A classic modal overlay, in which you can include any content you want.
 *
 * Renders div tag with modal class.
 *
 * ```tsx
 * <Modal noBackground>
 *   <ModalContent>
 *     Content
 *   </ModalContent>
 *   <ModalClose />
 * </Modal>
 * ```
 * @see [bulma docs](https://bulma.io/documentation/components/modal/)
 */
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

/**
 * A modal with a head, a body and a foot.
 *
 * Renders div tag with modal-card class.
 *
 * @example
 *
 * ```tsx
 * <ModalCard
 *   head="Modal title"
 *   foot={<Buttons><Button>Ok</Button></Buttons>}
 * >
 *   Content ...
 * </ModalCard>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/modal/#modal-card)
 */
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

/** Renders button tag with modal-close class. */
export const ModalClose: FC<ModalCloseProps> = ({ size, className, ...props }) => (
  <button className={classnames<Bulma>(className as Bulma, "modal-close", is(size))} {...props} />
)
export type ModalCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & SizeProp<"large">

/** Renders div tag with modal-content class. */
export const ModalContent: FC<PropsWithChildren<ModalContentProps>> = ({ bulma, className, children, ...props }) => (
  <div className={classnames<Bulma>(className as Bulma, "modal-content", bulma)} {...props}>
    {children}
  </div>
)
export type ModalContentProps = HTMLAttributes<HTMLDivElement> & BulmaProp

/**
 * A responsive horizontal navbar that can support images, links, buttons, and dropdowns.
 *
 * Renders nav tag with navbar class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/)
 */
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

/**
 * The NavbarBrand is the left side of the navbar.
 *
 * Renders div tag with navbar-brand class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-brand)
 */
export const NavbarBrand: FC<PropsWithChildren> = ({ children }) => <div className="navbar-brand">{children}</div>

/**
 * The NavbarBurger is a hamburger menu that only appears on touch devices.
 *
 * Renders a tag with navbar-burger class.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-burger)
 */
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
export type NavbarBurgerProps = Omit<HTMLAttributes<HTMLElement>, "aria-label" | "className" | "role"> &
  Partial<{
    isActive: boolean
  }>

/** Renders hr tag with navbar-divider class. */
export const NavbarDivider: FC = () => <hr className="navbar-divider" />

export const NavbarDropdown: FC<PropsWithChildren<NavbarDropdownProps>> = ({
  isBoxed,
  isRight,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-dropdown",
      {
        "is-boxed": isBoxed,
        "is-right": isRight,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isBoxed: boolean
    isRight: boolean
  }>

export const NavbarDropdownMenu: FC<PropsWithChildren<NavbarDropdownMenuProps>> = ({
  hasDropdownUp,
  isActive,
  isHoverable,
  bulma,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-item",
      "has-dropdown",
      {
        "has-dropdown-up": hasDropdownUp,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </div>
)
export type NavbarDropdownMenuProps = HTMLAttributes<HTMLDivElement> &
  BulmaProp &
  Partial<{
    isActive: boolean
    hasDropdownUp: boolean
    isHoverable: boolean
  }>

export const NavbarEnd: FC<PropsWithChildren> = ({ children }) => <div className="navbar-end">{children}</div>

export const NavbarItem: FC<PropsWithChildren<NavbarItemProps>> = ({
  isSelected,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "navbar-item",
      {
        "is-selected": isSelected,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarItemProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isSelected: boolean
  }>

export const NavbarLink: FC<PropsWithChildren<NavbarLinkProps>> = ({
  isArrowless,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<string>(
      className,
      "navbar-link",
      {
        // Bulma generated types do not contain `is-arrowless`.
        "is-arrowless": isArrowless,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isArrowless: boolean
  }>

/**
 * The NavbarMenu is the counterpart of the NavbarBrand. As such, it must appear as a direct child of Navbar, as a sibling of NavbarBrand.
 *
 * @example
 *
 * ```tsx
 * <NavbarMenu>
 *   <NavbarStart>
 *     // Navbar items
 *   </NavbarStart>
 *   <NavbarEnd>
 *     // Navbar items
 *   </NavbarEnd>
 * </NavbarMenu>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/components/navbar/#navbar-menu)
 */
export const NavbarMenu: FC<PropsWithChildren<NavbarMenuProps>> = ({ isActive, children }) => (
  <div className={classnames<Bulma>("navbar-menu", { "is-active": isActive })}>{children}</div>
)
export type NavbarMenuProps = Partial<{
  isActive: boolean
}>

export const NavbarStart: FC<PropsWithChildren> = ({ children }) => <div className="navbar-start">{children}</div>

/**
 * Bold notification blocks, to alert your users of something.
 *
 * Renders div tag with notification class.
 *
 * @example
 *
 * ```tsx
 * <Notification color="info" variant="light">
 *   <ButtonDelete />
 *   Lorem ipsum...
 * </Notification>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/notification/)
 */
export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
  color,
  variant,
  bulma,
  className,
  children,
  ...props
}) => (
  <div className={classnames<Bulma>(className as Bulma, "notification", is(color), is(variant), bulma)} {...props}>
    {children}
  </div>
)
export type NotificationProps = HTMLAttributes<HTMLDivElement> & BulmaProp & ColorProp & ColorVariantProp<"light">

/**
 * Renders p tag.
 *
 * @example
 *
 * ```tsx
 * <P bulma="has-text-grey">Lorem ipsum...</P>
 * ```
 */
export const P: FC<PropsWithChildren<PProps>> = ({ bulma, className, children, ...props }) => (
  <p className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </p>
)
export type PProps = HTMLAttributes<HTMLParagraphElement> & BulmaProp

/**
 * A responsive, usable, and flexible pagination.
 *
 * @see [bulma docs](https://bulma.io/documentation/components/pagination/)
 */
export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  isCentered,
  isRight,
  size,
  role = "navigation",
  bulma,
  className,
  children,
  ...props
}) => (
  <nav
    className={classnames<Bulma>(
      className as Bulma,
      "pagination",
      is(size),
      {
        "is-centered": isCentered,
        "is-right": isRight,
      },
      bulma,
    )}
    role={role}
    {...props}
  >
    {children}
  </nav>
)
export type PaginationProps = HTMLAttributes<HTMLElement> &
  BulmaProp &
  SizeProp &
  Partial<{
    isCentered: boolean
    isRight: boolean
  }>

export const PaginationEllipsis: FC = () => <span className="pagination-ellipsis">&hellip;</span>

export const PaginationLink: FC<PropsWithChildren<PaginationLinkProps>> = ({
  isCurrent,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(className as Bulma, "pagination-link", { "is-current": isCurrent }, bulma)}
    {...props}
  >
    {children}
  </a>
)
export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isCurrent: boolean
  }>

export const PaginationList: FC<PropsWithChildren<PaginationListProps>> = ({
  bulma,
  className,
  children,
  ...props
}) => (
  <ul className={classnames<Bulma>(className as Bulma, "pagination-list", bulma)} {...props}>
    {children}
  </ul>
)
export type PaginationListProps = HTMLAttributes<HTMLUListElement> & BulmaProp

export const PaginationNext: FC<PropsWithChildren<PaginationNextProps>> = ({
  isDisabled,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "pagination-next",
      {
        "is-disabled": isDisabled,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationNextProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isDisabled: boolean
  }>

export const PaginationPrevious: FC<PropsWithChildren<PaginationPreviousProps>> = ({
  isDisabled,
  bulma,
  className,
  children,
  ...props
}) => (
  <a
    className={classnames<Bulma>(
      className as Bulma,
      "pagination-previous",
      {
        "is-disabled": isDisabled,
      },
      bulma,
    )}
    {...props}
  >
    {children}
  </a>
)
export type PaginationPreviousProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BulmaProp &
  Partial<{
    isDisabled: boolean
  }>

/**
 * Native HTML progress bars.
 *
 * @example
 *
 * ```tsx
 * <Progress color="primary" size="small" value="42" max="100">42%</Progress>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/elements/progress/)
 */
export const Progress: FC<PropsWithChildren<ProgressProps>> = ({ size, bulma, className, children, ...props }) => (
  <progress className={classnames<Bulma>(className as Bulma, "progress", is(size), bulma)} {...props}>
    {children}
  </progress>
)
export type ProgressProps = ProgressHTMLAttributes<HTMLProgressElement> & BulmaProp & SizeProp

export const Span: FC<PropsWithChildren<SpanProps>> = ({ bulma, className, children, ...props }) => (
  <span className={classnames<Bulma>(className as Bulma, bulma)} {...props}>
    {children}
  </span>
)
export type SpanProps = HTMLAttributes<HTMLSpanElement> & BulmaProp

/**
 * A simple container to divide your page into sections.
 *
 * @example
 *
 * ```tsx
 * <Section size="medium">
 *   <Heading tag="h2">Title</Heading>
 * </Section>
 * ```
 *
 * @see [bulma docs](https://bulma.io/documentation/layout/section/)
 */
export const Section: FC<PropsWithChildren<SectionProps>> = ({ size, bulma, className, children, ...props }) => (
  <section className={classnames<Bulma>(className as Bulma, "section", is(size), bulma)} {...props}>
    {children}
  </section>
)
export type SectionProps = HTMLAttributes<HTMLElement> & BulmaProp & SizeProp<"medium" | "large">

export const Table: FC<PropsWithChildren<TableProps>> = ({ bulma, className, children, ...props }) => (
  <div className="table-container">
    <table className={classnames<Bulma>(className as Bulma, "table", bulma)} {...props}>
      {children}
    </table>
  </div>
)
export type TableProps = TableHTMLAttributes<HTMLTableElement> & BulmaProp

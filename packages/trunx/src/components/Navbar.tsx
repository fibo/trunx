import {
  AnchorHTMLAttributes,
  Dispatch,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  SetStateAction,
} from "react"
import {BoolClassArg, ColorArg, MainColor, ShadeColor, boolClass, colorClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type NavbarProps = HTMLAttributes<HTMLElement> &
  ColorArg<MainColor | ShadeColor> &
  Pick<
    BoolClassArg,
    "isHoverable" | "isSpaced" | "isTransparent" | "hasShadow"
  >

export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  children,
  className,
  color,
  isTransparent,
  hasShadow,
  ...props
}) => (
  <nav
    className={classnames(
      "navbar",
      colorClass(color),
      boolClass({hasShadow, isTransparent}),
      className
    )}
    {...props}
  >
    {children}
  </nav>
)

export type NavbarBrandProps = HTMLAttributes<HTMLDivElement>

export const NavbarBrand: FC<PropsWithChildren<NavbarBrandProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classnames("navbar-brand", className)} {...props}>
    {children}
  </div>
)

export const NavbarDivider: FC = () => <hr className="navbar-divider" />

export type NavbarBurgerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onClick"
> &
  Pick<BoolClassArg, "isActive"> & {
    setIsActive: Dispatch<SetStateAction<boolean>>
  }

export const NavbarBurger: FC<NavbarBurgerProps> = ({
  className,
  isActive,
  setIsActive,
  ...props
}) => (
  <div
    aria-expanded={isActive ? "true" : "false"}
    aria-label="menu"
    role="button"
    className={classnames("navbar-burger", boolClass({isActive}), className)}
    onClick={(event) => {
      event.stopPropagation()
      setIsActive((isActive) => !isActive)
    }}
    {...props}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </div>
)

export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement>

export const NavbarDropdown: FC<PropsWithChildren<NavbarDropdownProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classnames("navbar-dropdown", className)} {...props}>
    {children}
  </div>
)

export type NavbarEndProps = HTMLAttributes<HTMLDivElement>

export const NavbarEnd: FC<PropsWithChildren<NavbarEndProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classnames("navbar-end", className)} {...props}>
    {children}
  </div>
)

export type NavbarItemProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BoolClassArg,
    | "isActive"
    | "hasDropdown"
    | "hasDropdownUp"
    | "isExpanded"
    | "isHoverable"
    | "isTab"
  >

export const NavbarItem: FC<NavbarItemProps> = ({
  children,
  className,
  hasDropdown,
  hasDropdownUp,
  isActive,
  isExpanded,
  isHoverable,
  isTab,
  ...props
}) => (
  <div
    className={classnames(
      "navbar-item",
      boolClass({
        hasDropdown,
        hasDropdownUp,
        isActive,
        isExpanded,
        isHoverable,
        isTab,
      }),
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export type NavbarItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<BoolClassArg, "isActive">

export const NavbarItemAnchor: FC<NavbarItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => (
  <a
    className={classnames("navbar-item", boolClass({isActive}), className)}
    {...props}
  >
    {children}
  </a>
)

export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const NavbarLink: FC<PropsWithChildren<NavbarLinkProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a className={classnames("navbar-link", className)} {...props}>
      {children}
    </a>
  )
}

export type NavbarMenuProps = HTMLAttributes<HTMLDivElement> &
  Pick<BoolClassArg, "isActive">

export const NavbarMenu: FC<PropsWithChildren<NavbarMenuProps>> = ({
  children,
  className,
  isActive,
}) => (
  <div
    className={classnames("navbar-menu", boolClass({isActive}), className)}
  >
    {children}
  </div>
)

export type NavbarStartProps = HTMLAttributes<HTMLDivElement>

export const NavbarStart: FC<PropsWithChildren<NavbarStartProps>> = ({
  children,
  className,
}) => (<div className={classnames("navbar-start", className)}>{children}</div>)

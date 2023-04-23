import {
  AnchorHTMLAttributes,
  Dispatch,
  FC,
  HTMLAttributes,
  PointerEventHandler,
  PropsWithChildren,
  SetStateAction,
} from "react"
import { classNames } from "../classNames.js"
import {
  MainColor,
  ShadeColor,
  ColorModifierProp,
  colorClassName,
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"

export type NavbarProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  Pick<
    BooleanModifierProps,
    "isHoverable" | "isSpaced" | "isTransparent" | "hasShadow"
  >

export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  children,
  className,
  color,
  isTransparent,
  hasShadow,
  ...props
}) => {
  const _class = classNames(
    "navbar",
    colorClassName(color),
    modifier({ hasShadow, isTransparent }),
    className
  )

  return (
    <nav className={_class} {...props}>
      {children}
    </nav>
  )
}

export type NavbarBrandProps = HTMLAttributes<HTMLDivElement>

export const NavbarBrand: FC<PropsWithChildren<NavbarBrandProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("navbar-brand", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export const NavbarDivider: FC = () => <hr className="navbar-divider" />

export type NavbarBurgerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onClick"
> &
  Pick<BooleanModifierProps, "isActive"> & {
    setIsActive: Dispatch<SetStateAction<boolean>>
  }

export const NavbarBurger: FC<NavbarBurgerProps> = ({
  className,
  isActive,
  setIsActive,
  ...props
}) => {
  const _class = classNames("navbar-burger", className)

  const onClick: PointerEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
    setIsActive((isActive) => !isActive)
  }

  return (
    <div
      aria-expanded={isActive ? "true" : "false"}
      aria-label="menu"
      role="button"
      className={_class}
      onClick={onClick}
      {...props}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </div>
  )
}

export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement>

export const NavbarDropdown: FC<PropsWithChildren<NavbarDropdownProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("navbar-dropdown", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export type NavbarEndProps = HTMLAttributes<HTMLDivElement>

export const NavbarEnd: FC<PropsWithChildren<NavbarEndProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("navbar-end", className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export type NavbarItemProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BooleanModifierProps,
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
}) => {
  const _class = classNames(
    "navbar-item",
    modifier({
      hasDropdown,
      hasDropdownUp,
      isActive,
      isExpanded,
      isHoverable,
      isTab,
    }),
    className
  )

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export type NavbarItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<BooleanModifierProps, "isActive">

export const NavbarItemAnchor: FC<NavbarItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  const _class = classNames("navbar-item", modifier({ isActive }), className)

  return (
    <a className={_class} {...props}>
      {children}
    </a>
  )
}

export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const NavbarLink: FC<PropsWithChildren<NavbarLinkProps>> = ({
  children,
  className,
  ...props
}) => {
  const _class = classNames("navbar-link", className)

  return (
    <a className={_class} {...props}>
      {children}
    </a>
  )
}

export type NavbarMenuProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isActive">

export const NavbarMenu: FC<PropsWithChildren<NavbarMenuProps>> = ({
  children,
  className,
  isActive,
}) => {
  const _class = classNames("navbar-menu", modifier({ isActive }), className)

  return <div className={_class}>{children}</div>
}

export type NavbarStartProps = HTMLAttributes<HTMLDivElement>

export const NavbarStart: FC<PropsWithChildren<NavbarStartProps>> = ({
  children,
  className,
}) => {
  const _class = classNames("navbar-start", className)

  return <div className={_class}>{children}</div>
}

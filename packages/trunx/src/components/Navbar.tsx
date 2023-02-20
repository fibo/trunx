import {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  memo,
} from 'react'
import { classNames } from '../classNames.js'
import {
  MainColor,
  ShadeColor,
  ColorModifierProp,
  colorClassName,
  BooleanModifierProps,
  modifier,
} from '../modifiers/index.js'

export type NavbarProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  Pick<
    BooleanModifierProps,
    'isHoverable' | 'isFixedBottom' | 'isFixedTop' | 'isSpaced' | 'isTransparent' | 'hasShadow'
  >

export const Navbar: FC<PropsWithChildren<NavbarProps>> = ({
  children,
  className,
  color,
  isFixedTop,
  isFixedBottom,
  isTransparent,
  hasShadow,
  ...props
}) => {
  useEffect(() => {
    if (isFixedTop) {
      document.body.classList.add('has-navbar-fixed-top')
    } else if (isFixedBottom) {
      document.body.classList.add('has-navbar-fixed-bottom')
    }
    return () => {
      if (isFixedTop) {
        document.body.classList.remove('has-navbar-fixed-top')
      } else if (isFixedBottom) {
        document.body.classList.remove('has-navbar-fixed-bottom')
      }
    }
  }, [isFixedTop, isFixedBottom])

  const _className = useMemo(
    () =>
      classNames(
        'navbar',
        colorClassName(color),
        modifier({ hasShadow, isFixedBottom, isFixedTop, isTransparent }),
        className
      ),
    [className, color, isFixedTop, isFixedBottom, isTransparent, hasShadow]
  )

  return (
    <nav className={_className} {...props}>
      {children}
    </nav>
  )
}

export type NavbarBrandProps = HTMLAttributes<HTMLDivElement>

export const NavbarBrand: FC<PropsWithChildren<NavbarBrandProps>> = ({ children, className, ...props }) => {
  const _className = useMemo(() => classNames('navbar-brand', className), [className])
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export const NavbarDivider = memo(() => <hr className="navbar-divider" />)
NavbarDivider.displayName = 'NavbarDivider'

export type NavbarBurgerProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isActive'> & {
    content?: ReactNode
  }

export const NavbarBurger: FC<NavbarBurgerProps> = ({
  className,
  isActive,
  content = (
    <>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </>
  ),
  ...props
}) => {
  const _className = useMemo(() => classNames('navbar-burger', className), [className])
  return (
    <div
      aria-expanded={isActive ? 'true' : 'false'}
      aria-label="menu"
      role="button"
      className={_className}
      {...props}
    >
      {content}
    </div>
  )
}

export type NavbarDropdownProps = HTMLAttributes<HTMLDivElement>

export const NavbarDropdown: FC<PropsWithChildren<NavbarDropdownProps>> = ({
  children,
  className,
  ...props
}) => {
  const _className = useMemo(() => classNames('navbar-dropdown', className), [className])
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type NavbarEndProps = HTMLAttributes<HTMLDivElement>

export const NavbarEnd: FC<PropsWithChildren<NavbarEndProps>> = ({ children, className, ...props }) => {
  const _className = useMemo(() => classNames('navbar-end', className), [className])
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type NavbarItemProps = HTMLAttributes<HTMLDivElement> &
  Pick<
    BooleanModifierProps,
    'isActive' | 'hasDropdown' | 'hasDropdownUp' | 'isExpanded' | 'isHoverable' | 'isTab'
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
  const _className = useMemo(
    () =>
      classNames(
        'navbar-item',
        modifier({ hasDropdown, hasDropdownUp, isActive, isExpanded, isHoverable, isTab }),
        className
      ),
    [className, hasDropdown, hasDropdownUp, isActive, isExpanded, isHoverable, isTab]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type NavbarItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Pick<BooleanModifierProps, 'isActive'>

export const NavbarItemAnchor: FC<NavbarItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('navbar-item', modifier({ isActive }), className),
    [className, isActive]
  )
  return (
    <a className={_className} {...props}>
      {children}
    </a>
  )
}

export type NavbarLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const NavbarLink: FC<PropsWithChildren<NavbarLinkProps>> = ({ children, className, ...props }) => {
  const _className = useMemo(() => classNames('navbar-link', className), [className])
  return (
    <a className={_className} {...props}>
      {children}
    </a>
  )
}

export type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & Pick<BooleanModifierProps, 'isActive'>

export const NavbarMenu: FC<PropsWithChildren<NavbarMenuProps>> = ({ children, className, isActive }) => {
  const _className = useMemo(
    () => classNames('navbar-start', modifier({ isActive }), className),
    [className, isActive]
  )
  return <div className={_className}>{children}</div>
}

export type NavbarStartProps = HTMLAttributes<HTMLDivElement>

export const NavbarStart: FC<PropsWithChildren<NavbarStartProps>> = ({ children, className }) => {
  const _className = useMemo(() => classNames('navbar-start', className), [className])
  return <div className={_className}>{children}</div>
}

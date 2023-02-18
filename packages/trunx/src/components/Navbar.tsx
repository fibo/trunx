import {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
} from 'react'
import { classNames } from '../classNames.js'
import {
  MainColor,
  ShadeColor,
  ColorModifierProp,
  colorClassName,
  CommonModifierProps,
  modifier,
} from '../modifiers/index.js'

export type NavbarProps = HTMLAttributes<HTMLElement> &
  ColorModifierProp<MainColor | ShadeColor> &
  Pick<CommonModifierProps, 'isHoverable'> &
  Partial<{
    isFixedBottom: boolean
    isFixedTop: boolean
    isSpaced: boolean
    isTransparent: boolean
    hasShadow: boolean
  }>

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
        {
          'is-fixed-bottom': isFixedBottom,
          'is-fixed-top': isFixedTop,
          'is-transparent': isTransparent,
          'has-shadow': hasShadow,
        },
        colorClassName(color),
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

export type NavbarDividerProps = HTMLAttributes<HTMLHRElement>

export const NavbarDivider: FC<NavbarDividerProps> = ({ className, ...props }) => {
  const _className = useMemo(() => classNames('navbar-divider', className), [className])
  return <hr className={_className} {...props} />
}

export type NavbarBurgerProps = HTMLAttributes<HTMLDivElement> &
  Pick<CommonModifierProps, 'isActive'> & {
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
  Pick<CommonModifierProps, 'isActive'> &
  Partial<{
    hasDropdown: boolean
    hasDropdownUp: boolean
    isExpanded: boolean
    isHoverable: boolean
    isTab: boolean
  }>

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
        {
          'has-dropdown': hasDropdown,
          'has-dropdown-up': hasDropdownUp,
          'is-tab': isTab,
        },
        modifier({ isActive, isExpanded, isHoverable }),
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
  Pick<CommonModifierProps, 'isActive'>

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

export type NavbarMenuProps = HTMLAttributes<HTMLDivElement> & Pick<CommonModifierProps, 'isActive'>

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

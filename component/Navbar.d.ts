import * as React from 'react'
import { HelpersProps, MainColorsProps, ShadeColorsProps } from './modifiers'
export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps {
  isHoverable?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isSpaced?: boolean
  isTransparent?: boolean
}
export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    HelpersProps {}
export interface NavbarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}
export interface NavbarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  hasDropdown?: boolean
  hasDropdownUp?: boolean
  isActive?: boolean
  isHoverable?: boolean
}
export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}
export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {
  isActive?: boolean
}
export interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
declare class NavbarBrand extends React.Component<NavbarBrandProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps: {
    'aria-label': string
    role: string
  }
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarDivider extends React.Component<NavbarDividerProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarEnd extends React.Component<NavbarEndProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarItem extends React.Component<NavbarItemProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarLink extends React.Component<NavbarLinkProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarMenu extends React.Component<NavbarMenuProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class NavbarStart extends React.Component<NavbarStartProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Navbar extends React.Component<NavbarProps> {
  static Brand: typeof NavbarBrand
  static Burger: typeof NavbarBurger
  static Divider: typeof NavbarDivider
  static Dropdown: typeof NavbarDropdown
  static End: typeof NavbarEnd
  static Item: typeof NavbarItem
  static Link: typeof NavbarLink
  static Menu: typeof NavbarMenu
  static Start: typeof NavbarStart
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  componentDidMount(): void
  componentWillUnmount(): void
  render(): React.ReactNode
}
export {}

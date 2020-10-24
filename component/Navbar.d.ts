import * as React from 'react'
import {
  OtherHelpersProps,
  MainColorsProps,
  ShadeColorsProps,
} from './modifiers'
export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    Pick<OtherHelpersProps, 'isUnselectable'>,
    MainColorsProps,
    ShadeColorsProps {
  isHoverable?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isSpaced?: boolean
  isTransparent?: boolean
}
export declare type NavbarBrandProps = React.HTMLAttributes<HTMLDivElement>
export declare type NavbarDividerProps = React.HTMLAttributes<HTMLHRElement>
export declare type NavbarDropdownProps = React.HTMLAttributes<HTMLDivElement>
export declare type NavbarEndProps = React.HTMLAttributes<HTMLDivElement>
export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}
export interface NavbarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hasDropdown?: boolean
  hasDropdownUp?: boolean
  isActive?: boolean
  isHoverable?: boolean
}
export declare type NavbarLinkProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>
export interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}
export declare type NavbarStartProps = React.HTMLAttributes<HTMLDivElement>
declare class NavbarBrand extends React.Component<NavbarBrandProps> {
  render(): React.ReactNode
}
declare class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps: {
    'aria-label': string
    role: string
  }
  render(): React.ReactNode
}
declare class NavbarDivider extends React.Component<NavbarDividerProps> {
  render(): React.ReactNode
}
declare class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  render(): React.ReactNode
}
declare class NavbarEnd extends React.Component<NavbarEndProps> {
  render(): React.ReactNode
}
declare class NavbarItem extends React.Component<NavbarItemProps> {
  render(): React.ReactNode
}
declare class NavbarLink extends React.Component<
  React.PropsWithChildren<NavbarLinkProps>
> {
  render(): React.ReactNode
}
declare class NavbarMenu extends React.Component<NavbarMenuProps> {
  render(): React.ReactNode
}
declare class NavbarStart extends React.Component<NavbarStartProps> {
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
  componentDidMount(): void
  componentWillUnmount(): void
  render(): React.ReactNode
}
export {}

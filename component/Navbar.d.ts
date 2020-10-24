import * as React from 'react'

import { IAnchorProps } from './Anchor'
import { IMainColorsProps, IShadeColorsProps } from './modifiers'
interface INavbarProps extends IMainColorsProps, IShadeColorsProps, React.HTMLAttributes<HTMLElement> {
    className?: string;
    hasShadow?: boolean;
    isFixedBottom?: boolean;
    isFixedTop?: boolean;
    isTransparent?: boolean;
    isUnselectable?: boolean;
}
interface INavbarBrandProps {
    className?: string;
}
interface INavbarDividerProps {
    className?: string;
}
interface INavbarDropdownProps {
    className?: string;
}
interface INavbarEndProps {
    className?: string;
}
interface INavbarBurgerProps {
    className?: string;
    isActive?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
interface INavbarItemDivProps {
    className?: string;
    hasDropdown?: boolean;
    isActive?: boolean;
    isHoverable?: boolean;
}
interface INavbarItemProps extends INavbarItemDivProps {
    className?: string;
    download?: IAnchorProps['download'];
    href?: IAnchorProps['href'];
    onClick?: IAnchorProps['onClick'];
    target?: IAnchorProps['target'];
}
interface INavbarLinkProps {
    className?: string;
}
interface INavbarMenuProps {
    className?: string;
    isActive?: boolean;
}
interface INavbarStartProps {
    className?: string;
}
declare class NavbarBrand extends React.Component<React.PropsWithChildren<INavbarBrandProps>> {
  render(): JSX.Element;
}
declare class NavbarBurger extends React.Component<INavbarBurgerProps> {
  render(): JSX.Element;
}
declare class NavbarDivider extends React.Component<INavbarDividerProps> {
  render(): JSX.Element;
}
declare class NavbarDropdown extends React.Component<React.PropsWithChildren<INavbarDropdownProps>> {
  render(): JSX.Element;
}
declare class NavbarEnd extends React.Component<React.PropsWithChildren<INavbarEndProps>> {
  render(): JSX.Element;
}
declare class NavbarItemDiv extends React.Component<INavbarItemDivProps> {
  render(): JSX.Element;
}
declare class NavbarItem extends React.Component<React.PropsWithChildren<INavbarItemProps>> {
    static Div: typeof NavbarItemDiv;
    render(): JSX.Element;
}
declare class NavbarLink extends React.Component<React.PropsWithChildren<INavbarLinkProps>> {
  render(): JSX.Element;
}
declare class NavbarMenu extends React.Component<React.PropsWithChildren<INavbarMenuProps>> {
  render(): JSX.Element;
}
declare class NavbarStart extends React.Component<React.PropsWithChildren<INavbarStartProps>> {
  render(): JSX.Element;
}
export default class Navbar extends React.Component<React.PropsWithChildren<INavbarProps>> {
    static Brand: typeof NavbarBrand;
    static Burger: typeof NavbarBurger;
    static Divider: typeof NavbarDivider;
    static Dropdown: typeof NavbarDropdown;
    static End: typeof NavbarEnd;
    static Item: typeof NavbarItem;
    static Link: typeof NavbarLink;
    static Menu: typeof NavbarMenu;
    static Start: typeof NavbarStart;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {}

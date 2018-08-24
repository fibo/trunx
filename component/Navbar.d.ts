import * as React from "react";
interface INavbarProps {
    hasShadow?: boolean;
    isFixedBottom?: boolean;
    isFixedTop?: boolean;
    isTransparent?: boolean;
    isUnselectable?: boolean;
}
interface INavbarBurgerProps {
    isActive?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
interface INavbarItemProps {
    hasDropdown?: boolean;
    href?: string;
    isActive?: boolean;
    isHoverable?: boolean;
}
interface INavbarMenuProps {
    isActive?: boolean;
}
declare class NavbarBrand extends React.Component {
    render(): JSX.Element;
}
declare class NavbarBurger extends React.Component<INavbarBurgerProps> {
    render(): JSX.Element;
}
declare class NavbarDropdown extends React.Component {
    render(): JSX.Element;
}
declare class NavbarEnd extends React.Component {
    render(): JSX.Element;
}
declare class NavbarItem extends React.Component<INavbarItemProps> {
    render(): JSX.Element;
}
declare class NavbarLink extends React.Component {
    render(): JSX.Element;
}
declare class NavbarMenu extends React.Component<INavbarMenuProps> {
    render(): JSX.Element;
}
declare class NavbarStart extends React.Component {
    render(): JSX.Element;
}
export default class Navbar extends React.Component<INavbarProps> {
    static Brand: typeof NavbarBrand;
    static Burger: typeof NavbarBurger;
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
export {};

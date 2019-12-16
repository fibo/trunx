import * as React from "react";
import { IAnchorProps } from "./Anchor";
interface IDropdownProps {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
}
interface IDropdownItemProps {
    href?: IAnchorProps["href"];
    isActive?: boolean;
    onClick?: IAnchorProps["onClick"];
}
declare class DropdownContent extends React.Component {
    render(): JSX.Element;
}
declare class DropdownDivider extends React.Component {
    render(): JSX.Element;
}
declare class DropdownItem extends React.Component<IDropdownItemProps> {
    render(): JSX.Element;
}
declare class DropdownMenu extends React.Component {
    render(): JSX.Element;
}
declare class DropdownTrigger extends React.Component {
    render(): JSX.Element;
}
export default class Dropdown extends React.Component<IDropdownProps> {
    static Content: typeof DropdownContent;
    static Divider: typeof DropdownDivider;
    static Item: typeof DropdownItem;
    static Menu: typeof DropdownMenu;
    static Trigger: typeof DropdownTrigger;
    render(): JSX.Element;
}
export {};

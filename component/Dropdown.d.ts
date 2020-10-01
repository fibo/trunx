import * as React from "react";
import { IAnchorProps } from "./Anchor";
interface IDropdownProps {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
}
interface IDropdownContentProps {
    children?: React.ReactNode;
    className?: string;
}
interface IDropdownDividerProps {
    children?: React.ReactNode;
    className?: string;
}
interface IDropdownItemProps {
    children?: React.ReactNode;
    className?: string;
    href?: IAnchorProps["href"];
    isActive?: boolean;
    onClick?: IAnchorProps["onClick"];
}
interface IDropdownMenuProps {
    children?: React.ReactNode;
    className?: string;
}
interface IDropdownTriggerProps {
    children?: React.ReactNode;
    className?: string;
}
declare class DropdownContent extends React.Component<IDropdownContentProps> {
    render(): JSX.Element;
}
declare class DropdownDivider extends React.Component<IDropdownDividerProps> {
    render(): JSX.Element;
}
declare class DropdownItem extends React.Component<IDropdownItemProps> {
    render(): JSX.Element;
}
declare class DropdownMenu extends React.Component<IDropdownMenuProps> {
    render(): JSX.Element;
}
declare class DropdownTrigger extends React.Component<IDropdownTriggerProps> {
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

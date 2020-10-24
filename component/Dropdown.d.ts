import * as React from 'react'
interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isHoverable?: boolean;
    isRight?: boolean;
    isUp?: boolean;
}
interface IDropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface IDropdownDividerProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface IDropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
}
interface IDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface IDropdownTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare class DropdownContent extends React.Component<IDropdownContentProps> {
  render(): any;
}
declare class DropdownDivider extends React.Component<IDropdownDividerProps> {
  render(): any;
}
declare class DropdownItem extends React.Component<IDropdownItemProps> {
  static getClassNames({ className, isActive }: {
        className: any;
        isActive: any;
    }): any;
}
declare class DropdownMenu extends React.Component<IDropdownMenuProps> {
  render(): any;
}
declare class DropdownTrigger extends React.Component<IDropdownTriggerProps> {
  render(): any;
}
export default class Dropdown extends React.Component<IDropdownProps> {
    static Content: typeof DropdownContent;
    static Divider: typeof DropdownDivider;
    static Item: typeof DropdownItem;
    static Menu: typeof DropdownMenu;
    static Trigger: typeof DropdownTrigger;
    render(): any;
}
export {}

import * as React from 'react'
interface IMenuProps extends React.HTMLAttributes<HTMLElement> {
}
interface IMenuLabelProps {
    children?: React.ReactNode;
    className?: string;
}
interface IMenuListProps {
    children?: React.ReactNode;
    className?: string;
}
declare class MenuLabel extends React.Component<IMenuLabelProps> {
  render(): JSX.Element;
}
declare class MenuList extends React.Component<IMenuListProps> {
  render(): JSX.Element;
}
export default class Menu extends React.Component<IMenuProps> {
    static Label: typeof MenuLabel;
    static List: typeof MenuList;
    render(): JSX.Element;
}
export {}

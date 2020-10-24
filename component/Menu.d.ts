import * as React from 'react'
export declare type MenuProps = React.HTMLAttributes<HTMLElement>
export declare type MenuLabelProps = React.HTMLAttributes<HTMLParagraphElement>
export declare type MenuListProps = React.HTMLAttributes<HTMLUListElement>
declare class MenuLabel extends React.Component<MenuLabelProps> {
  render(): React.ReactNode
}
declare class MenuList extends React.Component<MenuListProps> {
  render(): React.ReactNode
}
export declare class Menu extends React.Component<MenuProps> {
  static Label: typeof MenuLabel
  static List: typeof MenuList
  render(): React.ReactNode
}
export {}

import * as React from 'react'
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}
export declare type DropdownContentProps = React.HTMLAttributes<HTMLDivElement>
export declare type DropdownDividerProps = React.HTMLAttributes<HTMLDivElement>
export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}
export declare type DropdownMenuProps = React.HTMLAttributes<HTMLDivElement>
export declare type DropdownTriggerProps = React.HTMLAttributes<HTMLDivElement>
declare class DropdownContent extends React.Component<DropdownContentProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class DropdownDivider extends React.Component<DropdownDividerProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class DropdownItem extends React.Component<DropdownItemProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps: {
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
declare class DropdownTrigger extends React.Component<DropdownTriggerProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Dropdown extends React.Component<DropdownProps> {
  static Content: typeof DropdownContent
  static Divider: typeof DropdownDivider
  static Item: typeof DropdownItem
  static Menu: typeof DropdownMenu
  static Trigger: typeof DropdownTrigger
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}

import * as classnames from "classnames"
import * as React from "react"

import { renderDiv } from './commonRenders'
import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

interface IDropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownItemProps {
  children?: React.ReactNode
  className?: string
  href?: IAnchorProps["href"]
  isActive?: boolean
  onClick?: IAnchorProps["onClick"]
}

interface IDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

class DropdownContent extends React.Component<IDropdownContentProps> {
  render() {
    return renderDiv("dropdown-content", this.props)
  }
}

class DropdownDivider extends React.Component<IDropdownDividerProps> {
  render() {
    return renderDiv("dropdown-divider", this.props)
  }
}

class DropdownItem extends React.Component<IDropdownItemProps> {
  render() {
    const {
      className,
      children,
      href,
      isActive,
      onClick,
      ...props
    } = this.props

    return (
      <Anchor
        className={classnames(
          "dropdown-item",
          className,
          {
            "is-active": isActive,
          },
        )}
        href={href}
        onClick={onClick}
        {...props}
      >
        {children}
      </Anchor>
    )
  }
}

class DropdownMenu extends React.Component<IDropdownMenuProps> {
  render() {
    return renderDiv("dropdown-menu", { role: "menu", ...this.props })
  }
}

class DropdownTrigger extends React.Component<IDropdownTriggerProps> {
  render() {
    return renderDiv("dropdown-trigger", this.props)
  }
}

export default class Dropdown extends React.Component<IDropdownProps> {
  static Content = DropdownContent
  static Divider = DropdownDivider
  static Item = DropdownItem
  static Menu = DropdownMenu
  static Trigger = DropdownTrigger

  render() {
    const {
      children,
      className,
      isActive,
      isHoverable,
      isRight,
      isUp,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "dropdown",
          className,
          {
            "is-active": isActive,
            "is-hoverable": isHoverable,
            "is-right": isRight,
            "is-up": isUp,
          },
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}

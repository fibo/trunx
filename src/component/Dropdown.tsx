import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

interface IDropdownProps {
  children?: React.ReactNode
  className?: string
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

interface IDropdownContentProps {
  children?: React.ReactNode
  className?: string
}

interface IDropdownDividerProps {
  children?: React.ReactNode
  className?: string
}

interface IDropdownItemProps {
  children?: React.ReactNode
  className?: string
  href?: IAnchorProps["href"]
  isActive?: boolean
  onClick?: IAnchorProps["onClick"]
}

interface IDropdownMenuProps {
  children?: React.ReactNode
  className?: string
}

interface IDropdownTriggerProps {
  children?: React.ReactNode
  className?: string
}

class DropdownContent extends React.Component<IDropdownContentProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "dropdown-content",
          className,
        )}
      >{children}</div>
    )
  }
}

class DropdownDivider extends React.Component<IDropdownDividerProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "dropdown-divider",
          className,
        )}
      >{children}</div>
    )
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
        {...props}
        className={classnames(
          "dropdown-item",
          className,
          {
            "is-active": isActive,
          },
        )}
        href={href}
        onClick={onClick}
      >
        {children}
      </Anchor>
    )
  }
}

class DropdownMenu extends React.Component<IDropdownMenuProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "dropdown-menu",
          className,
        )}
        role="menu"
      >{children}</div>
    )
  }
}

class DropdownTrigger extends React.Component<IDropdownTriggerProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "dropdown-trigger",
          className,
        )}
      >{children}</div>
    )
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
      >{children}</div>
    )
  }
}

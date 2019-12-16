import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

interface IDropdownProps {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

interface IDropdownItemProps {
  href?: IAnchorProps["href"]
  isActive?: boolean
  onClick?: IAnchorProps["onClick"]
}

class DropdownContent extends React.Component {
  render() {
    return (
      <div className="dropdown-content">{this.props.children}</div>
    )
  }
}

class DropdownDivider extends React.Component {
  render() {
    return (
      <div className="dropdown-divider">{this.props.children}</div>
    )
  }
}

class DropdownItem extends React.Component<IDropdownItemProps> {
  render() {
    const {
      href,
      isActive,
      onClick,
      ...props
    } = this.props

    const className = classnames("dropdown-item",
      {
        "is-active": isActive,
      },
    )

    return (
      <Anchor
        {...props}
        className={className}
        href={href}
        onClick={onClick}
      >
        {this.props.children}
      </Anchor>
    )
  }
}

class DropdownMenu extends React.Component {
  render() {
    return (
      <div className="dropdown-menu" role="menu">{this.props.children}</div>
    )
  }
}

class DropdownTrigger extends React.Component {
  render() {
    return (
      <div className="dropdown-trigger">{this.props.children}</div>
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
      isActive,
      isHoverable,
      isRight,
      isUp,
    } = this.props

    const className = classnames("dropdown",
      {
        "is-active": isActive,
        "is-hoverable": isHoverable,
        "is-right": isRight,
        "is-up": isUp,
      },
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

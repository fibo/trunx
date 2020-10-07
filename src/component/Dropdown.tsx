import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from './classNames'
import {
  renderA,
  renderDiv,
} from './commonRenders'

interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

interface IDropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

interface IDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

class DropdownContent extends React.Component<IDropdownContentProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.dropdownContent)
  }
}

class DropdownDivider extends React.Component<IDropdownDividerProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.dropdownDivider)
  }
}

class DropdownItem extends React.Component<IDropdownItemProps> {
  render() {
    const {
      className,
      isActive,
      ...props
    } = this.props

    return renderA(
      {
        className: classnames(
          className,
          {
            "is-active": isActive,
          },
        ),
        ...props
      },
      bulmaClassName.dropdownItem,
    )
  }
}

class DropdownMenu extends React.Component<IDropdownMenuProps> {
  render() {
    return renderDiv(
      { role: "menu", ...this.props },
      bulmaClassName.dropdownMenu,
    )
  }
}

class DropdownTrigger extends React.Component<IDropdownTriggerProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.dropdownTrigger)
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

    return renderDiv({
      className: classnames(
        bulmaClassName.dropdown,
        className,
        {
          "is-active": isActive,
          "is-hoverable": isHoverable,
          "is-right": isRight,
          "is-up": isUp,
        },
      ),
      ...props
    })
  }
}

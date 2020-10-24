import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

interface DropdownContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface DropdownDividerProps extends React.HTMLAttributes<HTMLDivElement> {}

interface IDropdownItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

interface IDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

interface DropdownTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

class DropdownContent extends React.Component<DropdownContentProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.dropdownContent)
  }
}

class DropdownDivider extends React.Component<DropdownDividerProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.dropdownDivider)
  }
}

class DropdownItem extends React.Component<IDropdownItemProps> {
  render() {
    const {
      isActive,
      ...props
    } = this.props

    return renderElement('a', props, bulmaClassName.dropdownItem, {isActive})
  }
}

class DropdownMenu extends React.Component<IDropdownMenuProps> {
  static defaultProps ={role: "menu"}

  render() {
    return renderElement('div', this.props, bulmaClassName.dropdownMenu)
  }
}

class DropdownTrigger extends React.Component<DropdownTriggerProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.dropdownTrigger)
  }
}

export default class Dropdown extends React.Component<DropdownProps> {
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
      ...props
    } = this.props

    return renderElement('div', props, bulmaClassName.dropdown, {isActive, isHoverable, isRight, isUp})
  }
}

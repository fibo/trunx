import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

export type DropdownContentProps = React.HTMLAttributes<HTMLDivElement>

export type DropdownDividerProps = React.HTMLAttributes<HTMLDivElement>

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

export type DropdownMenuProps = React.HTMLAttributes<HTMLDivElement>

export type DropdownTriggerProps = React.HTMLAttributes<HTMLDivElement>

class DropdownContent extends React.Component<DropdownContentProps> {
  render(): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.dropdownContent)
  }
}

class DropdownDivider extends React.Component<DropdownDividerProps> {
  render(): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.dropdownDivider)
  }
}

class DropdownItem extends React.Component<DropdownItemProps> {
  render(): React.ReactNode {
    const { isActive, ...props } = this.props

    return renderElement('a', props, bulmaClassName.dropdownItem, { isActive })
  }
}

class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps = { role: 'menu' }

  render(): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.dropdownMenu)
  }
}

class DropdownTrigger extends React.Component<DropdownTriggerProps> {
  render(): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.dropdownTrigger)
  }
}

export class Dropdown extends React.Component<DropdownProps> {
  static Content = DropdownContent
  static Divider = DropdownDivider
  static Item = DropdownItem
  static Menu = DropdownMenu
  static Trigger = DropdownTrigger

  render() {
    const { isActive, isHoverable, isRight, isUp, ...props } = this.props

    return renderElement('div', props, bulmaClassName.dropdown, {
      isActive,
      isHoverable,
      isRight,
      isUp,
    })
  }
}

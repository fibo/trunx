import * as React from 'react'
import { HelpersProps } from './modifiers'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export interface DropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {
  isActive?: boolean
  isHoverable?: boolean
  isRight?: boolean
  isUp?: boolean
}

export interface DropdownContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface DropdownDividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface DropdownItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}

export interface DropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface DropdownTriggerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

class DropdownContent extends React.Component<DropdownContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.dropdownContent)
  }
}

class DropdownDivider extends React.Component<DropdownDividerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.dropdownDivider)
  }
}

class DropdownItem extends React.Component<DropdownItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, ...props } = this.props

    return renderElement('a', props, bulmaClassName.dropdownItem, { isActive })
  }
}

class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps = { role: 'menu' }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.dropdownMenu)
  }
}

class DropdownTrigger extends React.Component<DropdownTriggerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.dropdownTrigger)
  }
}

export class Dropdown extends React.Component<DropdownProps> {
  static Content = DropdownContent
  static Divider = DropdownDivider
  static Item = DropdownItem
  static Menu = DropdownMenu
  static Trigger = DropdownTrigger

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, isHoverable, isRight, isUp, ...props } = this.props

    return renderElement('div', props, bulmaClassName.dropdown, {
      isActive,
      isHoverable,
      isRight,
      isUp,
    })
  }
}

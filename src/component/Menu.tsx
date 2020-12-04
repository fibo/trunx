import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface MenuProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}

export interface MenuLabelProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}

export interface MenuListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    HelpersProps {}

class MenuLabel extends React.Component<MenuLabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('p', this.props, bulmaClassName.menuLabel)
  }
}

class MenuList extends React.Component<MenuListProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('ul', this.props, bulmaClassName.menuList)
  }
}

export class Menu extends React.Component<MenuProps> {
  static Label = MenuLabel
  static List = MenuList

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('aside', this.props, bulmaClassName.menu)
  }
}

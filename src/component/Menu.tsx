import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface MenuProps
  extends React.HTMLAttributes<HTMLElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface MenuLabelProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface MenuListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class MenuLabel extends React.Component<MenuLabelProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('p', props, bulmaClassName.menuLabel)
  }
}

class MenuList extends React.Component<MenuListProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('ul', props, bulmaClassName.menuList)
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
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('aside', props, bulmaClassName.menu)
  }
}

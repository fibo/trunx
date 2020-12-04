import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'
import { renderElement } from './renderElement'

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps {
  isHoverable?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isSpaced?: boolean
  isTransparent?: boolean
}

export interface NavbarBrandProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface NavbarDividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    HelpersProps {}

export interface NavbarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface NavbarEndProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface NavbarBurgerProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}

export interface NavbarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  hasDropdown?: boolean
  hasDropdownUp?: boolean
  isActive?: boolean
  isHoverable?: boolean
}

export interface NavbarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}

export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {
  isActive?: boolean
}

export interface NavbarStartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

class NavbarBrand extends React.Component<NavbarBrandProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.navbarBrand)
  }
}

class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps = {
    'aria-label': 'menu',
    role: 'button',
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const [
      modifiersProps,
      { className, isActive, ...props },
    ] = extractModifiersProps(this.props)

    return (
      <a
        aria-expanded={isActive ? 'true' : 'false'}
        className={classnames(
          bulmaClassName.navbarBurger,
          className,
          modifierPropsToClassnamesObject(modifiersProps),
          trunxPropsToClassnamesObject({ isActive })
        )}
        {...props}
      >
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </a>
    )
  }
}

class NavbarDivider extends React.Component<NavbarDividerProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('hr', this.props, bulmaClassName.navbarDivider)
  }
}

class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.navbarDropdown)
  }
}

class NavbarEnd extends React.Component<NavbarEndProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.navbarEnd)
  }
}

class NavbarItem extends React.Component<NavbarItemProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const {
      hasDropdown,
      hasDropdownUp,
      isActive,
      isHoverable,
      ...props
    } = this.props

    const tag = hasDropdown ? 'div' : 'a'

    return renderElement(tag, props, bulmaClassName.navbarItem, {
      hasDropdown,
      hasDropdownUp,
      isActive,
      isHoverable,
    })
  }
}

class NavbarLink extends React.Component<NavbarLinkProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('a', this.props, bulmaClassName.navbarLink)
  }
}

class NavbarMenu extends React.Component<NavbarMenuProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { isActive, ...props } = this.props

    return renderElement('div', props, bulmaClassName.navbarMenu, { isActive })
  }
}

class NavbarStart extends React.Component<NavbarStartProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.navbarStart)
  }
}

export class Navbar extends React.Component<NavbarProps> {
  static Brand = NavbarBrand
  static Burger = NavbarBurger
  static Divider = NavbarDivider
  static Dropdown = NavbarDropdown
  static End = NavbarEnd
  static Item = NavbarItem
  static Link = NavbarLink
  static Menu = NavbarMenu
  static Start = NavbarStart

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  componentDidMount(): void {
    const { isFixedBottom, isFixedTop } = this.props

    if (isFixedTop) {
      document.body.classList.add('has-navbar-fixed-top')
    }

    if (isFixedBottom) {
      document.body.classList.add('has-navbar-fixed-bottom')
    }
  }

  componentWillUnmount(): void {
    const { isFixedBottom, isFixedTop } = this.props

    if (isFixedBottom) {
      document.body.classList.remove('has-navbar-fixed-bottom')
    }

    if (isFixedTop) {
      document.body.classList.remove('has-navbar-fixed-top')
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const {
      isFixedBottom,
      isFixedTop,
      isTransparent,
      isUnselectable,
      ...props
    } = this.props

    return renderElement('nav', props, bulmaClassName.navbar, {
      isFixedBottom,
      isFixedTop,
      isTransparent,
      isUnselectable,
    })
  }
}

import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName, trunxPropsToClassnamesObject } from './classNames'
import { OtherHelpersProps, MainColorsProps, ShadeColorsProps } from './modifiers'
import { renderElement } from './renderElement'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement>,
Pick<OtherHelpersProps, 'isUnselectable'>, MainColorsProps, ShadeColorsProps {
  isHoverable?: boolean;
  isFixedBottom?: boolean;
  isFixedTop?: boolean;
  isSpaced?: boolean;
  isTransparent?: boolean;
}

export type NavbarBrandProps = React.HTMLAttributes<HTMLDivElement>

export type NavbarDividerProps = React.HTMLAttributes<HTMLHRElement>

export type NavbarDropdownProps = React.HTMLAttributes<HTMLDivElement>

export type NavbarEndProps = React.HTMLAttributes<HTMLDivElement>

export interface NavbarBurgerProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export interface NavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  hasDropdown?: boolean;
  hasDropdownUp?: boolean;
  isActive?: boolean;
  isHoverable?: boolean;
}

export type NavbarLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {isActive?: boolean}

export type NavbarStartProps = React.HTMLAttributes<HTMLDivElement>

class NavbarBrand extends React.Component<NavbarBrandProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.navbarBrand)
  }
}

class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps = {
    'aria-label': 'menu',
    role: 'button'
  }

  render (): React.ReactNode {
    const {
      className,
      isActive,
      ...props
    } = this.props

    return (
      <a
        aria-expanded={isActive ? 'true' : 'false'}
        className={classnames(
          bulmaClassName.navbarBurger,
          className,
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
  render () : React.ReactNode{
    return renderElement('hr', this.props, bulmaClassName.navbarDivider)
  }
}

class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  render () : React.ReactNode{
    return renderElement('div', this.props, bulmaClassName.navbarDropdown)
  }
}

class NavbarEnd extends React.Component<NavbarEndProps> {
  render () : React.ReactNode{
    return renderElement('div', this.props, bulmaClassName.navbarEnd)
  }
}

class NavbarItem extends React.Component<NavbarItemProps> {
  render () : React.ReactNode{
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
      isHoverable
    })
  }
}

class NavbarLink extends React.Component<React.PropsWithChildren<NavbarLinkProps>> {
  render () : React.ReactNode{
    return renderElement('a', this.props, bulmaClassName.navbarLink)
  }
}

class NavbarMenu extends React.Component<NavbarMenuProps> {
  render () : React.ReactNode{
    const { isActive, ...props } = this.props

    return renderElement('div', props, bulmaClassName.navbarMenu, { isActive })
  }
}

class NavbarStart extends React.Component<NavbarStartProps> {
  render () : React.ReactNode{
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

  componentDidMount ():void {
    const {
      isFixedBottom,
      isFixedTop
    } = this.props

    if (isFixedTop) {
      document.body.classList.add('has-navbar-fixed-top')
    }

    if (isFixedBottom) {
      document.body.classList.add('has-navbar-fixed-bottom')
    }
  }

  componentWillUnmount () :void{
    const {
      isFixedBottom,
      isFixedTop
    } = this.props

    if (isFixedBottom) {
      document.body.classList.remove('has-navbar-fixed-bottom')
    }

    if (isFixedTop) {
      document.body.classList.remove('has-navbar-fixed-top')
    }
  }

  render () :React.ReactNode{
    const {
      isFixedBottom,
      isFixedTop,
      isTransparent,
      isUnselectable,
      ...props
    } = this.props

    return renderElement('nav', props, bulmaClassName.navbar, { isFixedBottom, isFixedTop, isTransparent, isUnselectable })
  }
}

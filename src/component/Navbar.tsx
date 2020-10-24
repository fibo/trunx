import * as classnames from "classnames"
import * as React from "react"

import { bulmaClassName } from './classNames'
import { OtherHelpersProps, MainColorsProps, ShadeColorsProps } from "./modifiers"
import { renderElement } from './renderElement'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement>,
Pick<OtherHelpersProps, 'isUnselectable'>, MainColorsProps, ShadeColorsProps {
  isHoverable?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isSpaced?:boolean
  isTransparent?:boolean
}

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

interface NavbarDropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarEndProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarBurgerProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

export interface NavbarItemProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onAbort'>, Omit<React.HTMLAttributes<HTMLDivElement>, 'onAbort'> {
  hasDropdown?: boolean
  hasDropdownUp?: boolean
  isActive?: boolean
  isHoverable?: boolean
}

interface NavbarLinkProps  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {isActive?:boolean}

interface NavbarStartProps extends React.HTMLAttributes<HTMLDivElement> {}

class NavbarBrand extends React.Component<NavbarBrandProps> {
  render() {
    return renderElement('div',this.props, bulmaClassName.navbarBrand)
  }
}

class NavbarBurger extends React.Component<NavbarBurgerProps> {
  static defaultProps = {
    'aria-label':"menu",
    role:"button",
  }

  render() {
    const {
      className,
      isActive,
      ...props
    } = this.props

    return (
      <a
        aria-expanded={isActive ? "true" : "false"}
        className={classnames(
          bulmaClassName.navbarBurger,
          className,
          trunxPropsToClassnamesObject({isActive})
        )}
        {...props}
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    )
  }
}

class NavbarDivider extends React.Component<NavbarDividerProps> {
  render() {
    return renderElement('hr', this.props, bulmaClassName.navbarDivider)
  }
}

class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.navbarDropdown)
  }
}

class NavbarEnd extends React.Component<NavbarEndProps> {
  render() {
    return renderElement('div',this.props, bulmaClassName.navbarEnd)
  }
}

class NavbarItem extends React.Component<NavbarItemProps> {
  render() {
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
  render() {
    return renderElement('a', this.props, bulmaClassName.navbarLink)
  }
}

class NavbarMenu extends React.Component<NavbarMenuProps> {
  render() {
    const {isActive, ...props}= this.props

    return renderElement('div', props, bulmaClassName.navbarMenu, {isActive})
  }
}

class NavbarStart extends React.Component<NavbarStartProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.navbarStart)
  }
}

export  class Navbar extends React.Component<NavbarProps> {
  static Brand = NavbarBrand
  static Burger = NavbarBurger
  static Divider = NavbarDivider
  static Dropdown = NavbarDropdown
  static End = NavbarEnd
  static Item = NavbarItem
  static Link = NavbarLink
  static Menu = NavbarMenu
  static Start = NavbarStart

  componentDidMount() {
    const {
      isFixedBottom,
      isFixedTop,
    } = this.props

    if (isFixedTop) {
      document.body.classList.add("has-navbar-fixed-top")
    }

    if (isFixedBottom) {
      document.body.classList.add("has-navbar-fixed-bottom")
    }
  }

  componentWillUnmount() {
    const {
      isFixedBottom,
      isFixedTop,
    } = this.props

    if (isFixedBottom) {
      document.body.classList.remove("has-navbar-fixed-bottom")
    }

    if (isFixedTop) {
      document.body.classList.remove("has-navbar-fixed-top")
    }
  }

  render() {
    const {
      isFixedBottom,
      isFixedTop,
      isTransparent,
isUnselectable,
      ...props
    } = this.props

return renderElement('nav', props, bulmaClassName.navbar, {isFixedBottom, isFixedTop, isTransparent, isUnselectable})
  }
}

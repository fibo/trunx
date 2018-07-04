import * as classname from 'classname'
import * as React from 'react'

interface NavbarProps {
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isTransparent?: boolean
  isUnselectable?: boolean
}

interface NavbarBurgerProps {
  isActive?: boolean
}

interface NavbarItemProps {
  hasDropdown?: boolean
  href?: string
  isActive?: boolean
  isHoverable?: boolean
}

interface NavbarMenuProps {
  isActive?: boolean
}

class NavbarBrand extends React.Component {
  public render() {
    return (
      <div className="navbar-brand">{this.props.children}</div>
    )
  }
}

class NavbarBurger extends React.Component<NavbarBurgerProps> {
  public render() {
    const {
      isActive,
    } = this.props

    const className = classname(['navbar-burger'], {
      'is-active': isActive,
    })

    return (
      <a
        className={className}
        role="button"
        aria-label="menu"
        aria-expanded={isActive ? 'true' : 'false'}
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    )
  }
}

class NavbarDropdown extends React.Component {
  public render() {
    return (
      <div className="navbar-dropdown">{this.props.children}</div>
    )
  }
}

class NavbarEnd extends React.Component {
  public render() {
    return (
      <div className="navbar-end">{this.props.children}</div>
    )
  }
}

class NavbarItem extends React.Component<NavbarItemProps> {
  public render() {
    const {
      hasDropdown,
      href,
      isActive,
      isHoverable,
      ...props
    } = this.props

    const className = classname(['navbar-item'], {
      'has-dropdown': hasDropdown,
      'is-active': isActive,
      'is-hoverable': isHoverable,
    })

    return href ? (
      <a
        className={className}
        href={href}
        {...props}
      >
        {this.props.children}
      </a>
    ) : (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class NavbarLink extends React.Component {
  public render() {
    return (
      <a className="navbar-link">{this.props.children}</a>
    )
  }
}

class NavbarMenu extends React.Component<NavbarMenuProps> {
  public render() {
    const {
      isActive
    } = this.props

    const className = classname(['navbar-menu'], {
      'is-active': isActive,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class NavbarStart extends React.Component {
  public render() {
    return (
      <div className="navbar-start">{this.props.children}</div>
    )
  }
}

export default class Navbar extends React.Component<NavbarProps> {
  public static Brand = NavbarBrand
  public static Burger = NavbarBurger
  public static Dropdown = NavbarDropdown
  public static End = NavbarEnd
  public static Item = NavbarItem
  public static Link = NavbarLink
  public static Menu = NavbarMenu
  public static Start = NavbarStart

  public render() {
    const {
      isFixedBottom,
      isFixedTop,
      isTransparent,
      isUnselectable,
      ...props
    } = this.props

    const className = classname(['navbar'], {
      'is-fixed-bottom': isFixedBottom,
      'is-fixed-top': isFixedTop,
      'is-transparent': isTransparent,
      'is-unselectable': isUnselectable,
    })

    return (
      <nav className={className} {...props}>{this.props.children}</nav>
    )
  }
}

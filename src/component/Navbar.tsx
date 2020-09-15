import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IMainColorsProps,
  IShadeColorsProps,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
} from "./modifiers"

interface INavbarProps extends IMainColorsProps,
                               IShadeColorsProps,
                               React.HTMLAttributes<HTMLElement> {
  className?: string
  hasShadow?: boolean
  isFixedBottom?: boolean
  isFixedTop?: boolean
  isTransparent?: boolean
  isUnselectable?: boolean
}

interface INavbarBrandProps {
  className?: string
}

interface INavbarDividerProps {
  className?: string
}

interface INavbarDropdownProps {
  className?: string
}

interface INavbarEndProps {
  className?: string
}

interface INavbarBurgerProps {
  className?: string
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

interface INavbarItemDivProps {
  className?: string
  hasDropdown?: boolean
  isActive?: boolean
  isHoverable?: boolean
}

interface INavbarItemProps extends INavbarItemDivProps {
  className?: string
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface INavbarLinkProps {
  className?: string
}

interface INavbarMenuProps {
  className?: string
  isActive?: boolean
}

interface INavbarStartProps {
  className?: string
}

class NavbarBrand extends React.Component<React.PropsWithChildren<INavbarBrandProps>> {
  render() {
    const {
      className,
      children,
    } = this.props
    return (
      <div className={classnames("navbar-brand", className)}>
        {children}
      </div>
    )
  }
}

class NavbarBurger extends React.Component<INavbarBurgerProps> {
  render() {
    const {
      className,
      isActive,
      onClick,
    } = this.props

    return (
      <a
        className={classnames(
          "navbar-burger",
          className,
          {
            "is-active": isActive,
          },
        )}
        role="button"
        aria-label="menu"
        aria-expanded={isActive ? "true" : "false"}
        onClick={onClick}
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    )
  }
}

class NavbarDivider extends React.Component<INavbarDividerProps> {
  render() {
    const { className } = this.props
    return (
      <hr className={classnames("navbar-divider", className)} />
    )
  }

  shouldComponentUpdate() { return false }
}

class NavbarDropdown extends React.Component<React.PropsWithChildren<INavbarDropdownProps>> {
  render() {
    const {
      className,
      children,
    } = this.props
    return (
      <div className={classnames("navbar-dropdown", className)}>{children}</div>
    )
  }
}

class NavbarEnd extends React.Component<React.PropsWithChildren<INavbarEndProps>> {
  render() {
    const {
      className,
      children,
    } = this.props
    return (
      <div className={classnames("navbar-end", className)}>{children}</div>
    )
  }
}

class NavbarItemDiv extends React.Component<INavbarItemDivProps> {
  render() {
    const {
      className,
      hasDropdown,
      isActive,
      isHoverable,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "navbar-item",
          className,
          {
            "has-dropdown": hasDropdown,
            "is-active": isActive,
            "is-hoverable": isHoverable,
          },
        )}
        {...props}
      >
        {this.props.children}
      </div>
    )
  }
}

class NavbarItem extends React.Component<React.PropsWithChildren<INavbarItemProps>> {
  static Div = NavbarItemDiv

  render() {
    const {
      className,
      download,
      hasDropdown,
      href,
      isActive,
      isHoverable,
      onClick,
      target,
      children,
      ...props
    } = this.props

    const classNameProp = classnames(
      "navbar-item",
      className,
      {
        "has-dropdown": hasDropdown,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
    )

    if (hasDropdown) {
      return (
        <div className={classNameProp}>{children}</div>
      )
    } else {
      return (
        <Anchor
          {...props}
          className={classNameProp}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {children}
        </Anchor>
      )
    }
  }
}

class NavbarLink extends React.Component<React.PropsWithChildren<INavbarLinkProps>> {
  render() {
    const {
      className,
      children,
    } = this.props
    return (
      <a className={classnames("navbar-link", className)}>{children}</a>
    )
  }
}

class NavbarMenu extends React.Component<React.PropsWithChildren<INavbarMenuProps>> {
  render() {
    const {
      className,
      isActive,
      children,
    } = this.props

    return (
      <div className={classnames(
        "navbar-menu",
        className,
        {
          "is-active": isActive,
        }
      )}
      >
        {children}
      </div>
    )
  }
}

class NavbarStart extends React.Component<React.PropsWithChildren<INavbarStartProps>> {
  render() {
    const {
      className,
      children,
    } = this.props
    return (
      <div className={classnames("navbar-start", className)}>{children}</div>
    )
  }
}

export default class Navbar extends React.Component<React.PropsWithChildren<INavbarProps>> {
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
      className,
      isBlack,
      isDark,
      isDanger,
      isFixedBottom,
      isFixedTop,
      isLight,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isTransparent,
      isUnselectable,
      isWarning,
      isWhite,
      children,
      ...props
    } = this.props

    const classNameProp = classnames("navbar",
      className,
      {
        "is-fixed-bottom": isFixedBottom,
        "is-fixed-top": isFixedTop,
        "is-transparent": isTransparent,
        "is-unselectable": isUnselectable,
      },
      mainColorsPropsToClassnames({
        isDanger,
        isInfo,
        isLink,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      shadeColorsPropsToClassnames({
        isBlack,
        isDark,
        isLight,
        isWhite,
      }),
    )

    return (
      <nav {...props} className={classNameProp}>{children}</nav>
    )
  }
}

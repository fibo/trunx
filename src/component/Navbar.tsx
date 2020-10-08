import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
  BulmaClassModifiers,
} from './classNames'
import {
  IMainColorsProps,
  IShadeColorsProps,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
} from "./modifiers"

interface NavbarModifiers extends Pick<
  BulmaClassModifiers, 'hasDropdown'
                     | 'hasShadow'
                     | 'isFixedBottom'
                     | 'isHoverable'
                     | 'isTransparent'
                     | 'isUnselectable'
>

export interface NavbarProps extends React.HTMLAttributes<HTMLElement>,
                                     IMainColorsProps,
                                     IShadeColorsProps,
                                     NavbarModifiers
{}

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

interface NavbarDropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarEndProps extends React.HTMLAttributes<HTMLDivElement> {}

interface NavbarBurgerProps {
  className?: string
  isActive?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

interface NavbarItemDivProps {
  className?: string
  hasDropdown?: boolean
  isActive?: boolean
  isHoverable?: boolean
}

interface NavbarItemModifiers extends Pick<BulmaClassModifiers, 'hasDropdown'
                                                              | 'isActive'
                                                              | 'isHoverable'>

interface NavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
                                  React.HTMLAttributes<HTMLDivElement>,
                                  NavbarItemModifiers
{}

interface NavbarLinkProps {
  className?: string
}

interface NavbarMenuModifiers extends Pick<BulmaClassModifiers, 'isActive'> {}

interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement>,
                                  NavbarMenuModifiers
{}

interface NavbarStartProps extends React.HTMLAttributes<HTMLDivElement> {}

class NavbarBrand extends React.Component<NavbarBrandProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.navbarBrand)
  }
}

class NavbarBurger extends React.Component<NavbarBurgerProps> {
  render() {
    const {
      className,
      isActive,
      onClick,
    } = this.props

    return (
      <a
        className={classnames(
          bulmaClassName.navbarBurger,
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

class NavbarDivider extends React.Component<NavbarDividerProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <hr
        className={classnames(bulmaClassName.navbarDivider, className)}
        {...props}
      />
    )
  }
}

class NavbarDropdown extends React.Component<NavbarDropdownProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.navbarDropdown)
  }
}

class NavbarEnd extends React.Component<NavbarEndProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.navbarEnd)
  }
}

// TODO deprecate this component
class NavbarItemDiv extends React.Component<NavbarItemDivProps> {
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

class NavbarItem extends React.Component<NavbarItemProps> {
  static Div = NavbarItemDiv

  render() {
    const {
      className: classNameProp,
      hasDropdown,
      isActive,
      isHoverable,
      ...props
    } = this.props

    const className = classnames(
      bulmaClassName.navbarItem,
      classNameProp,
      {
        "has-dropdown": hasDropdown,
        "is-active": isActive,
        "is-hoverable": isHoverable,
      },
    )

    if (hasDropdown) {
      return renderDiv({ className, ...props })
      )
    } else {
      return renderA({ className, ...props })
    }
  }
}

class NavbarLink extends React.Component<React.PropsWithChildren<NavbarLinkProps>> {
  render() {
    return renderA(this.props, bulmaClassName.navbarLink)
  }
}

class NavbarMenu extends React.Component<NavbarMenuProps> {
  render() {
    const {
      className,
      isActive,
      ...props
    } = this.props

    renderDiv({
      className: classnames(
        bulmaClassName.navbarMenu
        className,
        {
          "is-active": isActive,
        },
      ), ...props
    })
  }
}

class NavbarStart extends React.Component<NavbarStartProps> {
  render() {
    return renderDiv(this.props, bulmaClassName.navbarStart)
  }
}

export default class Navbar extends React.Component<NavbarProps> {
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

    return (
      <nav
        {...props}
        className={classnames("navbar",
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
        )}
      >{children}</nav>
    )
  }
}

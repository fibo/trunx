Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Anchor_1 = require('./Anchor')
const modifiers_1 = require('./modifiers')
const NavbarBrand = (function (_super) {
  tslib_1.__extends(NavbarBrand, _super)
  function NavbarBrand () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarBrand.prototype.render = function () {
    return (React.createElement('div', { className: 'navbar-brand' }, this.props.children))
  }
  return NavbarBrand
}(React.Component))
const NavbarBurger = (function (_super) {
  tslib_1.__extends(NavbarBurger, _super)
  function NavbarBurger () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarBurger.prototype.render = function () {
    const _a = this.props; const isActive = _a.isActive; const onClick = _a.onClick
    const className = classnames('navbar-burger', {
      'is-active': isActive
    })
    return (React.createElement('a', { className: className, role: 'button', 'aria-label': 'menu', 'aria-expanded': isActive ? 'true' : 'false', onClick: onClick },
      React.createElement('span', { 'aria-hidden': 'true' }),
      React.createElement('span', { 'aria-hidden': 'true' }),
      React.createElement('span', { 'aria-hidden': 'true' })))
  }
  return NavbarBurger
}(React.Component))
const NavbarDivider = (function (_super) {
  tslib_1.__extends(NavbarDivider, _super)
  function NavbarDivider () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarDivider.prototype.render = function () {
    return (React.createElement('hr', { className: 'navbar-divider' }))
  }
  NavbarDivider.prototype.shouldComponentUpdate = function () { return false }
  return NavbarDivider
}(React.Component))
const NavbarDropdown = (function (_super) {
  tslib_1.__extends(NavbarDropdown, _super)
  function NavbarDropdown () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarDropdown.prototype.render = function () {
    return (React.createElement('div', { className: 'navbar-dropdown' }, this.props.children))
  }
  return NavbarDropdown
}(React.Component))
const NavbarEnd = (function (_super) {
  tslib_1.__extends(NavbarEnd, _super)
  function NavbarEnd () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarEnd.prototype.render = function () {
    return (React.createElement('div', { className: 'navbar-end' }, this.props.children))
  }
  return NavbarEnd
}(React.Component))
const NavbarItemDiv = (function (_super) {
  tslib_1.__extends(NavbarItemDiv, _super)
  function NavbarItemDiv () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarItemDiv.prototype.render = function () {
    const _a = this.props; const hasDropdown = _a.hasDropdown; const isActive = _a.isActive; const isHoverable = _a.isHoverable; const props = tslib_1.__rest(_a, ['hasDropdown', 'isActive', 'isHoverable'])
    const className = classnames('navbar-item', {
      'has-dropdown': hasDropdown,
      'is-active': isActive,
      'is-hoverable': isHoverable
    })
    return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return NavbarItemDiv
}(React.Component))
const NavbarItem = (function (_super) {
  tslib_1.__extends(NavbarItem, _super)
  function NavbarItem () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarItem.prototype.render = function () {
    const _a = this.props; const download = _a.download; const hasDropdown = _a.hasDropdown; const href = _a.href; const isActive = _a.isActive; const isHoverable = _a.isHoverable; const onClick = _a.onClick; const target = _a.target; const props = tslib_1.__rest(_a, ['download', 'hasDropdown', 'href', 'isActive', 'isHoverable', 'onClick', 'target'])
    const className = classnames('navbar-item', {
      'has-dropdown': hasDropdown,
      'is-active': isActive,
      'is-hoverable': isHoverable
    })
    if (hasDropdown) {
      return (React.createElement('div', { className: className }, this.props.children))
    } else {
      return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, download: download, href: href, onClick: onClick, target: target }), this.props.children))
    }
  }
  NavbarItem.Div = NavbarItemDiv
  return NavbarItem
}(React.Component))
const NavbarLink = (function (_super) {
  tslib_1.__extends(NavbarLink, _super)
  function NavbarLink () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarLink.prototype.render = function () {
    return (React.createElement('a', { className: 'navbar-link' }, this.props.children))
  }
  return NavbarLink
}(React.Component))
const NavbarMenu = (function (_super) {
  tslib_1.__extends(NavbarMenu, _super)
  function NavbarMenu () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarMenu.prototype.render = function () {
    const isActive = this.props.isActive
    const className = classnames('navbar-menu', {
      'is-active': isActive
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return NavbarMenu
}(React.Component))
const NavbarStart = (function (_super) {
  tslib_1.__extends(NavbarStart, _super)
  function NavbarStart () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  NavbarStart.prototype.render = function () {
    return (React.createElement('div', { className: 'navbar-start' }, this.props.children))
  }
  return NavbarStart
}(React.Component))
const Navbar = (function (_super) {
  tslib_1.__extends(Navbar, _super)
  function Navbar () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Navbar.prototype.componentDidMount = function () {
    const _a = this.props; const isFixedBottom = _a.isFixedBottom; const isFixedTop = _a.isFixedTop
    if (isFixedTop) {
      document.body.classList.add('has-navbar-fixed-top')
    } else if (isFixedBottom) {
      document.body.classList.add('has-navbar-fixed-bottom')
    }
  }
  Navbar.prototype.componentWillUnmount = function () {
    const _a = this.props; const isFixedBottom = _a.isFixedBottom; const isFixedTop = _a.isFixedTop
    if (isFixedBottom) {
      document.body.classList.remove('has-navbar-fixed-bottom')
    } else if (isFixedTop) {
      document.body.classList.remove('has-navbar-fixed-top')
    }
  }
  Navbar.prototype.render = function () {
    const _a = this.props; const isBlack = _a.isBlack; const isDark = _a.isDark; const isDanger = _a.isDanger; const isFixedBottom = _a.isFixedBottom; const isFixedTop = _a.isFixedTop; const isLight = _a.isLight; const isInfo = _a.isInfo; const isPrimary = _a.isPrimary; const isSuccess = _a.isSuccess; const isTransparent = _a.isTransparent; const isUnselectable = _a.isUnselectable; const isWarning = _a.isWarning; const isWhite = _a.isWhite; const props = tslib_1.__rest(_a, ['isBlack', 'isDark', 'isDanger', 'isFixedBottom', 'isFixedTop', 'isLight', 'isInfo', 'isPrimary', 'isSuccess', 'isTransparent', 'isUnselectable', 'isWarning', 'isWhite'])
    const className = classnames('navbar', {
      'is-fixed-bottom': isFixedBottom,
      'is-fixed-top': isFixedTop,
      'is-transparent': isTransparent,
      'is-unselectable': isUnselectable
    }, modifiers_1.mainColorsPropsToClassenames({
      isDanger: isDanger,
      isInfo: isInfo,
      isPrimary: isPrimary,
      isSuccess: isSuccess,
      isWarning: isWarning
    }), modifiers_1.shadeColorsPropsToClassenames({
      isBlack: isBlack,
      isDark: isDark,
      isLight: isLight,
      isWhite: isWhite
    }))
    return (React.createElement('nav', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  Navbar.Brand = NavbarBrand
  Navbar.Burger = NavbarBurger
  Navbar.Divider = NavbarDivider
  Navbar.Dropdown = NavbarDropdown
  Navbar.End = NavbarEnd
  Navbar.Item = NavbarItem
  Navbar.Link = NavbarLink
  Navbar.Menu = NavbarMenu
  Navbar.Start = NavbarStart
  return Navbar
}(React.Component))
exports.default = Navbar

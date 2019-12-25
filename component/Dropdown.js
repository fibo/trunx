Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Anchor_1 = require('./Anchor')
const DropdownContent = (function (_super) {
  tslib_1.__extends(DropdownContent, _super)
  function DropdownContent () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  DropdownContent.prototype.render = function () {
    return (React.createElement('div', { className: 'dropdown-content' }, this.props.children))
  }
  return DropdownContent
}(React.Component))
const DropdownDivider = (function (_super) {
  tslib_1.__extends(DropdownDivider, _super)
  function DropdownDivider () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  DropdownDivider.prototype.render = function () {
    return (React.createElement('div', { className: 'dropdown-divider' }, this.props.children))
  }
  return DropdownDivider
}(React.Component))
const DropdownItem = (function (_super) {
  tslib_1.__extends(DropdownItem, _super)
  function DropdownItem () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  DropdownItem.prototype.render = function () {
    const _a = this.props; const href = _a.href; const isActive = _a.isActive; const onClick = _a.onClick; const props = tslib_1.__rest(_a, ['href', 'isActive', 'onClick'])
    const className = classnames('dropdown-item', {
      'is-active': isActive
    })
    return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, href: href, onClick: onClick }), this.props.children))
  }
  return DropdownItem
}(React.Component))
const DropdownMenu = (function (_super) {
  tslib_1.__extends(DropdownMenu, _super)
  function DropdownMenu () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  DropdownMenu.prototype.render = function () {
    return (React.createElement('div', { className: 'dropdown-menu', role: 'menu' }, this.props.children))
  }
  return DropdownMenu
}(React.Component))
const DropdownTrigger = (function (_super) {
  tslib_1.__extends(DropdownTrigger, _super)
  function DropdownTrigger () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  DropdownTrigger.prototype.render = function () {
    return (React.createElement('div', { className: 'dropdown-trigger' }, this.props.children))
  }
  return DropdownTrigger
}(React.Component))
const Dropdown = (function (_super) {
  tslib_1.__extends(Dropdown, _super)
  function Dropdown () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Dropdown.prototype.render = function () {
    const _a = this.props; const isActive = _a.isActive; const isHoverable = _a.isHoverable; const isRight = _a.isRight; const isUp = _a.isUp
    const className = classnames('dropdown', {
      'is-active': isActive,
      'is-hoverable': isHoverable,
      'is-right': isRight,
      'is-up': isUp
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  Dropdown.Content = DropdownContent
  Dropdown.Divider = DropdownDivider
  Dropdown.Item = DropdownItem
  Dropdown.Menu = DropdownMenu
  Dropdown.Trigger = DropdownTrigger
  return Dropdown
}(React.Component))
exports.default = Dropdown

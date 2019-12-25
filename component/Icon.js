Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const IconSvg = (function (_super) {
  tslib_1.__extends(IconSvg, _super)
  function IconSvg () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  IconSvg.prototype.render = function () {
    const _a = this.props; const icon = _a.icon; const fill = _a.fill; const size = _a.size
    return (React.createElement('svg', { 'aria-hidden': 'true', height: size, role: 'img', viewBox: icon.viewBox, width: size, xmlns: 'http://www.w3.org/2000/svg' },
      React.createElement('path', { fill: fill, d: icon.d })))
  }
  IconSvg.defaultProps = {
    fill: 'currentColor',
    size: '1em'
  }
  return IconSvg
}(React.Component))
const Icon = (function (_super) {
  tslib_1.__extends(Icon, _super)
  function Icon () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Icon.prototype.render = function () {
    const _a = this.props; const onClick = _a.onClick; const isLeft = _a.isLeft; const isRight = _a.isRight
    const className = classnames('icon', {
      'is-left': isLeft,
      'is-right': isRight
    }, modifiers_1.backgroundColorHelpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('span', { className: className, onClick: onClick }, this.props.children))
  }
  Icon.Svg = IconSvg
  return Icon
}(React.Component))
exports.default = Icon

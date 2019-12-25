Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Tabs = (function (_super) {
  tslib_1.__extends(Tabs, _super)
  function Tabs () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Tabs.prototype.render = function () {
    const _a = this.props; const isBoxed = _a.isBoxed; const isCentered = _a.isCentered; const isFullwidth = _a.isFullwidth; const isLarge = _a.isLarge; const isMedium = _a.isMedium; const isRight = _a.isRight; const isSmall = _a.isSmall; const isToggle = _a.isToggle; const isToggleRounded = _a.isToggleRounded; const props = tslib_1.__rest(_a, ['isBoxed', 'isCentered', 'isFullwidth', 'isLarge', 'isMedium', 'isRight', 'isSmall', 'isToggle', 'isToggleRounded'])
    const className = classnames('tabs', {
      'is-boxed': isBoxed,
      'is-centered': isCentered,
      'is-fullwidth': isFullwidth,
      'is-right': isRight,
      'is-toggle': isToggle,
      'is-toggle-rounded': isToggleRounded
    }, modifiers_1.sizePropsToClassenames({
      isLarge: isLarge,
      isMedium: isMedium,
      isSmall: isSmall
    }))
    return (React.createElement('nav', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return Tabs
}(React.Component))
exports.default = Tabs

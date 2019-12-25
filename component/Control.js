Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Control = (function (_super) {
  tslib_1.__extends(Control, _super)
  function Control () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Control.prototype.render = function () {
    const _a = this.props; const hasIconsLeft = _a.hasIconsLeft; const hasIconsRight = _a.hasIconsRight; const isExpanded = _a.isExpanded; const isLoading = _a.isLoading
    const className = classnames('control', {
      'has-icons-left': hasIconsLeft,
      'has-icons-right': hasIconsRight,
      'is-expanded': isExpanded,
      'is-loading': isLoading
    }, modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Control
}(React.Component))
exports.default = Control

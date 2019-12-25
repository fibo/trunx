Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const B = (function (_super) {
  tslib_1.__extends(B, _super)
  function B () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  B.prototype.render = function () {
    const className = classnames(modifiers_1.backgroundColorHelpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('b', { className: className }, this.props.children))
  }
  return B
}(React.Component))
exports.default = B

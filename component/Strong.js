Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Strong = (function (_super) {
  tslib_1.__extends(Strong, _super)
  function Strong () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Strong.prototype.render = function () {
    const className = classnames(modifiers_1.backgroundColorHelpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('strong', { className: className }, this.props.children))
  }
  return Strong
}(React.Component))
exports.default = Strong

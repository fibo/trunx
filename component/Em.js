Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Em = (function (_super) {
  tslib_1.__extends(Em, _super)
  function Em () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Em.prototype.render = function () {
    const className = classnames(modifiers_1.backgroundColorHelpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('em', { className: className }, this.props.children))
  }
  return Em
}(React.Component))
exports.default = Em

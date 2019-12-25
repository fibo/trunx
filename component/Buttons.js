Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Buttons = (function (_super) {
  tslib_1.__extends(Buttons, _super)
  function Buttons () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Buttons.prototype.render = function () {
    const className = classnames('buttons', modifiers_1.helpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Buttons
}(React.Component))
exports.default = Buttons

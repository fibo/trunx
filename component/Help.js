Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Help = (function (_super) {
  tslib_1.__extends(Help, _super)
  function Help () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Help.prototype.render = function () {
    const className = classnames('help', modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('p', { className: className }, this.props.children))
  }
  return Help
}(React.Component))
exports.default = Help

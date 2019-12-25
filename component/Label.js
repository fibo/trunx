Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Label = (function (_super) {
  tslib_1.__extends(Label, _super)
  function Label () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Label.prototype.render = function () {
    const className = classnames('label', modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('label', { className: className }, this.props.children))
  }
  return Label
}(React.Component))
exports.default = Label

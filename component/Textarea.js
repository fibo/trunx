Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Textarea = (function (_super) {
  tslib_1.__extends(Textarea, _super)
  function Textarea () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Textarea.prototype.render = function () {
    const _a = this.props; const isFocused = _a.isFocused; const isHovered = _a.isHovered; const placeholder = _a.placeholder; const rows = _a.rows; const props = tslib_1.__rest(_a, ['isFocused', 'isHovered', 'placeholder', 'rows'])
    const className = classnames('textarea', {
      'is-focused': isFocused,
      'is-hovered': isHovered
    }, modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('textarea', tslib_1.__assign({}, props, { className: className, placeholder: placeholder, rows: rows })))
  }
  return Textarea
}(React.Component))
exports.default = Textarea

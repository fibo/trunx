Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Select = (function (_super) {
  tslib_1.__extends(Select, _super)
  function Select () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Select.prototype.render = function () {
    const _a = this.props; const isFocused = _a.isFocused; const isHovered = _a.isHovered; const isLoading = _a.isLoading; const isMultiple = _a.isMultiple; const props = tslib_1.__rest(_a, ['isFocused', 'isHovered', 'isLoading', 'isMultiple'])
    const className = classnames('select', {
      'is-focused': isFocused,
      'is-hovered': isHovered,
      'is-loading': isLoading,
      'is-multiple': isMultiple
    }, modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('div', { className: className },
      React.createElement('select', tslib_1.__assign({}, props, { multiple: isMultiple }), this.props.children)))
  }
  return Select
}(React.Component))
exports.default = Select

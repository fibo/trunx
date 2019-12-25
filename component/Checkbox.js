Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const React = require('react')
const Checkbox = (function (_super) {
  tslib_1.__extends(Checkbox, _super)
  function Checkbox () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Checkbox.prototype.render = function () {
    const _a = this.props; const children = _a.children; const inputRef = _a.inputRef; const props = tslib_1.__rest(_a, ['children', 'inputRef'])
    return (React.createElement('label', { className: 'checkbox' },
      React.createElement('input', tslib_1.__assign({ ref: inputRef, type: 'checkbox' }, props)),
      ' ',
      children))
  }
  return Checkbox
}(React.Component))
exports.default = Checkbox

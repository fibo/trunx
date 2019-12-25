Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const React = require('react')
const Radio = (function (_super) {
  tslib_1.__extends(Radio, _super)
  function Radio () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Radio.prototype.render = function () {
    const _a = this.props; const children = _a.children; const inputRef = _a.inputRef; const props = tslib_1.__rest(_a, ['children', 'inputRef'])
    return (React.createElement('label', { className: 'radio' },
      React.createElement('input', tslib_1.__assign({}, props, { type: 'radio' })),
      children))
  }
  return Radio
}(React.Component))
exports.default = Radio

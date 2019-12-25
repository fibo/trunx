Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Box = (function (_super) {
  tslib_1.__extends(Box, _super)
  function Box () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Box.prototype.render = function () {
    const _a = this.props; const children = _a.children; const props = tslib_1.__rest(_a, ['children'])
    const className = classnames('box', modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), children))
  }
  return Box
}(React.Component))
exports.default = Box

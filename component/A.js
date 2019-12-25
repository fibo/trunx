Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const A = (function (_super) {
  tslib_1.__extends(A, _super)
  function A () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  A.prototype.render = function () {
    const _a = this.props; const children = _a.children; const isActive = _a.isActive; const isClearfix = _a.isClearfix; const isPulledLeft = _a.isPulledLeft; const isPulledRight = _a.isPulledRight; const props = tslib_1.__rest(_a, ['children', 'isActive', 'isClearfix', 'isPulledLeft', 'isPulledRight'])
    const className = classnames({
      'is-active': isActive
    }, modifiers_1.floatHelpersPropsToClassenames({
      isClearfix: isClearfix,
      isPulledLeft: isPulledLeft,
      isPulledRight: isPulledRight
    }))
    return (React.createElement('a', tslib_1.__assign({}, props, { className: className }), children))
  }
  return A
}(React.Component))
exports.default = A

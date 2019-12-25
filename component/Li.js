Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Li = (function (_super) {
  tslib_1.__extends(Li, _super)
  function Li () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Li.prototype.render = function () {
    const _a = this.props; const isActive = _a.isActive; const props = tslib_1.__rest(_a, ['isActive'])
    const className = classnames({
      'is-active': isActive
    })
    return (React.createElement('li', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return Li
}(React.Component))
exports.default = Li

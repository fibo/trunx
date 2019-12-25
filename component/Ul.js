Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const React = require('react')
const Ul = (function (_super) {
  tslib_1.__extends(Ul, _super)
  function Ul () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Ul.prototype.render = function () {
    const _a = this.props; const children = _a.children; const props = tslib_1.__rest(_a, ['children'])
    return (React.createElement('ul', tslib_1.__assign({}, props), children))
  }
  return Ul
}(React.Component))
exports.default = Ul

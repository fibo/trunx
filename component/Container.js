Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Container = (function (_super) {
  tslib_1.__extends(Container, _super)
  function Container () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Container.prototype.render = function () {
    const _a = this.props; const isFluid = _a.isFluid; const isFullhd = _a.isFullhd; const isWidescreen = _a.isWidescreen
    const className = classnames('container', {
      'is-fluid': isFluid,
      'is-fullhd': isFullhd,
      'is-widescreen': isWidescreen
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Container
}(React.Component))
exports.default = Container

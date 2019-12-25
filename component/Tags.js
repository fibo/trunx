Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Tags = (function (_super) {
  tslib_1.__extends(Tags, _super)
  function Tags () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Tags.prototype.render = function () {
    const _a = this.props; const areLarge = _a.areLarge; const areMedium = _a.areMedium; const children = _a.children; const hasAddons = _a.hasAddons; const props = tslib_1.__rest(_a, ['areLarge', 'areMedium', 'children', 'hasAddons'])
    const className = classnames('tags', {
      'are-large': areLarge,
      'are-medium': areMedium,
      'has-addons': hasAddons
    })
    return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), children))
  }
  return Tags
}(React.Component))
exports.default = Tags

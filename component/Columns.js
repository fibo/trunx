Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Columns = (function (_super) {
  tslib_1.__extends(Columns, _super)
  function Columns () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Columns.prototype.render = function () {
    const _a = this.props; const isDesktop = _a.isDesktop; const isGapless = _a.isGapless; const isMobile = _a.isMobile; const isMultiline = _a.isMultiline
    const className = classnames('columns', {
      'is-desktop': isDesktop,
      'is-gapless': isGapless,
      'is-mobile': isMobile,
      'is-multiline': isMultiline
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Columns
}(React.Component))
exports.default = Columns

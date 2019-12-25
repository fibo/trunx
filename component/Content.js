Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Content = (function (_super) {
  tslib_1.__extends(Content, _super)
  function Content () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Content.prototype.render = function () {
    const _a = this.props; const hasTextCentered = _a.hasTextCentered; const hasTextJustified = _a.hasTextJustified; const hasTextLeft = _a.hasTextLeft; const hasTextRight = _a.hasTextRight
    const className = classnames('content', {
      'has-text-centered': hasTextCentered,
      'has-text-justified': hasTextJustified,
      'has-text-left': hasTextLeft,
      'has-text-right': hasTextRight
    }, modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Content
}(React.Component))
exports.default = Content

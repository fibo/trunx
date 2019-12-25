Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Subtitle = (function (_super) {
  tslib_1.__extends(Subtitle, _super)
  function Subtitle () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Subtitle.prototype.render = function () {
    const _a = this.props; const is1 = _a.is1; const is2 = _a.is2; const is3 = _a.is3; const is4 = _a.is4; const is5 = _a.is5; const is6 = _a.is6
    const className = classnames('subtitle', {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6
    }, modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('p', { className: className }, this.props.children))
  }
  return Subtitle
}(React.Component))
exports.default = Subtitle

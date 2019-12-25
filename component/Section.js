Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Section = (function (_super) {
  tslib_1.__extends(Section, _super)
  function Section () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Section.prototype.render = function () {
    const _a = this.props; const isInvisible = _a.isInvisible; const isLarge = _a.isLarge; const isMarginLess = _a.isMarginLess; const isMedium = _a.isMedium; const isPaddingLess = _a.isPaddingLess; const isSrOnly = _a.isSrOnly
    const className = classnames('section', {
      'is-large': isLarge,
      'is-medium': isMedium
    }, modifiers_1.helpersPropsToClassenames({
      isInvisible: isInvisible,
      isMarginLess: isMarginLess,
      isPaddingLess: isPaddingLess,
      isSrOnly: isSrOnly
    }))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Section
}(React.Component))
exports.default = Section

Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Progress = (function (_super) {
  tslib_1.__extends(Progress, _super)
  function Progress () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Progress.prototype.render = function () {
    const _a = this.props; const isBlack = _a.isBlack; const isDanger = _a.isDanger; const isDark = _a.isDark; const isInfo = _a.isInfo; const isLarge = _a.isLarge; const isLight = _a.isLight; const isLink = _a.isLink; const isMedium = _a.isMedium; const isPrimary = _a.isPrimary; const isSmall = _a.isSmall; const isSuccess = _a.isSuccess; const isWarning = _a.isWarning; const isWhite = _a.isWhite; const props = tslib_1.__rest(_a, ['isBlack', 'isDanger', 'isDark', 'isInfo', 'isLarge', 'isLight', 'isLink', 'isMedium', 'isPrimary', 'isSmall', 'isSuccess', 'isWarning', 'isWhite'])
    const className = classnames('progress', modifiers_1.mainColorsPropsToClassenames({
      isDanger: isDanger,
      isInfo: isInfo,
      isLink: isLink,
      isPrimary: isPrimary,
      isSuccess: isSuccess,
      isWarning: isWarning
    }), modifiers_1.shadeColorsPropsToClassenames({
      isBlack: isBlack,
      isDark: isDark,
      isLight: isLight,
      isWhite: isWhite
    }), modifiers_1.sizePropsToClassenames({
      isLarge: isLarge,
      isMedium: isMedium,
      isSmall: isSmall
    }))
    return (React.createElement('progress', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return Progress
}(React.Component))
exports.default = Progress

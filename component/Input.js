Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Input = (function (_super) {
  tslib_1.__extends(Input, _super)
  function Input () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Input.prototype.render = function () {
    const _a = this.props; const inputRef = _a.inputRef; const isDanger = _a.isDanger; const isFocused = _a.isFocused; const isHovered = _a.isHovered; const isInfo = _a.isInfo; const isLarge = _a.isLarge; const isMedium = _a.isMedium; const isPrimary = _a.isPrimary; const isRounded = _a.isRounded; const isSmall = _a.isSmall; const isSuccess = _a.isSuccess; const isStatic = _a.isStatic; const isWarning = _a.isWarning; const type = _a.type; const props = tslib_1.__rest(_a, ['inputRef', 'isDanger', 'isFocused', 'isHovered', 'isInfo', 'isLarge', 'isMedium', 'isPrimary', 'isRounded', 'isSmall', 'isSuccess', 'isStatic', 'isWarning', 'type'])
    const className = classnames('input', {
      'is-focused': isFocused,
      'is-hovered': isHovered,
      'is-rounded': isRounded,
      'is-static': isStatic
    }, modifiers_1.mainColorsPropsToClassenames({
      isDanger: isDanger,
      isInfo: isInfo,
      isPrimary: isPrimary,
      isSuccess: isSuccess,
      isWarning: isWarning
    }), modifiers_1.sizePropsToClassenames({
      isLarge: isLarge,
      isMedium: isMedium,
      isSmall: isSmall
    }))
    return (React.createElement('input', tslib_1.__assign({ className: className, ref: inputRef, type: type }, props)))
  }
  return Input
}(React.Component))
exports.default = Input

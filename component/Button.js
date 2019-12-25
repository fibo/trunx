Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Anchor_1 = require('./Anchor')
const modifiers_1 = require('./modifiers')
const Button = (function (_super) {
  tslib_1.__extends(Button, _super)
  function Button () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Button.prototype.render = function () {
    const _a = this.props; const disabled = _a.disabled; const download = _a.download; const hasTextBlack = _a.hasTextBlack; const hasTextBlackBis = _a.hasTextBlackBis; const hasTextBlackTer = _a.hasTextBlackTer; const hasTextDanger = _a.hasTextDanger; const hasTextDark = _a.hasTextDark; const hasTextGrey = _a.hasTextGrey; const hasTextGreyDark = _a.hasTextGreyDark; const hasTextGreyDarker = _a.hasTextGreyDarker; const hasTextGreyLight = _a.hasTextGreyLight; const hasTextGreyLighter = _a.hasTextGreyLighter; const hasTextInfo = _a.hasTextInfo; const hasTextLight = _a.hasTextLight; const hasTextLink = _a.hasTextLink; const hasTextPrimary = _a.hasTextPrimary; const hasTextSuccess = _a.hasTextSuccess; const hasTextWarning = _a.hasTextWarning; const hasTextWhite = _a.hasTextWhite; const hasTextWhiteBis = _a.hasTextWhiteBis; const hasTextWhiteTer = _a.hasTextWhiteTer; const href = _a.href; const isActive = _a.isActive; const isBlack = _a.isBlack; const isDanger = _a.isDanger; const isDark = _a.isDark; const isFocused = _a.isFocused; const isFullwidth = _a.isFullwidth; const isInfo = _a.isInfo; const isInverted = _a.isInverted; const isInvisible = _a.isInvisible; const isLarge = _a.isLarge; const isLight = _a.isLight; const isLink = _a.isLink; const isLoading = _a.isLoading; const isMarginLess = _a.isMarginLess; const isMedium = _a.isMedium; const isNormal = _a.isNormal; const isOutlined = _a.isOutlined; const isPaddingLess = _a.isPaddingLess; const isPrimary = _a.isPrimary; const isSmall = _a.isSmall; const isSrOnly = _a.isSrOnly; const isSuccess = _a.isSuccess; const isRounded = _a.isRounded; const isStatic = _a.isStatic; const isText = _a.isText; const isWarning = _a.isWarning; const isWhite = _a.isWhite; const onClick = _a.onClick; const target = _a.target; const type = _a.type; const value = _a.value; const props = tslib_1.__rest(_a, ['disabled', 'download', 'hasTextBlack', 'hasTextBlackBis', 'hasTextBlackTer', 'hasTextDanger', 'hasTextDark', 'hasTextGrey', 'hasTextGreyDark', 'hasTextGreyDarker', 'hasTextGreyLight', 'hasTextGreyLighter', 'hasTextInfo', 'hasTextLight', 'hasTextLink', 'hasTextPrimary', 'hasTextSuccess', 'hasTextWarning', 'hasTextWhite', 'hasTextWhiteBis', 'hasTextWhiteTer', 'href', 'isActive', 'isBlack', 'isDanger', 'isDark', 'isFocused', 'isFullwidth', 'isInfo', 'isInverted', 'isInvisible', 'isLarge', 'isLight', 'isLink', 'isLoading', 'isMarginLess', 'isMedium', 'isNormal', 'isOutlined', 'isPaddingLess', 'isPrimary', 'isSmall', 'isSrOnly', 'isSuccess', 'isRounded', 'isStatic', 'isText', 'isWarning', 'isWhite', 'onClick', 'target', 'type', 'value'])
    const className = classnames('button', {
      'is-active': isActive,
      'is-focused': isFocused,
      'is-fullwidth': isFullwidth,
      'is-inverted': isInverted,
      'is-loading': isLoading,
      'is-normal': isNormal,
      'is-outlined': isOutlined,
      'is-rounded': isRounded,
      'is-static': isStatic,
      'is-text': isText
    }, modifiers_1.helpersPropsToClassenames({
      isInvisible: isInvisible,
      isMarginLess: isMarginLess,
      isPaddingLess: isPaddingLess,
      isSrOnly: isSrOnly
    }), modifiers_1.mainColorsPropsToClassenames({
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
    }), modifiers_1.textColorHelpersPropsToClassenames({
      hasTextBlack: hasTextBlack,
      hasTextBlackBis: hasTextBlackBis,
      hasTextBlackTer: hasTextBlackTer,
      hasTextDanger: hasTextDanger,
      hasTextDark: hasTextDark,
      hasTextGrey: hasTextGrey,
      hasTextGreyDark: hasTextGreyDark,
      hasTextGreyDarker: hasTextGreyDarker,
      hasTextGreyLight: hasTextGreyLight,
      hasTextGreyLighter: hasTextGreyLighter,
      hasTextInfo: hasTextInfo,
      hasTextLight: hasTextLight,
      hasTextLink: hasTextLink,
      hasTextPrimary: hasTextPrimary,
      hasTextSuccess: hasTextSuccess,
      hasTextWarning: hasTextWarning,
      hasTextWhite: hasTextWhite,
      hasTextWhiteBis: hasTextWhiteBis,
      hasTextWhiteTer: hasTextWhiteTer
    }))
    if (href) {
      return (React.createElement(Anchor_1.Anchor, { className: className, download: download, href: href, onClick: onClick, target: target }, this.props.children))
    }
    if (type) {
      if (disabled || isLoading) {
        return (React.createElement('button', { className: className, disabled: disabled }, value))
      } else {
        return (React.createElement('input', { className: className, type: type, value: value }))
      }
    }
    return (React.createElement('button', tslib_1.__assign({ className: className, disabled: disabled, onClick: onClick }, props), this.props.children))
  }
  return Button
}(React.Component))
exports.default = Button

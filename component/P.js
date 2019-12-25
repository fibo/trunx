Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const P = (function (_super) {
  tslib_1.__extends(P, _super)
  function P () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  P.prototype.render = function () {
    const _a = this.props; const hasBackgroundBlack = _a.hasBackgroundBlack; const hasBackgroundBlackBis = _a.hasBackgroundBlackBis; const hasBackgroundBlackTer = _a.hasBackgroundBlackTer; const hasBackgroundDanger = _a.hasBackgroundDanger; const hasBackgroundDark = _a.hasBackgroundDark; const hasBackgroundGrey = _a.hasBackgroundGrey; const hasBackgroundGreyDark = _a.hasBackgroundGreyDark; const hasBackgroundGreyDarker = _a.hasBackgroundGreyDarker; const hasBackgroundGreyLight = _a.hasBackgroundGreyLight; const hasBackgroundGreyLighter = _a.hasBackgroundGreyLighter; const hasBackgroundInfo = _a.hasBackgroundInfo; const hasBackgroundLight = _a.hasBackgroundLight; const hasBackgroundLink = _a.hasBackgroundLink; const hasBackgroundPrimary = _a.hasBackgroundPrimary; const hasBackgroundSuccess = _a.hasBackgroundSuccess; const hasBackgroundWarning = _a.hasBackgroundWarning; const hasBackgroundWhite = _a.hasBackgroundWhite; const hasBackgroundWhiteBis = _a.hasBackgroundWhiteBis; const hasBackgroundWhiteTer = _a.hasBackgroundWhiteTer; const hasTextBlack = _a.hasTextBlack; const hasTextBlackBis = _a.hasTextBlackBis; const hasTextBlackTer = _a.hasTextBlackTer; const hasTextCentered = _a.hasTextCentered; const hasTextDanger = _a.hasTextDanger; const hasTextDark = _a.hasTextDark; const hasTextGrey = _a.hasTextGrey; const hasTextGreyDark = _a.hasTextGreyDark; const hasTextGreyDarker = _a.hasTextGreyDarker; const hasTextGreyLight = _a.hasTextGreyLight; const hasTextGreyLighter = _a.hasTextGreyLighter; const hasTextInfo = _a.hasTextInfo; const hasTextJustified = _a.hasTextJustified; const hasTextLeft = _a.hasTextLeft; const hasTextLight = _a.hasTextLight; const hasTextLink = _a.hasTextLink; const hasTextPrimary = _a.hasTextPrimary; const hasTextRight = _a.hasTextRight; const hasTextSuccess = _a.hasTextSuccess; const hasTextWarning = _a.hasTextWarning; const hasTextWhite = _a.hasTextWhite; const hasTextWhiteBis = _a.hasTextWhiteBis; const hasTextWhiteTer = _a.hasTextWhiteTer; const props = tslib_1.__rest(_a, ['hasBackgroundBlack', 'hasBackgroundBlackBis', 'hasBackgroundBlackTer', 'hasBackgroundDanger', 'hasBackgroundDark', 'hasBackgroundGrey', 'hasBackgroundGreyDark', 'hasBackgroundGreyDarker', 'hasBackgroundGreyLight', 'hasBackgroundGreyLighter', 'hasBackgroundInfo', 'hasBackgroundLight', 'hasBackgroundLink', 'hasBackgroundPrimary', 'hasBackgroundSuccess', 'hasBackgroundWarning', 'hasBackgroundWhite', 'hasBackgroundWhiteBis', 'hasBackgroundWhiteTer', 'hasTextBlack', 'hasTextBlackBis', 'hasTextBlackTer', 'hasTextCentered', 'hasTextDanger', 'hasTextDark', 'hasTextGrey', 'hasTextGreyDark', 'hasTextGreyDarker', 'hasTextGreyLight', 'hasTextGreyLighter', 'hasTextInfo', 'hasTextJustified', 'hasTextLeft', 'hasTextLight', 'hasTextLink', 'hasTextPrimary', 'hasTextRight', 'hasTextSuccess', 'hasTextWarning', 'hasTextWhite', 'hasTextWhiteBis', 'hasTextWhiteTer'])
    const className = classnames(modifiers_1.alignementPropsToClassenames({
      hasTextCentered: hasTextCentered,
      hasTextJustified: hasTextJustified,
      hasTextLeft: hasTextLeft,
      hasTextRight: hasTextRight
    }), modifiers_1.backgroundColorHelpersPropsToClassenames({
      hasBackgroundBlack: hasBackgroundBlack,
      hasBackgroundBlackBis: hasBackgroundBlackBis,
      hasBackgroundBlackTer: hasBackgroundBlackTer,
      hasBackgroundDanger: hasBackgroundDanger,
      hasBackgroundDark: hasBackgroundDark,
      hasBackgroundGrey: hasBackgroundGrey,
      hasBackgroundGreyDark: hasBackgroundGreyDark,
      hasBackgroundGreyDarker: hasBackgroundGreyDarker,
      hasBackgroundGreyLight: hasBackgroundGreyLight,
      hasBackgroundGreyLighter: hasBackgroundGreyLighter,
      hasBackgroundInfo: hasBackgroundInfo,
      hasBackgroundLight: hasBackgroundLight,
      hasBackgroundLink: hasBackgroundLink,
      hasBackgroundPrimary: hasBackgroundPrimary,
      hasBackgroundSuccess: hasBackgroundSuccess,
      hasBackgroundWarning: hasBackgroundWarning,
      hasBackgroundWhite: hasBackgroundWhite,
      hasBackgroundWhiteBis: hasBackgroundWhiteBis,
      hasBackgroundWhiteTer: hasBackgroundWhiteTer
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
    return (React.createElement('p', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return P
}(React.Component))
exports.default = P

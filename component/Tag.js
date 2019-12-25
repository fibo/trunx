Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Anchor_1 = require('./Anchor')
const modifiers_1 = require('./modifiers')
const Tag = (function (_super) {
  tslib_1.__extends(Tag, _super)
  function Tag () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Tag.prototype.render = function () {
    const _a = this.props; const children = _a.children; const href = _a.href; const isBlack = _a.isBlack; const isDanger = _a.isDanger; const isDark = _a.isDark; const isDelete = _a.isDelete; const isInfo = _a.isInfo; const isLarge = _a.isLarge; const isLight = _a.isLight; const isLink = _a.isLink; const isMedium = _a.isMedium; const isNormal = _a.isNormal; const isPrimary = _a.isPrimary; const isRounded = _a.isRounded; const isSmall = _a.isSmall; const isSuccess = _a.isSuccess; const isWarning = _a.isWarning; const isWhite = _a.isWhite; const onClick = _a.onClick; const target = _a.target; const props = tslib_1.__rest(_a, ['children', 'href', 'isBlack', 'isDanger', 'isDark', 'isDelete', 'isInfo', 'isLarge', 'isLight', 'isLink', 'isMedium', 'isNormal', 'isPrimary', 'isRounded', 'isSmall', 'isSuccess', 'isWarning', 'isWhite', 'onClick', 'target'])
    const className = classnames('tag', {
      'is-black': isBlack,
      'is-dark': isDark,
      'is-delete': isDelete,
      'is-light': isLight,
      'is-normal': isNormal,
      'is-rounded': isRounded,
      'is-white': isWhite
    }, modifiers_1.mainColorsPropsToClassenames({
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
    if (href || onClick) {
      return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, href: href, onClick: onClick, target: target }), children))
    } else {
      return (React.createElement('span', tslib_1.__assign({}, props, { className: className }), children))
    }
  }
  return Tag
}(React.Component))
exports.default = Tag

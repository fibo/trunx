Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Nav = (function (_super) {
  tslib_1.__extends(Nav, _super)
  function Nav () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Nav.prototype.render = function () {
    const _a = this.props; const breadcrumb = _a.breadcrumb; const hasArrowSeparator = _a.hasArrowSeparator; const hasBulletSeparator = _a.hasBulletSeparator; const hasDotSeparator = _a.hasDotSeparator; const hasSuccedesSeparator = _a.hasSuccedesSeparator; const isCentered = _a.isCentered; const isLarge = _a.isLarge; const isMedium = _a.isMedium; const isRight = _a.isRight; const isSmall = _a.isSmall; const props = tslib_1.__rest(_a, ['breadcrumb', 'hasArrowSeparator', 'hasBulletSeparator', 'hasDotSeparator', 'hasSuccedesSeparator', 'isCentered', 'isLarge', 'isMedium', 'isRight', 'isSmall'])
    const className = classnames({
      breadcrumb: breadcrumb,
      'has-arrow-separator': hasArrowSeparator,
      'has-bullet-separator': hasBulletSeparator,
      'has-dot-separator': hasDotSeparator,
      'has-succedes-separator': hasSuccedesSeparator,
      'is-centered': isCentered,
      'is-right': isRight
    }, modifiers_1.sizePropsToClassenames({
      isLarge: isLarge,
      isMedium: isMedium,
      isSmall: isSmall
    }))
    return (React.createElement('nav', tslib_1.__assign({}, props, { className: className }), this.props.children))
  }
  return Nav
}(React.Component))
exports.default = Nav

Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Footer = (function (_super) {
  tslib_1.__extends(Footer, _super)
  function Footer () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Footer.prototype.render = function () {
    const className = classnames('footer', modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('footer', { className: className }, this.props.children))
  }
  return Footer
}(React.Component))
exports.default = Footer

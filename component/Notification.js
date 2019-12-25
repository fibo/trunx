Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Notification = (function (_super) {
  tslib_1.__extends(Notification, _super)
  function Notification () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Notification.prototype.render = function () {
    const className = classnames('notification', modifiers_1.mainColorsPropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Notification
}(React.Component))
exports.default = Notification

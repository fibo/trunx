Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Delete = (function (_super) {
  tslib_1.__extends(Delete, _super)
  function Delete () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Delete.prototype.render = function () {
    const onClick = this.props.onClick
    const className = classnames('delete', modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('button', { 'aria-label': 'delete', className: className, onClick: onClick }))
  }
  return Delete
}(React.Component))
exports.default = Delete

Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const Title = (function (_super) {
  tslib_1.__extends(Title, _super)
  function Title () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Title.prototype.render = function () {
    const _a = this.props; const is1 = _a.is1; const is2 = _a.is2; const is3 = _a.is3; const is4 = _a.is4; const is5 = _a.is5; const is6 = _a.is6; const isSpaced = _a.isSpaced
    const className = classnames('title', {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
      'is-spaced': isSpaced
    }, modifiers_1.textColorHelpersPropsToClassenames(this.props))
    if (is1) {
      return (React.createElement('h1', { className: className }, this.props.children))
    } else if (is2) {
      return (React.createElement('h2', { className: className }, this.props.children))
    } else if (is3) {
      return (React.createElement('h3', { className: className }, this.props.children))
    } else if (is4) {
      return (React.createElement('h4', { className: className }, this.props.children))
    } else if (is5) {
      return (React.createElement('h5', { className: className }, this.props.children))
    } else if (is6) {
      return (React.createElement('h6', { className: className }, this.props.children))
    } else {
      return (React.createElement('p', { className: className }, this.props.children))
    }
  }
  return Title
}(React.Component))
exports.default = Title

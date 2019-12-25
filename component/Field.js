Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const FieldBody = (function (_super) {
  tslib_1.__extends(FieldBody, _super)
  function FieldBody () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FieldBody.prototype.render = function () {
    return (React.createElement('div', { className: 'field-body' }, this.props.children))
  }
  return FieldBody
}(React.Component))
const FieldLabel = (function (_super) {
  tslib_1.__extends(FieldLabel, _super)
  function FieldLabel () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FieldLabel.prototype.render = function () {
    const className = classnames('field-label', modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return FieldLabel
}(React.Component))
const Field = (function (_super) {
  tslib_1.__extends(Field, _super)
  function Field () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Field.prototype.render = function () {
    const _a = this.props; const hasAddons = _a.hasAddons; const hasAddonsCentered = _a.hasAddonsCentered; const isGrouped = _a.isGrouped; const isGroupedMultiline = _a.isGroupedMultiline; const isHorizontal = _a.isHorizontal; const isInvisible = _a.isInvisible; const isMarginLess = _a.isMarginLess; const isPaddingLess = _a.isPaddingLess; const isSrOnly = _a.isSrOnly
    const className = classnames('field', {
      'has-addons': hasAddons,
      'has-addons-centered': hasAddonsCentered,
      'is-grouped': isGrouped,
      'is-grouped-multiline': isGroupedMultiline,
      'is-horizontal': isHorizontal
    }, modifiers_1.helpersPropsToClassenames({
      isInvisible: isInvisible,
      isMarginLess: isMarginLess,
      isPaddingLess: isPaddingLess,
      isSrOnly: isSrOnly
    }))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  Field.Body = FieldBody
  Field.Label = FieldLabel
  return Field
}(React.Component))
exports.default = Field

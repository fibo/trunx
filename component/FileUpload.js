Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const FileUploadCta = (function (_super) {
  tslib_1.__extends(FileUploadCta, _super)
  function FileUploadCta () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUploadCta.prototype.render = function () {
    return (React.createElement('span', { className: 'file-cta' }, this.props.children))
  }
  return FileUploadCta
}(React.Component))
const FileUploadIcon = (function (_super) {
  tslib_1.__extends(FileUploadIcon, _super)
  function FileUploadIcon () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUploadIcon.prototype.render = function () {
    return (React.createElement('span', { className: 'file-icon' }, this.props.children))
  }
  return FileUploadIcon
}(React.Component))
const FileUploadInput = (function (_super) {
  tslib_1.__extends(FileUploadInput, _super)
  function FileUploadInput () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUploadInput.prototype.render = function () {
    return (React.createElement('input', tslib_1.__assign({ className: 'file-input', type: 'file' }, this.props)))
  }
  return FileUploadInput
}(React.Component))
const FileUploadLabel = (function (_super) {
  tslib_1.__extends(FileUploadLabel, _super)
  function FileUploadLabel () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUploadLabel.prototype.render = function () {
    return (React.createElement('span', { className: 'file-label' }, this.props.children))
  }
  return FileUploadLabel
}(React.Component))
const FileUploadName = (function (_super) {
  tslib_1.__extends(FileUploadName, _super)
  function FileUploadName () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUploadName.prototype.render = function () {
    return (React.createElement('span', { className: 'file-name' }, this.props.children))
  }
  return FileUploadName
}(React.Component))
const FileUpload = (function (_super) {
  tslib_1.__extends(FileUpload, _super)
  function FileUpload () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  FileUpload.prototype.render = function () {
    const _a = this.props; const hasName = _a.hasName; const isBoxed = _a.isBoxed; const isDanger = _a.isDanger; const isFullwidth = _a.isFullwidth; const isInfo = _a.isInfo; const isLarge = _a.isLarge; const isMedium = _a.isMedium; const isPrimary = _a.isPrimary; const isSmall = _a.isSmall; const isSuccess = _a.isSuccess; const isRight = _a.isRight; const isWarning = _a.isWarning
    const className = classnames('file', {
      'has-name': hasName,
      'is-boxed': isBoxed,
      'is-fullwidth': isFullwidth,
      'is-right': isRight
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
    return (React.createElement('div', { className: className },
      React.createElement('label', { className: 'file-label' }, this.props.children)))
  }
  FileUpload.Cta = FileUploadCta
  FileUpload.Icon = FileUploadIcon
  FileUpload.Input = FileUploadInput
  FileUpload.Label = FileUploadLabel
  FileUpload.Name = FileUploadName
  return FileUpload
}(React.Component))
exports.default = FileUpload

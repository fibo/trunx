Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const React = require('react')
const MediaContent = (function (_super) {
  tslib_1.__extends(MediaContent, _super)
  function MediaContent () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  MediaContent.prototype.render = function () {
    return (React.createElement('div', { className: 'media-content' }, this.props.children))
  }
  return MediaContent
}(React.Component))
const MediaLeft = (function (_super) {
  tslib_1.__extends(MediaLeft, _super)
  function MediaLeft () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  MediaLeft.prototype.render = function () {
    return (React.createElement('div', { className: 'media-left' }, this.props.children))
  }
  return MediaLeft
}(React.Component))
const MediaRight = (function (_super) {
  tslib_1.__extends(MediaRight, _super)
  function MediaRight () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  MediaRight.prototype.render = function () {
    return (React.createElement('div', { className: 'media-right' }, this.props.children))
  }
  return MediaRight
}(React.Component))
const Media = (function (_super) {
  tslib_1.__extends(Media, _super)
  function Media () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Media.prototype.render = function () {
    const _a = this.props; const children = _a.children; const props = tslib_1.__rest(_a, ['children'])
    return (React.createElement('div', tslib_1.__assign({}, props, { className: 'media' }), children))
  }
  Media.Content = MediaContent
  Media.Left = MediaLeft
  Media.Right = MediaRight
  return Media
}(React.Component))
exports.default = Media

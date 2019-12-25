Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const MessageBody = (function (_super) {
  tslib_1.__extends(MessageBody, _super)
  function MessageBody () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  MessageBody.prototype.render = function () {
    return (React.createElement('div', { className: 'message-body' }, this.props.children))
  }
  return MessageBody
}(React.Component))
const MessageHeader = (function (_super) {
  tslib_1.__extends(MessageHeader, _super)
  function MessageHeader () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  MessageHeader.prototype.render = function () {
    return (React.createElement('div', { className: 'message-header' }, this.props.children))
  }
  return MessageHeader
}(React.Component))
const Message = (function (_super) {
  tslib_1.__extends(Message, _super)
  function Message () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Message.prototype.render = function () {
    const _a = this.props; const isDark = _a.isDark; const isInvisible = _a.isInvisible; const isMarginLess = _a.isMarginLess; const isPaddingLess = _a.isPaddingLess; const isSrOnly = _a.isSrOnly
    const className = classnames('message', {
      'is-dark': isDark
    }, modifiers_1.helpersPropsToClassenames({
      isInvisible: isInvisible,
      isMarginLess: isMarginLess,
      isPaddingLess: isPaddingLess,
      isSrOnly: isSrOnly
    }), modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props))
    return (React.createElement('article', { className: className }, this.props.children))
  }
  Message.Body = MessageBody
  Message.Header = MessageHeader
  return Message
}(React.Component))
exports.default = Message

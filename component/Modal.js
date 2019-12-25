Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const ModalCardBody = (function (_super) {
  tslib_1.__extends(ModalCardBody, _super)
  function ModalCardBody () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalCardBody.prototype.render = function () {
    return (React.createElement('section', { className: 'modal-card-body' }, this.props.children))
  }
  return ModalCardBody
}(React.Component))
const ModalCardFoot = (function (_super) {
  tslib_1.__extends(ModalCardFoot, _super)
  function ModalCardFoot () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalCardFoot.prototype.render = function () {
    return (React.createElement('footer', { className: 'modal-card-foot' }, this.props.children))
  }
  return ModalCardFoot
}(React.Component))
const ModalCardHead = (function (_super) {
  tslib_1.__extends(ModalCardHead, _super)
  function ModalCardHead () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalCardHead.prototype.render = function () {
    return (React.createElement('header', { className: 'modal-card-head' }, this.props.children))
  }
  return ModalCardHead
}(React.Component))
const ModalCardTitle = (function (_super) {
  tslib_1.__extends(ModalCardTitle, _super)
  function ModalCardTitle () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalCardTitle.prototype.render = function () {
    return (React.createElement('p', { className: 'modal-card-title' }, this.props.children))
  }
  return ModalCardTitle
}(React.Component))
const ModalBackground = (function (_super) {
  tslib_1.__extends(ModalBackground, _super)
  function ModalBackground () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalBackground.prototype.render = function () {
    const onClick = this.props.onClick
    return (React.createElement('div', { className: 'modal-background', onClick: onClick }))
  }
  return ModalBackground
}(React.Component))
const ModalCard = (function (_super) {
  tslib_1.__extends(ModalCard, _super)
  function ModalCard () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalCard.prototype.render = function () {
    return (React.createElement('div', { className: 'modal-card' }, this.props.children))
  }
  ModalCard.Body = ModalCardBody
  ModalCard.Foot = ModalCardFoot
  ModalCard.Head = ModalCardHead
  ModalCard.Title = ModalCardTitle
  return ModalCard
}(React.Component))
const ModalClose = (function (_super) {
  tslib_1.__extends(ModalClose, _super)
  function ModalClose () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalClose.prototype.render = function () {
    const _a = this.props; const isLarge = _a.isLarge; const onClick = _a.onClick
    const className = classnames('modal-close', {
      'is-large': isLarge
    })
    return (React.createElement('button', { 'aria-label': 'close', className: className, onClick: onClick }))
  }
  return ModalClose
}(React.Component))
const ModalContent = (function (_super) {
  tslib_1.__extends(ModalContent, _super)
  function ModalContent () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  ModalContent.prototype.render = function () {
    return (React.createElement('div', { className: 'modal-content' }, this.props.children))
  }
  return ModalContent
}(React.Component))
const Modal = (function (_super) {
  tslib_1.__extends(Modal, _super)
  function Modal () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Modal.prototype.render = function () {
    const isActive = this.props.isActive
    const className = classnames('modal', {
      'is-active': isActive
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  Modal.Background = ModalBackground
  Modal.Card = ModalCard
  Modal.Close = ModalClose
  Modal.Content = ModalContent
  return Modal
}(React.Component))
exports.default = Modal

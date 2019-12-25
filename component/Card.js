Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Anchor_1 = require('./Anchor')
const modifiers_1 = require('./modifiers')
const Image_1 = require('./Image')
const CardContent = (function (_super) {
  tslib_1.__extends(CardContent, _super)
  function CardContent () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardContent.prototype.render = function () {
    const className = classnames('card-content', modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return CardContent
}(React.Component))
const CardFooterItem = (function (_super) {
  tslib_1.__extends(CardFooterItem, _super)
  function CardFooterItem () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardFooterItem.prototype.render = function () {
    const _a = this.props; const download = _a.download; const href = _a.href; const onClick = _a.onClick; const target = _a.target; const props = tslib_1.__rest(_a, ['download', 'href', 'onClick', 'target'])
    const className = 'card-footer-item'
    if (href || onClick) {
      return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, download: download, href: href, onClick: onClick, target: target }), this.props.children))
    } else {
      return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), this.props.children))
    }
  }
  return CardFooterItem
}(React.Component))
const CardFooter = (function (_super) {
  tslib_1.__extends(CardFooter, _super)
  function CardFooter () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardFooter.prototype.render = function () {
    const className = classnames('card-footer', modifiers_1.textColorHelpersPropsToClassenames(this.props))
    return (React.createElement('footer', { className: className }, this.props.children))
  }
  CardFooter.Item = CardFooterItem
  return CardFooter
}(React.Component))
const CardHeaderIcon = (function (_super) {
  tslib_1.__extends(CardHeaderIcon, _super)
  function CardHeaderIcon () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardHeaderIcon.prototype.render = function () {
    const _a = this.props; const download = _a.download; const href = _a.href; const onClick = _a.onClick; const target = _a.target; const props = tslib_1.__rest(_a, ['download', 'href', 'onClick', 'target'])
    const className = 'card-header-icon'
    if (href || onClick) {
      return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, download: download, href: href, onClick: onClick, target: target }), this.props.children))
    } else {
      return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), this.props.children))
    }
  }
  return CardHeaderIcon
}(React.Component))
const CardHeaderTitle = (function (_super) {
  tslib_1.__extends(CardHeaderTitle, _super)
  function CardHeaderTitle () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardHeaderTitle.prototype.render = function () {
    const isCentered = this.props.isCentered
    const className = classnames('card-header-title', {
      'is-centered': isCentered
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return CardHeaderTitle
}(React.Component))
const CardHeader = (function (_super) {
  tslib_1.__extends(CardHeader, _super)
  function CardHeader () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardHeader.prototype.render = function () {
    return (React.createElement('header', { className: 'card-header' }, this.props.children))
  }
  CardHeader.Icon = CardHeaderIcon
  CardHeader.Title = CardHeaderTitle
  return CardHeader
}(React.Component))
const CardImage = (function (_super) {
  tslib_1.__extends(CardImage, _super)
  function CardImage () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  CardImage.prototype.render = function () {
    return (React.createElement('div', { className: 'card-image' },
      React.createElement(Image_1.default, tslib_1.__assign({}, this.props))))
  }
  return CardImage
}(React.Component))
const Card = (function (_super) {
  tslib_1.__extends(Card, _super)
  function Card () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Card.prototype.render = function () {
    const className = 'card'
    const _a = this.props; const children = _a.children; const props = tslib_1.__rest(_a, ['children'])
    return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), children))
  }
  Card.Content = CardContent
  Card.Footer = CardFooter
  Card.Header = CardHeader
  Card.Image = CardImage
  return Card
}(React.Component))
exports.default = Card

Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const HeroBody = (function (_super) {
  tslib_1.__extends(HeroBody, _super)
  function HeroBody () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  HeroBody.prototype.render = function () {
    return (React.createElement('div', { className: 'hero-body' }, this.props.children))
  }
  return HeroBody
}(React.Component))
const HeroFoot = (function (_super) {
  tslib_1.__extends(HeroFoot, _super)
  function HeroFoot () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  HeroFoot.prototype.render = function () {
    return (React.createElement('div', { className: 'hero-foot' }, this.props.children))
  }
  return HeroFoot
}(React.Component))
const HeroHead = (function (_super) {
  tslib_1.__extends(HeroHead, _super)
  function HeroHead () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  HeroHead.prototype.render = function () {
    return (React.createElement('div', { className: 'hero-head' }, this.props.children))
  }
  return HeroHead
}(React.Component))
const Hero = (function (_super) {
  tslib_1.__extends(Hero, _super)
  function Hero () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Hero.prototype.render = function () {
    const _a = this.props; const isBold = _a.isBold; const isDark = _a.isDark; const isFullheight = _a.isFullheight; const isFullheightWithNavbar = _a.isFullheightWithNavbar; const isLarge = _a.isLarge; const isMedium = _a.isMedium
    const className = classnames('hero', {
      'is-bold': isBold,
      'is-dark': isDark,
      'is-fullheight': isFullheight,
      'is-fullheight-with-navbar': isFullheightWithNavbar,
      'is-large': isLarge,
      'is-medium': isMedium
    }, modifiers_1.mainColorsPropsToClassenames(this.props))
    return (React.createElement('section', { className: className }, this.props.children))
  }
  Hero.Body = HeroBody
  Hero.Foot = HeroFoot
  Hero.Head = HeroHead
  return Hero
}(React.Component))
exports.default = Hero

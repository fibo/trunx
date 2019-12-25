Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const modifiers_1 = require('./modifiers')
const TileAncestor = (function (_super) {
  tslib_1.__extends(TileAncestor, _super)
  function TileAncestor () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  TileAncestor.prototype.render = function () {
    return (React.createElement('div', { className: 'tile is-ancestor' }, this.props.children))
  }
  return TileAncestor
}(React.Component))
const TileChildBox = (function (_super) {
  tslib_1.__extends(TileChildBox, _super)
  function TileChildBox () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  TileChildBox.prototype.render = function () {
    return (React.createElement('article', { className: 'tile is-child box' }, this.props.children))
  }
  return TileChildBox
}(React.Component))
const TileChildNotification = (function (_super) {
  tslib_1.__extends(TileChildNotification, _super)
  function TileChildNotification () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  TileChildNotification.prototype.render = function () {
    const className = classnames('tile is-child notification', modifiers_1.mainColorsPropsToClassenames(this.props))
    return (React.createElement('article', { className: className }, this.props.children))
  }
  return TileChildNotification
}(React.Component))
const TileChild = (function (_super) {
  tslib_1.__extends(TileChild, _super)
  function TileChild () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  TileChild.prototype.render = function () {
    return (React.createElement('div', { className: 'tile is-child' }, this.props.children))
  }
  TileChild.Box = TileChildBox
  TileChild.Notification = TileChildNotification
  return TileChild
}(React.Component))
const Tile = (function (_super) {
  tslib_1.__extends(Tile, _super)
  function Tile () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Tile.prototype.render = function () {
    const _a = this.props; const children = _a.children; const is1 = _a.is1; const is2 = _a.is2; const is3 = _a.is3; const is4 = _a.is4; const is5 = _a.is5; const is6 = _a.is6; const is7 = _a.is7; const is8 = _a.is8; const is9 = _a.is9; const is10 = _a.is10; const is11 = _a.is11; const is12 = _a.is12; const isParent = _a.isParent; const isVertical = _a.isVertical; const props = tslib_1.__rest(_a, ['children', 'is1', 'is2', 'is3', 'is4', 'is5', 'is6', 'is7', 'is8', 'is9', 'is10', 'is11', 'is12', 'isParent', 'isVertical'])
    const className = classnames('tile', {
      'is-1': is1,
      'is-2': is2,
      'is-3': is3,
      'is-4': is4,
      'is-5': is5,
      'is-6': is6,
      'is-7': is7,
      'is-8': is8,
      'is-9': is9,
      'is-10': is10,
      'is-11': is11,
      'is-12': is12,
      'is-parent': isParent,
      'is-vertical': isVertical
    })
    return (React.createElement('div', tslib_1.__assign({}, props, { className: className }), children))
  }
  Tile.Ancestor = TileAncestor
  Tile.Child = TileChild
  return Tile
}(React.Component))
exports.default = Tile

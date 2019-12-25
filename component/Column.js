Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const Column = (function (_super) {
  tslib_1.__extends(Column, _super)
  function Column () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Column.prototype.render = function () {
    const _a = this.props; const is1 = _a.is1; const is2 = _a.is2; const is3 = _a.is3; const is4 = _a.is4; const is5 = _a.is5; const is6 = _a.is6; const is7 = _a.is7; const is8 = _a.is8; const is9 = _a.is9; const is10 = _a.is10; const is11 = _a.is11; const is12 = _a.is12; const isCentered = _a.isCentered; const isFourFifths = _a.isFourFifths; const isHalf = _a.isHalf; const isNarrow = _a.isNarrow; const isNarrowDesktop = _a.isNarrowDesktop; const isNarrowMobile = _a.isNarrowMobile; const isNarrowTablet = _a.isNarrowTablet; const isNarrowTouch = _a.isNarrowTouch; const isNarrowWidescreen = _a.isNarrowWidescreen; const isNarrowFullhd = _a.isNarrowFullhd; const isOffset1 = _a.isOffset1; const isOffset2 = _a.isOffset2; const isOffset3 = _a.isOffset3; const isOffset4 = _a.isOffset4; const isOffset5 = _a.isOffset5; const isOffset6 = _a.isOffset6; const isOffset7 = _a.isOffset7; const isOffset8 = _a.isOffset8; const isOffset9 = _a.isOffset9; const isOffset10 = _a.isOffset10; const isOffset11 = _a.isOffset11; const isOffset12 = _a.isOffset12; const isOneFifth = _a.isOneFifth; const isOneQuarter = _a.isOneQuarter; const isOneThird = _a.isOneThird; const isThreeFifths = _a.isThreeFifths; const isThreeQuarters = _a.isThreeQuarters; const isTwoFifths = _a.isTwoFifths; const isTwoQuarters = _a.isTwoQuarters; const isTwoThirds = _a.isTwoThirds
    const className = classnames('column', {
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
      'is-centered': isCentered,
      'is-four-fifths': isFourFifths,
      'is-half': isHalf,
      'is-narrow': isNarrow,
      'is-narrow-desktop': isNarrowDesktop,
      'is-narrow-mobile': isNarrowMobile,
      'is-narrow-tablet': isNarrowTablet,
      'is-narrow-touch': isNarrowTouch,
      'is-narrow-widescreen': isNarrowWidescreen,
      'is-narrow-fullhd': isNarrowFullhd,
      'is-offset-1': isOffset1,
      'is-offset-2': isOffset2,
      'is-offset-3': isOffset3,
      'is-offset-4': isOffset4,
      'is-offset-5': isOffset5,
      'is-offset-6': isOffset6,
      'is-offset-7': isOffset7,
      'is-offset-8': isOffset8,
      'is-offset-9': isOffset9,
      'is-offset-10': isOffset10,
      'is-offset-11': isOffset11,
      'is-offset-12': isOffset12,
      'is-one-fifth': isOneFifth,
      'is-one-quarter': isOneQuarter,
      'is-one-third': isOneThird,
      'is-three-fifths': isThreeFifths,
      'is-three-quarters': isThreeQuarters,
      'is-two-fifths': isTwoFifths,
      'is-two-quarters': isTwoQuarters,
      'is-two-thirds': isTwoThirds
    })
    return (React.createElement('div', { className: className }, this.props.children))
  }
  return Column
}(React.Component))
exports.default = Column

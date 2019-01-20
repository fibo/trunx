var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Column = (function (_super) {
    __extends(Column, _super);
    function Column() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Column.prototype.render = function () {
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, is7 = _a.is7, is8 = _a.is8, is9 = _a.is9, is10 = _a.is10, is11 = _a.is11, is12 = _a.is12, isFourFifths = _a.isFourFifths, isHalf = _a.isHalf, isNarrow = _a.isNarrow, isNarrowDesktop = _a.isNarrowDesktop, isNarrowMobile = _a.isNarrowMobile, isNarrowTablet = _a.isNarrowTablet, isNarrowTouch = _a.isNarrowTouch, isNarrowWidescreen = _a.isNarrowWidescreen, isNarrowFullhd = _a.isNarrowFullhd, isOffset1 = _a.isOffset1, isOffset2 = _a.isOffset2, isOffset3 = _a.isOffset3, isOffset4 = _a.isOffset4, isOffset5 = _a.isOffset5, isOffset6 = _a.isOffset6, isOffset7 = _a.isOffset7, isOffset8 = _a.isOffset8, isOffset9 = _a.isOffset9, isOffset10 = _a.isOffset10, isOffset11 = _a.isOffset11, isOffset12 = _a.isOffset12, isOneFifth = _a.isOneFifth, isOneQuarter = _a.isOneQuarter, isOneThird = _a.isOneThird, isThreeFifths = _a.isThreeFifths, isThreeQuarters = _a.isThreeQuarters, isTwoFifths = _a.isTwoFifths, isTwoQuarters = _a.isTwoQuarters, isTwoThirds = _a.isTwoThirds;
        var className = classnames("column", {
            "is-1": is1,
            "is-2": is2,
            "is-3": is3,
            "is-4": is4,
            "is-5": is5,
            "is-6": is6,
            "is-7": is7,
            "is-8": is8,
            "is-9": is9,
            "is-10": is10,
            "is-11": is11,
            "is-12": is12,
            "is-four-fifths": isFourFifths,
            "is-half": isHalf,
            "is-narrow": isNarrow,
            "is-narrow-desktop": isNarrowDesktop,
            "is-narrow-mobile": isNarrowMobile,
            "is-narrow-tablet": isNarrowTablet,
            "is-narrow-touch": isNarrowTouch,
            "is-narrow-widescreen": isNarrowWidescreen,
            "is-narrow-fullhd": isNarrowFullhd,
            "is-offset-1": isOffset1,
            "is-offset-2": isOffset2,
            "is-offset-3": isOffset3,
            "is-offset-4": isOffset4,
            "is-offset-5": isOffset5,
            "is-offset-6": isOffset6,
            "is-offset-7": isOffset7,
            "is-offset-8": isOffset8,
            "is-offset-9": isOffset9,
            "is-offset-10": isOffset10,
            "is-offset-11": isOffset11,
            "is-offset-12": isOffset12,
            "is-one-fifth": isOneFifth,
            "is-one-quarter": isOneQuarter,
            "is-one-third": isOneThird,
            "is-three-fifths": isThreeFifths,
            "is-three-quarters": isThreeQuarters,
            "is-two-fifths": isTwoFifths,
            "is-two-quarters": isTwoQuarters,
            "is-two-thirds": isTwoThirds,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Column;
}(React.Component));
exports.default = Column;

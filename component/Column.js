var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        var _a = this.props, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, is7 = _a.is7, is8 = _a.is8, is9 = _a.is9, is10 = _a.is10, is11 = _a.is11, isFourFifths = _a.isFourFifths, isHalf = _a.isHalf, isNarrow = _a.isNarrow, isNarrowDesktop = _a.isNarrowDesktop, isNarrowMobile = _a.isNarrowMobile, isNarrowTablet = _a.isNarrowTablet, isNarrowTouch = _a.isNarrowTouch, isNarrowWidescreen = _a.isNarrowWidescreen, isNarrowFullhd = _a.isNarrowFullhd, isOneFifth = _a.isOneFifth, isOneQuarter = _a.isOneQuarter, isThreeFifths = _a.isThreeFifths, isThreeQuarters = _a.isThreeQuarters, isTwoFifths = _a.isTwoFifths, isTwoQuarters = _a.isTwoQuarters, isTwoThirds = _a.isTwoThirds;
        var className = classnames(['column'], {
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
            'is-four-fifths': isFourFifths,
            'is-half': isHalf,
            'is-narrow': isNarrow,
            'is-narrow-desktop': isNarrowDesktop,
            'is-narrow-mobile': isNarrowMobile,
            'is-narrow-tablet': isNarrowTablet,
            'is-narrow-touch': isNarrowTouch,
            'is-narrow-widescreen': isNarrowWidescreen,
            'is-narrow-fullhd': isNarrowFullhd,
            'is-one-fifth': isOneFifth,
            'is-one-quarter': isOneQuarter,
            'is-three-fifths': isThreeFifths,
            'is-three-quarters': isThreeQuarters,
            'is-two-fifths': isTwoFifths,
            'is-two-quarters': isTwoQuarters,
            'is-two-thirds': isTwoThirds,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Column;
}(React.Component));
exports.default = Column;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Image = (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.render = function () {
        var _a = this.props, className = _a.className, is1by1 = _a.is1by1, is1by2 = _a.is1by2, is1by3 = _a.is1by3, is2by1 = _a.is2by1, is2by3 = _a.is2by3, is3by1 = _a.is3by1, is3by2 = _a.is3by2, is3by4 = _a.is3by4, is3by5 = _a.is3by5, is4by3 = _a.is4by3, is4by5 = _a.is4by5, is5by3 = _a.is5by3, is5by4 = _a.is5by4, is9by16 = _a.is9by16, is16x16 = _a.is16x16, is24x24 = _a.is24x24, is32x32 = _a.is32x32, is48x48 = _a.is48x48, is64x64 = _a.is64x64, is96x96 = _a.is96x96, is128x128 = _a.is128x128, isSquare = _a.isSquare, props = tslib_1.__rest(_a, ["className", "is1by1", "is1by2", "is1by3", "is2by1", "is2by3", "is3by1", "is3by2", "is3by4", "is3by5", "is4by3", "is4by5", "is5by3", "is5by4", "is9by16", "is16x16", "is24x24", "is32x32", "is48x48", "is64x64", "is96x96", "is128x128", "isSquare"]);
        return (React.createElement("figure", { className: classnames("image", className, {
                "is-1by1": is1by1,
                "is-1by2": is1by2,
                "is-1by3": is1by3,
                "is-2by1": is2by1,
                "is-2by3": is2by3,
                "is-3by1": is3by1,
                "is-3by2": is3by2,
                "is-3by4": is3by4,
                "is-3by5": is3by5,
                "is-4by3": is4by3,
                "is-4by5": is4by5,
                "is-5by3": is5by3,
                "is-5by4": is5by4,
                "is-16x16": is16x16,
                "is-24x24": is24x24,
                "is-32x32": is32x32,
                "is-48x48": is48x48,
                "is-64x64": is64x64,
                "is-96x96": is96x96,
                "is-128x128": is128x128,
                "is-square": isSquare,
            }) },
            React.createElement("img", tslib_1.__assign({}, props))));
    };
    return Image;
}(React.Component));
exports.default = Image;

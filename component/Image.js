Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Image = (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Image.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Image.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], className = _b.className, fallbackUI = _b.fallbackUI, is1by1 = _b.is1by1, is1by2 = _b.is1by2, is1by3 = _b.is1by3, is2by1 = _b.is2by1, is2by3 = _b.is2by3, is3by1 = _b.is3by1, is3by2 = _b.is3by2, is3by4 = _b.is3by4, is3by5 = _b.is3by5, is4by3 = _b.is4by3, is4by5 = _b.is4by5, is5by3 = _b.is5by3, is5by4 = _b.is5by4, is9by16 = _b.is9by16, is16x16 = _b.is16x16, is24x24 = _b.is24x24, is32x32 = _b.is32x32, is48x48 = _b.is48x48, is64x64 = _b.is64x64, is96x96 = _b.is96x96, is128x128 = _b.is128x128, isSquare = _b.isSquare, props = tslib_1.__rest(_b, ["className", "fallbackUI", "is1by1", "is1by2", "is1by3", "is2by1", "is2by3", "is3by1", "is3by2", "is3by4", "is3by5", "is4by3", "is4by5", "is5by3", "is5by4", "is9by16", "is16x16", "is24x24", "is32x32", "is48x48", "is64x64", "is96x96", "is128x128", "isSquare"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("figure", { className: classnames(classNames_1.bulmaClassName.image, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classNames_1.trunxPropsToClassnamesObject({
                is1by1: is1by1,
                is1by2: is1by2,
                is1by3: is1by3,
                is2by1: is2by1,
                is2by3: is2by3,
                is3by1: is3by1,
                is3by2: is3by2,
                is3by4: is3by4,
                is3by5: is3by5,
                is4by3: is4by3,
                is4by5: is4by5,
                is5by3: is5by3,
                is5by4: is5by4,
                is9by16: is9by16,
                is16x16: is16x16,
                is24x24: is24x24,
                is32x32: is32x32,
                is48x48: is48x48,
                is64x64: is64x64,
                is96x96: is96x96,
                is128x128: is128x128,
                isSquare: isSquare,
            })) },
            React.createElement("img", tslib_1.__assign({}, props))));
    };
    return Image;
}(React.Component));
exports.Image = Image;

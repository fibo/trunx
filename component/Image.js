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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.render = function () {
        var _a = this.props, is16x16 = _a.is16x16, is24x24 = _a.is24x24, is32x32 = _a.is32x32, is48x48 = _a.is48x48, is64x64 = _a.is64x64, is96x96 = _a.is96x96, is128x128 = _a.is128x128, props = __rest(_a, ["is16x16", "is24x24", "is32x32", "is48x48", "is64x64", "is96x96", "is128x128"]);
        var className = classname(['image'], {
            'is-16x16': is16x16,
            'is-24x24': is24x24,
            'is-32x32': is32x32,
            'is-48x48': is48x48,
            'is-64x64': is64x64,
            'is-96x96': is96x96,
            'is-128x128': is128x128,
        });
        return (React.createElement("p", { className: className },
            React.createElement("img", __assign({}, props))));
    };
    return Image;
}(React.Component));
exports.default = Image;

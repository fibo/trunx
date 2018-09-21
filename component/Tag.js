var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var classnames = require("classnames");
var React = require("react");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, href = _a.href, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite, props = __rest(_a, ["href", "isBlack", "isDanger", "isDark", "isInfo", "isLarge", "isLight", "isLink", "isMedium", "isPrimary", "isRounded", "isSmall", "isSuccess", "isWarning", "isWhite"]);
        var className = classnames("tag", {
            "is-black": isBlack,
            "is-danger": isDanger,
            "is-dark": isDark,
            "is-info": isInfo,
            "is-large": isLarge,
            "is-light": isLight,
            "is-link": isLink,
            "is-medium": isMedium,
            "is-primary": isPrimary,
            "is-rounded": isRounded,
            "is-small": isSmall,
            "is-success": isSuccess,
            "is-warning": isWarning,
            "is-white": isWhite,
        });
        return href ? (React.createElement("a", __assign({ className: className, href: href }, props), this.props.children)) : (React.createElement("span", { className: className }, this.props.children));
    };
    return Tag;
}(React.Component));
exports.default = Tag;

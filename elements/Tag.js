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
var classname = require("classname");
var React = require("react");
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite;
        var className = classname(['tag'], {
            'is-black': isBlack,
            'is-danger': isDanger,
            'is-dark': isDark,
            'is-info': isInfo,
            'is-large': isLarge,
            'is-light': isLight,
            'is-link': isLink,
            'is-medium': isMedium,
            'is-primary': isPrimary,
            'is-rounded': isRounded,
            'is-small': isSmall,
            'is-success': isSuccess,
            'is-warning': isWarning,
            'is-white': isWhite,
        });
        return (React.createElement("span", { className: className }, this.props.children));
    };
    return Tag;
}(React.Component));
exports.default = Tag;

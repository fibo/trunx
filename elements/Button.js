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
var react_1 = require("react");
var classname_1 = require("classname");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, href = _a.href, isActive = _a.isActive, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isLight = _a.isLight, isLink = _a.isLink, isInfo = _a.isInfo, isInverted = _a.isInverted, isLoading = _a.isLoading, isOutlined = _a.isOutlined, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isStatic = _a.isStatic, isSuccess = _a.isSuccess, isText = _a.isText, isWarning = _a.isWarning, isWhite = _a.isWhite;
        var className = classname_1.default(['button'], {
            'is-active': isActive,
            'is-black': isBlack,
            'is-danger': isDanger,
            'is-dark': isDark,
            'is-disabled': isDisabled,
            'is-focused': isFocused,
            'is-light': isLight,
            'is-link': isLink,
            'is-info': isInfo,
            'is-inverted': isInverted,
            'is-loading': isLoading,
            'is-outlined': isOutlined,
            'is-primary': isPrimary,
            'is-rounded': isRounded,
            'is-static': isStatic,
            'is-success': isSuccess,
            'is-text': isText,
            'is-warning': isWarning,
            'is-white': isWhite
        });
        return href ? (react_1.default.createElement("a", { className: className, href: href }, this.props.children)) : (react_1.default.createElement("button", { className: className }, this.props.children));
    };
    return Button;
}(react_1.Component));
exports.default = Button;

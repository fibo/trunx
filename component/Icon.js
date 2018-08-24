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
var IconSvg = (function (_super) {
    __extends(IconSvg, _super);
    function IconSvg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconSvg.prototype.render = function () {
        var _a = this.props, icon = _a.icon, size = _a.size;
        return (React.createElement("svg", { "aria-hidden": "true", height: size, role: "img", viewBox: icon.viewBox, width: size, xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fill: "currentColor", d: icon.d })));
    };
    IconSvg.defaultProps = {
        size: "1em"
    };
    return IconSvg;
}(React.Component));
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, hasTextDanger = _a.hasTextDanger, hasTextInfo = _a.hasTextInfo, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, isLarge = _a.isLarge, isMedium = _a.isMedium, isSmall = _a.isSmall;
        var className = classnames("icon", {
            "has-text-danger": hasTextDanger,
            "has-text-info": hasTextInfo,
            "has-text-success": hasTextSuccess,
            "has-text-warning": hasTextWarning,
            "is-large": isLarge,
            "is-medium": isMedium,
            "is-small": isSmall,
        });
        return (React.createElement("span", { className: className }, this.props.children));
    };
    Icon.Svg = IconSvg;
    return Icon;
}(React.Component));
exports.default = Icon;

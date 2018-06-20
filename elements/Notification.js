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
var Notification = (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification.prototype.render = function () {
        var _a = this.props, isDanger = _a.isDanger, isLink = _a.isLink, isInfo = _a.isInfo, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning;
        return (react_1.default.createElement("div", { className: classname_1.default(['notification'], {
                'is-danger': isDanger,
                'is-link': isLink,
                'is-info': isInfo,
                'is-primary': isPrimary,
                'is-success': isSuccess,
                'is-warning': isWarning
            }) }, this.props.children));
    };
    return Notification;
}(react_1.Component));
exports.default = Notification;

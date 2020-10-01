Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Notification = (function (_super) {
    tslib_1.__extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classnames("notification", className, modifiers_1.mainColorsPropsToClassnames(this.props)) }, children));
    };
    return Notification;
}(React.Component));
exports.default = Notification;

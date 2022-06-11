Object.defineProperty(exports, "__esModule", { value: true });
exports.Li = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var Li = (function (_super) {
    tslib_1.__extends(Li, _super);
    function Li() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Li.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Li.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, fallbackUI = _a.fallbackUI, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("li", tslib_1.__assign({ className: (0, classnames_1.default)(className, (0, classNames_1.trunxPropsToClassnamesObject)({ isActive: isActive })) }, props), children));
    };
    return Li;
}(React.Component));
exports.Li = Li;

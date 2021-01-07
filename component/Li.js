Object.defineProperty(exports, "__esModule", { value: true });
exports.Li = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
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
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "isActive"]);
        return (React.createElement("li", tslib_1.__assign({ className: classnames(className, classNames_1.trunxPropsToClassnamesObject({ isActive: isActive })) }, props), children));
    };
    return Li;
}(React.Component));
exports.Li = Li;

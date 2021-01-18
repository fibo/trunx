Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var ErrorBoundary = (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, children = _a.children, fallbackUI = _a.fallbackUI;
        if (this.state.hasError)
            return fallbackUI;
        return React.createElement(React.Fragment, null, children);
    };
    return ErrorBoundary;
}(React.Component));
exports.ErrorBoundary = ErrorBoundary;

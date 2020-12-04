Object.defineProperty(exports, "__esModule", { value: true });
exports.Li = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
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
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('li', props, undefined, { isActive: isActive });
    };
    return Li;
}(React.Component));
exports.Li = Li;

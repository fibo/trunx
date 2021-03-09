Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var B = (function (_super) {
    tslib_1.__extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    B.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    B.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('b', props);
    };
    return B;
}(React.Component));
exports.B = B;

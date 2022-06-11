Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Box.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Box.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.box);
    };
    return Box;
}(React.Component));
exports.Box = Box;

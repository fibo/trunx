Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Th = (function (_super) {
    tslib_1.__extends(Th, _super);
    function Th() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Th.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Th.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('th', props);
    };
    return Th;
}(React.Component));
exports.Th = Th;

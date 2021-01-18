Object.defineProperty(exports, "__esModule", { value: true });
exports.Tbody = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Tbody = (function (_super) {
    tslib_1.__extends(Tbody, _super);
    function Tbody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tbody.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tbody.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('tbody', props);
    };
    return Tbody;
}(React.Component));
exports.Tbody = Tbody;

Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Td = (function (_super) {
    tslib_1.__extends(Td, _super);
    function Td() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Td.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Td.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('td', props);
    };
    return Td;
}(React.Component));
exports.Td = Td;

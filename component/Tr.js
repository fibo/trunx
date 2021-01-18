Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Tr = (function (_super) {
    tslib_1.__extends(Tr, _super);
    function Tr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tr.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tr.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('tr', props);
    };
    return Tr;
}(React.Component));
exports.Tr = Tr;

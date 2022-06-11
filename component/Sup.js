Object.defineProperty(exports, "__esModule", { value: true });
exports.Sup = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Sup = (function (_super) {
    tslib_1.__extends(Sup, _super);
    function Sup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Sup.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Sup.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('sup', props);
    };
    return Sup;
}(React.Component));
exports.Sup = Sup;

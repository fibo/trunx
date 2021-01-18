Object.defineProperty(exports, "__esModule", { value: true });
exports.Tfoot = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Tfoot = (function (_super) {
    tslib_1.__extends(Tfoot, _super);
    function Tfoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tfoot.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tfoot.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('tfoot', props);
    };
    return Tfoot;
}(React.Component));
exports.Tfoot = Tfoot;

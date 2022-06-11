Object.defineProperty(exports, "__esModule", { value: true });
exports.Colgroup = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Colgroup = (function (_super) {
    tslib_1.__extends(Colgroup, _super);
    function Colgroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Colgroup.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Colgroup.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('colgroup', props);
    };
    return Colgroup;
}(React.Component));
exports.Colgroup = Colgroup;

Object.defineProperty(exports, "__esModule", { value: true });
exports.Div = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Div = (function (_super) {
    tslib_1.__extends(Div, _super);
    function Div() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Div.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Div.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props);
    };
    return Div;
}(React.Component));
exports.Div = Div;

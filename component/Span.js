Object.defineProperty(exports, "__esModule", { value: true });
exports.Span = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Span = (function (_super) {
    tslib_1.__extends(Span, _super);
    function Span() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Span.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Span.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('span', this.props);
    };
    return Span;
}(React.Component));
exports.Span = Span;

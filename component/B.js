Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var B = (function (_super) {
    tslib_1.__extends(B, _super);
    function B() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    B.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    B.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('b', this.props);
    };
    return B;
}(React.Component));
exports.B = B;

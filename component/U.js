Object.defineProperty(exports, "__esModule", { value: true });
exports.U = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var U = (function (_super) {
    tslib_1.__extends(U, _super);
    function U() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    U.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    U.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('u', this.props);
    };
    return U;
}(React.Component));
exports.U = U;

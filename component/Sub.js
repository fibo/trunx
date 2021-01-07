Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Sub = (function (_super) {
    tslib_1.__extends(Sub, _super);
    function Sub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Sub.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Sub.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('sub', this.props);
    };
    return Sub;
}(React.Component));
exports.Sub = Sub;

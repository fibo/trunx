Object.defineProperty(exports, "__esModule", { value: true });
exports.Strong = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Strong = (function (_super) {
    tslib_1.__extends(Strong, _super);
    function Strong() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Strong.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Strong.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('strong', this.props);
    };
    return Strong;
}(React.Component));
exports.Strong = Strong;

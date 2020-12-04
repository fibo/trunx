Object.defineProperty(exports, "__esModule", { value: true });
exports.Em = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Em = (function (_super) {
    tslib_1.__extends(Em, _super);
    function Em() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Em.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Em.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('em', this.props);
    };
    return Em;
}(React.Component));
exports.Em = Em;

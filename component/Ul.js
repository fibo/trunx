Object.defineProperty(exports, "__esModule", { value: true });
exports.Ul = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Ul = (function (_super) {
    tslib_1.__extends(Ul, _super);
    function Ul() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Ul.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Ul.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('ul', this.props);
    };
    return Ul;
}(React.Component));
exports.Ul = Ul;

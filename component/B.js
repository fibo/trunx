Object.defineProperty(exports, "__esModule", { value: true });
exports.B = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var B = (function (_super) {
    tslib_1.__extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.render = function () {
        return renderElement_1.renderElement('b', this.props);
    };
    return B;
}(React.Component));
exports.B = B;

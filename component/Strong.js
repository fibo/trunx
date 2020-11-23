Object.defineProperty(exports, "__esModule", { value: true });
exports.Strong = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Strong = (function (_super) {
    tslib_1.__extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Strong.prototype.render = function () {
        return renderElement_1.renderElement('strong', this.props);
    };
    return Strong;
}(React.Component));
exports.Strong = Strong;

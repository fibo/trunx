Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Small = (function (_super) {
    tslib_1.__extends(Small, _super);
    function Small() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Small.prototype.render = function () {
        return renderElement_1.renderElement('small', this.props);
    };
    return Small;
}(React.Component));
exports.Small = Small;

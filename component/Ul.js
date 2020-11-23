Object.defineProperty(exports, "__esModule", { value: true });
exports.Ul = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Ul = (function (_super) {
    tslib_1.__extends(Ul, _super);
    function Ul() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ul.prototype.render = function () {
        return renderElement_1.renderElement('ul', this.props);
    };
    return Ul;
}(React.Component));
exports.Ul = Ul;

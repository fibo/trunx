Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Div = (function (_super) {
    tslib_1.__extends(Div, _super);
    function Div() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Div.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props);
    };
    return Div;
}(React.Component));
exports.Div = Div;

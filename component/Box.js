Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.box);
    };
    return Box;
}(React.Component));
exports.Box = Box;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Heading = (function (_super) {
    tslib_1.__extends(Heading, _super);
    function Heading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heading.prototype.render = function () {
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.heading);
    };
    return Heading;
}(React.Component));
exports.Heading = Heading;

Object.defineProperty(exports, "__esModule", { value: true });
exports.Heading = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Heading = (function (_super) {
    tslib_1.__extends(Heading, _super);
    function Heading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Heading.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Heading.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.heading);
    };
    return Heading;
}(React.Component));
exports.Heading = Heading;

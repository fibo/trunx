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
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('p', props, classNames_1.bulmaClassName.heading);
    };
    return Heading;
}(React.Component));
exports.Heading = Heading;

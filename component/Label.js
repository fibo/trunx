Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Label = (function (_super) {
    tslib_1.__extends(Label, _super);
    function Label() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Label.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Label.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('label', this.props, classNames_1.bulmaClassName.label);
    };
    return Label;
}(React.Component));
exports.Label = Label;

Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Control = (function (_super) {
    tslib_1.__extends(Control, _super);
    function Control() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Control.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Control.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, hasIconsLeft = _a.hasIconsLeft, hasIconsRight = _a.hasIconsRight, isExpanded = _a.isExpanded, isLoading = _a.isLoading, props = tslib_1.__rest(_a, ["hasIconsLeft", "hasIconsRight", "isExpanded", "isLoading"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.control, { hasIconsLeft: hasIconsLeft, hasIconsRight: hasIconsRight, isExpanded: isExpanded, isLoading: isLoading });
    };
    return Control;
}(React.Component));
exports.Control = Control;

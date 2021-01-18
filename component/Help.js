Object.defineProperty(exports, "__esModule", { value: true });
exports.Help = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Help = (function (_super) {
    tslib_1.__extends(Help, _super);
    function Help() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Help.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Help.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('p', props, classNames_1.bulmaClassName.help);
    };
    return Help;
}(React.Component));
exports.Help = Help;

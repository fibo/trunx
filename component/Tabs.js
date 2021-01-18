Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Tabs = (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tabs.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tabs.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded, props = tslib_1.__rest(_a, ["fallbackUI", "isBoxed", "isCentered", "isFullwidth", "isLarge", "isMedium", "isRight", "isSmall", "isToggle", "isToggleRounded"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('nav', props, classNames_1.bulmaClassName.tabs, {
            isBoxed: isBoxed,
            isCentered: isCentered,
            isFullwidth: isFullwidth,
            isLarge: isLarge,
            isMedium: isMedium,
            isRight: isRight,
            isSmall: isSmall,
            isToggle: isToggle,
            isToggleRounded: isToggleRounded,
        });
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;

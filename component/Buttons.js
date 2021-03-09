Object.defineProperty(exports, "__esModule", { value: true });
exports.Buttons = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Buttons = (function (_super) {
    tslib_1.__extends(Buttons, _super);
    function Buttons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Buttons.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Buttons.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], areLarge = _b.areLarge, areMedium = _b.areMedium, areSmall = _b.areSmall, children = _b.children, className = _b.className, fallbackUI = _b.fallbackUI, props = tslib_1.__rest(_b, ["areLarge", "areMedium", "areSmall", "children", "className", "fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.buttons, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classNames_1.trunxPropsToClassnamesObject({ areLarge: areLarge, areMedium: areMedium, areSmall: areSmall })) }, props), children));
    };
    return Buttons;
}(React.Component));
exports.Buttons = Buttons;

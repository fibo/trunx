Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Checkbox.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Checkbox.prototype.render = function () {
        var _a = (0, modifiers_1.extractModifiersProps)(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, fallbackUI = _b.fallbackUI, props = tslib_1.__rest(_b, ["children", "className", "fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("label", { className: (0, classnames_1.default)(className, classNames_1.bulmaClassName.checkbox, (0, modifiers_1.modifierPropsToClassnamesObject)(modifiersProps)) },
            React.createElement("input", tslib_1.__assign({ type: 'checkbox' }, props)),
            ' ',
            children));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;

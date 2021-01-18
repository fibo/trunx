Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Button = (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Button.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Button.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, classNameProp = _b.className, disabled = _b.disabled, fallbackUI = _b.fallbackUI, href = _b.href, isActive = _b.isActive, isFocused = _b.isFocused, isFullwidth = _b.isFullwidth, isInverted = _b.isInverted, isLoading = _b.isLoading, isNormal = _b.isNormal, isOutlined = _b.isOutlined, isRounded = _b.isRounded, isStatic = _b.isStatic, isText = _b.isText, target = _b.target, type = _b.type, value = _b.value, props = tslib_1.__rest(_b, ["children", "className", "disabled", "fallbackUI", "href", "isActive", "isFocused", "isFullwidth", "isInverted", "isLoading", "isNormal", "isOutlined", "isRounded", "isStatic", "isText", "target", "type", "value"]);
        if (this.state.hasError)
            return fallbackUI;
        var className = classnames(classNames_1.bulmaClassName.button, classNameProp, {
            'is-active': isActive,
            'is-focused': isFocused,
            'is-fullwidth': isFullwidth,
            'is-inverted': isInverted,
            'is-loading': isLoading,
            'is-normal': isNormal,
            'is-outlined': isOutlined,
            'is-rounded': isRounded,
            'is-static': isStatic,
            'is-text': isText,
        }, modifiers_1.modifierPropsToClassnamesObject(modifiersProps));
        if (href) {
            return (React.createElement("a", tslib_1.__assign({ className: className, href: href }, props), children));
        }
        if (type) {
            if (disabled || isLoading) {
                return (React.createElement("button", tslib_1.__assign({ className: className, disabled: disabled }, props), value));
            }
            else {
                return (React.createElement("input", tslib_1.__assign({ className: className, type: type, value: value }, props)));
            }
        }
        return (React.createElement("button", tslib_1.__assign({ className: className, disabled: disabled }, props), children));
    };
    return Button;
}(React.Component));
exports.Button = Button;

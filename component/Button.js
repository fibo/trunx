Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var Button = (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), _b = _a[0], helpersProps = _b.helpersProps, mainColorsProps = _b.mainColorsProps, shadeColorsProps = _b.shadeColorsProps, sizeProps = _b.sizeProps, textColorHelpersProps = _b.textColorHelpersProps, _c = _a[1], children = _c.children, classNameProp = _c.className, disabled = _c.disabled, download = _c.download, href = _c.href, isActive = _c.isActive, isFocused = _c.isFocused, isFullwidth = _c.isFullwidth, isInverted = _c.isInverted, isLoading = _c.isLoading, isNormal = _c.isNormal, isOutlined = _c.isOutlined, isRounded = _c.isRounded, isStatic = _c.isStatic, isText = _c.isText, onClick = _c.onClick, target = _c.target, type = _c.type, value = _c.value, props = tslib_1.__rest(_c, ["children", "className", "disabled", "download", "href", "isActive", "isFocused", "isFullwidth", "isInverted", "isLoading", "isNormal", "isOutlined", "isRounded", "isStatic", "isText", "onClick", "target", "type", "value"]);
        var className = classnames("button", classNameProp, {
            "is-active": isActive,
            "is-focused": isFocused,
            "is-fullwidth": isFullwidth,
            "is-inverted": isInverted,
            "is-loading": isLoading,
            "is-normal": isNormal,
            "is-outlined": isOutlined,
            "is-rounded": isRounded,
            "is-static": isStatic,
            "is-text": isText,
        }, modifiers_1.helpersPropsToClassnames(helpersProps), modifiers_1.mainColorsPropsToClassnames(mainColorsProps), modifiers_1.shadeColorsPropsToClassnames(shadeColorsProps), modifiers_1.sizePropsToClassnames(sizeProps), modifiers_1.textColorHelpersPropsToClassnames(textColorHelpersProps));
        if (href) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({ className: className, download: download, href: href, onClick: onClick, target: target }, props), children));
        }
        if (type) {
            if (disabled || isLoading) {
                return (React.createElement("button", tslib_1.__assign({ className: className, disabled: disabled }, props), value));
            }
            else {
                return (React.createElement("input", tslib_1.__assign({ className: className, type: type, value: value }, props)));
            }
        }
        return (React.createElement("button", tslib_1.__assign({ className: className, disabled: disabled, onClick: onClick }, props), this.props.children));
    };
    return Button;
}(React.Component));
exports.default = Button;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Tabs = (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, className = _a.className, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded, props = tslib_1.__rest(_a, ["className", "isBoxed", "isCentered", "isFullwidth", "isLarge", "isMedium", "isRight", "isSmall", "isToggle", "isToggleRounded"]);
        return (React.createElement("nav", tslib_1.__assign({}, props, { className: classnames("tabs", className, {
                "is-boxed": isBoxed,
                "is-centered": isCentered,
                "is-fullwidth": isFullwidth,
                "is-right": isRight,
                "is-toggle": isToggle,
                "is-toggle-rounded": isToggleRounded,
            }, modifiers_1.sizePropsToClassnames({
                isLarge: isLarge,
                isMedium: isMedium,
                isSmall: isSmall,
            })) }), this.props.children));
    };
    return Tabs;
}(React.Component));
exports.default = Tabs;

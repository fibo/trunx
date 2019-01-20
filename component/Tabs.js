Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var TabsItem = (function (_super) {
    tslib_1.__extends(TabsItem, _super);
    function TabsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsItem.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, onClick = _a.onClick;
        if (isActive) {
            return (React.createElement("li", { className: "is-active" },
                React.createElement("a", null, this.props.children)));
        }
        else {
            return (React.createElement("li", null,
                React.createElement("a", { onClick: onClick }, this.props.children)));
        }
    };
    TabsItem.defaultProps = {
        onClick: Function.prototype
    };
    return TabsItem;
}(React.Component));
var TabsNav = (function (_super) {
    tslib_1.__extends(TabsNav, _super);
    function TabsNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsNav.prototype.render = function () {
        var _a = this.props, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isRight = _a.isRight, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded;
        var className = classnames("tabs", {
            "is-boxed": isBoxed,
            "is-centered": isCentered,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
            "is-toggle": isToggle,
            "is-toggle-rounded": isToggleRounded,
        }, modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("nav", { className: className },
            React.createElement("div", { className: "container" },
                React.createElement("ul", null, this.props.children))));
    };
    return TabsNav;
}(React.Component));
var Tabs = (function (_super) {
    tslib_1.__extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded;
        var className = classnames("tabs", {
            "is-boxed": isBoxed,
            "is-centered": isCentered,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
            "is-toggle": isToggle,
            "is-toggle-rounded": isToggleRounded,
        }, modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }));
        return (React.createElement("div", { className: className },
            React.createElement("ul", null, this.props.children)));
    };
    Tabs.Item = TabsItem;
    Tabs.Nav = TabsNav;
    return Tabs;
}(React.Component));
exports.default = Tabs;

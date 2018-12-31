var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var TabsItem = (function (_super) {
    __extends(TabsItem, _super);
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
    __extends(TabsNav, _super);
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
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isRight = _a.isRight, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded;
        var className = classnames("tabs", {
            "is-boxed": isBoxed,
            "is-centered": isCentered,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
            "is-toggle": isToggle,
            "is-toggle-rounded": isToggleRounded,
        }, modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("div", { className: className },
            React.createElement("ul", null, this.props.children)));
    };
    Tabs.Item = TabsItem;
    Tabs.Nav = TabsNav;
    return Tabs;
}(React.Component));
exports.default = Tabs;

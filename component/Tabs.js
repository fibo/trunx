var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
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
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, isBoxed = _a.isBoxed, isCentered = _a.isCentered, isFullwidth = _a.isFullwidth, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall, isToggle = _a.isToggle, isToggleRounded = _a.isToggleRounded;
        var className = classname(['tabs'], {
            'is-boxed': isBoxed,
            'is-centered': isCentered,
            'is-fullwidth': isFullwidth,
            'is-large': isLarge,
            'is-medium': isMedium,
            'is-right': isRight,
            'is-small': isSmall,
            'is-toggle': isToggle,
            'is-toggle-rounded': isToggleRounded,
        });
        return (React.createElement("div", { className: className },
            React.createElement("ul", null, this.props.children)));
    };
    Tabs.Item = TabsItem;
    return Tabs;
}(React.Component));
exports.default = Tabs;

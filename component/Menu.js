Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var MenuLabel = (function (_super) {
    tslib_1.__extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("p", { className: classnames("menu-label", className) }, children));
    };
    return MenuLabel;
}(React.Component));
var MenuList = (function (_super) {
    tslib_1.__extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("ul", { className: classnames("menu-list", className) }, children));
    };
    return MenuList;
}(React.Component));
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("aside", tslib_1.__assign({ className: classnames("menu", className) }, props), children));
    };
    Menu.Label = MenuLabel;
    Menu.List = MenuList;
    return Menu;
}(React.Component));
exports.default = Menu;

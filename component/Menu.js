Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var MenuLabel = (function (_super) {
    tslib_1.__extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        return (React.createElement("p", { className: "menu-label" }, this.props.children));
    };
    return MenuLabel;
}(React.Component));
var MenuList = (function (_super) {
    tslib_1.__extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        return (React.createElement("ul", { className: "menu-list" }, this.props.children));
    };
    return MenuList;
}(React.Component));
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        return (React.createElement("aside", tslib_1.__assign({}, props, { className: "menu" }), children));
    };
    Menu.Label = MenuLabel;
    Menu.List = MenuList;
    return Menu;
}(React.Component));
exports.default = Menu;

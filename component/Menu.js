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
var React = require("react");
var MenuLabel = (function (_super) {
    __extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        return (React.createElement("p", { className: "menu-label" }, this.props.children));
    };
    return MenuLabel;
}(React.Component));
var MenuList = (function (_super) {
    __extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        return (React.createElement("ul", { className: "menu-list" }, this.props.children));
    };
    return MenuList;
}(React.Component));
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("aside", { className: "menu" }, this.props.children));
    };
    Menu.Label = MenuLabel;
    Menu.List = MenuList;
    return Menu;
}(React.Component));
exports.default = Menu;

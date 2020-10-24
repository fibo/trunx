Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MenuLabel = (function (_super) {
    tslib_1.__extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.menuLabel);
    };
    return MenuLabel;
}(React.Component));
var MenuList = (function (_super) {
    tslib_1.__extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        return renderElement_1.renderElement('ul', this.props, classNames_1.bulmaClassName.menuList);
    };
    return MenuList;
}(React.Component));
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return renderElement_1.renderElement('aside', this.props, classNames_1.bulmaClassName.menu);
    };
    Menu.Label = MenuLabel;
    Menu.List = MenuList;
    return Menu;
}(React.Component));
exports.Menu = Menu;

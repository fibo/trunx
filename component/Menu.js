Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MenuLabel = (function (_super) {
    tslib_1.__extends(MenuLabel, _super);
    function MenuLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MenuLabel.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MenuLabel.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.menuLabel);
    };
    return MenuLabel;
}(React.Component));
var MenuList = (function (_super) {
    tslib_1.__extends(MenuList, _super);
    function MenuList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MenuList.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MenuList.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('ul', this.props, classNames_1.bulmaClassName.menuList);
    };
    return MenuList;
}(React.Component));
var Menu = (function (_super) {
    tslib_1.__extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Menu.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Menu.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('aside', this.props, classNames_1.bulmaClassName.menu);
    };
    Menu.Label = MenuLabel;
    Menu.List = MenuList;
    return Menu;
}(React.Component));
exports.Menu = Menu;

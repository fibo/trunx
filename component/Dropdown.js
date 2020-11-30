Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var DropdownContent = (function (_super) {
    tslib_1.__extends(DropdownContent, _super);
    function DropdownContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContent.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownContent);
    };
    return DropdownContent;
}(React.Component));
var DropdownDivider = (function (_super) {
    tslib_1.__extends(DropdownDivider, _super);
    function DropdownDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownDivider.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownDivider);
    };
    return DropdownDivider;
}(React.Component));
var DropdownItem = (function (_super) {
    tslib_1.__extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.dropdownItem, { isActive: isActive });
    };
    return DropdownItem;
}(React.Component));
var DropdownMenu = (function (_super) {
    tslib_1.__extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownMenu);
    };
    DropdownMenu.defaultProps = { role: 'menu' };
    return DropdownMenu;
}(React.Component));
var DropdownTrigger = (function (_super) {
    tslib_1.__extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownTrigger.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownTrigger);
    };
    return DropdownTrigger;
}(React.Component));
var Dropdown = (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, isHoverable = _a.isHoverable, isRight = _a.isRight, isUp = _a.isUp, props = tslib_1.__rest(_a, ["isActive", "isHoverable", "isRight", "isUp"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.dropdown, {
            isActive: isActive,
            isHoverable: isHoverable,
            isRight: isRight,
            isUp: isUp,
        });
    };
    Dropdown.Content = DropdownContent;
    Dropdown.Divider = DropdownDivider;
    Dropdown.Item = DropdownItem;
    Dropdown.Menu = DropdownMenu;
    Dropdown.Trigger = DropdownTrigger;
    return Dropdown;
}(React.Component));
exports.Dropdown = Dropdown;

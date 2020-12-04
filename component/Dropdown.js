Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var DropdownContent = (function (_super) {
    tslib_1.__extends(DropdownContent, _super);
    function DropdownContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    DropdownContent.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    DropdownContent.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownContent);
    };
    return DropdownContent;
}(React.Component));
var DropdownDivider = (function (_super) {
    tslib_1.__extends(DropdownDivider, _super);
    function DropdownDivider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    DropdownDivider.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    DropdownDivider.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownDivider);
    };
    return DropdownDivider;
}(React.Component));
var DropdownItem = (function (_super) {
    tslib_1.__extends(DropdownItem, _super);
    function DropdownItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    DropdownItem.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    DropdownItem.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.dropdownItem, { isActive: isActive });
    };
    return DropdownItem;
}(React.Component));
var DropdownMenu = (function (_super) {
    tslib_1.__extends(DropdownMenu, _super);
    function DropdownMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    DropdownMenu.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    DropdownMenu.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownMenu);
    };
    DropdownMenu.defaultProps = { role: 'menu' };
    return DropdownMenu;
}(React.Component));
var DropdownTrigger = (function (_super) {
    tslib_1.__extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    DropdownTrigger.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    DropdownTrigger.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.dropdownTrigger);
    };
    return DropdownTrigger;
}(React.Component));
var Dropdown = (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Dropdown.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Dropdown.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
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

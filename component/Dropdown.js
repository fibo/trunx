Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var commonRenders_1 = require("./commonRenders");
var DropdownContent = (function (_super) {
    tslib_1.__extends(DropdownContent, _super);
    function DropdownContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContent.prototype.render = function () {
        return commonRenders_1.renderDiv(this.props, classNames_1.bulmaClassName.dropdownContent);
    };
    return DropdownContent;
}(React.Component));
var DropdownDivider = (function (_super) {
    tslib_1.__extends(DropdownDivider, _super);
    function DropdownDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownDivider.prototype.render = function () {
        return commonRenders_1.renderDiv(this.props, classNames_1.bulmaClassName.dropdownDivider);
    };
    return DropdownDivider;
}(React.Component));
var DropdownItem = (function (_super) {
    tslib_1.__extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.getClassNames = function (_a) {
        var className = _a.className, isActive = _a.isActive;
        return classnames(classNames_1.bulmaClassName.dropdownItem, className, {
            "is-active": isActive,
        });
    };
    return DropdownItem;
}(React.Component));
render();
{
    var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
    return commonRenders_1.renderA.apply(void 0, tslib_1.__spreadArrays([{
            className: classnames(classNames_1.bulmaClassName.dropdownItem, className, {
                "is-active": isActive,
            })
        }], props));
}
var DropdownMenu = (function (_super) {
    tslib_1.__extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.render = function () {
        return commonRenders_1.renderDiv(tslib_1.__assign({ role: "menu" }, this.props), classNames_1.bulmaClassName.dropdownMenu);
    };
    return DropdownMenu;
}(React.Component));
var DropdownTrigger = (function (_super) {
    tslib_1.__extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownTrigger.prototype.render = function () {
        return commonRenders_1.renderDiv(this.props, classNames_1.bulmaClassName.dropdownTrigger);
    };
    return DropdownTrigger;
}(React.Component));
var Dropdown = (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, isHoverable = _a.isHoverable, isRight = _a.isRight, isUp = _a.isUp, props = tslib_1.__rest(_a, ["children", "className", "isActive", "isHoverable", "isRight", "isUp"]);
        return commonRenders_1.renderDiv(tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.dropdown, className, {
                "is-active": isActive,
                "is-hoverable": isHoverable,
                "is-right": isRight,
                "is-up": isUp,
            }) }, props));
    };
    Dropdown.Content = DropdownContent;
    Dropdown.Divider = DropdownDivider;
    Dropdown.Item = DropdownItem;
    Dropdown.Menu = DropdownMenu;
    Dropdown.Trigger = DropdownTrigger;
    return Dropdown;
}(React.Component));
exports.default = Dropdown;

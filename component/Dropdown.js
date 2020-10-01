Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var DropdownContent = (function (_super) {
    tslib_1.__extends(DropdownContent, _super);
    function DropdownContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownContent.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("dropdown-content", className) }, children));
    };
    return DropdownContent;
}(React.Component));
var DropdownDivider = (function (_super) {
    tslib_1.__extends(DropdownDivider, _super);
    function DropdownDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownDivider.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("dropdown-divider", className) }, children));
    };
    return DropdownDivider;
}(React.Component));
var DropdownItem = (function (_super) {
    tslib_1.__extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, href = _a.href, isActive = _a.isActive, onClick = _a.onClick, props = tslib_1.__rest(_a, ["className", "children", "href", "isActive", "onClick"]);
        return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: classnames("dropdown-item", className, {
                "is-active": isActive,
            }), href: href, onClick: onClick }), children));
    };
    return DropdownItem;
}(React.Component));
var DropdownMenu = (function (_super) {
    tslib_1.__extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("dropdown-menu", className), role: "menu" }, children));
    };
    return DropdownMenu;
}(React.Component));
var DropdownTrigger = (function (_super) {
    tslib_1.__extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownTrigger.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("dropdown-trigger", className) }, children));
    };
    return DropdownTrigger;
}(React.Component));
var Dropdown = (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, isHoverable = _a.isHoverable, isRight = _a.isRight, isUp = _a.isUp;
        return (React.createElement("div", { className: classnames("dropdown", className, {
                "is-active": isActive,
                "is-hoverable": isHoverable,
                "is-right": isRight,
                "is-up": isUp,
            }) }, children));
    };
    Dropdown.Content = DropdownContent;
    Dropdown.Divider = DropdownDivider;
    Dropdown.Item = DropdownItem;
    Dropdown.Menu = DropdownMenu;
    Dropdown.Trigger = DropdownTrigger;
    return Dropdown;
}(React.Component));
exports.default = Dropdown;

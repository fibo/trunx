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
        return (React.createElement("div", { className: "dropdown-content" }, this.props.children));
    };
    return DropdownContent;
}(React.Component));
var DropdownDivider = (function (_super) {
    tslib_1.__extends(DropdownDivider, _super);
    function DropdownDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownDivider.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown-divider" }, this.props.children));
    };
    return DropdownDivider;
}(React.Component));
var DropdownItem = (function (_super) {
    tslib_1.__extends(DropdownItem, _super);
    function DropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownItem.prototype.render = function () {
        var _a = this.props, href = _a.href, isActive = _a.isActive, onClick = _a.onClick, props = tslib_1.__rest(_a, ["href", "isActive", "onClick"]);
        var className = classnames("dropdown-item", {
            "is-active": isActive,
        });
        return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, href: href, onClick: onClick }), this.props.children));
    };
    return DropdownItem;
}(React.Component));
var DropdownMenu = (function (_super) {
    tslib_1.__extends(DropdownMenu, _super);
    function DropdownMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownMenu.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown-menu", role: "menu" }, this.props.children));
    };
    return DropdownMenu;
}(React.Component));
var DropdownTrigger = (function (_super) {
    tslib_1.__extends(DropdownTrigger, _super);
    function DropdownTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownTrigger.prototype.render = function () {
        return (React.createElement("div", { className: "dropdown-trigger" }, this.props.children));
    };
    return DropdownTrigger;
}(React.Component));
var Dropdown = (function (_super) {
    tslib_1.__extends(Dropdown, _super);
    function Dropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropdown.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, isHoverable = _a.isHoverable, isRight = _a.isRight, isUp = _a.isUp;
        var className = classnames("dropdown", {
            "is-active": isActive,
            "is-hoverable": isHoverable,
            "is-right": isRight,
            "is-up": isUp,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Dropdown.Content = DropdownContent;
    Dropdown.Divider = DropdownDivider;
    Dropdown.Item = DropdownItem;
    Dropdown.Menu = DropdownMenu;
    Dropdown.Trigger = DropdownTrigger;
    return Dropdown;
}(React.Component));
exports.default = Dropdown;

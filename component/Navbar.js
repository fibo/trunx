Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var NavbarBrand = (function (_super) {
    tslib_1.__extends(NavbarBrand, _super);
    function NavbarBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBrand.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classnames("navbar-brand", className) }, children));
    };
    return NavbarBrand;
}(React.Component));
var NavbarBurger = (function (_super) {
    tslib_1.__extends(NavbarBurger, _super);
    function NavbarBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBurger.prototype.render = function () {
        var _a = this.props, className = _a.className, isActive = _a.isActive, onClick = _a.onClick;
        return (React.createElement("a", { className: classnames("navbar-burger", className, {
                "is-active": isActive,
            }), role: "button", "aria-label": "menu", "aria-expanded": isActive ? "true" : "false", onClick: onClick },
            React.createElement("span", { "aria-hidden": "true" }),
            React.createElement("span", { "aria-hidden": "true" }),
            React.createElement("span", { "aria-hidden": "true" })));
    };
    return NavbarBurger;
}(React.Component));
var NavbarDivider = (function (_super) {
    tslib_1.__extends(NavbarDivider, _super);
    function NavbarDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDivider.prototype.render = function () {
        var className = this.props.className;
        return (React.createElement("hr", { className: classnames("navbar-divider", className) }));
    };
    return NavbarDivider;
}(React.Component));
var NavbarDropdown = (function (_super) {
    tslib_1.__extends(NavbarDropdown, _super);
    function NavbarDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDropdown.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classnames("navbar-dropdown", className) }, children));
    };
    return NavbarDropdown;
}(React.Component));
var NavbarEnd = (function (_super) {
    tslib_1.__extends(NavbarEnd, _super);
    function NavbarEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarEnd.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classnames("navbar-end", className) }, children));
    };
    return NavbarEnd;
}(React.Component));
var NavbarItemDiv = (function (_super) {
    tslib_1.__extends(NavbarItemDiv, _super);
    function NavbarItemDiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItemDiv.prototype.render = function () {
        var _a = this.props, className = _a.className, hasDropdown = _a.hasDropdown, isActive = _a.isActive, isHoverable = _a.isHoverable, props = tslib_1.__rest(_a, ["className", "hasDropdown", "isActive", "isHoverable"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("navbar-item", className, {
                "has-dropdown": hasDropdown,
                "is-active": isActive,
                "is-hoverable": isHoverable,
            }) }, props), this.props.children));
    };
    return NavbarItemDiv;
}(React.Component));
var NavbarItem = (function (_super) {
    tslib_1.__extends(NavbarItem, _super);
    function NavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItem.prototype.render = function () {
        var _a = this.props, classNameProp = _a.className, download = _a.download, hasDropdown = _a.hasDropdown, href = _a.href, isActive = _a.isActive, isHoverable = _a.isHoverable, onClick = _a.onClick, target = _a.target, children = _a.children, props = tslib_1.__rest(_a, ["className", "download", "hasDropdown", "href", "isActive", "isHoverable", "onClick", "target", "children"]);
        var className = classnames("navbar-item", classNameProp, {
            "has-dropdown": hasDropdown,
            "is-active": isActive,
            "is-hoverable": isHoverable,
        });
        if (hasDropdown) {
            return (React.createElement("div", { className: className }, children));
        }
        else {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, download: download, href: href, onClick: onClick, target: target }), children));
        }
    };
    NavbarItem.Div = NavbarItemDiv;
    return NavbarItem;
}(React.Component));
var NavbarLink = (function (_super) {
    tslib_1.__extends(NavbarLink, _super);
    function NavbarLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarLink.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("a", { className: classnames("navbar-link", className) }, children));
    };
    return NavbarLink;
}(React.Component));
var NavbarMenu = (function (_super) {
    tslib_1.__extends(NavbarMenu, _super);
    function NavbarMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarMenu.prototype.render = function () {
        var _a = this.props, className = _a.className, isActive = _a.isActive, children = _a.children;
        return (React.createElement("div", { className: classnames("navbar-menu", className, {
                "is-active": isActive,
            }) }, children));
    };
    return NavbarMenu;
}(React.Component));
var NavbarStart = (function (_super) {
    tslib_1.__extends(NavbarStart, _super);
    function NavbarStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarStart.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children;
        return (React.createElement("div", { className: classnames("navbar-start", className) }, children));
    };
    return NavbarStart;
}(React.Component));
var Navbar = (function (_super) {
    tslib_1.__extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.componentDidMount = function () {
        var _a = this.props, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop;
        if (isFixedTop) {
            document.body.classList.add("has-navbar-fixed-top");
        }
        if (isFixedBottom) {
            document.body.classList.add("has-navbar-fixed-bottom");
        }
    };
    Navbar.prototype.componentWillUnmount = function () {
        var _a = this.props, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop;
        if (isFixedBottom) {
            document.body.classList.remove("has-navbar-fixed-bottom");
        }
        if (isFixedTop) {
            document.body.classList.remove("has-navbar-fixed-top");
        }
    };
    Navbar.prototype.render = function () {
        var _a = this.props, className = _a.className, isBlack = _a.isBlack, isDark = _a.isDark, isDanger = _a.isDanger, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop, isLight = _a.isLight, isLink = _a.isLink, isInfo = _a.isInfo, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isTransparent = _a.isTransparent, isUnselectable = _a.isUnselectable, isWarning = _a.isWarning, isWhite = _a.isWhite, children = _a.children, props = tslib_1.__rest(_a, ["className", "isBlack", "isDark", "isDanger", "isFixedBottom", "isFixedTop", "isLight", "isLink", "isInfo", "isPrimary", "isSuccess", "isTransparent", "isUnselectable", "isWarning", "isWhite", "children"]);
        return (React.createElement("nav", tslib_1.__assign({}, props, { className: classnames("navbar", className, {
                "is-fixed-bottom": isFixedBottom,
                "is-fixed-top": isFixedTop,
                "is-transparent": isTransparent,
                "is-unselectable": isUnselectable,
            }, modifiers_1.mainColorsPropsToClassnames({
                isDanger: isDanger,
                isInfo: isInfo,
                isLink: isLink,
                isPrimary: isPrimary,
                isSuccess: isSuccess,
                isWarning: isWarning,
            }), modifiers_1.shadeColorsPropsToClassnames({
                isBlack: isBlack,
                isDark: isDark,
                isLight: isLight,
                isWhite: isWhite,
            })) }), children));
    };
    Navbar.Brand = NavbarBrand;
    Navbar.Burger = NavbarBurger;
    Navbar.Divider = NavbarDivider;
    Navbar.Dropdown = NavbarDropdown;
    Navbar.End = NavbarEnd;
    Navbar.Item = NavbarItem;
    Navbar.Link = NavbarLink;
    Navbar.Menu = NavbarMenu;
    Navbar.Start = NavbarStart;
    return Navbar;
}(React.Component));
exports.default = Navbar;

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
var NavbarBrand = (function (_super) {
    __extends(NavbarBrand, _super);
    function NavbarBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBrand.prototype.render = function () {
        return (React.createElement("div", { className: "navbar-brand" }, this.props.children));
    };
    return NavbarBrand;
}(React.Component));
var NavbarBurger = (function (_super) {
    __extends(NavbarBurger, _super);
    function NavbarBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBurger.prototype.render = function () {
        var isActive = this.props.isActive;
        var className = classname(['navbar-burger'], {
            'is-active': isActive,
        });
        return (React.createElement("a", { className: className, role: "button", "aria-label": "menu", "aria-expanded": isActive ? 'true' : 'false' },
            React.createElement("span", { "aria-hidden": "true" }),
            React.createElement("span", { "aria-hidden": "true" }),
            React.createElement("span", { "aria-hidden": "true" })));
    };
    return NavbarBurger;
}(React.Component));
var NavbarDropdown = (function (_super) {
    __extends(NavbarDropdown, _super);
    function NavbarDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDropdown.prototype.render = function () {
        return (React.createElement("div", { className: "navbar-dropdown" }, this.props.children));
    };
    return NavbarDropdown;
}(React.Component));
var NavbarEnd = (function (_super) {
    __extends(NavbarEnd, _super);
    function NavbarEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarEnd.prototype.render = function () {
        return (React.createElement("div", { className: "navbar-end" }, this.props.children));
    };
    return NavbarEnd;
}(React.Component));
var NavbarItem = (function (_super) {
    __extends(NavbarItem, _super);
    function NavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItem.prototype.render = function () {
        var _a = this.props, hasDropdown = _a.hasDropdown, href = _a.href, isActive = _a.isActive, isHoverable = _a.isHoverable, props = __rest(_a, ["hasDropdown", "href", "isActive", "isHoverable"]);
        var className = classname(['navbar-item'], {
            'has-dropdown': hasDropdown,
            'is-active': isActive,
            'is-hoverable': isHoverable,
        });
        return href ? (React.createElement("a", __assign({ className: className, href: href }, props), this.props.children)) : (React.createElement("div", { className: className }, this.props.children));
    };
    return NavbarItem;
}(React.Component));
var NavbarLink = (function (_super) {
    __extends(NavbarLink, _super);
    function NavbarLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarLink.prototype.render = function () {
        return (React.createElement("a", { className: "navbar-link" }, this.props.children));
    };
    return NavbarLink;
}(React.Component));
var NavbarMenu = (function (_super) {
    __extends(NavbarMenu, _super);
    function NavbarMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarMenu.prototype.render = function () {
        var isActive = this.props.isActive;
        var className = classname(['navbar-menu'], {
            'is-active': isActive,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return NavbarMenu;
}(React.Component));
var NavbarStart = (function (_super) {
    __extends(NavbarStart, _super);
    function NavbarStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarStart.prototype.render = function () {
        return (React.createElement("div", { className: "navbar-start" }, this.props.children));
    };
    return NavbarStart;
}(React.Component));
var Navbar = (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navbar.prototype.render = function () {
        var _a = this.props, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop, isTransparent = _a.isTransparent, isUnselectable = _a.isUnselectable, props = __rest(_a, ["isFixedBottom", "isFixedTop", "isTransparent", "isUnselectable"]);
        var className = classname(['navbar'], {
            'is-fixed-bottom': isFixedBottom,
            'is-fixed-top': isFixedTop,
            'is-transparent': isTransparent,
            'is-unselectable': isUnselectable,
        });
        return (React.createElement("nav", __assign({ className: className }, props), this.props.children));
    };
    Navbar.Brand = NavbarBrand;
    Navbar.Burger = NavbarBurger;
    Navbar.Dropdown = NavbarDropdown;
    Navbar.End = NavbarEnd;
    Navbar.Item = NavbarItem;
    Navbar.Link = NavbarLink;
    Navbar.Menu = NavbarMenu;
    Navbar.Start = NavbarStart;
    return Navbar;
}(React.Component));
exports.default = Navbar;

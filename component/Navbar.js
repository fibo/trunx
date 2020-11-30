Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var NavbarBrand = (function (_super) {
    tslib_1.__extends(NavbarBrand, _super);
    function NavbarBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBrand.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.navbarBrand);
    };
    return NavbarBrand;
}(React.Component));
var NavbarBurger = (function (_super) {
    tslib_1.__extends(NavbarBurger, _super);
    function NavbarBurger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarBurger.prototype.render = function () {
        var _a = this.props, className = _a.className, isActive = _a.isActive, props = tslib_1.__rest(_a, ["className", "isActive"]);
        return (React.createElement("a", tslib_1.__assign({ "aria-expanded": isActive ? 'true' : 'false', className: classnames(classNames_1.bulmaClassName.navbarBurger, className, classNames_1.trunxPropsToClassnamesObject({ isActive: isActive })) }, props),
            React.createElement("span", { "aria-hidden": 'true' }),
            React.createElement("span", { "aria-hidden": 'true' }),
            React.createElement("span", { "aria-hidden": 'true' })));
    };
    NavbarBurger.defaultProps = {
        'aria-label': 'menu',
        role: 'button',
    };
    return NavbarBurger;
}(React.Component));
var NavbarDivider = (function (_super) {
    tslib_1.__extends(NavbarDivider, _super);
    function NavbarDivider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDivider.prototype.render = function () {
        return renderElement_1.renderElement('hr', this.props, classNames_1.bulmaClassName.navbarDivider);
    };
    return NavbarDivider;
}(React.Component));
var NavbarDropdown = (function (_super) {
    tslib_1.__extends(NavbarDropdown, _super);
    function NavbarDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarDropdown.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.navbarDropdown);
    };
    return NavbarDropdown;
}(React.Component));
var NavbarEnd = (function (_super) {
    tslib_1.__extends(NavbarEnd, _super);
    function NavbarEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarEnd.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.navbarEnd);
    };
    return NavbarEnd;
}(React.Component));
var NavbarItem = (function (_super) {
    tslib_1.__extends(NavbarItem, _super);
    function NavbarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarItem.prototype.render = function () {
        var _a = this.props, hasDropdown = _a.hasDropdown, hasDropdownUp = _a.hasDropdownUp, isActive = _a.isActive, isHoverable = _a.isHoverable, props = tslib_1.__rest(_a, ["hasDropdown", "hasDropdownUp", "isActive", "isHoverable"]);
        var tag = hasDropdown ? 'div' : 'a';
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.navbarItem, {
            hasDropdown: hasDropdown,
            hasDropdownUp: hasDropdownUp,
            isActive: isActive,
            isHoverable: isHoverable,
        });
    };
    return NavbarItem;
}(React.Component));
var NavbarLink = (function (_super) {
    tslib_1.__extends(NavbarLink, _super);
    function NavbarLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarLink.prototype.render = function () {
        return renderElement_1.renderElement('a', this.props, classNames_1.bulmaClassName.navbarLink);
    };
    return NavbarLink;
}(React.Component));
var NavbarMenu = (function (_super) {
    tslib_1.__extends(NavbarMenu, _super);
    function NavbarMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarMenu.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarMenu, { isActive: isActive });
    };
    return NavbarMenu;
}(React.Component));
var NavbarStart = (function (_super) {
    tslib_1.__extends(NavbarStart, _super);
    function NavbarStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavbarStart.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.navbarStart);
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
            document.body.classList.add('has-navbar-fixed-top');
        }
        if (isFixedBottom) {
            document.body.classList.add('has-navbar-fixed-bottom');
        }
    };
    Navbar.prototype.componentWillUnmount = function () {
        var _a = this.props, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop;
        if (isFixedBottom) {
            document.body.classList.remove('has-navbar-fixed-bottom');
        }
        if (isFixedTop) {
            document.body.classList.remove('has-navbar-fixed-top');
        }
    };
    Navbar.prototype.render = function () {
        var _a = this.props, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop, isTransparent = _a.isTransparent, isUnselectable = _a.isUnselectable, props = tslib_1.__rest(_a, ["isFixedBottom", "isFixedTop", "isTransparent", "isUnselectable"]);
        return renderElement_1.renderElement('nav', props, classNames_1.bulmaClassName.navbar, {
            isFixedBottom: isFixedBottom,
            isFixedTop: isFixedTop,
            isTransparent: isTransparent,
            isUnselectable: isUnselectable,
        });
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
exports.Navbar = Navbar;

Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var renderElement_1 = require("./renderElement");
var NavbarBrand = (function (_super) {
    tslib_1.__extends(NavbarBrand, _super);
    function NavbarBrand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarBrand.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarBrand.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarBrand);
    };
    return NavbarBrand;
}(React.Component));
var NavbarBurger = (function (_super) {
    tslib_1.__extends(NavbarBurger, _super);
    function NavbarBurger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarBurger.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarBurger.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], className = _b.className, fallbackUI = _b.fallbackUI, isActive = _b.isActive, props = tslib_1.__rest(_b, ["className", "fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("a", tslib_1.__assign({ "aria-expanded": isActive ? 'true' : 'false', className: classnames(classNames_1.bulmaClassName.navbarBurger, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classNames_1.trunxPropsToClassnamesObject({ isActive: isActive })) }, props),
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarDivider.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarDivider.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('hr', props, classNames_1.bulmaClassName.navbarDivider);
    };
    return NavbarDivider;
}(React.Component));
var NavbarDropdown = (function (_super) {
    tslib_1.__extends(NavbarDropdown, _super);
    function NavbarDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarDropdown.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarDropdown.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarDropdown);
    };
    return NavbarDropdown;
}(React.Component));
var NavbarEnd = (function (_super) {
    tslib_1.__extends(NavbarEnd, _super);
    function NavbarEnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarEnd.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarEnd.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarEnd);
    };
    return NavbarEnd;
}(React.Component));
var NavbarItem = (function (_super) {
    tslib_1.__extends(NavbarItem, _super);
    function NavbarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarItem.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarItem.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, hasDropdown = _a.hasDropdown, hasDropdownUp = _a.hasDropdownUp, isActive = _a.isActive, isHoverable = _a.isHoverable, props = tslib_1.__rest(_a, ["fallbackUI", "hasDropdown", "hasDropdownUp", "isActive", "isHoverable"]);
        if (this.state.hasError)
            return fallbackUI;
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarLink.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarLink.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.navbarLink);
    };
    return NavbarLink;
}(React.Component));
var NavbarMenu = (function (_super) {
    tslib_1.__extends(NavbarMenu, _super);
    function NavbarMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarMenu.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarMenu.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isActive = _a.isActive, props = tslib_1.__rest(_a, ["fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarMenu, { isActive: isActive });
    };
    return NavbarMenu;
}(React.Component));
var NavbarStart = (function (_super) {
    tslib_1.__extends(NavbarStart, _super);
    function NavbarStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    NavbarStart.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    NavbarStart.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.navbarStart);
    };
    return NavbarStart;
}(React.Component));
var Navbar = (function (_super) {
    tslib_1.__extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Navbar.getDerivedStateFromError = function () {
        return { hasError: true };
    };
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
        var _a = this.props, fallbackUI = _a.fallbackUI, isFixedBottom = _a.isFixedBottom, isFixedTop = _a.isFixedTop, isTransparent = _a.isTransparent, isUnselectable = _a.isUnselectable, props = tslib_1.__rest(_a, ["fallbackUI", "isFixedBottom", "isFixedTop", "isTransparent", "isUnselectable"]);
        if (this.state.hasError)
            return fallbackUI;
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

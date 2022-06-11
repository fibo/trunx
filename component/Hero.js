Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var HeroBody = (function (_super) {
    tslib_1.__extends(HeroBody, _super);
    function HeroBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    HeroBody.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    HeroBody.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.heroBody);
    };
    return HeroBody;
}(React.Component));
var HeroFoot = (function (_super) {
    tslib_1.__extends(HeroFoot, _super);
    function HeroFoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    HeroFoot.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    HeroFoot.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.heroFoot);
    };
    return HeroFoot;
}(React.Component));
var HeroHead = (function (_super) {
    tslib_1.__extends(HeroHead, _super);
    function HeroHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    HeroHead.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    HeroHead.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.heroHead);
    };
    return HeroHead;
}(React.Component));
var Hero = (function (_super) {
    tslib_1.__extends(Hero, _super);
    function Hero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Hero.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Hero.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isBold = _a.isBold, isDark = _a.isDark, isFullheight = _a.isFullheight, isFullheightWithNavbar = _a.isFullheightWithNavbar, isLarge = _a.isLarge, isMedium = _a.isMedium, props = tslib_1.__rest(_a, ["fallbackUI", "isBold", "isDark", "isFullheight", "isFullheightWithNavbar", "isLarge", "isMedium"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('section', props, classNames_1.bulmaClassName.hero, {
            isBold: isBold,
            isDark: isDark,
            isFullheight: isFullheight,
            isFullheightWithNavbar: isFullheightWithNavbar,
            isLarge: isLarge,
            isMedium: isMedium,
        });
    };
    Hero.Body = HeroBody;
    Hero.Foot = HeroFoot;
    Hero.Head = HeroHead;
    return Hero;
}(React.Component));
exports.Hero = Hero;

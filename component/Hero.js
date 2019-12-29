Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var HeroBody = (function (_super) {
    tslib_1.__extends(HeroBody, _super);
    function HeroBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroBody.prototype.render = function () {
        return (React.createElement("div", { className: "hero-body" }, this.props.children));
    };
    return HeroBody;
}(React.Component));
var HeroFoot = (function (_super) {
    tslib_1.__extends(HeroFoot, _super);
    function HeroFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroFoot.prototype.render = function () {
        return (React.createElement("div", { className: "hero-foot" }, this.props.children));
    };
    return HeroFoot;
}(React.Component));
var HeroHead = (function (_super) {
    tslib_1.__extends(HeroHead, _super);
    function HeroHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroHead.prototype.render = function () {
        return (React.createElement("div", { className: "hero-head" }, this.props.children));
    };
    return HeroHead;
}(React.Component));
var Hero = (function (_super) {
    tslib_1.__extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props, isBold = _a.isBold, isDark = _a.isDark, isFullheight = _a.isFullheight, isFullheightWithNavbar = _a.isFullheightWithNavbar, isLarge = _a.isLarge, isMedium = _a.isMedium;
        var className = classnames("hero", {
            "is-bold": isBold,
            "is-dark": isDark,
            "is-fullheight": isFullheight,
            "is-fullheight-with-navbar": isFullheightWithNavbar,
            "is-large": isLarge,
            "is-medium": isMedium,
        }, modifiers_1.mainColorsPropsToClassnames(this.props));
        return (React.createElement("section", { className: className }, this.props.children));
    };
    Hero.Body = HeroBody;
    Hero.Foot = HeroFoot;
    Hero.Head = HeroHead;
    return Hero;
}(React.Component));
exports.default = Hero;

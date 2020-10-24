Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var HeroBody = (function (_super) {
    tslib_1.__extends(HeroBody, _super);
    function HeroBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroBody.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.heroBody);
    };
    return HeroBody;
}(React.Component));
var HeroFoot = (function (_super) {
    tslib_1.__extends(HeroFoot, _super);
    function HeroFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroFoot.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.heroFoot);
    };
    return HeroFoot;
}(React.Component));
var HeroHead = (function (_super) {
    tslib_1.__extends(HeroHead, _super);
    function HeroHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroHead.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.heroHead);
    };
    return HeroHead;
}(React.Component));
var Hero = (function (_super) {
    tslib_1.__extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props, isBold = _a.isBold, isDark = _a.isDark, isFullheight = _a.isFullheight, isFullheightWithNavbar = _a.isFullheightWithNavbar, isLarge = _a.isLarge, isMedium = _a.isMedium, props = tslib_1.__rest(_a, ["isBold", "isDark", "isFullheight", "isFullheightWithNavbar", "isLarge", "isMedium"]);
        return renderElement_1.renderElement('section', props, classNames_1.bulmaClassName.hero, {
            isBold: isBold,
            isDark: isDark,
            isFullheight: isFullheight,
            isFullheightWithNavbar: isFullheightWithNavbar,
            isLarge: isLarge,
            isMedium: isMedium
        });
    };
    Hero.Body = HeroBody;
    Hero.Foot = HeroFoot;
    Hero.Head = HeroHead;
    return Hero;
}(React.Component));
exports.Hero = Hero;

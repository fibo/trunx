Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Footer = (function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Footer.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Footer.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('footer', props, classNames_1.bulmaClassName.footer);
    };
    return Footer;
}(React.Component));
exports.Footer = Footer;

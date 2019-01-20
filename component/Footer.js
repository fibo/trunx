Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Footer = (function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var className = classnames("footer", modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("footer", { className: className }, this.props.children));
    };
    return Footer;
}(React.Component));
exports.default = Footer;

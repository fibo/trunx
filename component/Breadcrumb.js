Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Breadcrumb = (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var _a = this.props, hasArrowSeparator = _a.hasArrowSeparator, hasBulletSeparator = _a.hasBulletSeparator, hasDotSeparator = _a.hasDotSeparator, hasSuccedesSeparator = _a.hasSuccedesSeparator, isCentered = _a.isCentered, isRight = _a.isRight, props = tslib_1.__rest(_a, ["hasArrowSeparator", "hasBulletSeparator", "hasDotSeparator", "hasSuccedesSeparator", "isCentered", "isRight"]);
        var className = classnames_1.default("breadcrumb", {
            "has-arrow-separator": hasArrowSeparator,
            "has-bullet-separator": hasBulletSeparator,
            "has-dot-separator": hasDotSeparator,
            "has-succedes-separator": hasSuccedesSeparator,
            "is-centered": isCentered,
            "is-right": isRight,
        }, modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("nav", tslib_1.__assign({}, props, { "aria-label": "breadcrumbs", className: className }),
            React.createElement("ul", null, this.props.children)));
    };
    return Breadcrumb;
}(React.Component));
exports.default = Breadcrumb;

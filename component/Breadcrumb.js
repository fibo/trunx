Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var BreadcrumbItem = (function (_super) {
    tslib_1.__extends(BreadcrumbItem, _super);
    function BreadcrumbItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbItem.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "isActive"]);
        return (React.createElement("li", tslib_1.__assign({}, props, { className: classnames({
                className: className,
                "is-active": isActive,
            }) }), children));
    };
    return BreadcrumbItem;
}(React.Component));
var Breadcrumb = (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasArrowSeparator = _a.hasArrowSeparator, hasBulletSeparator = _a.hasBulletSeparator, hasDotSeparator = _a.hasDotSeparator, hasSuccedesSeparator = _a.hasSuccedesSeparator, isCentered = _a.isCentered, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall;
        return (React.createElement("nav", { "aria-label": "breadcrumbs", className: classnames("breadcrumb", className, {
                "has-arrow-separator": hasArrowSeparator,
                "has-bullet-separator": hasBulletSeparator,
                "has-dot-separator": hasDotSeparator,
                "has-succedes-separator": hasSuccedesSeparator,
                "is-centered": isCentered,
                "is-right": isRight,
            }, modifiers_1.sizePropsToClassnames({
                isLarge: isLarge,
                isMedium: isMedium,
                isSmall: isSmall,
            })) },
            React.createElement("ul", null, children)));
    };
    Breadcrumb.Item = BreadcrumbItem;
    return Breadcrumb;
}(React.Component));
exports.default = Breadcrumb;

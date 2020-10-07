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
        return (React.createElement("li", tslib_1.__assign({ className: classnames({
                className: className,
                "is-active": isActive,
            }) }, props), children));
    };
    return BreadcrumbItem;
}(React.Component));
var Breadcrumb = (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), sizeProps = _a[0].sizeProps, _b = _a[1], children = _b.children, className = _b.className, hasArrowSeparator = _b.hasArrowSeparator, hasBulletSeparator = _b.hasBulletSeparator, hasDotSeparator = _b.hasDotSeparator, hasSuccedesSeparator = _b.hasSuccedesSeparator, isCentered = _b.isCentered, isRight = _b.isRight, props = tslib_1.__rest(_b, ["children", "className", "hasArrowSeparator", "hasBulletSeparator", "hasDotSeparator", "hasSuccedesSeparator", "isCentered", "isRight"]);
        return (React.createElement("nav", tslib_1.__assign({ "aria-label": "breadcrumbs", className: classnames("breadcrumb", className, {
                "has-arrow-separator": hasArrowSeparator,
                "has-bullet-separator": hasBulletSeparator,
                "has-dot-separator": hasDotSeparator,
                "has-succedes-separator": hasSuccedesSeparator,
                "is-centered": isCentered,
                "is-right": isRight,
            }, modifiers_1.sizePropsToClassnames(sizeProps)) }, props),
            React.createElement("ul", null, children)));
    };
    Breadcrumb.Item = BreadcrumbItem;
    return Breadcrumb;
}(React.Component));
exports.default = Breadcrumb;

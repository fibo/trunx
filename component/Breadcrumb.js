Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var BreadcrumbItem = (function (_super) {
    tslib_1.__extends(BreadcrumbItem, _super);
    function BreadcrumbItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    BreadcrumbItem.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    BreadcrumbItem.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "isActive"]);
        return (React.createElement("li", tslib_1.__assign({ className: classnames(className, classNames_1.trunxPropsToClassnamesObject({ isActive: isActive })) }, props), children));
    };
    return BreadcrumbItem;
}(React.Component));
var Breadcrumb = (function (_super) {
    tslib_1.__extends(Breadcrumb, _super);
    function Breadcrumb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Breadcrumb.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Breadcrumb.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, hasArrowSeparator = _b.hasArrowSeparator, hasBulletSeparator = _b.hasBulletSeparator, hasDotSeparator = _b.hasDotSeparator, hasSuccedesSeparator = _b.hasSuccedesSeparator, isCentered = _b.isCentered, isRight = _b.isRight, props = tslib_1.__rest(_b, ["children", "className", "hasArrowSeparator", "hasBulletSeparator", "hasDotSeparator", "hasSuccedesSeparator", "isCentered", "isRight"]);
        return (React.createElement("nav", tslib_1.__assign({ "aria-label": 'breadcrumbs', className: classnames(classNames_1.bulmaClassName.breadcrumb, className, classNames_1.trunxPropsToClassnamesObject({
                hasArrowSeparator: hasArrowSeparator,
                hasBulletSeparator: hasBulletSeparator,
                hasDotSeparator: hasDotSeparator,
                hasSuccedesSeparator: hasSuccedesSeparator,
                isCentered: isCentered,
                isRight: isRight
            }), modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props),
            React.createElement("ul", null, children)));
    };
    Breadcrumb.Item = BreadcrumbItem;
    return Breadcrumb;
}(React.Component));
exports.Breadcrumb = Breadcrumb;

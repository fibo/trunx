Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
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
        var _a = this.props, children = _a.children, className = _a.className, fallbackUI = _a.fallbackUI, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("li", tslib_1.__assign({ className: (0, classnames_1.default)(className, (0, classNames_1.trunxPropsToClassnamesObject)({ isActive: isActive })) }, props), children));
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
        var _a = (0, modifiers_1.extractModifiersProps)(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, fallbackUI = _b.fallbackUI, hasArrowSeparator = _b.hasArrowSeparator, hasBulletSeparator = _b.hasBulletSeparator, hasDotSeparator = _b.hasDotSeparator, hasSuccedesSeparator = _b.hasSuccedesSeparator, isCentered = _b.isCentered, isRight = _b.isRight, props = tslib_1.__rest(_b, ["children", "className", "fallbackUI", "hasArrowSeparator", "hasBulletSeparator", "hasDotSeparator", "hasSuccedesSeparator", "isCentered", "isRight"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("nav", tslib_1.__assign({ "aria-label": 'breadcrumbs', className: (0, classnames_1.default)(classNames_1.bulmaClassName.breadcrumb, className, (0, classNames_1.trunxPropsToClassnamesObject)({
                hasArrowSeparator: hasArrowSeparator,
                hasBulletSeparator: hasBulletSeparator,
                hasDotSeparator: hasDotSeparator,
                hasSuccedesSeparator: hasSuccedesSeparator,
                isCentered: isCentered,
                isRight: isRight,
            }), (0, modifiers_1.modifierPropsToClassnamesObject)(modifiersProps)) }, props),
            React.createElement("ul", null, children)));
    };
    Breadcrumb.Item = BreadcrumbItem;
    return Breadcrumb;
}(React.Component));
exports.Breadcrumb = Breadcrumb;

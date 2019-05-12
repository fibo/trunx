Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Nav = (function (_super) {
    tslib_1.__extends(Nav, _super);
    function Nav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nav.prototype.render = function () {
        var _a = this.props, breadcrumb = _a.breadcrumb, hasArrowSeparator = _a.hasArrowSeparator, hasBulletSeparator = _a.hasBulletSeparator, hasDotSeparator = _a.hasDotSeparator, hasSuccedesSeparator = _a.hasSuccedesSeparator, isCentered = _a.isCentered, isLarge = _a.isLarge, isMedium = _a.isMedium, isRight = _a.isRight, isSmall = _a.isSmall, props = tslib_1.__rest(_a, ["breadcrumb", "hasArrowSeparator", "hasBulletSeparator", "hasDotSeparator", "hasSuccedesSeparator", "isCentered", "isLarge", "isMedium", "isRight", "isSmall"]);
        var className = classnames({
            "breadcrumb": breadcrumb,
            "has-arrow-separator": hasArrowSeparator,
            "has-bullet-separator": hasBulletSeparator,
            "has-dot-separator": hasDotSeparator,
            "has-succedes-separator": hasSuccedesSeparator,
            "is-centered": isCentered,
            "is-right": isRight,
        }, modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }));
        return (React.createElement("nav", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return Nav;
}(React.Component));
exports.default = Nav;

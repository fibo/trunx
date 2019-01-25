Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Section = (function (_super) {
    tslib_1.__extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        var _a = this.props, isInvisible = _a.isInvisible, isLarge = _a.isLarge, isMarginLess = _a.isMarginLess, isMedium = _a.isMedium, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly;
        var className = classnames("section", {
            "is-large": isLarge,
            "is-medium": isMedium,
        }, modifiers_1.helpersPropsToClassenames({
            isInvisible: isInvisible,
            isMarginLess: isMarginLess,
            isPaddingLess: isPaddingLess,
            isSrOnly: isSrOnly,
        }));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Section;
}(React.Component));
exports.default = Section;

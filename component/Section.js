Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Section = (function (_super) {
    tslib_1.__extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        var _a = this.props, isLarge = _a.isLarge, isMedium = _a.isMedium;
        var className = classnames("section", {
            "is-large": isLarge,
            "is-medium": isMedium,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Section;
}(React.Component));
exports.default = Section;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Columns = (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        var _a = this.props, isDesktop = _a.isDesktop, isGapless = _a.isGapless, isMobile = _a.isMobile, isMultiline = _a.isMultiline;
        var className = classnames("columns", {
            "is-desktop": isDesktop,
            "is-gapless": isGapless,
            "is-mobile": isMobile,
            "is-multiline": isMultiline,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Columns;
}(React.Component));
exports.default = Columns;

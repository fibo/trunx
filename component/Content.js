Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Content = (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight;
        return (React.createElement("div", { className: classnames("content", className, {
                "has-text-centered": hasTextCentered,
                "has-text-justified": hasTextJustified,
                "has-text-left": hasTextLeft,
                "has-text-right": hasTextRight,
            }, modifiers_1.sizePropsToClassnames(this.props)) }, children));
    };
    return Content;
}(React.Component));
exports.default = Content;

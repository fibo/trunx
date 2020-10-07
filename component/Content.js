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
        var _a = modifiers_1.extractModifiersProps(this.props), sizeProps = _a[0].sizeProps, _b = _a[1], children = _b.children, className = _b.className, hasTextCentered = _b.hasTextCentered, hasTextJustified = _b.hasTextJustified, hasTextLeft = _b.hasTextLeft, hasTextRight = _b.hasTextRight, props = tslib_1.__rest(_b, ["children", "className", "hasTextCentered", "hasTextJustified", "hasTextLeft", "hasTextRight"]);
        return (React.createElement("div", { className: classnames("content", className, {
                "has-text-centered": hasTextCentered,
                "has-text-justified": hasTextJustified,
                "has-text-left": hasTextLeft,
                "has-text-right": hasTextRight,
            }, modifiers_1.sizePropsToClassnames(sizeProps), tslib_1.__assign({}, props)) }, children));
    };
    return Content;
}(React.Component));
exports.default = Content;

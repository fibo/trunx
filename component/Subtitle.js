Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Subtitle = (function (_super) {
    tslib_1.__extends(Subtitle, _super);
    function Subtitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtitle.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, props = tslib_1.__rest(_a, ["children", "className", "is1", "is2", "is3", "is4", "is5", "is6"]);
        return (React.createElement("p", { className: classnames("subtitle", className, {
                "is-1": is1,
                "is-2": is2,
                "is-3": is3,
                "is-4": is4,
                "is-5": is5,
                "is-6": is6,
            }, modifiers_1.textColorHelpersPropsToClassnames(props)) }, children));
    };
    return Subtitle;
}(React.Component));
exports.default = Subtitle;

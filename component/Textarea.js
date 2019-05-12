Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Textarea = (function (_super) {
    tslib_1.__extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.render = function () {
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, placeholder = _a.placeholder, rows = _a.rows, props = tslib_1.__rest(_a, ["isFocused", "isHovered", "placeholder", "rows"]);
        var className = classnames("textarea", {
            "is-focused": isFocused,
            "is-hovered": isHovered,
        }, modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("textarea", tslib_1.__assign({}, props, { className: className, placeholder: placeholder, rows: rows })));
    };
    return Textarea;
}(React.Component));
exports.default = Textarea;

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.render = function () {
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, placeholder = _a.placeholder, rows = _a.rows;
        var className = classnames("textarea", {
            "is-focused": isFocused,
            "is-hovered": isHovered,
        }, modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("textarea", { className: className, placeholder: placeholder, rows: rows }));
    };
    return Textarea;
}(React.Component));
exports.default = Textarea;

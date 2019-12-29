Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Select = (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, isLoading = _a.isLoading, isMultiple = _a.isMultiple, props = tslib_1.__rest(_a, ["isFocused", "isHovered", "isLoading", "isMultiple"]);
        var className = classnames("select", {
            "is-focused": isFocused,
            "is-hovered": isHovered,
            "is-loading": isLoading,
            "is-multiple": isMultiple,
        }, modifiers_1.mainColorsPropsToClassnames(this.props), modifiers_1.sizePropsToClassnames(this.props));
        return (React.createElement("div", { className: className },
            React.createElement("select", tslib_1.__assign({}, props, { multiple: isMultiple }), this.props.children)));
    };
    return Select;
}(React.Component));
exports.default = Select;

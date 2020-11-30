Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Select = (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, isFocused = _b.isFocused, isHovered = _b.isHovered, isLoading = _b.isLoading, isMultiple = _b.isMultiple, props = tslib_1.__rest(_b, ["children", "className", "isFocused", "isHovered", "isLoading", "isMultiple"]);
        return (React.createElement("div", { className: classnames(classNames_1.bulmaClassName.select, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classNames_1.trunxPropsToClassnamesObject({
                isFocused: isFocused,
                isHovered: isHovered,
                isLoading: isLoading,
                isMultiple: isMultiple,
            })) },
            React.createElement("select", tslib_1.__assign({}, props, { multiple: isMultiple }), children)));
    };
    return Select;
}(React.Component));
exports.Select = Select;

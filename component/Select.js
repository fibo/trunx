Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Select = (function (_super) {
    tslib_1.__extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Select.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Select.prototype.render = function () {
        var _a = (0, modifiers_1.extractModifiersProps)(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, fallbackUI = _b.fallbackUI, isFocused = _b.isFocused, isHovered = _b.isHovered, isLoading = _b.isLoading, isMultiple = _b.isMultiple, props = tslib_1.__rest(_b, ["children", "className", "fallbackUI", "isFocused", "isHovered", "isLoading", "isMultiple"]);
        if (this.state.hasError)
            return fallbackUI;
        return (React.createElement("div", { className: (0, classnames_1.default)(classNames_1.bulmaClassName.select, className, (0, modifiers_1.modifierPropsToClassnamesObject)(modifiersProps), (0, classNames_1.trunxPropsToClassnamesObject)({
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

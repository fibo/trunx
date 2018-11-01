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
var Select = (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, isDanger = _a.isDanger, isFocused = _a.isFocused, isHovered = _a.isHovered, isInfo = _a.isInfo, isLarge = _a.isLarge, isLoading = _a.isLoading, isMedium = _a.isMedium, isMultiple = _a.isMultiple, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, size = _a.size;
        var className = classnames("select", {
            "is-danger": isDanger,
            "is-focused": isFocused,
            "is-hovered": isHovered,
            "is-info": isInfo,
            "is-large": isLarge,
            "is-loading": isLoading,
            "is-medium": isMedium,
            "is-multiple": isMultiple,
            "is-primary": isPrimary,
            "is-small": isSmall,
            "is-success": isSuccess,
            "is-warning": isWarning,
        });
        return (React.createElement("div", { className: className },
            React.createElement("select", { multiple: isMultiple, size: size }, this.props.children)));
    };
    return Select;
}(React.Component));
exports.default = Select;

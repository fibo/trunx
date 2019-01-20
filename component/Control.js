var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var Control = (function (_super) {
    __extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Control.prototype.render = function () {
        var _a = this.props, hasIconsLeft = _a.hasIconsLeft, hasIconsRight = _a.hasIconsRight, isExpanded = _a.isExpanded, isLoading = _a.isLoading;
        var className = classnames("control", {
            "has-icons-left": hasIconsLeft,
            "has-icons-right": hasIconsRight,
            "is-expanded": isExpanded,
            "is-loading": isLoading,
        }, modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Control;
}(React.Component));
exports.default = Control;

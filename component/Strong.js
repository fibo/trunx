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
var Strong = (function (_super) {
    __extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Strong.prototype.render = function () {
        var className = classnames(modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("strong", { className: className }, this.props.children));
    };
    return Strong;
}(React.Component));
exports.default = Strong;

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
var Delete = (function (_super) {
    __extends(Delete, _super);
    function Delete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delete.prototype.render = function () {
        var _a = this.props, isLarge = _a.isLarge, isMedium = _a.isMedium, isSmall = _a.isSmall, onClick = _a.onClick;
        var className = classname(['delete'], {
            'is-large': isLarge,
            'is-medium': isMedium,
            'is-small': isSmall
        });
        return (React.createElement("button", { "aria-label": "delete", className: className, onClick: onClick }));
    };
    return Delete;
}(React.Component));
exports.default = Delete;

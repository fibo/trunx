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
var ModalClose = (function (_super) {
    __extends(ModalClose, _super);
    function ModalClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalClose.prototype.render = function () {
        var isLarge = this.props.isLarge;
        var className = classname(['modal-close'], { 'is-large': isLarge });
        return (React.createElement("button", { "aria-label": "close", className: className }));
    };
    return ModalClose;
}(React.Component));
exports.default = ModalClose;

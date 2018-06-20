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
var React = require("react");
var ModalCardBody = (function (_super) {
    __extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        return (React.createElement("section", { className: "modal-card-body" }, "this.props.children"));
    };
    return ModalCardBody;
}(React.Component));
exports.default = ModalCardBody;

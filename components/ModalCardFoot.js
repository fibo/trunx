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
var ModalCardFoot = (function (_super) {
    __extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        return (React.createElement("footer", { className: "modal-card-foot" }, this.props.children));
    };
    return ModalCardFoot;
}(React.Component));
exports.default = ModalCardFoot;

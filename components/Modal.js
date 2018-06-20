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
var react_1 = require("react");
var classname_1 = require("classname");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'modal' },
            react_1.default.createElement("div", { className: 'modal-background' }),
            "this.props.children"));
    };
    return Modal;
}(react_1.Component));
var ModalCard = (function (_super) {
    __extends(ModalCard, _super);
    function ModalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCard.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'modal-card' }, "this.props.children"));
    };
    return ModalCard;
}(react_1.Component));
Modal.Card = ModalCard;
var ModalCardBody = (function (_super) {
    __extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        return (react_1.default.createElement("section", { className: 'modal-card-body' }, "this.props.children"));
    };
    return ModalCardBody;
}(react_1.Component));
Modal.Card.Body = ModalCardBody;
var ModalCardFoot = (function (_super) {
    __extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        return (react_1.default.createElement("footer", { className: 'modal-card-foot' }, "this.props.children"));
    };
    return ModalCardFoot;
}(react_1.Component));
Modal.Card.Foot = ModalCardFoot;
var ModalCardHead = (function (_super) {
    __extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        return (react_1.default.createElement("header", { className: 'modal-card-head' }, "this.props.children"));
    };
    return ModalCardHead;
}(react_1.Component));
Modal.Card.Head = ModalCardHead;
var ModalClose = (function (_super) {
    __extends(ModalClose, _super);
    function ModalClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalClose.prototype.render = function () {
        var isLarge = this.props.isLarge;
        return (react_1.default.createElement("button", { "aria-label": 'close', className: classname_1.default(['modal-close'], { 'is-large': isLarge }) }));
    };
    return ModalClose;
}(react_1.Component));
Modal.Close = ModalClose;
var ModalContent = (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'modal-content' }, "this.props.children"));
    };
    return ModalContent;
}(react_1.Component));
Modal.Content = ModalContent;
exports.default = Modal;

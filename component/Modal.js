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
var classnames = require("classnames");
var React = require("react");
var ModalCardBody = (function (_super) {
    __extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        return (React.createElement("section", { className: "modal-card-body" }, this.props.children));
    };
    return ModalCardBody;
}(React.Component));
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
var ModalCardHead = (function (_super) {
    __extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        return (React.createElement("header", { className: "modal-card-head" }, this.props.children));
    };
    return ModalCardHead;
}(React.Component));
var ModalCardTitle = (function (_super) {
    __extends(ModalCardTitle, _super);
    function ModalCardTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardTitle.prototype.render = function () {
        return (React.createElement("p", { className: "modal-card-title" }, this.props.children));
    };
    return ModalCardTitle;
}(React.Component));
var ModalBackground = (function (_super) {
    __extends(ModalBackground, _super);
    function ModalBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalBackground.prototype.render = function () {
        var onClick = this.props.onClick;
        return (React.createElement("div", { className: "modal-background", onClick: onClick }));
    };
    return ModalBackground;
}(React.Component));
var ModalCard = (function (_super) {
    __extends(ModalCard, _super);
    function ModalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCard.prototype.render = function () {
        return (React.createElement("div", { className: "modal-card" }, this.props.children));
    };
    ModalCard.Body = ModalCardBody;
    ModalCard.Foot = ModalCardFoot;
    ModalCard.Head = ModalCardHead;
    ModalCard.Title = ModalCardTitle;
    return ModalCard;
}(React.Component));
var ModalClose = (function (_super) {
    __extends(ModalClose, _super);
    function ModalClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalClose.prototype.render = function () {
        var _a = this.props, isLarge = _a.isLarge, onClick = _a.onClick;
        var className = classnames('modal-close', {
            'is-large': isLarge,
        });
        return (React.createElement("button", { "aria-label": "close", className: className, onClick: onClick }));
    };
    return ModalClose;
}(React.Component));
var ModalContent = (function (_super) {
    __extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        return (React.createElement("div", { className: "modal-content" }, this.props.children));
    };
    return ModalContent;
}(React.Component));
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var isActive = this.props.isActive;
        var className = classnames('modal', {
            'is-active': isActive,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Modal.Background = ModalBackground;
    Modal.Card = ModalCard;
    Modal.Close = ModalClose;
    Modal.Content = ModalContent;
    return Modal;
}(React.Component));
exports.default = Modal;

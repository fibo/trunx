Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var ModalCardBody = (function (_super) {
    tslib_1.__extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("section", { className: classnames("modal-card-body", className) }, children));
    };
    return ModalCardBody;
}(React.Component));
var ModalCardFoot = (function (_super) {
    tslib_1.__extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("footer", { className: classnames("modal-card-foot", className) }, children));
    };
    return ModalCardFoot;
}(React.Component));
var ModalCardHead = (function (_super) {
    tslib_1.__extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("header", { className: classnames("modal-card-head", className) }, children));
    };
    return ModalCardHead;
}(React.Component));
var ModalCardTitle = (function (_super) {
    tslib_1.__extends(ModalCardTitle, _super);
    function ModalCardTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardTitle.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("p", { className: classnames("modal-card-title", className) }, children));
    };
    return ModalCardTitle;
}(React.Component));
var ModalBackground = (function (_super) {
    tslib_1.__extends(ModalBackground, _super);
    function ModalBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalBackground.prototype.render = function () {
        var _a = this.props, className = _a.className, onClick = _a.onClick;
        return (React.createElement("div", { className: classnames("modal-background", className), onClick: onClick }));
    };
    return ModalBackground;
}(React.Component));
var ModalCard = (function (_super) {
    tslib_1.__extends(ModalCard, _super);
    function ModalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCard.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("modal-card", className) }, children));
    };
    ModalCard.Body = ModalCardBody;
    ModalCard.Foot = ModalCardFoot;
    ModalCard.Head = ModalCardHead;
    ModalCard.Title = ModalCardTitle;
    return ModalCard;
}(React.Component));
var ModalClose = (function (_super) {
    tslib_1.__extends(ModalClose, _super);
    function ModalClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalClose.prototype.render = function () {
        var _a = this.props, className = _a.className, isLarge = _a.isLarge, onClick = _a.onClick;
        return (React.createElement("button", { "aria-label": "close", className: classnames("modal-close", className, {
                "is-large": isLarge,
            }), onClick: onClick }));
    };
    return ModalClose;
}(React.Component));
var ModalContent = (function (_super) {
    tslib_1.__extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("modal-content", className) }, children));
    };
    return ModalContent;
}(React.Component));
var Modal = (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, isActive = _a.isActive;
        return (React.createElement("div", { className: classnames("modal", className, {
                "is-active": isActive,
            }) }, children));
    };
    Modal.Background = ModalBackground;
    Modal.Card = ModalCard;
    Modal.Close = ModalClose;
    Modal.Content = ModalContent;
    return Modal;
}(React.Component));
exports.default = Modal;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var commonRenders_1 = require("./commonRenders");
var ModalCardBody = (function (_super) {
    tslib_1.__extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("section", { className: classnames.apply(void 0, tslib_1.__spreadArrays([classNames_1.bulmaClassName.modalCardBody,
                className], props)) }, children));
    };
    return ModalCardBody;
}(React.Component));
var ModalCardFoot = (function (_super) {
    tslib_1.__extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("footer", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.modalCardFoot, className) }, props), children));
    };
    return ModalCardFoot;
}(React.Component));
var ModalCardHead = (function (_super) {
    tslib_1.__extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        return commonRenders_1.renderHeader(this.props, classNames_1.bulmaClassName.modalCardHead);
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
        return (React.createElement("div", { className: classnames("modal-card-title", className) }, children));
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
        return commonRenders_1.renderDiv(this.props, classNames_1.bulmaClassName.modalCard);
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
        return (React.createElement("button", { "aria-label": "close", className: classnames(classNames_1.bulmaClassName.modalClose, className, {
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

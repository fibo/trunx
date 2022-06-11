Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var ModalCardBody = (function (_super) {
    tslib_1.__extends(ModalCardBody, _super);
    function ModalCardBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalCardBody.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalCardBody.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('section', props, classNames_1.bulmaClassName.modalCardFoot);
    };
    return ModalCardBody;
}(React.Component));
var ModalCardFoot = (function (_super) {
    tslib_1.__extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalCardFoot.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalCardFoot.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('footer', props, classNames_1.bulmaClassName.modalCardFoot);
    };
    return ModalCardFoot;
}(React.Component));
var ModalCardHead = (function (_super) {
    tslib_1.__extends(ModalCardHead, _super);
    function ModalCardHead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalCardHead.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalCardHead.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('header', props, classNames_1.bulmaClassName.modalCardHead);
    };
    return ModalCardHead;
}(React.Component));
var ModalCardTitle = (function (_super) {
    tslib_1.__extends(ModalCardTitle, _super);
    function ModalCardTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalCardTitle.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalCardTitle.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.modalCardTitle);
    };
    return ModalCardTitle;
}(React.Component));
var ModalBackground = (function (_super) {
    tslib_1.__extends(ModalBackground, _super);
    function ModalBackground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalBackground.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalBackground.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.modalBackground);
    };
    return ModalBackground;
}(React.Component));
var ModalCard = (function (_super) {
    tslib_1.__extends(ModalCard, _super);
    function ModalCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalCard.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalCard.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.modalCard);
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalClose.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalClose.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isLarge = _a.isLarge, props = tslib_1.__rest(_a, ["fallbackUI", "isLarge"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('button', props, classNames_1.bulmaClassName.modalClose, {
            isLarge: isLarge,
        });
    };
    ModalClose.defaultProps = {
        'aria-label': 'close',
    };
    return ModalClose;
}(React.Component));
var ModalContent = (function (_super) {
    tslib_1.__extends(ModalContent, _super);
    function ModalContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    ModalContent.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    ModalContent.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.modalContent);
    };
    return ModalContent;
}(React.Component));
var Modal = (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Modal.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Modal.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isActive = _a.isActive, props = tslib_1.__rest(_a, ["fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.modal, { isActive: isActive });
    };
    Modal.Background = ModalBackground;
    Modal.Card = ModalCard;
    Modal.Close = ModalClose;
    Modal.Content = ModalContent;
    return Modal;
}(React.Component));
exports.Modal = Modal;

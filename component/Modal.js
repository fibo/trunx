Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var ModalCardBody = (function (_super) {
    tslib_1.__extends(ModalCardBody, _super);
    function ModalCardBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardBody.prototype.render = function () {
        return renderElement_1.renderElement('section', this.props, classNames_1.bulmaClassName.modalCardFoot);
    };
    return ModalCardBody;
}(React.Component));
var ModalCardFoot = (function (_super) {
    tslib_1.__extends(ModalCardFoot, _super);
    function ModalCardFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardFoot.prototype.render = function () {
        return renderElement_1.renderElement('footer', this.props, classNames_1.bulmaClassName.modalCardFoot);
    };
    return ModalCardFoot;
}(React.Component));
var ModalCardHead = (function (_super) {
    tslib_1.__extends(ModalCardHead, _super);
    function ModalCardHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardHead.prototype.render = function () {
        return renderElement_1.renderElement('header', this.props, classNames_1.bulmaClassName.modalCardHead);
    };
    return ModalCardHead;
}(React.Component));
var ModalCardTitle = (function (_super) {
    tslib_1.__extends(ModalCardTitle, _super);
    function ModalCardTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCardTitle.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.modalCardTitle);
    };
    return ModalCardTitle;
}(React.Component));
var ModalBackground = (function (_super) {
    tslib_1.__extends(ModalBackground, _super);
    function ModalBackground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalBackground.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.modalBackground);
    };
    return ModalBackground;
}(React.Component));
var ModalCard = (function (_super) {
    tslib_1.__extends(ModalCard, _super);
    function ModalCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalCard.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.modalCard);
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
        var _a = this.props, isLarge = _a.isLarge, props = tslib_1.__rest(_a, ["isLarge"]);
        return renderElement_1.renderElement('button', props, classNames_1.bulmaClassName.modalClose, {
            isLarge: isLarge
        });
    };
    ModalClose.defaultProps = {
        'aria-label': 'close'
    };
    return ModalClose;
}(React.Component));
var ModalContent = (function (_super) {
    tslib_1.__extends(ModalContent, _super);
    function ModalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalContent.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.modalContent);
    };
    return ModalContent;
}(React.Component));
var Modal = (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.modal, { isActive: isActive });
    };
    Modal.Background = ModalBackground;
    Modal.Card = ModalCard;
    Modal.Close = ModalClose;
    Modal.Content = ModalContent;
    return Modal;
}(React.Component));
exports.Modal = Modal;

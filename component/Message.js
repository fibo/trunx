Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MessageBody = (function (_super) {
    tslib_1.__extends(MessageBody, _super);
    function MessageBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MessageBody.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MessageBody.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.messageBody);
    };
    return MessageBody;
}(React.Component));
var MessageHeader = (function (_super) {
    tslib_1.__extends(MessageHeader, _super);
    function MessageHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MessageHeader.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MessageHeader.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.messageHeader);
    };
    return MessageHeader;
}(React.Component));
var Message = (function (_super) {
    tslib_1.__extends(Message, _super);
    function Message() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Message.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Message.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('article', props, classNames_1.bulmaClassName.message);
    };
    Message.Body = MessageBody;
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
exports.Message = Message;

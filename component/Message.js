Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MessageBody = (function (_super) {
    tslib_1.__extends(MessageBody, _super);
    function MessageBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBody.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.messageBody);
    };
    return MessageBody;
}(React.Component));
var MessageHeader = (function (_super) {
    tslib_1.__extends(MessageHeader, _super);
    function MessageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageHeader.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.messageHeader);
    };
    return MessageHeader;
}(React.Component));
var Message = (function (_super) {
    tslib_1.__extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        return renderElement_1.renderElement('article', this.props, classNames_1.bulmaClassName.message);
    };
    Message.Body = MessageBody;
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
exports.Message = Message;

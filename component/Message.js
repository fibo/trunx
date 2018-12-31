var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var MessageBody = (function (_super) {
    __extends(MessageBody, _super);
    function MessageBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBody.prototype.render = function () {
        return (React.createElement("div", { className: "message-body" }, this.props.children));
    };
    return MessageBody;
}(React.Component));
var MessageHeader = (function (_super) {
    __extends(MessageHeader, _super);
    function MessageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageHeader.prototype.render = function () {
        return (React.createElement("div", { className: "message-header" }, this.props.children));
    };
    return MessageHeader;
}(React.Component));
var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        var _a = this.props, isDark = _a.isDark, isLink = _a.isLink;
        var className = classnames("message", {
            "is-dark": isDark,
            "is-link": isLink,
        }, modifiers_1.mainColorsPropsToClassenames(this.props), modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("article", { className: className }, this.props.children));
    };
    Message.Body = MessageBody;
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
exports.default = Message;

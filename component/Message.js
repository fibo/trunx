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
var classname = require("classname");
var React = require("react");
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
        var _a = this.props, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning;
        var className = classname(['message'], {
            'is-danger': isDanger,
            'is-dark': isDark,
            'is-info': isInfo,
            'is-large': isLarge,
            'is-link': isLink,
            'is-medium': isMedium,
            'is-primary': isPrimary,
            'is-small': isSmall,
            'is-success': isSuccess,
            'is-warning': isWarning,
        });
        return (React.createElement("article", { className: className }, this.props.children));
    };
    Message.Body = MessageBody;
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
exports.default = Message;

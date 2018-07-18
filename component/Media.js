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
var React = require("react");
var MediaContent = (function (_super) {
    __extends(MediaContent, _super);
    function MediaContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaContent.prototype.render = function () {
        return (React.createElement("div", { className: "media-content" }, this.props.children));
    };
    return MediaContent;
}(React.Component));
var MediaLeft = (function (_super) {
    __extends(MediaLeft, _super);
    function MediaLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLeft.prototype.render = function () {
        return (React.createElement("figure", { className: "media-left" }, this.props.children));
    };
    return MediaLeft;
}(React.Component));
var MediaRight = (function (_super) {
    __extends(MediaRight, _super);
    function MediaRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaRight.prototype.render = function () {
        return (React.createElement("div", { className: "media-right" }, this.props.children));
    };
    return MediaRight;
}(React.Component));
var Media = (function (_super) {
    __extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.render = function () {
        return (React.createElement("article", { className: "media" }, this.props.children));
    };
    Media.Content = MediaContent;
    Media.Left = MediaLeft;
    Media.Right = MediaRight;
    return Media;
}(React.Component));
exports.default = Media;

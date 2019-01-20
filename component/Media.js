Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var MediaContent = (function (_super) {
    tslib_1.__extends(MediaContent, _super);
    function MediaContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaContent.prototype.render = function () {
        return (React.createElement("div", { className: "media-content" }, this.props.children));
    };
    return MediaContent;
}(React.Component));
var MediaLeft = (function (_super) {
    tslib_1.__extends(MediaLeft, _super);
    function MediaLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLeft.prototype.render = function () {
        return (React.createElement("div", { className: "media-left" }, this.props.children));
    };
    return MediaLeft;
}(React.Component));
var MediaRight = (function (_super) {
    tslib_1.__extends(MediaRight, _super);
    function MediaRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaRight.prototype.render = function () {
        return (React.createElement("div", { className: "media-right" }, this.props.children));
    };
    return MediaRight;
}(React.Component));
var Media = (function (_super) {
    tslib_1.__extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.render = function () {
        return (React.createElement("div", { className: "media" }, this.props.children));
    };
    Media.Content = MediaContent;
    Media.Left = MediaLeft;
    Media.Right = MediaRight;
    return Media;
}(React.Component));
exports.default = Media;

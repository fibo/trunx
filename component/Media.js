Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var MediaContent = (function (_super) {
    tslib_1.__extends(MediaContent, _super);
    function MediaContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaContent.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("media-content", className) }, children));
    };
    return MediaContent;
}(React.Component));
var MediaLeft = (function (_super) {
    tslib_1.__extends(MediaLeft, _super);
    function MediaLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLeft.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("media-left", className) }, children));
    };
    return MediaLeft;
}(React.Component));
var MediaRight = (function (_super) {
    tslib_1.__extends(MediaRight, _super);
    function MediaRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaRight.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("media-right", className) }, children));
    };
    return MediaRight;
}(React.Component));
var Media = (function (_super) {
    tslib_1.__extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("media", className) }, props), children));
    };
    Media.Content = MediaContent;
    Media.Left = MediaLeft;
    Media.Right = MediaRight;
    return Media;
}(React.Component));
exports.default = Media;

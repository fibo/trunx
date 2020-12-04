Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MediaContent = (function (_super) {
    tslib_1.__extends(MediaContent, _super);
    function MediaContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MediaContent.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MediaContent.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaContent);
    };
    return MediaContent;
}(React.Component));
var MediaLeft = (function (_super) {
    tslib_1.__extends(MediaLeft, _super);
    function MediaLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MediaLeft.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MediaLeft.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaLeft);
    };
    return MediaLeft;
}(React.Component));
var MediaRight = (function (_super) {
    tslib_1.__extends(MediaRight, _super);
    function MediaRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    MediaRight.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    MediaRight.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaRight);
    };
    return MediaRight;
}(React.Component));
var Media = (function (_super) {
    tslib_1.__extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Media.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Media.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.media);
    };
    Media.Content = MediaContent;
    Media.Left = MediaLeft;
    Media.Right = MediaRight;
    return Media;
}(React.Component));
exports.Media = Media;

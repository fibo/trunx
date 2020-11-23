Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var MediaContent = (function (_super) {
    tslib_1.__extends(MediaContent, _super);
    function MediaContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaContent.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaContent);
    };
    return MediaContent;
}(React.Component));
var MediaLeft = (function (_super) {
    tslib_1.__extends(MediaLeft, _super);
    function MediaLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLeft.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaLeft);
    };
    return MediaLeft;
}(React.Component));
var MediaRight = (function (_super) {
    tslib_1.__extends(MediaRight, _super);
    function MediaRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaRight.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.mediaRight);
    };
    return MediaRight;
}(React.Component));
var Media = (function (_super) {
    tslib_1.__extends(Media, _super);
    function Media() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Media.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.media);
    };
    Media.Content = MediaContent;
    Media.Left = MediaLeft;
    Media.Right = MediaRight;
    return Media;
}(React.Component));
exports.Media = Media;

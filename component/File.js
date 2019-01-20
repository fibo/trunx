Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var FileCta = (function (_super) {
    tslib_1.__extends(FileCta, _super);
    function FileCta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileCta.prototype.render = function () {
        return (React.createElement("span", { className: "file-cta" }, this.props.children));
    };
    return FileCta;
}(React.Component));
var FileIcon = (function (_super) {
    tslib_1.__extends(FileIcon, _super);
    function FileIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileIcon.prototype.render = function () {
        return (React.createElement("span", { className: "file-icon" }, this.props.children));
    };
    return FileIcon;
}(React.Component));
var FileLabel = (function (_super) {
    tslib_1.__extends(FileLabel, _super);
    function FileLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileLabel.prototype.render = function () {
        return (React.createElement("label", { className: "file-label" }, this.props.children));
    };
    return FileLabel;
}(React.Component));
var File = (function (_super) {
    tslib_1.__extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    File.prototype.render = function () {
        var _a = this.props, hasName = _a.hasName, isBoxed = _a.isBoxed, isFullwidth = _a.isFullwidth, isRight = _a.isRight;
        var className = classnames("file", {
            "has-name": hasName,
            "is-boxed": isBoxed,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    File.Cta = FileCta;
    File.Icon = FileIcon;
    File.Label = FileLabel;
    return File;
}(React.Component));
exports.default = File;

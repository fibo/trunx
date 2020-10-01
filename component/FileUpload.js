Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var FileUploadCta = (function (_super) {
    tslib_1.__extends(FileUploadCta, _super);
    function FileUploadCta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadCta.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("span", { className: classnames("file-cta", className) }, children));
    };
    return FileUploadCta;
}(React.Component));
var FileUploadIcon = (function (_super) {
    tslib_1.__extends(FileUploadIcon, _super);
    function FileUploadIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadIcon.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("span", { className: classnames("file-icon", className) }, children));
    };
    return FileUploadIcon;
}(React.Component));
var FileUploadInput = (function (_super) {
    tslib_1.__extends(FileUploadInput, _super);
    function FileUploadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadInput.prototype.render = function () {
        var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
        return (React.createElement("input", tslib_1.__assign({ className: classnames("file-input", className), type: "file" }, props)));
    };
    return FileUploadInput;
}(React.Component));
var FileUploadLabel = (function (_super) {
    tslib_1.__extends(FileUploadLabel, _super);
    function FileUploadLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadLabel.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("span", { className: classnames("file-label", className) }, children));
    };
    return FileUploadLabel;
}(React.Component));
var FileUploadName = (function (_super) {
    tslib_1.__extends(FileUploadName, _super);
    function FileUploadName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadName.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("span", { className: classnames("file-name", className) }, children));
    };
    return FileUploadName;
}(React.Component));
var FileUpload = (function (_super) {
    tslib_1.__extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasName = _a.hasName, isBoxed = _a.isBoxed, isDanger = _a.isDanger, isFullwidth = _a.isFullwidth, isInfo = _a.isInfo, isLarge = _a.isLarge, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isRight = _a.isRight, isWarning = _a.isWarning;
        return (React.createElement("div", { className: classnames("file", className, {
                "has-name": hasName,
                "is-boxed": isBoxed,
                "is-fullwidth": isFullwidth,
                "is-right": isRight,
            }, modifiers_1.mainColorsPropsToClassnames({
                isDanger: isDanger,
                isInfo: isInfo,
                isPrimary: isPrimary,
                isSuccess: isSuccess,
                isWarning: isWarning,
            }), modifiers_1.sizePropsToClassnames({
                isLarge: isLarge,
                isMedium: isMedium,
                isSmall: isSmall,
            })) },
            React.createElement("label", { className: "file-label" }, children)));
    };
    FileUpload.Cta = FileUploadCta;
    FileUpload.Icon = FileUploadIcon;
    FileUpload.Input = FileUploadInput;
    FileUpload.Label = FileUploadLabel;
    FileUpload.Name = FileUploadName;
    return FileUpload;
}(React.Component));
exports.default = FileUpload;

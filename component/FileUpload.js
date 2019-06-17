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
        return (React.createElement("span", { className: "file-cta" }, this.props.children));
    };
    return FileUploadCta;
}(React.Component));
var FileUploadIcon = (function (_super) {
    tslib_1.__extends(FileUploadIcon, _super);
    function FileUploadIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadIcon.prototype.render = function () {
        return (React.createElement("span", { className: "file-icon" }, this.props.children));
    };
    return FileUploadIcon;
}(React.Component));
var FileUploadInput = (function (_super) {
    tslib_1.__extends(FileUploadInput, _super);
    function FileUploadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadInput.prototype.render = function () {
        return (React.createElement("input", tslib_1.__assign({ className: "file-input", type: "file" }, this.props)));
    };
    return FileUploadInput;
}(React.Component));
var FileUploadLabel = (function (_super) {
    tslib_1.__extends(FileUploadLabel, _super);
    function FileUploadLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadLabel.prototype.render = function () {
        return (React.createElement("span", { className: "file-label" }, this.props.children));
    };
    return FileUploadLabel;
}(React.Component));
var FileUploadName = (function (_super) {
    tslib_1.__extends(FileUploadName, _super);
    function FileUploadName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadName.prototype.render = function () {
        return (React.createElement("span", { className: "file-name" }, this.props.children));
    };
    return FileUploadName;
}(React.Component));
var FileUpload = (function (_super) {
    tslib_1.__extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        var _a = this.props, hasName = _a.hasName, isBoxed = _a.isBoxed, isDanger = _a.isDanger, isFullwidth = _a.isFullwidth, isInfo = _a.isInfo, isLarge = _a.isLarge, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isRight = _a.isRight, isWarning = _a.isWarning;
        var className = classnames("file", {
            "has-name": hasName,
            "is-boxed": isBoxed,
            "is-fullwidth": isFullwidth,
            "is-right": isRight,
        }, modifiers_1.mainColorsPropsToClassenames({
            isDanger: isDanger,
            isInfo: isInfo,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
        }), modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }));
        return (React.createElement("div", { className: className },
            React.createElement("label", { className: "file-label" }, this.props.children)));
    };
    FileUpload.Cta = FileUploadCta;
    FileUpload.Icon = FileUploadIcon;
    FileUpload.Input = FileUploadInput;
    FileUpload.Label = FileUploadLabel;
    FileUpload.Name = FileUploadName;
    return FileUpload;
}(React.Component));
exports.default = FileUpload;

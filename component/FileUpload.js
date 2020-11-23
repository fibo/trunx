Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var renderElement_1 = require("./renderElement");
var FileUploadCta = (function (_super) {
    tslib_1.__extends(FileUploadCta, _super);
    function FileUploadCta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadCta.prototype.render = function () {
        return renderElement_1.renderElement('span', this.props, classNames_1.bulmaClassName.fileCta);
    };
    return FileUploadCta;
}(React.Component));
var FileUploadIcon = (function (_super) {
    tslib_1.__extends(FileUploadIcon, _super);
    function FileUploadIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadIcon.prototype.render = function () {
        return renderElement_1.renderElement('span', this.props, classNames_1.bulmaClassName.fileIcon);
    };
    return FileUploadIcon;
}(React.Component));
var FileUploadInput = (function (_super) {
    tslib_1.__extends(FileUploadInput, _super);
    function FileUploadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadInput.prototype.render = function () {
        return renderElement_1.renderElement('input', tslib_1.__assign(tslib_1.__assign({}, this.props), { type: 'file' }), classNames_1.bulmaClassName.fileInput);
    };
    return FileUploadInput;
}(React.Component));
var FileUploadLabel = (function (_super) {
    tslib_1.__extends(FileUploadLabel, _super);
    function FileUploadLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadLabel.prototype.render = function () {
        return renderElement_1.renderElement('span', this.props, classNames_1.bulmaClassName.fileLabel);
    };
    return FileUploadLabel;
}(React.Component));
var FileUploadName = (function (_super) {
    tslib_1.__extends(FileUploadName, _super);
    function FileUploadName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadName.prototype.render = function () {
        return renderElement_1.renderElement('span', this.props, classNames_1.bulmaClassName.fileName);
    };
    return FileUploadName;
}(React.Component));
var FileUpload = (function (_super) {
    tslib_1.__extends(FileUpload, _super);
    function FileUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUpload.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, hasName = _b.hasName, isBoxed = _b.isBoxed, isFullwidth = _b.isFullwidth, isRight = _b.isRight, props = tslib_1.__rest(_b, ["children", "className", "hasName", "isBoxed", "isFullwidth", "isRight"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(className, classNames_1.bulmaClassName.file, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classNames_1.trunxPropsToClassnamesObject({ hasName: hasName, isBoxed: isBoxed, isFullwidth: isFullwidth, isRight: isRight })) }, props),
            React.createElement("label", { className: classNames_1.bulmaClassName.fileLabel }, children)));
    };
    FileUpload.Cta = FileUploadCta;
    FileUpload.Icon = FileUploadIcon;
    FileUpload.Input = FileUploadInput;
    FileUpload.Label = FileUploadLabel;
    FileUpload.Name = FileUploadName;
    return FileUpload;
}(React.Component));
exports.FileUpload = FileUpload;

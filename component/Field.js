Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var FieldBody = (function (_super) {
    tslib_1.__extends(FieldBody, _super);
    function FieldBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    FieldBody.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    FieldBody.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.fieldBody);
    };
    return FieldBody;
}(React.Component));
var FieldLabel = (function (_super) {
    tslib_1.__extends(FieldLabel, _super);
    function FieldLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    FieldLabel.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    FieldLabel.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isNormal = _a.isNormal, props = tslib_1.__rest(_a, ["fallbackUI", "isNormal"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.fieldLabel, { isNormal: isNormal });
    };
    return FieldLabel;
}(React.Component));
var Field = (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Field.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Field.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, hasAddons = _a.hasAddons, hasAddonsCentered = _a.hasAddonsCentered, isGrouped = _a.isGrouped, isGroupedMultiline = _a.isGroupedMultiline, isHorizontal = _a.isHorizontal, props = tslib_1.__rest(_a, ["fallbackUI", "hasAddons", "hasAddonsCentered", "isGrouped", "isGroupedMultiline", "isHorizontal"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.field, {
            hasAddons: hasAddons,
            hasAddonsCentered: hasAddonsCentered,
            isGrouped: isGrouped,
            isGroupedMultiline: isGroupedMultiline,
            isHorizontal: isHorizontal,
        });
    };
    Field.Body = FieldBody;
    Field.Label = FieldLabel;
    return Field;
}(React.Component));
exports.Field = Field;

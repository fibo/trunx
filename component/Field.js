Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var FieldBody = (function (_super) {
    tslib_1.__extends(FieldBody, _super);
    function FieldBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldBody.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.fieldBody);
    };
    return FieldBody;
}(React.Component));
var FieldLabel = (function (_super) {
    tslib_1.__extends(FieldLabel, _super);
    function FieldLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldLabel.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.fieldLabel);
    };
    return FieldLabel;
}(React.Component));
var Field = (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, hasAddons = _a.hasAddons, hasAddonsCentered = _a.hasAddonsCentered, isGrouped = _a.isGrouped, isGroupedMultiline = _a.isGroupedMultiline, isHorizontal = _a.isHorizontal, props = tslib_1.__rest(_a, ["hasAddons", "hasAddonsCentered", "isGrouped", "isGroupedMultiline", "isHorizontal"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.fieldLabel, {
            hasAddons: hasAddons,
            hasAddonsCentered: hasAddonsCentered,
            isGrouped: isGrouped,
            isGroupedMultiline: isGroupedMultiline,
            isHorizontal: isHorizontal
        });
    };
    Field.Body = FieldBody;
    Field.Label = FieldLabel;
    return Field;
}(React.Component));
exports.Field = Field;

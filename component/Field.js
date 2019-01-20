var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var FieldBody = (function (_super) {
    __extends(FieldBody, _super);
    function FieldBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldBody.prototype.render = function () {
        return (React.createElement("div", { className: "field-body" }, this.props.children));
    };
    return FieldBody;
}(React.Component));
var FieldLabel = (function (_super) {
    __extends(FieldLabel, _super);
    function FieldLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldLabel.prototype.render = function () {
        var className = classnames("field-label", modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return FieldLabel;
}(React.Component));
var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, hasAddons = _a.hasAddons, hasAddonsCentered = _a.hasAddonsCentered, isGrouped = _a.isGrouped, isGroupedMultiline = _a.isGroupedMultiline, isHorizontal = _a.isHorizontal;
        var className = classnames("field", {
            "has-addons": hasAddons,
            "has-addons-centered": hasAddonsCentered,
            "is-grouped": isGrouped,
            "is-grouped-multiline": isGroupedMultiline,
            "is-horizontal": isHorizontal,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Field.Body = FieldBody;
    Field.Label = FieldLabel;
    return Field;
}(React.Component));
exports.default = Field;

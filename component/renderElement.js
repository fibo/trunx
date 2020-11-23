Object.defineProperty(exports, "__esModule", { value: true });
exports.renderElement = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classnames_1 = require("./classnames");
var modifiers_1 = require("./modifiers");
function renderElement(type, elementProps, bulmaClassName, trunxProps) {
    var _a = modifiers_1.extractModifiersProps(elementProps), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
    return React.createElement(type, tslib_1.__assign({ className: classnames(bulmaClassName, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps), classnames_1.trunxPropsToClassnamesObject(trunxProps)) }, props), children);
}
exports.renderElement = renderElement;

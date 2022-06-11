Object.defineProperty(exports, "__esModule", { value: true });
exports.renderElement = void 0;
var tslib_1 = require("tslib");
var classnames_1 = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
function renderElement(type, elementProps, bulmaClassName, trunxProps) {
    var _a = (0, modifiers_1.extractModifiersProps)(elementProps), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
    return React.createElement(type, tslib_1.__assign({ className: (0, classnames_1.default)(bulmaClassName, className, (0, modifiers_1.modifierPropsToClassnamesObject)(modifiersProps), (0, classNames_1.trunxPropsToClassnamesObject)(trunxProps)) }, props), children);
}
exports.renderElement = renderElement;

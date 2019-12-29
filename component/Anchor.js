Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
function Anchor(_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("a", tslib_1.__assign({}, props, { className: className }), children));
}
exports.Anchor = Anchor;

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
function renderDiv(bulmaClassName, _a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("div", tslib_1.__assign({ className: classnames(bulmaClassName, className) }, props), children));
}
exports.renderDiv = renderDiv;
function renderHeader(bulmaClassName, _a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    return (React.createElement("header", tslib_1.__assign({ className: classnames(bulmaClassName, className) }, props), children));
}
exports.renderHeader = renderHeader;

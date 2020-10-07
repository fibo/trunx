Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function camelize(value) {
    return value.split('-').map(function (part, index) { return (index > 0 ? (part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) : part); });
}
function listToKeyValues(list) {
    return list.reduce(function (obj, key) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, obj), (_a = {}, _a[camelize(key)] = key, _a)));
    }, {});
}
exports.bulmaClassNames = [
    "dropdown",
    "dropdown-divider",
    "dropdown-content",
    "dropdown-item",
    "dropdown-menu",
    "dropdown-trigger",
    "modal-card",
    "modal-card-body",
    "modal-card-foot",
    "modal-card-head",
    "modal-close",
];
exports.bulmaClassName = listToKeyValues(exports.bulmaClassNames);

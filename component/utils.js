Object.defineProperty(exports, "__esModule", { value: true });
function camelCaseToKebabCase(inputString) {
    return inputString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
exports.camelCaseToKebabCase = camelCaseToKebabCase;
function isTrunxProp(propKey) {
    return (propKey.substring(0, 3) === 'has' ||
        propKey.substring(0, 2) === 'is');
}
function trunxPropsToClassnames(props) {
    return Object.keys(props).reduce(function (obj, key) {
        if (isTrunxProp(key)) {
            var className = camelCaseToKebabCase(key);
            obj[className] = props[key];
        }
        return obj;
    }, {});
}
exports.trunxPropsToClassnames = trunxPropsToClassnames;

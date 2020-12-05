Object.defineProperty(exports, "__esModule", { value: true });
exports.bulmaClassName = exports.bulmaClassNames = exports.trunxPropsToClassnamesObject = exports.camelCaseToKebabCase = void 0;
var tslib_1 = require("tslib");
function kebabCaseToCamelCase(value) {
    return value
        .split('-')
        .map(function (part, index) {
        return index > 0
            ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
            : part;
    })
        .join('');
}
function camelCaseToKebabCase(inputString) {
    return inputString
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, '$1-$2')
        .toLowerCase();
}
exports.camelCaseToKebabCase = camelCaseToKebabCase;
function listToKeyValues(list) {
    return list.reduce(function (obj, key) {
        var _a;
        return (tslib_1.__assign(tslib_1.__assign({}, obj), (_a = {}, _a[kebabCaseToCamelCase(key)] = key, _a)));
    }, {});
}
function trunxPropsToClassnamesObject(props) {
    if (typeof props === 'undefined')
        return {};
    return Object.keys(props).reduce(function (obj, key) {
        if (key.substring(0, 3) === 'has' || key.substring(0, 2) === 'is') {
            var className = camelCaseToKebabCase(key);
            obj[className] = props[key];
        }
        if (key.match(/[mp][trblxy]?[0-6]/)) {
            var className = key.replace(/([0-6])/, '-$1');
            obj[className] = props[key];
        }
        return obj;
    }, {});
}
exports.trunxPropsToClassnamesObject = trunxPropsToClassnamesObject;
exports.bulmaClassNames = [
    'box',
    'breadcrumb',
    'button',
    'buttons',
    'card',
    'card-content',
    'card-footer',
    'card-footer-item',
    'card-header',
    'card-header-icon',
    'card-header-title',
    'card-image',
    'checkbox',
    'column',
    'columns',
    'container',
    'content',
    'control',
    'delete',
    'dropdown',
    'dropdown-divider',
    'dropdown-content',
    'dropdown-item',
    'dropdown-menu',
    'dropdown-trigger',
    'field',
    'field-body',
    'field-label',
    'file',
    'file-cta',
    'file-icon',
    'file-input',
    'file-label',
    'file-name',
    'footer',
    'heading',
    'help',
    'hero',
    'hero-body',
    'hero-foot',
    'hero-head',
    'icon',
    'image',
    'input',
    'label',
    'level',
    'level-item',
    'level-left',
    'level-right',
    'media',
    'media-content',
    'media-left',
    'media-right',
    'menu',
    'menu-label',
    'menu-list',
    'message',
    'message-body',
    'message-header',
    'modal',
    'modal-background',
    'modal-content',
    'modal-card',
    'modal-card-body',
    'modal-card-foot',
    'modal-card-head',
    'modal-card-title',
    'modal-close',
    'navbar',
    'navbar-brand',
    'navbar-burger',
    'navbar-divider',
    'navbar-dropdown',
    'navbar-end',
    'navbar-item',
    'navbar-link',
    'navbar-menu',
    'navbar-start',
    'notification',
    'pagination',
    'pagination-ellipsis',
    'pagination-link',
    'pagination-list',
    'pagination-next',
    'pagination-previous',
    'panel',
    'panel-block',
    'panel-heading',
    'panel-icon',
    'panel-tabs',
    'progress',
    'radio',
    'section',
    'select',
    'subtitle',
    'table',
    'table-container',
    'tabs',
    'tag',
    'tags',
    'textarea',
    'title',
    'tile'
];
exports.bulmaClassName = listToKeyValues(exports.bulmaClassNames);

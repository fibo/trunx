Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Content_1 = require("../elements/Content");
var Footer_1 = require("./Footer");
react_2.storiesOf('Layout', module)
    .add('Footer', function () { return (react_1.default.createElement(Footer_1.default, null,
    react_1.default.createElement(Content_1.default, { hasTextCentered: true },
        react_1.default.createElement("p", null,
            react_1.default.createElement("strong", null, "Bulma"),
            " by ",
            react_1.default.createElement("a", { href: 'https://jgthms.com' }, "Jeremy Thomas"),
            ". The source code is licensed ",
            react_1.default.createElement("a", { href: 'http://opensource.org/licenses/mit-license.php' }, "MIT"),
            ". The website content is licensed ",
            react_1.default.createElement("a", { href: 'http://creativecommons.org/licenses/by-nc-sa/4.0/' }, "CC BY NC SA 4.0"),
            ".")))); });

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Container_1 = require("./Container");
var Content_1 = require("../elements/Content");
var Footer_1 = require("./Footer");
var Notification_1 = require("../elements/Notification");
react_2.storiesOf('Layout', module)
    .add('Container', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Container_1.default, null,
        react_1.default.createElement(Notification_1.default, null,
            "This container is ",
            react_1.default.createElement("strong", null, "centered"),
            " on desktop.")),
    react_1.default.createElement(Container_1.default, { isFluid: true },
        react_1.default.createElement(Notification_1.default, null,
            "This container is ",
            react_1.default.createElement("strong", null, "fluid"),
            ": it will have a 32px gap on either side, on any viewport size.")),
    react_1.default.createElement(Container_1.default, { isWidescreen: true },
        react_1.default.createElement(Notification_1.default, null,
            "This container is ",
            react_1.default.createElement("strong", null, "fluid"),
            ": it will have a 32px gap on either side, on any viewport size.")),
    react_1.default.createElement(Container_1.default, { isFullhd: true },
        react_1.default.createElement(Notification_1.default, null,
            "This container is ",
            react_1.default.createElement("strong", null, "fullwidth"),
            " ",
            react_1.default.createElement("em", null, "until"),
            " the ",
            react_1.default.createElement("code", null, "$widescreen"),
            " breakpoint.")))); })
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

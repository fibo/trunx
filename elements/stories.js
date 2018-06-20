Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Button_1 = require("./Button");
var Delete_1 = require("./Delete");
var Notification_1 = require("./Notification");
var loremIpsum = function () { return (react_1.default.createElement(react_1.Fragment, null,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.",
    react_1.default.createElement("strong", null, "Pellentesque risus mi"),
    ", tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum ",
    react_1.default.createElement("a", null, "felis venenatis"),
    " efficitur. Sit amet, consectetur adipiscing elit")); };
react_2.storiesOf('Elements/Button', module)
    .add('Basics', function () { return (react_1.default.createElement(Button_1.default, null, "Button")); })
    .add('Colors', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Button_1.default, { isWhite: true }, "White"),
    react_1.default.createElement(Button_1.default, { isLight: true }, "Light"),
    react_1.default.createElement(Button_1.default, { isDark: true }, "Dark"),
    react_1.default.createElement(Button_1.default, { isBlack: true }, "Black"),
    react_1.default.createElement(Button_1.default, { isText: true }, "Text"),
    react_1.default.createElement(Button_1.default, { isPrimary: true }, "Primary"),
    react_1.default.createElement(Button_1.default, { isLink: true }, "Link"),
    react_1.default.createElement(Button_1.default, { isInfo: true }, "Info"),
    react_1.default.createElement(Button_1.default, { isSuccess: true }, "Success"),
    react_1.default.createElement(Button_1.default, { isWarning: true }, "Warning"),
    react_1.default.createElement(Button_1.default, { isDanger: true }, "Danger"))); });
react_2.storiesOf('Elements/Notification', module)
    .add('Basics', function () { return (react_1.default.createElement(Notification_1.default, null,
    react_1.default.createElement(Delete_1.default, null),
    loremIpsum())); })
    .add('Colors', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Notification_1.default, { isPrimary: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()),
    react_1.default.createElement(Notification_1.default, { isLink: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()),
    react_1.default.createElement(Notification_1.default, { isInfo: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()),
    react_1.default.createElement(Notification_1.default, { isSuccess: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()),
    react_1.default.createElement(Notification_1.default, { isWarning: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()),
    react_1.default.createElement(Notification_1.default, { isDanger: true },
        react_1.default.createElement(Delete_1.default, null),
        loremIpsum()))); });

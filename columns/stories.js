Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Column_1 = require("./Column");
var Columns_1 = require("./Columns");
var Notification_1 = require("../elements/Notification");
react_2.storiesOf('Columns', module)
    .add('Basics', function () { return (react_1.default.createElement(Columns_1.default, null,
    react_1.default.createElement(Column_1.default, null,
        react_1.default.createElement(Notification_1.default, { isPrimary: true }, "First Column")),
    react_1.default.createElement(Column_1.default, null,
        react_1.default.createElement(Notification_1.default, { isPrimary: true }, "Second Column")),
    react_1.default.createElement(Column_1.default, null,
        react_1.default.createElement(Notification_1.default, { isPrimary: true }, "Third Column")),
    react_1.default.createElement(Column_1.default, null,
        react_1.default.createElement(Notification_1.default, { isPrimary: true }, "Fourth Column")))); })
    .add('Sizes', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isFourFifths: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isFourFifths"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isThreeQuarters: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isThreeQuarters"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isTwoThirds: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isTwoThirds"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isThreeFifths: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isThreeFifths"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isHalf: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isHalf"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isTwoFifths: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isTwoFifths"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isOneThird: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isOneThird"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isOneQuarter: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isOneQuarter"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")),
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isOneFifth: true },
            react_1.default.createElement(Notification_1.default, { isPrimary: true },
                react_1.default.createElement("code", null, "isOneFifth"))),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")))); })
    .add('Responsiveness', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Columns_1.default, { isMobile: true },
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "1")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "2")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "3")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "4"))),
    react_1.default.createElement(Columns_1.default, { isDesktop: true },
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "1")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "2")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "3")),
        react_1.default.createElement(Column_1.default, null,
            react_1.default.createElement(Notification_1.default, { isPrimary: true }, "4"))))); });

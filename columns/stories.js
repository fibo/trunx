Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Column_1 = require("./Column");
var Columns_1 = require("./Columns");
react_2.storiesOf('Columns', module)
    .add('Basics', function () { return (react_1.default.createElement(Column_1.default, null, "First Column")); })
    .add('Sizes', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Columns_1.default, null,
        react_1.default.createElement(Column_1.default, { isFourFifths: true }, "isFourFifths"),
        react_1.default.createElement(Column_1.default, null, "Auto"),
        react_1.default.createElement(Column_1.default, null, "Auto")))); });

Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Button_1 = require("../elements/Button");
var Checkbox_1 = require("./Checkbox");
var Control_1 = require("./Control");
var Field_1 = require("./Field");
var Input_1 = require("./Input");
react_2.storiesOf('Form/General', module)
    .add('Form control', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Control_1.default, null,
        react_1.default.createElement(Input_1.default, { type: 'text', placeHolder: 'Text input' })),
    react_1.default.createElement(Control_1.default, null,
        react_1.default.createElement(Button_1.default, { isPrimary: true }, "Submit")))); });
react_2.storiesOf('Form/Input', module)
    .add('Colors', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Field_1.default, null,
        react_1.default.createElement(Control_1.default, null,
            react_1.default.createElement(Input_1.default, { isPrimary: true }))),
    react_1.default.createElement(Field_1.default, null,
        react_1.default.createElement(Control_1.default, null,
            react_1.default.createElement(Input_1.default, { isInfo: true }))),
    react_1.default.createElement(Field_1.default, null,
        react_1.default.createElement(Control_1.default, null,
            react_1.default.createElement(Input_1.default, { isSuccess: true }))),
    react_1.default.createElement(Field_1.default, null,
        react_1.default.createElement(Control_1.default, null,
            react_1.default.createElement(Input_1.default, { isWarning: true }))),
    react_1.default.createElement(Field_1.default, null,
        react_1.default.createElement(Control_1.default, null,
            react_1.default.createElement(Input_1.default, { isDanger: true }))))); });
react_2.storiesOf('Form', module)
    .add('Checkbox', function () { return (react_1.default.createElement(react_1.Fragment, null,
    react_1.default.createElement(Checkbox_1.default, null, "Remember me"),
    react_1.default.createElement(Checkbox_1.default, null,
        "I agree to the ",
        react_1.default.createElement("a", { href: '#' }, "terms and conditions")),
    react_1.default.createElement(Checkbox_1.default, { disabled: true }, "Save my preferences"))); });

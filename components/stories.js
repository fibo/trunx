Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_2 = require("@storybook/react");
var Modal_1 = require("./Modal");
var ModalCard_1 = require("./ModalCard");
react_2.storiesOf('Components/Modal', module)
    .add('Modal card', function () { return (react_1.default.createElement(Modal_1.default, null,
    react_1.default.createElement(ModalCard_1.default, null))); });

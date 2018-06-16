'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Notification extends _react.Component {
  render() {
    const {
      children
    } = this.props;

    return _react2.default.createElement(
      'div',
      { className: 'notification' },
      children
    );
  }
}
exports.default = Notification;
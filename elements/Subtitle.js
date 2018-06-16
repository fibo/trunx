'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Subtitle extends _react.Component {
  render() {
    return _react2.default.createElement(
      'p',
      { className: 'subtitle' },
      'this.props.children'
    );
  }
}
exports.default = Subtitle;
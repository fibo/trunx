'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Notification extends _react.Component {
  render() {
    const {
      isDanger,
      isLink,
      isInfo,
      isPrimary,
      isSuccess,
      isWarning
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classname2.default)(['notification'], {
          'is-danger': isDanger,
          'is-link': isLink,
          'is-info': isInfo,
          'is-primary': isPrimary,
          'is-success': isSuccess,
          'is-warning': isWarning
        })
      },
      this.props.children
    );
  }
}
exports.default = Notification;
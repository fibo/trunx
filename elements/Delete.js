'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Delete extends _react.Component {
  render() {
    const {
      onClick
    } = this.props;

    return _react2.default.createElement('button', {
      className: 'delete',
      onClick: onClick
    });
  }
}

exports.default = Delete;
Delete.defaultProps = {
  onClick: Function.prototype
};
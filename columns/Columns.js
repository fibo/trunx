'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Columns extends _react.Component {
  render() {
    const {
      isDesktop,
      isGapeless,
      isMobile,
      isMultiline
    } = this.props;

    return _react2.default.createElement(
      'div',
      {
        className: (0, _classname2.default)(['column'], {
          'is-desktop': isDesktop,
          'is-gapelesss': isGapeless,
          'is-mobile': isMobile,
          'is-multiline': isMultiline
        })
      },
      this.props.children
    );
  }
}
exports.default = Columns;
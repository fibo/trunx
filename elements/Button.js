'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classname = require('classname');

var _classname2 = _interopRequireDefault(_classname);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _react.Component {
  render() {
    const {
      href,
      isActive,
      isBlack,
      isDanger,
      isDark,
      isDisabled,
      isFocused,
      isLight,
      isLink,
      isInfo,
      isInverted,
      isLoading,
      isOutlined,
      isPrimary,
      isRounded,
      isStatic,
      isSuccess,
      isText,
      isWarning,
      isWhite
    } = this.props;

    const className = (0, _classname2.default)(['button'], {
      'is-active': isActive,
      'is-black': isBlack,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      'is-light': isLight,
      'is-link': isLink,
      'is-info': isInfo,
      'is-inverted': isInverted,
      'is-loading': isLoading,
      'is-outlined': isOutlined,
      'is-primary': isPrimary,
      'is-rounded': isRounded,
      'is-static': isStatic,
      'is-success': isSuccess,
      'is-text': isText,
      'is-warning': isWarning,
      'is-white': isWhite
    });

    return href ? _react2.default.createElement(
      'button',
      {
        className: className
      },
      this.props.children
    ) : _react2.default.createElement(
      'a',
      {
        className: className,
        href: href
      },
      this.props.children
    );
  }
}
exports.default = Button;
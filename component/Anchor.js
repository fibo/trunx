Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const React = require('react')
function Anchor (_a) {
  const children = _a.children; const className = _a.className; const props = tslib_1.__rest(_a, ['children', 'className'])
  return (React.createElement('a', tslib_1.__assign({}, props, { className: className }), children))
}
exports.Anchor = Anchor

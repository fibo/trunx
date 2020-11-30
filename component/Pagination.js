Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var PaginationEllipsis = (function (_super) {
    tslib_1.__extends(PaginationEllipsis, _super);
    function PaginationEllipsis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationEllipsis.prototype.render = function () {
        var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
        return (React.createElement("li", null,
            React.createElement("span", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.paginationEllipsis, className) }, props), "\u2026")));
    };
    return PaginationEllipsis;
}(React.Component));
var PaginationLink = (function (_super) {
    tslib_1.__extends(PaginationLink, _super);
    function PaginationLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationLink.prototype.render = function () {
        var _a = this.props, isCurrent = _a.isCurrent, props = tslib_1.__rest(_a, ["isCurrent"]);
        return (React.createElement("li", null, renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.paginationLink, {
            isCurrent: isCurrent,
        })));
    };
    return PaginationLink;
}(React.Component));
var PaginationList = (function (_super) {
    tslib_1.__extends(PaginationList, _super);
    function PaginationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationList.prototype.render = function () {
        return renderElement_1.renderElement('ul', this.props, classNames_1.bulmaClassName.paginationList);
    };
    return PaginationList;
}(React.Component));
var PaginationNext = (function (_super) {
    tslib_1.__extends(PaginationNext, _super);
    function PaginationNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationNext.prototype.render = function () {
        return renderElement_1.renderElement('a', this.props, classNames_1.bulmaClassName.paginationNext);
    };
    return PaginationNext;
}(React.Component));
var PaginationPrevious = (function (_super) {
    tslib_1.__extends(PaginationPrevious, _super);
    function PaginationPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationPrevious.prototype.render = function () {
        return renderElement_1.renderElement('a', this.props, classNames_1.bulmaClassName.paginationPrevious);
    };
    return PaginationPrevious;
}(React.Component));
var Pagination = (function (_super) {
    tslib_1.__extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        return renderElement_1.renderElement('nav', this.props, classNames_1.bulmaClassName.pagination);
    };
    Pagination.defaultProps = {
        'aria-label': 'pagination',
        role: 'navigation',
    };
    Pagination.Ellipsis = PaginationEllipsis;
    Pagination.Link = PaginationLink;
    Pagination.List = PaginationList;
    Pagination.Next = PaginationNext;
    Pagination.Previous = PaginationPrevious;
    return Pagination;
}(React.Component));
exports.Pagination = Pagination;

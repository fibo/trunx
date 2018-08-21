var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var PaginationEllipsis = (function (_super) {
    __extends(PaginationEllipsis, _super);
    function PaginationEllipsis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationEllipsis.prototype.render = function () {
        return (React.createElement("li", null,
            React.createElement("span", { className: "pagination-ellipsis" }, "\u2026")));
    };
    return PaginationEllipsis;
}(React.Component));
var PaginationLink = (function (_super) {
    __extends(PaginationLink, _super);
    function PaginationLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationLink.prototype.render = function () {
        var _a = this.props, isCurrent = _a.isCurrent, props = __rest(_a, ["isCurrent"]);
        var className = classnames('pagination-link', {
            'is-current': isCurrent,
        });
        return (React.createElement("li", null,
            React.createElement("a", __assign({ className: className }, props), this.props.children)));
    };
    return PaginationLink;
}(React.Component));
var PaginationList = (function (_super) {
    __extends(PaginationList, _super);
    function PaginationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationList.prototype.render = function () {
        return (React.createElement("ul", { className: "pagination-list" }, this.props.children));
    };
    return PaginationList;
}(React.Component));
var PaginationNext = (function (_super) {
    __extends(PaginationNext, _super);
    function PaginationNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationNext.prototype.render = function () {
        return (React.createElement("a", { className: "pagination-next" }, this.props.children));
    };
    return PaginationNext;
}(React.Component));
var PaginationPrevious = (function (_super) {
    __extends(PaginationPrevious, _super);
    function PaginationPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaginationPrevious.prototype.render = function () {
        return (React.createElement("a", { className: "pagination-previous" }, this.props.children));
    };
    return PaginationPrevious;
}(React.Component));
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        return (React.createElement("nav", { className: "pagination", role: "navigation", "aria-label": "pagination" }, this.props.children));
    };
    Pagination.Ellipsis = PaginationEllipsis;
    Pagination.Link = PaginationLink;
    Pagination.List = PaginationList;
    Pagination.Next = PaginationNext;
    Pagination.Previous = PaginationPrevious;
    return Pagination;
}(React.Component));
exports.default = Pagination;

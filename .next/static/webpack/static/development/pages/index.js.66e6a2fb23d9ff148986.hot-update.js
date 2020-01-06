webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var List = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_ref) {
  var todos = _ref.todos;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", null, todos.map(function (ite, ind) {
    return __jsx("li", {
      style: {
        textDecoration: ite.status === "completed" ? "underline" : "none"
      },
      key: ite.id
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: '/todos/todoitem',
        query: {
          id: "".concat(ite.id)
        }
      }
    }, __jsx("a", null, ite.name)));
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(List));

/***/ })

})
//# sourceMappingURL=index.js.66e6a2fb23d9ff148986.hot-update.js.map
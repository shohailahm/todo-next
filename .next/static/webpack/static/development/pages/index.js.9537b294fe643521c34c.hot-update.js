webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/input */ "./components/input.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/List */ "./components/List.js");
/* harmony import */ var _stores_todolist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores/todolist */ "./stores/todolist.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









 // App
//const Lists=TodoList;

var App = Object(mobx_react__WEBPACK_IMPORTED_MODULE_11__["observer"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      todoList = _useState2[0],
      setTodos = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _stores_todolist__WEBPACK_IMPORTED_MODULE_7__["TodoList"].addTodo(props.obj);
  }, [props.obj]); //  useEffect(()=>{
  //   Lists.addTodo(props.obj);
  //   // return ()=>{
  //   //   console.log("unmonunt");
  //   // }
  //  },[props.obj]);

  function onInput(val) {
    setValue(val);
  }

  var submitTodo = function submitTodo() {
    // Router.push('/about');
    var todos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);

    var obj = {
      name: value,
      id: new Date().toISOString(),
      status: "pending"
    };
    setTodos([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todos), [obj]));
    _stores_todolist__WEBPACK_IMPORTED_MODULE_7__["TodoList"].addTodo(obj);
  };

  return __jsx("div", {
    className: "container"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about"
  }, __jsx("a", {
    title: "about page"
  }, props.about)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/todos"
  }, __jsx("a", {
    title: "about page"
  }, "Todos Page")), __jsx("div", {
    className: "inputContainer"
  }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: onInput,
    submit: submitTodo
  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    todos: (function () {
      return _stores_todolist__WEBPACK_IMPORTED_MODULE_7__["TodoList"].getTodos;
    }, function () {
      return _stores_todolist__WEBPACK_IMPORTED_MODULE_7__["TodoList"].getTodos;
    })
  })));
});

App.getInitialProps = function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("init props started"); // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
          // const data = await res.json();
          // console.log(`Show data fetched. Count: ${data.length}`);
          // return {
          //   shows: data.map(entry => entry.show)
          // };

          return _context.abrupt("return", {
            about: "about",
            obj: {
              name: "first",
              id: new Date().toISOString(),
              status: "pending"
            }
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}; //   const Index=()=>(
//      <Provider Lists={Lists}><App/></Provider>
//   )


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.9537b294fe643521c34c.hot-update.js.map
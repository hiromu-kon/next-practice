"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Home = ()=>{\n    const { register , handleSubmit , reset , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const onSubmit = (data)=>{\n        console.log(data);\n        reset();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {\n            w: \"30vw\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                        htmlFor: \"email\",\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        id: \"email\",\n                        type: \"email\",\n                        ...register(\"email\", {\n                            required: \"Email is Required\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"red.400\",\n                        children: errors.email && errors.email.message\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        id: \"password\",\n                        type: \"password\",\n                        ...register(\"password\", {\n                            required: \"Password is Required\"\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        color: \"red.400\",\n                        children: errors.password && errors.password.message\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        children: \"登録\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/hiromu-macbook/environment/nextjs-practice/form-practice-app/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUU7QUFFbEI7QUFFdkQsTUFBTU0sSUFBSSxHQUFhLElBQU07SUFPM0IsTUFBTSxFQUNKQyxRQUFRLEdBQ1JDLFlBQVksR0FDWkMsS0FBSyxHQUNMQyxTQUFTLEVBQUUsRUFBRUMsTUFBTSxHQUFFLEtBQ3RCLEdBQUdOLHdEQUFPLEVBQWU7SUFFMUIsTUFBTU8sUUFBUSxHQUFHLENBQUNDLElBQWlCLEdBQUs7UUFDdENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztRQUNsQkosS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQscUJBQ0UsOERBQUNOLG9EQUFNO2tCQUNMLDRFQUFDQSxvREFBTTtZQUFDYSxDQUFDLEVBQUMsTUFBTTtzQkFDZCw0RUFBQ0MsTUFBSTtnQkFBQ0wsUUFBUSxFQUFFSixZQUFZLENBQUNJLFFBQVEsQ0FBQzs7a0NBQ2xDLDhEQUFDWCx1REFBUzt3QkFBQ2lCLE9BQU8sRUFBQyxPQUFPO2tDQUFDLGVBQWE7Ozs7O2lDQUFZO2tDQUNwRCw4REFBQ2hCLG1EQUFLO3dCQUFDaUIsRUFBRSxFQUFDLE9BQU87d0JBQUNDLElBQUksRUFBQyxPQUFPO3dCQUFFLEdBQUdiLFFBQVEsQ0FBQyxPQUFPLEVBQUU7NEJBQUVjLFFBQVEsRUFBRSxtQkFBbUI7eUJBQUUsQ0FBQzs7Ozs7aUNBQUk7a0NBQzNGLDhEQUFDakIsa0RBQUk7d0JBQUNrQixLQUFLLEVBQUMsU0FBUztrQ0FBRVgsTUFBTSxDQUFDWSxLQUFLLElBQUlaLE1BQU0sQ0FBQ1ksS0FBSyxDQUFDQyxPQUFPOzs7OztpQ0FBUTtrQ0FDbkUsOERBQUN2Qix1REFBUzt3QkFBQ2lCLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFVBQVE7Ozs7O2lDQUFZO2tDQUNsRCw4REFBQ2hCLG1EQUFLO3dCQUFDaUIsRUFBRSxFQUFDLFVBQVU7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFFLEdBQUdiLFFBQVEsQ0FBQyxVQUFVLEVBQUU7NEJBQUVjLFFBQVEsRUFBRSxzQkFBc0I7eUJBQUUsQ0FBQzs7Ozs7aUNBQUk7a0NBQ3ZHLDhEQUFDakIsa0RBQUk7d0JBQUNrQixLQUFLLEVBQUMsU0FBUztrQ0FBRVgsTUFBTSxDQUFDYyxRQUFRLElBQUlkLE1BQU0sQ0FBQ2MsUUFBUSxDQUFDRCxPQUFPOzs7OztpQ0FBUTtrQ0FDM0UsOERBQUN4QixvREFBTTt3QkFBQ29CLElBQUksRUFBQyxRQUFRO2tDQUFDLElBQUU7Ozs7O2lDQUFTOzs7Ozs7eUJBQzVCOzs7OztxQkFDQTs7Ozs7aUJBQ0YsQ0FDVjtBQUNILENBQUM7QUFFRCxpRUFBZWQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tcHJhY3RpY2UtYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGb3JtTGFiZWwsIElucHV0LCBWU3RhY2ssIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBGaWVsZFZhbHVlcywgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG4gIGludGVyZmFjZSBGcm9tQ29udGVudCB7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9XG5cbiAgY29uc3QgeyBcbiAgICByZWdpc3RlciwgXG4gICAgaGFuZGxlU3VibWl0LCBcbiAgICByZXNldCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sIFxuICB9ID0gdXNlRm9ybTxGcm9tQ29udGVudD4oKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBGaWVsZFZhbHVlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJlc2V0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrPlxuICAgICAgPFZTdGFjayB3PSczMHZ3Jz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWwgYWRkcmVzczwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0IGlkPSdlbWFpbCcgdHlwZT0nZW1haWwnIHsuLi5yZWdpc3RlcignZW1haWwnLCB7IHJlcXVpcmVkOiAnRW1haWwgaXMgUmVxdWlyZWQnIH0pfSAvPlxuICAgICAgICAgICAgPFRleHQgY29sb3I9J3JlZC40MDAnPntlcnJvcnMuZW1haWwgJiYgZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9UZXh0PlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPSdwYXNzd29yZCc+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBpZD0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogJ1Bhc3N3b3JkIGlzIFJlcXVpcmVkJyB9KX0gLz5cbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPSdyZWQuNDAwJz57ZXJyb3JzLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZC5tZXNzYWdlfTwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+55m76YyyPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvVlN0YWNrPlxuICAgIDwvVlN0YWNrPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlZTdGFjayIsIlRleHQiLCJ1c2VGb3JtIiwiSG9tZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidyIsImZvcm0iLCJodG1sRm9yIiwiaWQiLCJ0eXBlIiwicmVxdWlyZWQiLCJjb2xvciIsImVtYWlsIiwibWVzc2FnZSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/FloatingWA/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/FloatingWA/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _this = undefined;\n\n\n\nvar FloatingWA = function() {\n    var openWhatsAppChat = function() {\n        // Replace 'PHONE_NUMBER' and 'MESSAGE' with your actual WhatsApp number and message\n        var phoneNumber = \"PHONE_NUMBER\";\n        var message = \"MESSAGE\";\n        // Create a WhatsApp URL with the phone number and message\n        var whatsappUrl = \"https://api.whatsapp.com/send?phone=\".concat(923235154682, \"&text=\").concat(encodeURIComponent(message));\n        // Open the WhatsApp chat in a new window or tab\n        window.open(whatsappUrl, \"_blank\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"floating-whatsapp-button\",\n        onClick: openWhatsAppChat,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaWhatsapp, {\n            className: \"whatsapp-icon\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\wwwre\\\\OneDrive\\\\Documents\\\\GitHub\\\\Aeon-Marketing-Next-js-1.0\\\\src\\\\components\\\\FloatingWA\\\\index.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wwwre\\\\OneDrive\\\\Documents\\\\GitHub\\\\Aeon-Marketing-Next-js-1.0\\\\src\\\\components\\\\FloatingWA\\\\index.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = FloatingWA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FloatingWA);\nvar _c;\n$RefreshReg$(_c, \"FloatingWA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GbG9hdGluZ1dBL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDa0I7QUFFNUMsSUFBTUUsVUFBVSxHQUFHLFdBQU07SUFDdkIsSUFBTUMsZ0JBQWdCLEdBQUcsV0FBTTtRQUM3QixvRkFBb0Y7UUFDcEYsSUFBTUMsV0FBVyxHQUFHLGNBQWM7UUFDbEMsSUFBTUMsT0FBTyxHQUFHLFNBQVM7UUFFekIsMERBQTBEO1FBQzFELElBQU1DLFdBQVcsR0FBRyxzQ0FBcUMsQ0FBdUJDLE1BRS9FLENBRjBELFlBQVksRUFBQyxRQUFNLENBRTVFLFFBRjhFQSxrQkFBa0IsQ0FDaEdGLE9BQU8sQ0FDUixDQUFFO1FBRUgsZ0RBQWdEO1FBQ2hERyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsMEJBQTBCO1FBQUNDLE9BQU8sRUFBRVQsZ0JBQWdCO2tCQUNqRSw0RUFBQ0Ysc0RBQVU7WUFBQ1UsU0FBUyxFQUFDLGVBQWU7Ozs7O2lCQUFHOzs7OzthQUNwQyxDQUNOO0FBQ0osQ0FBQztBQXBCS1QsS0FBQUEsVUFBVTtBQXNCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GbG9hdGluZ1dBL2luZGV4LmpzeD9jZmRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFXaGF0c2FwcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgRmxvYXRpbmdXQSA9ICgpID0+IHtcclxuICBjb25zdCBvcGVuV2hhdHNBcHBDaGF0ID0gKCkgPT4ge1xyXG4gICAgLy8gUmVwbGFjZSAnUEhPTkVfTlVNQkVSJyBhbmQgJ01FU1NBR0UnIHdpdGggeW91ciBhY3R1YWwgV2hhdHNBcHAgbnVtYmVyIGFuZCBtZXNzYWdlXHJcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IFwiUEhPTkVfTlVNQkVSXCI7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gXCJNRVNTQUdFXCI7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgV2hhdHNBcHAgVVJMIHdpdGggdGhlIHBob25lIG51bWJlciBhbmQgbWVzc2FnZVxyXG4gICAgY29uc3Qgd2hhdHNhcHBVcmwgPSBgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9JHs5MjMyMzUxNTQ2ODJ9JnRleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgICl9YDtcclxuXHJcbiAgICAvLyBPcGVuIHRoZSBXaGF0c0FwcCBjaGF0IGluIGEgbmV3IHdpbmRvdyBvciB0YWJcclxuICAgIHdpbmRvdy5vcGVuKHdoYXRzYXBwVXJsLCBcIl9ibGFua1wiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG9hdGluZy13aGF0c2FwcC1idXR0b25cIiBvbkNsaWNrPXtvcGVuV2hhdHNBcHBDaGF0fT5cclxuICAgICAgPEZhV2hhdHNhcHAgY2xhc3NOYW1lPVwid2hhdHNhcHAtaWNvblwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdXQTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmFXaGF0c2FwcCIsIkZsb2F0aW5nV0EiLCJvcGVuV2hhdHNBcHBDaGF0IiwicGhvbmVOdW1iZXIiLCJtZXNzYWdlIiwid2hhdHNhcHBVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FloatingWA/index.jsx\n"));

/***/ })

});
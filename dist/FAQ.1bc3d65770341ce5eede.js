/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/FAQ.scss":
/*!*************************!*\
  !*** ./styles/FAQ.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/FAQ.scss?");

/***/ }),

/***/ "./scripts/faq-boxes.js":
/*!******************************!*\
  !*** ./scripts/faq-boxes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_FAQ_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/FAQ.scss */ \"./styles/FAQ.scss\");\n\r\n\r\nlet current = 0;\r\n\r\nfunction show(num) {\r\n    let elements = document.getElementsByClassName('arrowDown');\r\n    elements[0].style.display = \"inline\";\r\n    elements[1].style.display = \"inline\";\r\n    elements[2].style.display = \"inline\";\r\n    elements[3].style.display = \"inline\";\r\n    elements[4].style.display = \"inline\";\r\n    elements[5].style.display = \"inline\";\r\n    elements = document.getElementsByClassName('arrowUp');\r\n    elements[0].style.display = \"none\";\r\n    elements[1].style.display = \"none\";\r\n    elements[2].style.display = \"none\";\r\n    elements[3].style.display = \"none\";\r\n    elements[4].style.display = \"none\";\r\n    elements[5].style.display = \"none\";\r\n    elements = document.getElementsByClassName('answ');\r\n    elements[0].style.display = \"none\";\r\n    elements[1].style.display = \"none\";\r\n    elements[2].style.display = \"none\";\r\n    elements[3].style.display = \"none\";\r\n    elements[4].style.display = \"none\";\r\n    elements[5].style.display = \"none\";\r\n    elements = document.getElementsByClassName('butText');\r\n    elements[0].style.color = '#1B1B1B';\r\n    elements[1].style.color = '#1B1B1B';\r\n    elements[2].style.color = '#1B1B1B';\r\n    elements[3].style.color = '#1B1B1B';\r\n    elements[4].style.color = '#1B1B1B';\r\n    elements[5].style.color = '#1B1B1B';\r\n    elements = document.getElementsByClassName('btn');\r\n    elements[0].style.background = '#F7F7F8';\r\n    elements[1].style.background = '#F7F7F8';\r\n    elements[2].style.background = '#F7F7F8';\r\n    elements[3].style.background = '#F7F7F8';\r\n    elements[4].style.background = '#F7F7F8';\r\n    elements[5].style.background = '#F7F7F8';\r\n\r\n    switch (num) {\r\n        case 1:\r\n            if (current === 1) {\r\n                current = 0;\r\n                document.getElementById('arrowDown1').style.display = 'inline';\r\n                document.getElementById('arrowUp1').style.display = 'none';\r\n                document.getElementById('answ1').style.display = 'none';\r\n                document.getElementById('t1').style.color = '#1B1B1B';\r\n                document.getElementById('btn1').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 1;\r\n                document.getElementById('arrowDown1').style.display = 'none';\r\n                document.getElementById('arrowUp1').style.display = 'inline';\r\n                document.getElementById('answ1').style.display = 'block';\r\n                document.getElementById('t1').style.color = '#61A199';\r\n                document.getElementById('btn1').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n        case 2:\r\n            if (current === 2) {\r\n                current = 0;\r\n                document.getElementById('arrowDown2').style.display = 'inline';\r\n                document.getElementById('arrowUp2').style.display = 'none';\r\n                document.getElementById('answ2').style.display = 'none';\r\n                document.getElementById('t2').style.color = '#1B1B1B';\r\n                document.getElementById('btn2').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 2;\r\n                document.getElementById('arrowDown2').style.display = 'none';\r\n                document.getElementById('arrowUp2').style.display = 'inline';\r\n                document.getElementById('answ2').style.display = 'block';\r\n                document.getElementById('t2').style.color = '#61A199';\r\n                document.getElementById('btn2').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n        case 3:\r\n            if (current === 3) {\r\n                current = 0;\r\n                document.getElementById('arrowDown3').style.display = 'inline';\r\n                document.getElementById('arrowUp3').style.display = 'none';\r\n                document.getElementById('answ3').style.display = 'none';\r\n                document.getElementById('t3').style.color = '#1B1B1B';\r\n                document.getElementById('btn3').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 3;\r\n                document.getElementById('arrowDown3').style.display = 'none';\r\n                document.getElementById('arrowUp3').style.display = 'inline';\r\n                document.getElementById('answ3').style.display = 'block';\r\n                document.getElementById('t3').style.color = '#61A199';\r\n                document.getElementById('btn3').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n        case 4:\r\n            if (current === 4) {\r\n                current = 0;\r\n                document.getElementById('arrowDown4').style.display = 'inline';\r\n                document.getElementById('arrowUp4').style.display = 'none';\r\n                document.getElementById('answ4').style.display = 'none';\r\n                document.getElementById('t4').style.color = '#1B1B1B';\r\n                document.getElementById('btn4').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 4;\r\n                document.getElementById('arrowDown4').style.display = 'none';\r\n                document.getElementById('arrowUp4').style.display = 'inline';\r\n                document.getElementById('answ4').style.display = 'block';\r\n                document.getElementById('t4').style.color = '#61A199';\r\n                document.getElementById('btn4').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n\r\n        case 5:\r\n            if (current === 5) {\r\n                current = 0;\r\n                document.getElementById('arrowDown5').style.display = 'inline';\r\n                document.getElementById('arrowUp5').style.display = 'none';\r\n                document.getElementById('answ5').style.display = 'none';\r\n                document.getElementById('t5').style.color = '#1B1B1B';\r\n                document.getElementById('btn5').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 5;\r\n                document.getElementById('arrowDown5').style.display = 'none';\r\n                document.getElementById('arrowUp5').style.display = 'inline';\r\n                document.getElementById('answ5').style.display = 'block';\r\n                document.getElementById('t5').style.color = '#61A199';\r\n                document.getElementById('btn5').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n        case 6:\r\n            if (current === 6) {\r\n                current = 0;\r\n                document.getElementById('arrowDown6').style.display = 'inline';\r\n                document.getElementById('arrowUp6').style.display = 'none';\r\n                document.getElementById('answ6').style.display = 'none';\r\n                document.getElementById('t6').style.color = '#1B1B1B';\r\n                document.getElementById('btn6').style.background = '#F7F7F8';\r\n            }\r\n            else {\r\n                current = 6;\r\n                document.getElementById('arrowDown6').style.display = 'none';\r\n                document.getElementById('arrowUp6').style.display = 'inline';\r\n                document.getElementById('answ6').style.display = 'block';\r\n                document.getElementById('t6').style.color = '#61A199';\r\n                document.getElementById('btn6').style.background = 'rgba(97, 161, 153, 0.15)';\r\n            }\r\n            break;\r\n    }\r\n}\r\n\r\nwindow.show = show;\n\n//# sourceURL=webpack:///./scripts/faq-boxes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/faq-boxes.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wordpress-boiler/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ (() => {

eval("slideshowConfig = {\n    slider: '.abc-slideshow .slick-slider',\n    dots: '.slider-dots',\n    settings: {\n        arrows: false,\n        dots: true,\n        appendDots: null,\n        autoplay: true,\n        autoplaySpeed: 2000,\n    }\n}\n\nfunction initSlideshow(slider, config){\n    slider.slick(config);\n}\n\nlet sliderPause = false;\n\nfunction sliderControls(slider, action){\n    let userAction = action.data('control');\n\n    if(userAction === 'slickPause' && sliderPause === false){\n        // Change current pause button state\n        action.children('svg').eq(0).hide();\n        action.children('svg').eq(1).show();\n\n        // Change current play button state\n        action.prev().children('svg').eq(0).hide();\n        action.prev().children('svg').eq(1).show();\n\n        sliderPause = true;\n    } else if(userAction === 'slickPlay' && sliderPause === true){\n        // Change current pause button state\n        action.children('svg').eq(0).show();\n        action.children('svg').eq(1).hide();\n\n        // Change current play button state\n        action.next().children('svg').eq(0).show();\n        action.next().children('svg').eq(1).hide();\n\n        sliderPause = false;\n    }\n\n    slider.slick(userAction);\n}\n\nlistCollectionConfig = {\n    slider: '.abc-list-collection .slick-slider',\n    dots: '.slider-dots',\n    settings: {\n        arrows: false,\n        dots: true,\n        appendDots: null\n    }\n}\n\nfunction initListCollection(slider, config){\n    slider.slick(config);\n}\n\n$(document).ready(function(){\n    if($(slideshowConfig.slider).length){\n\n        $(slideshowConfig.slider).each(function(i,e){\n            slideshowConfig.settings.appendDots = $(e).next().children().children().children(slideshowConfig.dots);\n            initSlideshow($(e), slideshowConfig.settings);\n\n            let sliderButtons = $(e).next().find('button');\n\n            sliderButtons.each(function(i,ele){\n                $(ele).on('click', function(){\n                    sliderControls($(e), $(this));\n                });\n            });\n\n        });\n    }\n\n    if($(listCollectionConfig.slider).length){\n\n        $(listCollectionConfig.slider).each(function(i,e){\n            listCollectionConfig.settings.appendDots = $(e).next().children().children().children(listCollectionConfig.dots);\n            initListCollection($(e), listCollectionConfig.settings);\n\n            let sliderButtons = $(e).next().find('button');\n\n            sliderButtons.each(function(i,ele){\n                $(ele).on('click', function(){\n                    sliderControls($(e), $(this));\n                });\n            });\n        });\n    }\n});\n\n//# sourceURL=webpack://wordpress-boiler/./src/js/theme.js?");

/***/ }),

/***/ "./src/js sync recursive \\.js$":
/*!****************************!*\
  !*** ./src/js/ sync \.js$ ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./theme.js\": \"./src/js/theme.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/js sync recursive \\\\.js$\";\n\n//# sourceURL=webpack://wordpress-boiler/./src/js/_sync_\\.js$?");

/***/ }),

/***/ "./src/webpack.js":
/*!************************!*\
  !*** ./src/webpack.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\nfunction requireAll(r) { r.keys().forEach(r); }\nrequireAll(__webpack_require__(\"./src/js sync recursive \\\\.js$\"));\n\n\n//# sourceURL=webpack://wordpress-boiler/./src/webpack.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/webpack.js");
/******/ 	
/******/ })()
;
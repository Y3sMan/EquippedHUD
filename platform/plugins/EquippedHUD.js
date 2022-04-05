/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setFocused(false);
var visible = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.isVisible();
var focused = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.isFocused();
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.loadUrl("file:///Data/Platform/UI/test.html");
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('equip', function (e) {
    var _a, _b;
    // printConsole('help')
    var help = 'help';
    /*
        0 = left hand
        1 = right hand
        2 = shout slot
    */
    // if ( e.actor != pl() ) { return; }
    var l_id = (_a = pl()) === null || _a === void 0 ? void 0 : _a.getEquippedObject(0);
    var r_id = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getEquippedObject(1);
    var l_name = l_id === null || l_id === void 0 ? void 0 : l_id.getName();
    var r_name = r_id === null || r_id === void 0 ? void 0 : r_id.getName();
    if (l_name == undefined) {
        l_name = "None";
    }
    if (r_name == undefined) {
        r_name = "None";
    }
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.executeJavaScript("document.getElementById(\"left\").innerHTML = \"".concat(l_name, "\";"));
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.executeJavaScript("document.getElementById(\"right\").innerHTML = \"".concat(r_name, "\";"));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBwZWRIVUQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1EO0FBQ25ELDhEQUFrQjtBQUNsQiw4REFBa0I7QUFDbEIsY0FBYyw2REFBaUI7QUFDL0IsY0FBYyw2REFBaUI7QUFDL0IsMkRBQWU7QUFDUixnQkFBZ0IsT0FBTywwREFBYztBQUM1QyxrREFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUF5Qix1RUFBdUU7QUFDcEcsSUFBSSxxRUFBeUIsd0VBQXdFO0FBQ3JHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC9leHRlcm5hbCB2YXIgW1wic2t5cmltUGxhdGZvcm1cIl0iLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC8uL3NyYy9FcXVpcHBlZEhVRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHNreXJpbVBsYXRmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBicm93c2VyLCBHYW1lLCBvbiB9IGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG5icm93c2VyLnNldFZpc2libGUodHJ1ZSk7XHJcbmJyb3dzZXIuc2V0Rm9jdXNlZChmYWxzZSk7XHJcbnZhciB2aXNpYmxlID0gYnJvd3Nlci5pc1Zpc2libGUoKTtcclxudmFyIGZvY3VzZWQgPSBicm93c2VyLmlzRm9jdXNlZCgpO1xyXG5icm93c2VyLmxvYWRVcmwoXCJmaWxlOi8vL0RhdGEvUGxhdGZvcm0vVUkvdGVzdC5odG1sXCIpO1xyXG5leHBvcnQgZnVuY3Rpb24gcGwoKSB7IHJldHVybiBHYW1lLmdldFBsYXllcigpOyB9XHJcbm9uKCdlcXVpcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKCdoZWxwJylcclxuICAgIHZhciBoZWxwID0gJ2hlbHAnO1xyXG4gICAgLypcclxuICAgICAgICAwID0gbGVmdCBoYW5kXHJcbiAgICAgICAgMSA9IHJpZ2h0IGhhbmRcclxuICAgICAgICAyID0gc2hvdXQgc2xvdFxyXG4gICAgKi9cclxuICAgIC8vIGlmICggZS5hY3RvciAhPSBwbCgpICkgeyByZXR1cm47IH1cclxuICAgIHZhciBsX2lkID0gKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEVxdWlwcGVkT2JqZWN0KDApO1xyXG4gICAgdmFyIHJfaWQgPSAoX2IgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0RXF1aXBwZWRPYmplY3QoMSk7XHJcbiAgICB2YXIgbF9uYW1lID0gbF9pZCA9PT0gbnVsbCB8fCBsX2lkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsX2lkLmdldE5hbWUoKTtcclxuICAgIHZhciByX25hbWUgPSByX2lkID09PSBudWxsIHx8IHJfaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJfaWQuZ2V0TmFtZSgpO1xyXG4gICAgaWYgKGxfbmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsX25hbWUgPSBcIk5vbmVcIjtcclxuICAgIH1cclxuICAgIGlmIChyX25hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcl9uYW1lID0gXCJOb25lXCI7XHJcbiAgICB9XHJcbiAgICBicm93c2VyLmV4ZWN1dGVKYXZhU2NyaXB0KFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcImxlZnRcXFwiKS5pbm5lckhUTUwgPSBcXFwiXCIuY29uY2F0KGxfbmFtZSwgXCJcXFwiO1wiKSk7XHJcbiAgICBicm93c2VyLmV4ZWN1dGVKYXZhU2NyaXB0KFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFxcInJpZ2h0XFxcIikuaW5uZXJIVE1MID0gXFxcIlwiLmNvbmNhdChyX25hbWUsIFwiXFxcIjtcIikpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
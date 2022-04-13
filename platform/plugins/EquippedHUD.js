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
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
var left_text;
var right_text;
var shout_text;
var x = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.settings.equippedhud.x;
var y = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.settings.equippedhud.y;
var left_offset = -500;
var right_offset = 500;
var key = '.equipped-hud.';
// var init = false
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    //     // var init = GetIntValue(null, key + 'init', 0)
    //     // destroyAllTexts()
    //     // if ( init == 0 ) {
    //         left_text = createText(x + left_offset, y, "Left", [1,1,1,1]);
    //         right_text = createText(x + right_offset, y, "Right", [1,1,1,1]);
    //         shout_text = createText(x, y, "Shout", [1,1,1,1]);
    //         storage[key + 'init.'] = true
    //         // init = 1
    //         SetIntValue(null, key + 'init', 1)
    //         SetEquipped(left_text, right_text, shout_text)
    //         printConsole('EquippedHUD - SP initialized')
    //     // }
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuOpen', function () { skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(false); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function () { skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('actionBeginDraw', function () { skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(false); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('actionBeginSheathe', function () { skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('equip', function (e) {
    var _a;
    if (e.actor.getFormID() != ((_a = pl()) === null || _a === void 0 ? void 0 : _a.getFormID())) {
        return;
    }
    SetEquipped(left_text, right_text, shout_text);
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('unequip', function (e) {
    var _a;
    if (e.actor.getFormID() != ((_a = pl()) === null || _a === void 0 ? void 0 : _a.getFormID())) {
        return;
    }
    SetEquipped(left_text, right_text, shout_text);
});
function SetEquipped(l, r, s) {
    var _a, _b, _c;
    /*
        0 = left hand
        1 = right hand
        2 = shout slot
    */
    var l_id = (_a = pl()) === null || _a === void 0 ? void 0 : _a.getEquippedObject(0);
    var r_id = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getEquippedObject(1);
    var s_id = (_c = pl()) === null || _c === void 0 ? void 0 : _c.getEquippedObject(2);
    var l_name = l_id === null || l_id === void 0 ? void 0 : l_id.getName();
    var r_name = r_id === null || r_id === void 0 ? void 0 : r_id.getName();
    var s_name = s_id === null || s_id === void 0 ? void 0 : s_id.getName();
    if (l_name == undefined) {
        l_name = "None";
    }
    if (r_name == undefined) {
        r_name = "None";
    }
    if (s_name == undefined) {
        s_name = "None";
    }
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(l, l_name);
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(r, r_name);
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(s, s_name);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXF1aXBwZWRIVUQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtGO0FBQ2xGLDhEQUFrQjtBQUNsQiw4REFBa0I7QUFDbEIsY0FBYyw2REFBaUI7QUFDL0IsY0FBYyw2REFBaUI7QUFDeEIsZ0JBQWdCLE9BQU8sMERBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBNEI7QUFDcEMsUUFBUSxrRUFBNEI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrREFBRSwyQkFBMkIsOERBQWtCLFVBQVU7QUFDekQsa0RBQUUsNEJBQTRCLDhEQUFrQixTQUFTO0FBQ3pELGtEQUFFLGtDQUFrQyw4REFBa0IsVUFBVTtBQUNoRSxrREFBRSxxQ0FBcUMsOERBQWtCLFNBQVM7QUFDbEUsa0RBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtEQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWE7QUFDakIsSUFBSSw2REFBYTtBQUNqQixJQUFJLDZEQUFhO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvZXh0ZXJuYWwgdmFyIFtcInNreXJpbVBsYXRmb3JtXCJdIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FcXVpcHBlZEhVRC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0VxdWlwcGVkSFVEL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vRXF1aXBwZWRIVUQvLi9zcmMvRXF1aXBwZWRIVUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYnJvd3Nlciwgb25jZSwgR2FtZSwgb24sIHNldFRleHRTdHJpbmcsIHNldHRpbmdzIH0gZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxuYnJvd3Nlci5zZXRGb2N1c2VkKGZhbHNlKTtcclxudmFyIHZpc2libGUgPSBicm93c2VyLmlzVmlzaWJsZSgpO1xyXG52YXIgZm9jdXNlZCA9IGJyb3dzZXIuaXNGb2N1c2VkKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxudmFyIGxlZnRfdGV4dDtcclxudmFyIHJpZ2h0X3RleHQ7XHJcbnZhciBzaG91dF90ZXh0O1xyXG52YXIgeCA9IHNldHRpbmdzW1wiZXF1aXBwZWRodWRcIl1bXCJ4XCJdO1xyXG52YXIgeSA9IHNldHRpbmdzW1wiZXF1aXBwZWRodWRcIl1bXCJ5XCJdO1xyXG52YXIgbGVmdF9vZmZzZXQgPSAtNTAwO1xyXG52YXIgcmlnaHRfb2Zmc2V0ID0gNTAwO1xyXG52YXIga2V5ID0gJy5lcXVpcHBlZC1odWQuJztcclxuLy8gdmFyIGluaXQgPSBmYWxzZVxyXG5vbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgLy8gdmFyIGluaXQgPSBHZXRJbnRWYWx1ZShudWxsLCBrZXkgKyAnaW5pdCcsIDApXHJcbiAgICAvLyAgICAgLy8gZGVzdHJveUFsbFRleHRzKClcclxuICAgIC8vICAgICAvLyBpZiAoIGluaXQgPT0gMCApIHtcclxuICAgIC8vICAgICAgICAgbGVmdF90ZXh0ID0gY3JlYXRlVGV4dCh4ICsgbGVmdF9vZmZzZXQsIHksIFwiTGVmdFwiLCBbMSwxLDEsMV0pO1xyXG4gICAgLy8gICAgICAgICByaWdodF90ZXh0ID0gY3JlYXRlVGV4dCh4ICsgcmlnaHRfb2Zmc2V0LCB5LCBcIlJpZ2h0XCIsIFsxLDEsMSwxXSk7XHJcbiAgICAvLyAgICAgICAgIHNob3V0X3RleHQgPSBjcmVhdGVUZXh0KHgsIHksIFwiU2hvdXRcIiwgWzEsMSwxLDFdKTtcclxuICAgIC8vICAgICAgICAgc3RvcmFnZVtrZXkgKyAnaW5pdC4nXSA9IHRydWVcclxuICAgIC8vICAgICAgICAgLy8gaW5pdCA9IDFcclxuICAgIC8vICAgICAgICAgU2V0SW50VmFsdWUobnVsbCwga2V5ICsgJ2luaXQnLCAxKVxyXG4gICAgLy8gICAgICAgICBTZXRFcXVpcHBlZChsZWZ0X3RleHQsIHJpZ2h0X3RleHQsIHNob3V0X3RleHQpXHJcbiAgICAvLyAgICAgICAgIHByaW50Q29uc29sZSgnRXF1aXBwZWRIVUQgLSBTUCBpbml0aWFsaXplZCcpXHJcbiAgICAvLyAgICAgLy8gfVxyXG59KTtcclxub24oJ21lbnVPcGVuJywgZnVuY3Rpb24gKCkgeyBicm93c2VyLnNldFZpc2libGUoZmFsc2UpOyB9KTtcclxub24oJ21lbnVDbG9zZScsIGZ1bmN0aW9uICgpIHsgYnJvd3Nlci5zZXRWaXNpYmxlKHRydWUpOyB9KTtcclxub24oJ2FjdGlvbkJlZ2luRHJhdycsIGZ1bmN0aW9uICgpIHsgYnJvd3Nlci5zZXRWaXNpYmxlKGZhbHNlKTsgfSk7XHJcbm9uKCdhY3Rpb25CZWdpblNoZWF0aGUnLCBmdW5jdGlvbiAoKSB7IGJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTsgfSk7XHJcbm9uKCdlcXVpcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoZS5hY3Rvci5nZXRGb3JtSUQoKSAhPSAoKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1JRCgpKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFNldEVxdWlwcGVkKGxlZnRfdGV4dCwgcmlnaHRfdGV4dCwgc2hvdXRfdGV4dCk7XHJcbn0pO1xyXG5vbigndW5lcXVpcCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoZS5hY3Rvci5nZXRGb3JtSUQoKSAhPSAoKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1JRCgpKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFNldEVxdWlwcGVkKGxlZnRfdGV4dCwgcmlnaHRfdGV4dCwgc2hvdXRfdGV4dCk7XHJcbn0pO1xyXG5mdW5jdGlvbiBTZXRFcXVpcHBlZChsLCByLCBzKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIC8qXHJcbiAgICAgICAgMCA9IGxlZnQgaGFuZFxyXG4gICAgICAgIDEgPSByaWdodCBoYW5kXHJcbiAgICAgICAgMiA9IHNob3V0IHNsb3RcclxuICAgICovXHJcbiAgICB2YXIgbF9pZCA9IChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFcXVpcHBlZE9iamVjdCgwKTtcclxuICAgIHZhciByX2lkID0gKF9iID0gcGwoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEVxdWlwcGVkT2JqZWN0KDEpO1xyXG4gICAgdmFyIHNfaWQgPSAoX2MgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0RXF1aXBwZWRPYmplY3QoMik7XHJcbiAgICB2YXIgbF9uYW1lID0gbF9pZCA9PT0gbnVsbCB8fCBsX2lkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsX2lkLmdldE5hbWUoKTtcclxuICAgIHZhciByX25hbWUgPSByX2lkID09PSBudWxsIHx8IHJfaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJfaWQuZ2V0TmFtZSgpO1xyXG4gICAgdmFyIHNfbmFtZSA9IHNfaWQgPT09IG51bGwgfHwgc19pZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc19pZC5nZXROYW1lKCk7XHJcbiAgICBpZiAobF9uYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxfbmFtZSA9IFwiTm9uZVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHJfbmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByX25hbWUgPSBcIk5vbmVcIjtcclxuICAgIH1cclxuICAgIGlmIChzX25hbWUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc19uYW1lID0gXCJOb25lXCI7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0U3RyaW5nKGwsIGxfbmFtZSk7XHJcbiAgICBzZXRUZXh0U3RyaW5nKHIsIHJfbmFtZSk7XHJcbiAgICBzZXRUZXh0U3RyaW5nKHMsIHNfbmFtZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
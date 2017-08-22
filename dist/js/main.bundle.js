/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layer = __webpack_require__(2);

var _layer2 = _interopRequireDefault(_layer);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import tpl from './layer.html';
function layer() {
    return {
        name: "layer",
        tpl: _layer2.default
    };
}
exports.default = layer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="layer">\r\n    <div>\r\n        ' +
((__t = ( name)) == null ? '' : __t) +
'\r\n    </div>\r\n</div>';

}
return __p
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layer = __webpack_require__(1);

var _layer2 = _interopRequireDefault(_layer);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ajax();

function ajax() {
    var XHR = null;
    if (window.XMLHttpRequest) {
        // 非IE内核
        XHR = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // IE内核,这里早期IE的版本写法不同,具体可以查询下
        XHR = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        XHR = null;
    }

    if (XHR) {
        XHR.open("GET", "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600");

        XHR.onreadystatechange = function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                // 这里可以对返回的内容做处理
                // 一般会返回JSON或XML数据格式
                console.log(XHR.responseText);
                // 主动释放,JS本身也会回收的
                XHR = null;
                new App();
            }
        };
        XHR.send();
    }
}
var App = function App() {
    var dom = document.getElementById("app");
    // var tpl = new layer().tpl; // html 模板
    var tpl = new _layer2.default().tpl;
    dom.innerHTML = tpl({ name: "name" });
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTIzNDIzOGZlOGE5MDBkOTZkNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjMS9jc3MvY29tbW9uLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMxL2NvbXBvbmVudHMvbGF5ZXIvbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjMS9jb21wb25lbnRzL2xheWVyL2xheWVyLnRwbCIsIndlYnBhY2s6Ly8vLi9zcmMxL2NvbXBvbmVudHMvbGF5ZXIvbGF5ZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMxL2FwcC5qcyJdLCJuYW1lcyI6WyJsYXllciIsIm5hbWUiLCJ0cGwiLCJhamF4IiwiWEhSIiwid2luZG93IiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2VUZXh0IiwiQXBwIiwic2VuZCIsImRvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSx5Qzs7Ozs7Ozs7Ozs7OztBQ0NBOzs7O0FBQ0E7Ozs7QUFGQTtBQUlBLFNBQVNBLEtBQVQsR0FBaUI7QUFDYixXQUFPO0FBQ0hDLGNBQU0sT0FESDtBQUVIQztBQUZHLEtBQVA7QUFJSDtrQkFDY0YsSzs7Ozs7O0FDVmY7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7O0FDVkEseUM7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQUc7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNaLFFBQUlDLE1BQU0sSUFBVjtBQUNBLFFBQUlDLE9BQU9DLGNBQVgsRUFBMkI7QUFDdkI7QUFDQUYsY0FBTSxJQUFJRSxjQUFKLEVBQU47QUFDSCxLQUhELE1BR08sSUFBSUQsT0FBT0UsYUFBWCxFQUEwQjtBQUM3QjtBQUNBSCxjQUFNLElBQUlHLGFBQUosQ0FBa0IsbUJBQWxCLENBQU47QUFDSCxLQUhNLE1BR0E7QUFDSEgsY0FBTSxJQUFOO0FBQ0g7O0FBRUQsUUFBSUEsR0FBSixFQUFTO0FBQ0xBLFlBQUlJLElBQUosQ0FBUyxLQUFULEVBQWdCLGlJQUFoQjs7QUFFQUosWUFBSUssa0JBQUosR0FBeUIsWUFBVztBQUNoQyxnQkFBSUwsSUFBSU0sVUFBSixJQUFrQixDQUFsQixJQUF1Qk4sSUFBSU8sTUFBSixJQUFjLEdBQXpDLEVBQThDO0FBQzFDO0FBQ0E7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWVQsSUFBSVUsWUFBaEI7QUFDQTtBQUNBVixzQkFBTSxJQUFOO0FBQ0Esb0JBQUlXLEdBQUo7QUFDSDtBQUNKLFNBVEQ7QUFVQVgsWUFBSVksSUFBSjtBQUNIO0FBQ0o7QUFDRCxJQUFNRCxNQUFNLFNBQU5BLEdBQU0sR0FBVztBQUNuQixRQUFJRSxNQUFNQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVY7QUFDQTtBQUNBLFFBQUlqQixNQUFNLHNCQUFZQSxHQUF0QjtBQUNBZSxRQUFJRyxTQUFKLEdBQWdCbEIsSUFBSSxFQUFFRCxNQUFNLE1BQVIsRUFBSixDQUFoQjtBQUNILENBTEQsQyIsImZpbGUiOiJqcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTIzNDIzOGZlOGE5MDBkOTZkNjQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjMS9jc3MvY29tbW9uLmNzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBpbXBvcnQgdHBsIGZyb20gJy4vbGF5ZXIuaHRtbCc7XHJcbmltcG9ydCB0cGwgZnJvbSBcIi4vbGF5ZXIudHBsXCI7XHJcbmltcG9ydCBcIi4vbGF5ZXIubGVzc1wiO1xyXG5cclxuZnVuY3Rpb24gbGF5ZXIoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IFwibGF5ZXJcIixcclxuICAgICAgICB0cGw6IHRwbFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxheWVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYzEvY29tcG9uZW50cy9sYXllci9sYXllci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xub2JqIHx8IChvYmogPSB7fSk7XG52YXIgX190LCBfX3AgPSAnJztcbndpdGggKG9iaikge1xuX19wICs9ICc8ZGl2IGNsYXNzPVwibGF5ZXJcIj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICAgICcgK1xuKChfX3QgPSAoIG5hbWUpKSA9PSBudWxsID8gJycgOiBfX3QpICtcbidcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+JztcblxufVxucmV0dXJuIF9fcFxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjMS9jb21wb25lbnRzL2xheWVyL2xheWVyLnRwbFxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjMS9jb21wb25lbnRzL2xheWVyL2xheWVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGxheWVyIGZyb20gJy4vY29tcG9uZW50cy9sYXllci9sYXllcic7XHJcbmltcG9ydCBcIi4vY3NzL2NvbW1vbi5jc3NcIjtcclxuYWpheCgpO1xyXG5cclxuZnVuY3Rpb24gYWpheCgpIHtcclxuICAgIHZhciBYSFIgPSBudWxsO1xyXG4gICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgIC8vIOmdnklF5YaF5qC4XHJcbiAgICAgICAgWEhSID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XHJcbiAgICAgICAgLy8gSUXlhoXmoLgs6L+Z6YeM5pep5pyfSUXnmoTniYjmnKzlhpnms5XkuI3lkIws5YW35L2T5Y+v5Lul5p+l6K+i5LiLXHJcbiAgICAgICAgWEhSID0gbmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgWEhSID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoWEhSKSB7XHJcbiAgICAgICAgWEhSLm9wZW4oXCJHRVRcIiwgXCJodHRwOi8vYmFpa2UuYmFpZHUuY29tL2FwaS9vcGVuYXBpL0JhaWtlTGVtbWFDYXJkQXBpP3Njb3BlPTEwMyZmb3JtYXQ9anNvbiZhcHBpZD0zNzkwMjAmYmtfa2V5PSVFOSU5MyVCNiVFOSVBRCU4MiZia19sZW5ndGg9NjAwXCIpO1xyXG5cclxuICAgICAgICBYSFIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChYSFIucmVhZHlTdGF0ZSA9PSA0ICYmIFhIUi5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDov5nph4zlj6/ku6Xlr7nov5Tlm57nmoTlhoXlrrnlgZrlpITnkIZcclxuICAgICAgICAgICAgICAgIC8vIOS4gOiIrOS8mui/lOWbnkpTT07miJZYTUzmlbDmja7moLzlvI9cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFhIUi5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Li75Yqo6YeK5pS+LEpT5pys6Lqr5Lmf5Lya5Zue5pS255qEXHJcbiAgICAgICAgICAgICAgICBYSFIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbmV3IEFwcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBYSFIuc2VuZCgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IEFwcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG4gICAgLy8gdmFyIHRwbCA9IG5ldyBsYXllcigpLnRwbDsgLy8gaHRtbCDmqKHmnb9cclxuICAgIGxldCB0cGwgPSBuZXcgbGF5ZXIoKS50cGw7XHJcbiAgICBkb20uaW5uZXJIVE1MID0gdHBsKHsgbmFtZTogXCJuYW1lXCIgfSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMxL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
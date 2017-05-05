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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(selector){
  var array = [];
  if (typeof selector === "string") {
    var nodelist = document.querySelectorAll(selector);
    array = Array.from(nodelist);
    return new DOMNodeCollection(array);
  } else if (selector instanceof HTMLElement) {
    array = [selector];
    return new DOMNodeCollection(array);
  } else {
    console.log("error");
  }

};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }

  html (value) {
    if (value === undefined){
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach( (el) => {
        el.innerHTML = value;
      });
    }
 }

 empty (){
   this.htmlElements.forEach( (node) => {
     node.innerHTML = "";
   });
 }

 append(x) {
   this.htmlElements.forEach((el) => {
    el.appendChild(x);
   });
 }

 children() {
   let kids = [];

   this.htmlElements.forEach( (el) => {
     kids.push(el.children);
   });
   return new DOMNodeCollection(kids);
 }

 parents(){
   let adults = [];
   this.htmlElements.forEach( (el) => {
     adults.push(el.parentNode);
   });
   return new DOMNodeCollection(adults);
 }

 find(selector) {
   let results = [];

   this.htmlElements.forEach( (el) => {
     results.push(el.querySelectorAll(selector));
   });

   return new DOMNodeCollection(results);
 }

 remove() {
   this.htmlElements.forEach( (el, idx) => {
     el.parentNode.removeChild(el);
   });
  this.htmlElements = [];
 }

 on(action, cb){
   this.htmlElements.forEach( (el) =>{
     el.setAttribute("cb", cb);
     el.addEventListener(action, cb);
   });
 }

 off(action){
   this.htmlElements.forEach( (el) => {
     console.log(el.cb);
     el.removeEventListener(action, el.cb);
   });
 }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);
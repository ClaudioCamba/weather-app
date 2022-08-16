/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManipulation": () => (/* binding */ domManipulation)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/variables.js");


var domManipulation = function () {
  "use strict";

  var updateCurrent = function updateCurrent(data) {
    _location(data);

    _CurrentTemp(data);

    _Description(data);
  };

  var _location = function _location(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.location.innerText = data.name + ", " + data.sys.country;
  };

  var _CurrentTemp = function _CurrentTemp(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerText = Math.round(data.main.temp);
  };

  var _Description = function _Description(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.description.innerText = data.weather[0].description;
  };

  return {
    updateCurrent: updateCurrent
  };
}();



/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "location": () => (/* binding */ location),
/* harmony export */   "temperature": () => (/* binding */ temperature)
/* harmony export */ });


var location = document.querySelector(".intro .location");
var temperature = document.querySelector(".temp-wrap .num");
var description = document.querySelector(".temp-wrap .desc");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/static/Heebo-Bold.ttf */ "./src/fonts/static/Heebo-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/static/Heebo-Regular.ttf */ "./src/fonts/static/Heebo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/static/Heebo-Light.ttf */ "./src/fonts/static/Heebo-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/static/Heebo-ExtraLight.ttf */ "./src/fonts/static/Heebo-ExtraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/static/Heebo-Thin.ttf */ "./src/fonts/static/Heebo-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\n}\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n}\n:root .deg-symbol {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n:root .deg-symbol .minus {\n  position: absolute;\n}\n:root .current {\n  text-align: center;\n}\n:root .current .location {\n  font-family: \"Heebo-Thin\";\n  font-size: 4.6rem;\n  letter-spacing: -0.15rem;\n  color: #333333;\n  margin-bottom: 0.4rem;\n}\n:root .current .date,\n:root .current .time,\n:root .current .desc-1 li,\n:root .current .desc-2 li span {\n  font-family: \"Heebo-Light\";\n  color: #333333;\n  font-size: 1.4rem;\n  letter-spacing: -0.03rem;\n}\n:root .current .temp {\n  font-family: \"Heebo-Bold\";\n  font-size: 8rem;\n  color: #333333;\n  line-height: 84%;\n}\n:root .current .desc,\n:root .current .forecast .day,\n:root .current .forecast li > div {\n  font-family: \"Heebo-ExtraLight\";\n  color: #333333;\n  font-size: 2.5rem;\n  letter-spacing: -0.06rem;\n  margin-bottom: 0.8rem;\n}\n:root .current .temp-img img {\n  height: auto;\n  width: auto;\n  max-width: 19.125rem;\n  max-height: 13.625rem;\n}\n\n#weather-app {\n  background-color: #f0f0f0;\n}\n#weather-app .weather-app-container {\n  width: 100%;\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(3, max-content);\n  padding: 1.857rem;\n  align-content: center;\n}\n#weather-app .weather-app-container .title-search {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 1.875rem;\n}\n#weather-app .weather-app-container .title-search .input-wrap {\n  align-self: center;\n  justify-self: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search .input-wrap input {\n  border: 0.143rem solid #a0a0a0;\n  border-radius: 2rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-weight: 900;\n}\n#weather-app .weather-app-container .title-search .input-wrap button {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #f0f0f0;\n  height: 3rem;\n  width: 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #333333;\n  cursor: pointer;\n}\n#weather-app .weather-app-container .title-search h1 {\n  align-self: center;\n  justify-self: left;\n  font-family: \"Heebo-Bold\";\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search h1 span {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 50%;\n  background-color: #fdef5d;\n  background-image: radial-gradient(at top right, #fdef5d, #ffa557);\n  margin-right: 0.25rem;\n}\n#weather-app .weather-app-container .current {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, max-content);\n}\n#weather-app .weather-app-container .current .intro {\n  grid-area: 1/1/2/5;\n  margin-bottom: 3.2rem;\n}\n#weather-app .weather-app-container .current .temp-wrap {\n  grid-area: 2/1/3/3;\n  margin-right: 1.25rem;\n  width: max-content;\n  align-self: start;\n  justify-self: end;\n}\n#weather-app .weather-app-container .current .temp-wrap .desc {\n  text-transform: capitalize;\n}\n#weather-app .weather-app-container .current .temp-img {\n  grid-area: 2/3/3/5;\n  margin-left: 1.25rem;\n  display: flex;\n  justify-content: flex-start;\n}\n#weather-app .weather-app-container .current .desc-1 {\n  grid-area: 3/1/4/5;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  grid-area: 4/1/5/5;\n}\n#weather-app .weather-app-container .current .desc-1,\n#weather-app .weather-app-container .current .desc-2 {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 1.875rem 0;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  gap: 6.563rem;\n}\n#weather-app .weather-app-container .forecast {\n  display: grid;\n  grid-template-columns: repeat(9, auto);\n  grid-area: 5/1/6/5;\n  margin-top: 1.875rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#weather-app .weather-app-container .forecast li {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: repeat(3, auto);\n}\n#weather-app .weather-app-container .forecast li > div {\n  display: flex;\n  justify-content: center;\n}\n#weather-app .weather-app-container .forecast li > div p:nth-child(2) {\n  color: #a0a0a0;\n}\n#weather-app .weather-app-container .forecast li img {\n  max-width: 7rem;\n}\n#weather-app .weather-app-container .forecast .separate {\n  font-size: 0;\n  height: 130px;\n  background: #fff;\n  width: 6px;\n  color: #ffffff;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n}\n#weather-app .progress-item {\n  display: flex;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  font-size: 0;\n  animation: 0.4s ease-out reverse;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 1.8rem;\n}\n#weather-app .progress-item::after {\n  content: attr(data-value);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10rem;\n  margin: 1rem;\n  border-radius: 50%;\n  background: #ffffff;\n  line-height: 1;\n  padding-top: 0.25rem;\n  font-size: 2.5rem;\n  text-align: center;\n  -webkit-box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n  letter-spacing: -0.06rem;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nbody * {\n  box-sizing: border-box;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n","@import \"./reset.scss\";\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(\"../fonts/static/Heebo-Bold.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(\"../fonts/static/Heebo-Regular.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(\"../fonts/static/Heebo-Light.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(\"../fonts/static/Heebo-ExtraLight.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(\"../fonts/static/Heebo-Thin.ttf\") format(\"woff\");\n}\n\n// Variables\n$black-color: #333333;\n$grey-color: #a0a0a0;\n$bg-color: #f0f0f0;\n$white-color: #ffffff;\n$yellow-color: #fdef5d;\n$orange-color: #ffa557;\n$loading-circle: 10rem;\n$-webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$-webkit-box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: $black-color;\n\n  // Title Main\n  @mixin main-title {\n    font-family: \"Heebo-Thin\";\n    font-size: 4.6rem;\n    letter-spacing: -0.15rem;\n    color: $black-color;\n  }\n\n  // Description Small\n  @mixin small-desc {\n    font-family: \"Heebo-Light\";\n    color: $black-color;\n    font-size: 1.4rem;\n    letter-spacing: -0.03rem;\n  }\n\n  // Description Mid\n  @mixin mid-desc {\n    font-family: \"Heebo-ExtraLight\";\n    color: $black-color;\n    font-size: 2.5rem;\n    letter-spacing: -0.06rem;\n  }\n\n  // Weather Title\n  @mixin temp-title {\n    font-family: \"Heebo-Bold\";\n    // font-size: 9rem;\n    font-size: 8rem;\n    color: $black-color;\n    line-height: 84%;\n  }\n\n  // Degree Symbol\n  .deg-symbol {\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    .minus {\n      position: absolute;\n    }\n  }\n\n  // Styling\n  .current {\n    text-align: center;\n\n    .location {\n      @include main-title;\n      margin-bottom: 0.4rem;\n    }\n    .date,\n    .time,\n    .desc-1 li,\n    .desc-2 li span {\n      @include small-desc;\n    }\n    .temp {\n      @include temp-title;\n    }\n    .desc,\n    .forecast .day,\n    .forecast li > div {\n      @include mid-desc;\n      margin-bottom: 0.8rem;\n    }\n    .temp-img img {\n      height: auto;\n      width: auto;\n      max-width: 19.125rem;\n      max-height: 13.625rem;\n    }\n  }\n}\n\n// Layout styling\n#weather-app {\n  background-color: $bg-color;\n\n  .weather-app-container {\n    width: 100%;\n    max-width: 1440px;\n    min-height: 100vh;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: repeat(3, max-content);\n    padding: 1.857rem;\n    align-content: center;\n\n    .title-search {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      margin-bottom: 1.875rem;\n\n      .input-wrap {\n        align-self: center;\n        justify-self: right;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        input {\n          border: 0.143rem solid $grey-color;\n          border-radius: 2rem;\n          padding: 0.4rem 1rem;\n          font-size: 1rem;\n          font-weight: 900;\n        }\n\n        button {\n          -webkit-transform: rotate(315deg);\n          -moz-transform: rotate(315deg);\n          -o-transform: rotate(315deg);\n          transform: rotate(315deg);\n          font-weight: bold;\n          font-size: 2.5rem;\n          border-radius: 50%;\n          border: none;\n          background-color: $bg-color;\n          height: 3rem;\n          width: 3rem;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          color: $black-color;\n          cursor: pointer;\n        }\n      }\n\n      h1 {\n        align-self: center;\n        justify-self: left;\n        font-family: \"Heebo-Bold\";\n        font-size: 2.5rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        span {\n          font-size: 0;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: red;\n          height: 4rem;\n          width: 4rem;\n          border-radius: 50%;\n          background-color: $yellow-color;\n          background-image: radial-gradient(at top right, $yellow-color, $orange-color);\n          margin-right: 0.25rem;\n        }\n      }\n    }\n\n    .current {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(5, max-content);\n\n      .intro {\n        grid-area: 1/1/2/5;\n        margin-bottom: 3.2rem;\n      }\n      .temp-wrap {\n        grid-area: 2/1/3/3;\n        margin-right: 1.25rem;\n        width: max-content;\n        align-self: start;\n        justify-self: end;\n\n        .desc {\n          text-transform: capitalize;\n        }\n      }\n      .temp-img {\n        grid-area: 2/3/3/5;\n        margin-left: 1.25rem;\n        display: flex;\n        justify-content: flex-start;\n      }\n      .desc-1 {\n        grid-area: 3/1/4/5;\n      }\n      .desc-2 {\n        grid-area: 4/1/5/5;\n      }\n\n      .desc-1,\n      .desc-2 {\n        display: grid;\n        grid-template-columns: repeat(3, max-content);\n        justify-content: center;\n        gap: 2.5rem;\n        margin: 1.875rem 0;\n      }\n      .desc-2 {\n        gap: 6.563rem;\n      }\n    }\n\n    .forecast {\n      display: grid;\n      grid-template-columns: repeat(9, auto);\n      grid-area: 5/1/6/5;\n      margin-top: 1.875rem;\n      justify-content: space-evenly;\n      align-items: center;\n\n      li {\n        display: grid;\n        justify-content: center;\n        align-items: center;\n        grid-template-rows: repeat(3, auto);\n\n        > div {\n          display: flex;\n          justify-content: center;\n\n          p:nth-child(2) {\n            color: $grey-color;\n          }\n        }\n        img {\n          max-width: 7rem;\n        }\n      }\n      .separate {\n        font-size: 0;\n        height: 130px;\n        background: #fff;\n        width: 6px;\n        color: $white-color;\n        -webkit-box-shadow: $-webkit-box-shadow;\n        box-shadow: $box-shadow;\n      }\n    }\n  }\n\n  // Loading Circle\n  .progress-item {\n    display: flex;\n    width: $loading-circle;\n    height: $loading-circle;\n    border-radius: 50%;\n    font-size: 0;\n    animation: 0.4s ease-out reverse;\n    -webkit-box-shadow: $-webkit-box-shadow;\n    box-shadow: $box-shadow;\n    margin-bottom: 1.8rem;\n  }\n\n  .progress-item::after {\n    content: attr(data-value);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: $loading-circle;\n    margin: 1rem;\n    border-radius: 50%;\n    background: $white-color;\n    line-height: 1;\n    padding-top: 0.25rem;\n    font-size: 2.5rem;\n    text-align: center;\n    -webkit-box-shadow: $-webkit-box-shadow-inset;\n    box-shadow: $box-shadow-inset;\n    font-family: \"Heebo-Regular\";\n    color: $black-color;\n    letter-spacing: -0.06rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/static/Heebo-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/static/Heebo-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7c705793c3c00f11242.ttf";

/***/ }),

/***/ "./src/fonts/static/Heebo-ExtraLight.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/static/Heebo-ExtraLight.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "130a3a54db7594dc647d.ttf";

/***/ }),

/***/ "./src/fonts/static/Heebo-Light.ttf":
/*!******************************************!*\
  !*** ./src/fonts/static/Heebo-Light.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81b8083bf3a45d2b5559.ttf";

/***/ }),

/***/ "./src/fonts/static/Heebo-Regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/static/Heebo-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dbbe613d25d93d40f37.ttf";

/***/ }),

/***/ "./src/fonts/static/Heebo-Thin.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/static/Heebo-Thin.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db17d96c220e8de661f4.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


 // import cityData from "./data/city.list.json";

var weatherApp = function () {
  // Store values
  var values = {
    loc: null,
    limit: "5",
    units: "&units=metric",
    apiKey: "e2f88a64edb26908f2c8a836e0f87c19",
    coordUrl: "https://api.openweathermap.org/geo/1.0/direct?q=",
    coord: null,
    todayUrl: "https://api.openweathermap.org/data/2.5/weather?lat=",
    today: null,
    foreUrl: "https://api.openweathermap.org/data/2.5/forecast?lat=",
    fore: null
  }; // Input element to get client location

  var inputElem = function () {
    var input = document.querySelector(".input-wrap input");
    var button = document.querySelector(".input-wrap button"); // Validate value before making API call

    button.addEventListener("click", function () {
      // if (input.validity.valid) {
      values.loc = input.value;
      getData(values.loc); // } else {
      //   console.log("invalid");
      //   console.log(input.validity);
      // }
    });
  }(); // Fetch weather Data


  var getData = function getData(val) {
    requestData(values.coordUrl + val + "&limit=" + values.limit + "&appid=" + values.apiKey).then(function (coord) {
      console.log(coord);
      values.coord = coord[0]; // Current fetch

      requestData(values.todayUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then(function (current) {
        console.log(current);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation.updateCurrent(current);
      }); // Forecast fetch
      // requestData(values.foreUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((forecast) => {
      //   console.log("forecast");
      //   console.log(forecast);
      // });
    });
  }; // Fetch request function


  function requestData(_x) {
    return _requestData.apply(this, arguments);
  } // Testing
  // document.querySelector(".current .img img").setAttribute("src", testImg);


  function _requestData() {
    _requestData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url, {
                mode: "cors"
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0); // TypeError: failed to fetch

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _requestData.apply(this, arguments);
  }
}(); // Loading circle


var items = document.querySelectorAll(".progress-item");
var counters = Array(items.length);
var intervals = Array(items.length);
counters.fill(0);
items.forEach(function (number, index) {
  intervals[index] = setInterval(function () {
    if (counters[index] == parseInt(number.dataset.num)) {
      clearInterval(intervals[index]);
    } else {
      counters[index] += 1;
      number.style.background = "conic-gradient(#97DAF5, #31B8DF calc(" + counters[index] + "%),#FFFFFF 0deg)";
      number.setAttribute("data-value", counters[index] + "%");
      number.innerHTML = counters[index] + "%";
    }
  }, 30);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxhQUFhLGNBQWMsWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxjQUFjLFlBQVksV0FBVyxZQUFZLCt1QkFBK3VCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJB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Q0FBQ1QsU0FBUyxDQUFDSSxLQUFELENBQVYsQ0FBYjtJQUNELENBRkQsTUFFTztNQUNMUCxRQUFRLENBQUNPLEtBQUQsQ0FBUixJQUFtQixDQUFuQjtNQUNBRCxNQUFNLENBQUNPLEtBQVAsQ0FBYUMsVUFBYixHQUEwQiwwQ0FBMENkLFFBQVEsQ0FBQ08sS0FBRCxDQUFsRCxHQUE0RCxrQkFBdEY7TUFDQUQsTUFBTSxDQUFDUyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDZixRQUFRLENBQUNPLEtBQUQsQ0FBUixHQUFrQixHQUFwRDtNQUNBRCxNQUFNLENBQUNVLFNBQVAsR0FBbUJoQixRQUFRLENBQUNPLEtBQUQsQ0FBUixHQUFrQixHQUFyQztJQUNEO0VBQ0YsQ0FUNkIsRUFTM0IsRUFUMkIsQ0FBOUI7QUFVRCxDQVhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3M/NzQ3ZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9jYXRpb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvbiB9IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgX2xvY2F0aW9uKGRhdGEpO1xuICAgIF9DdXJyZW50VGVtcChkYXRhKTtcbiAgICBfRGVzY3JpcHRpb24oZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgX2xvY2F0aW9uID0gKGRhdGEpID0+IHtcbiAgICBsb2NhdGlvbi5pbm5lclRleHQgPSBkYXRhLm5hbWUgKyBcIiwgXCIgKyBkYXRhLnN5cy5jb3VudHJ5O1xuICB9O1xuICBjb25zdCBfQ3VycmVudFRlbXAgPSAoZGF0YSkgPT4ge1xuICAgIHRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xuICB9O1xuICBjb25zdCBfRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4ge1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50IH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21NYW5pcHVsYXRpb24gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm8gLmxvY2F0aW9uXCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtd3JhcCAubnVtXCIpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtd3JhcCAuZGVzY1wiKTtcblxuZXhwb3J0IHsgbG9jYXRpb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvbiB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCAubWludXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG46cm9vdCAuY3VycmVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbjpyb290IC5jdXJyZW50IC5sb2NhdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgZm9udC1zaXplOiA0LjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmRhdGUsXFxuOnJvb3QgLmN1cnJlbnQgLnRpbWUsXFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MtMSBsaSxcXG46cm9vdCAuY3VycmVudCAuZGVzYy0yIGxpIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzcmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAudGVtcCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBsaW5lLWhlaWdodDogODQlO1xcbn1cXG46cm9vdCAuY3VycmVudCAuZGVzYyxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgLmRheSxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC50ZW1wLWltZyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDE5LjEyNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG59XFxuXFxuI3dlYXRoZXItYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gIHBhZGRpbmc6IDEuODU3cmVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCBpbnB1dCB7XFxuICBib3JkZXI6IDAuMTQzcmVtIHNvbGlkICNhMGEwYTA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggaDEgc3BhbiB7XFxuICBmb250LXNpemU6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWY1ZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AgcmlnaHQsICNmZGVmNWQsICNmZmE1NTcpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmludHJvIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtd3JhcCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC13cmFwIC5kZXNjIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC1pbWcge1xcbiAgZ3JpZC1hcmVhOiAyLzMvMy81O1xcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0xIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvNTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBncmlkLWFyZWE6IDQvMS81LzU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTEsXFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIuNXJlbTtcXG4gIG1hcmdpbjogMS44NzVyZW0gMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBnYXA6IDYuNTYzcmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIGF1dG8pO1xcbiAgZ3JpZC1hcmVhOiA1LzEvNi81O1xcbiAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiBwOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpIGltZyB7XFxuICBtYXgtd2lkdGg6IDdyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCAuc2VwYXJhdGUge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGFuaW1hdGlvbjogMC40cyBlYXNlLW91dCByZXZlcnNlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUFBO0FBQ0E7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtBQ0dGOztBRERBOztFQUVFLGdCQUFBO0FDSUY7O0FERkE7O0VBRUUsWUFBQTtBQ0tGOztBREhBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTs7OztFQUlFLGFBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDU0Y7O0FBcEpBO0VBQ0UseUJBQUE7RUFDQSwyREFBQTtBQXVKRjtBQXJKQTtFQUNFLDRCQUFBO0VBQ0EsMkRBQUE7QUF1SkY7QUFySkE7RUFDRSwwQkFBQTtFQUNBLDJE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TTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FyUE07RUFzUE4sbUVBbFBhO0VBbVBiLDJEQWxQSztBQW9WYjtBQTVGRTtFQUNFLGFBQUE7RUFDQSxZQTVQYTtFQTZQYixhQTdQYTtFQThQYixrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG1FQWhRaUI7RUFpUWpCLDJEQWhRUztFQWlRVCxxQkFBQTtBQThGSjtBQTNGRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQTNRYTtFQTRRYixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFqUlU7RUFrUlYsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlFQWhSdUI7RUFpUnZCLGlFQWhSZTtFQWlSZiw0QkFBQTtFQUNBLGNBNVJVO0VBNlJWLHdCQUFBO0FBNkZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJlc2V0IENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbmJvZHkgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cIixcIkBpbXBvcnQgXFxcIi4vcmVzZXQuc2Nzc1xcXCI7XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVJlZ3VsYXIudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUV4dHJhTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tVGhpbi50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuXFxuLy8gVmFyaWFibGVzXFxuJGJsYWNrLWNvbG9yOiAjMzMzMzMzO1xcbiRncmV5LWNvbG9yOiAjYTBhMGEwO1xcbiRiZy1jb2xvcjogI2YwZjBmMDtcXG4kd2hpdGUtY29sb3I6ICNmZmZmZmY7XFxuJHllbGxvdy1jb2xvcjogI2ZkZWY1ZDtcXG4kb3JhbmdlLWNvbG9yOiAjZmZhNTU3O1xcbiRsb2FkaW5nLWNpcmNsZTogMTByZW07XFxuJC13ZWJraXQtYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiQtd2Via2l0LWJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiRib3gtc2hhZG93LWluc2V0OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgY29sb3I6ICRibGFjay1jb2xvcjtcXG5cXG4gIC8vIFRpdGxlIE1haW5cXG4gIEBtaXhpbiBtYWluLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gICAgZm9udC1zaXplOiA0LjZyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNXJlbTtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gIH1cXG5cXG4gIC8vIERlc2NyaXB0aW9uIFNtYWxsXFxuICBAbWl4aW4gc21hbGwtZGVzYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzcmVtO1xcbiAgfVxcblxcbiAgLy8gRGVzY3JpcHRpb24gTWlkXFxuICBAbWl4aW4gbWlkLWRlc2Mge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbiAgfVxcblxcbiAgLy8gV2VhdGhlciBUaXRsZVxcbiAgQG1peGluIHRlbXAtdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgICAvLyBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgbGluZS1oZWlnaHQ6IDg0JTtcXG4gIH1cXG5cXG4gIC8vIERlZ3JlZSBTeW1ib2xcXG4gIC5kZWctc3ltYm9sIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC5taW51cyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBTdHlsaW5nXFxuICAuY3VycmVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgLmxvY2F0aW9uIHtcXG4gICAgICBAaW5jbHVkZSBtYWluLXRpdGxlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG4gICAgfVxcbiAgICAuZGF0ZSxcXG4gICAgLnRpbWUsXFxuICAgIC5kZXNjLTEgbGksXFxuICAgIC5kZXNjLTIgbGkgc3BhbiB7XFxuICAgICAgQGluY2x1ZGUgc21hbGwtZGVzYztcXG4gICAgfVxcbiAgICAudGVtcCB7XFxuICAgICAgQGluY2x1ZGUgdGVtcC10aXRsZTtcXG4gICAgfVxcbiAgICAuZGVzYyxcXG4gICAgLmZvcmVjYXN0IC5kYXksXFxuICAgIC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICAgICAgQGluY2x1ZGUgbWlkLWRlc2M7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbiAgICB9XFxuICAgIC50ZW1wLWltZyBpbWcge1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtYXgtd2lkdGg6IDE5LjEyNXJlbTtcXG4gICAgICBtYXgtaGVpZ2h0OiAxMy42MjVyZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gTGF5b3V0IHN0eWxpbmdcXG4jd2VhdGhlci1hcHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcblxcbiAgLndlYXRoZXItYXBwLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICAgIHBhZGRpbmc6IDEuODU3cmVtO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIC50aXRsZS1zZWFyY2gge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xcblxcbiAgICAgIC5pbnB1dC13cmFwIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICBib3JkZXI6IDAuMTQzcmVtIHNvbGlkICRncmV5LWNvbG9yO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgICAgICAgaGVpZ2h0OiAzcmVtO1xcbiAgICAgICAgICB3aWR0aDogM3JlbTtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAkeWVsbG93LWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuY3VycmVudCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcXG5cXG4gICAgICAuaW50cm8ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzEvMi81O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbiAgICAgIH1cXG4gICAgICAudGVtcC13cmFwIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8xLzMvMztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuXFxuICAgICAgICAuZGVzYyB7XFxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAudGVtcC1pbWcge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzMvMy81O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0xIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMy8xLzQvNTtcXG4gICAgICB9XFxuICAgICAgLmRlc2MtMiB7XFxuICAgICAgICBncmlkLWFyZWE6IDQvMS81LzU7XFxuICAgICAgfVxcblxcbiAgICAgIC5kZXNjLTEsXFxuICAgICAgLmRlc2MtMiB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDIuNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMS44NzVyZW0gMDtcXG4gICAgICB9XFxuICAgICAgLmRlc2MtMiB7XFxuICAgICAgICBnYXA6IDYuNTYzcmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm9yZWNhc3Qge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgYXV0byk7XFxuICAgICAgZ3JpZC1hcmVhOiA1LzEvNi81O1xcbiAgICAgIG1hcmdpbi10b3A6IDEuODc1cmVtO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgbGkge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcblxcbiAgICAgICAgPiBkaXYge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgcDpudGgtY2hpbGQoMikge1xcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS1jb2xvcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgbWF4LXdpZHRoOiA3cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuc2VwYXJhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gTG9hZGluZyBDaXJjbGVcXG4gIC5wcm9ncmVzcy1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgaGVpZ2h0OiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBhbmltYXRpb246IDAuNHMgZWFzZS1vdXQgcmV2ZXJzZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgfVxcblxcbiAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93LWluc2V0O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1pbnNldDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9IGZyb20gXCIuL2RvbS5qc1wiO1xuLy8gaW1wb3J0IGNpdHlEYXRhIGZyb20gXCIuL2RhdGEvY2l0eS5saXN0Lmpzb25cIjtcblxuY29uc3Qgd2VhdGhlckFwcCA9ICgoKSA9PiB7XG4gIC8vIFN0b3JlIHZhbHVlc1xuICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgbG9jOiBudWxsLFxuICAgIGxpbWl0OiBcIjVcIixcbiAgICB1bml0czogXCImdW5pdHM9bWV0cmljXCIsXG4gICAgYXBpS2V5OiBcImUyZjg4YTY0ZWRiMjY5MDhmMmM4YTgzNmUwZjg3YzE5XCIsXG4gICAgY29vcmRVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9XCIsXG4gICAgY29vcmQ6IG51bGwsXG4gICAgdG9kYXlVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PVwiLFxuICAgIHRvZGF5OiBudWxsLFxuICAgIGZvcmVVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD1cIixcbiAgICBmb3JlOiBudWxsLFxuICB9O1xuXG4gIC8vIElucHV0IGVsZW1lbnQgdG8gZ2V0IGNsaWVudCBsb2NhdGlvblxuICBjb25zdCBpbnB1dEVsZW0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC13cmFwIGlucHV0XCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtd3JhcCBidXR0b25cIik7XG4gICAgLy8gVmFsaWRhdGUgdmFsdWUgYmVmb3JlIG1ha2luZyBBUEkgY2FsbFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB2YWx1ZXMubG9jID0gaW5wdXQudmFsdWU7XG4gICAgICBnZXREYXRhKHZhbHVlcy5sb2MpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJpbnZhbGlkXCIpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhpbnB1dC52YWxpZGl0eSk7XG4gICAgICAvLyB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBEYXRhXG4gIGNvbnN0IGdldERhdGEgPSAodmFsKSA9PiB7XG4gICAgcmVxdWVzdERhdGEodmFsdWVzLmNvb3JkVXJsICsgdmFsICsgXCImbGltaXQ9XCIgKyB2YWx1ZXMubGltaXQgKyBcIiZhcHBpZD1cIiArIHZhbHVlcy5hcGlLZXkpLnRoZW4oKGNvb3JkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgICB2YWx1ZXMuY29vcmQgPSBjb29yZFswXTtcbiAgICAgIC8vIEN1cnJlbnQgZmV0Y2hcbiAgICAgIHJlcXVlc3REYXRhKHZhbHVlcy50b2RheVVybCArIGNvb3JkWzBdLmxhdCArIFwiJmxvbj1cIiArIGNvb3JkWzBdLmxvbiArIFwiJmFwcGlkPVwiICsgdmFsdWVzLmFwaUtleSArIHZhbHVlcy51bml0cykudGhlbigoY3VycmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUN1cnJlbnQoY3VycmVudCk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZvcmVjYXN0IGZldGNoXG4gICAgICAvLyByZXF1ZXN0RGF0YSh2YWx1ZXMuZm9yZVVybCArIGNvb3JkWzBdLmxhdCArIFwiJmxvbj1cIiArIGNvb3JkWzBdLmxvbiArIFwiJmFwcGlkPVwiICsgdmFsdWVzLmFwaUtleSArIHZhbHVlcy51bml0cykudGhlbigoZm9yZWNhc3QpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJmb3JlY2FzdFwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRmV0Y2ggcmVxdWVzdCBmdW5jdGlvblxuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0RGF0YSh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpOyAvLyBUeXBlRXJyb3I6IGZhaWxlZCB0byBmZXRjaFxuICAgIH1cbiAgfVxuXG4gIC8vIFRlc3RpbmdcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50IC5pbWcgaW1nXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0ZXN0SW1nKTtcbn0pKCk7XG5cbi8vIExvYWRpbmcgY2lyY2xlXG5cbmxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtaXRlbVwiKTtcbmNvbnN0IGNvdW50ZXJzID0gQXJyYXkoaXRlbXMubGVuZ3RoKTtcbmNvbnN0IGludGVydmFscyA9IEFycmF5KGl0ZW1zLmxlbmd0aCk7XG5jb3VudGVycy5maWxsKDApO1xuaXRlbXMuZm9yRWFjaCgobnVtYmVyLCBpbmRleCkgPT4ge1xuICBpbnRlcnZhbHNbaW5kZXhdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChjb3VudGVyc1tpbmRleF0gPT0gcGFyc2VJbnQobnVtYmVyLmRhdGFzZXQubnVtKSkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbHNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnRlcnNbaW5kZXhdICs9IDE7XG4gICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoIzk3REFGNSwgIzMxQjhERiBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICBudW1iZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBjb3VudGVyc1tpbmRleF0gKyBcIiVcIik7XG4gICAgICBudW1iZXIuaW5uZXJIVE1MID0gY291bnRlcnNbaW5kZXhdICsgXCIlXCI7XG4gICAgfVxuICB9LCAzMCk7XG59KTtcbiJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsInRlbXBlcmF0dXJlIiwiZGVzY3JpcHRpb24iLCJkb21NYW5pcHVsYXRpb24iLCJ1cGRhdGVDdXJyZW50IiwiZGF0YSIsIl9sb2NhdGlvbiIsIl9DdXJyZW50VGVtcCIsIl9EZXNjcmlwdGlvbiIsImlubmVyVGV4dCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwiTWF0aCIsInJvdW5kIiwibWFpbiIsInRlbXAiLCJ3ZWF0aGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2VhdGhlckFwcCIsInZhbHVlcyIsImxvYyIsImxpbWl0IiwidW5pdHMiLCJhcGlLZXkiLCJjb29yZFVybCIsImNvb3JkIiwidG9kYXlVcmwiLCJ0b2RheSIsImZvcmVVcmwiLCJmb3JlIiwiaW5wdXRFbGVtIiwiaW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJnZXREYXRhIiwidmFsIiwicmVxdWVzdERhdGEiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImxhdCIsImxvbiIsImN1cnJlbnQiLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJhbGVydCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvdW50ZXJzIiwiQXJyYXkiLCJsZW5ndGgiLCJpbnRlcnZhbHMiLCJmaWxsIiwiZm9yRWFjaCIsIm51bWJlciIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJjbGVhckludGVydmFsIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==
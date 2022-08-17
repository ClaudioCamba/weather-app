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
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var domManipulation = function () {
  "use strict";

  var updateCurrent = function updateCurrent(data) {
    _location(data);

    _CurrentTemp(data);

    _Description(data);

    _minTemp(data);

    _maxTemp(data);

    _feelsLike(data);

    _loading(data);
  };

  var updateForecast = function updateForecast(data) {
    var organizedData = _splitDataByDays(data);

    var cleanData = _removeToday(organizedData);

    _numDays(cleanData);

    _forecast(cleanData);
  }; // DOM functions ======================================================================================


  var _location = function _location(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.location.innerText = data.name + ", " + data.sys.country;
  };

  var _CurrentTemp = function _CurrentTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerHTML = formatTempCel(Math.round(data.main.temp));
  };

  var _Description = function _Description(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.description.innerText = data.weather[0].description;
  };

  var _minTemp = function _minTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.minTemp.innerHTML = "Min Temp: " + formatTempCel(Math.round(data.main.temp_min));
  };

  var _maxTemp = function _maxTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.maxTemp.innerHTML = "Max Temp: " + formatTempCel(Math.round(data.main.temp_max));
  };

  var _feelsLike = function _feelsLike(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.feelsLike.innerHTML = "Feels like: " + formatTempCel(Math.round(data.main.feels_like));
  };

  var _loading = function _loading(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadClouds.setAttribute("data-num", Math.round(data.clouds.all));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadHumid.setAttribute("data-num", Math.round(data.main.humidity));

    _loadingCircle();
  };

  var _numDays = function _numDays(data) {
    return data.length === 4 ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.foreWrap.className = "forecast four-days" : _variables_js__WEBPACK_IMPORTED_MODULE_0__.foreWrap.className = "forecast";
  }; // Helper functions ======================================================================================
  // Format Celsius


  var formatTempCel = function formatTempCel(temp) {
    return temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';
  };

  var formatTemp = function formatTemp(temp) {
    return temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>';
  }; // Animate loading circle


  var _loadingCircle = function _loadingCircle() {
    var counters = Array(_variables_js__WEBPACK_IMPORTED_MODULE_0__.loading.length);
    var intervals = Array(_variables_js__WEBPACK_IMPORTED_MODULE_0__.loading.length);
    counters.fill(0);
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loading.forEach(function (number, index) {
      intervals[index] = setInterval(function () {
        if (counters[index] == parseInt(number.dataset.num)) {
          clearInterval(intervals[index]);
        } else {
          counters[index] += 1;

          if (number.classList.contains("humid")) {
            number.style.background = "conic-gradient(#fdef5d, #ffa557 calc(" + counters[index] + "%),#FFFFFF 0deg)";
          } else if (number.classList.contains("clouds")) {
            number.style.background = "conic-gradient(#97DAF5, #31B8DF calc(" + counters[index] + "%),#FFFFFF 0deg)";
          } else if (number.classList.contains("wind")) {
            number.style.background = "conic-gradient(#FFFFFF 0deg), #97DAF5, #31B8DF calc(" + counters[index] + "%),#FFFFFF 0deg)";
          }

          number.setAttribute("data-value", counters[index] + "%");
          number.innerHTML = counters[index] + "%";
        }
      }, 15);
    });
  };

  var _forecast = function _forecast(data) {
    console.log(data);

    for (var x = 0; x < data.length; x++) {
      var max = null;
      var min = null; // Date - Day

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".day").innerText = data[x][0].dt_txt.split(" ")[0]; // Min / Max

      var _iterator = _createForOfIteratorHelper(data[x]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var fore = _step.value;

          if (max === null && min === null) {
            max = fore.main.temp_max;
            min = fore.main.temp_min;
          } else {
            fore.main.temp_max > max ? max = fore.main.temp_max : max = max;
            fore.main.temp_min < min ? min = fore.main.temp_min : min = min;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".min").innerHTML = "/" + formatTemp(Math.round(min));
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".max").innerHTML = formatTemp(Math.round(max));
    } // Image

  };

  var _todayDate = function _todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

    var yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  var _removeToday = function _removeToday(data) {
    var remove = data;

    for (var o = 0; o < remove.length; o++) {
      if (data[o][0].dt_txt.indexOf(_todayDate()) > -1) {
        remove.splice(o, 1);
      }
    }

    return remove;
  };

  var _splitDataByDays = function _splitDataByDays(data) {
    var forecastDays = [];
    var forecast = [];

    for (var i = 0; i < data.list.length; i++) {
      if (forecast.length === 0) {
        forecast.push(data.list[i]);
      } else {
        if (forecast[0].dt_txt.indexOf(data.list[i].dt_txt.split(" ")[0]) > -1) {
          forecast.push(data.list[i]);
        } else {
          forecastDays.push(forecast);
          forecast = [];
          forecast.push(data.list[i]);
        }

        if (data.list.length - 1 === i) {
          forecastDays.push(forecast);
        }
      }
    }

    return forecastDays;
  };

  return {
    updateCurrent: updateCurrent,
    updateForecast: updateForecast
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
/* harmony export */   "feelsLike": () => (/* binding */ feelsLike),
/* harmony export */   "foreWrap": () => (/* binding */ foreWrap),
/* harmony export */   "forecasts": () => (/* binding */ forecasts),
/* harmony export */   "loadClouds": () => (/* binding */ loadClouds),
/* harmony export */   "loadHumid": () => (/* binding */ loadHumid),
/* harmony export */   "loadWind": () => (/* binding */ loadWind),
/* harmony export */   "loading": () => (/* binding */ loading),
/* harmony export */   "location": () => (/* binding */ location),
/* harmony export */   "maxTemp": () => (/* binding */ maxTemp),
/* harmony export */   "minTemp": () => (/* binding */ minTemp),
/* harmony export */   "temperature": () => (/* binding */ temperature)
/* harmony export */ });


var location = document.querySelector(".intro .location");
var temperature = document.querySelector(".temp-wrap .temp");
var description = document.querySelector(".temp-wrap .desc");
var minTemp = document.querySelector(".desc-1 .min-temp");
var maxTemp = document.querySelector(".desc-1 .max-temp");
var feelsLike = document.querySelector(".desc-1 .feels-like");
var loadClouds = document.querySelector(".desc-2 .clouds");
var loadHumid = document.querySelector(".desc-2 .humid");
var loadWind = document.querySelector(".desc-2 .wind");
var forecasts = document.querySelectorAll(".forecast .fore");
var foreWrap = document.querySelector(".forecast");
var loading = document.querySelectorAll(".progress-item");


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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\n}\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n}\n:root .deg-symbol {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n:root .deg-symbol .minus {\n  position: absolute;\n}\n:root .current {\n  text-align: center;\n}\n:root .current .location {\n  font-family: \"Heebo-Thin\";\n  font-size: 4.6rem;\n  letter-spacing: -0.15rem;\n  color: #333333;\n  margin-bottom: 0.4rem;\n}\n:root .current .date,\n:root .current .time,\n:root .current .desc-1 li,\n:root .current .desc-2 li span {\n  font-family: \"Heebo-Light\";\n  color: #333333;\n  font-size: 1.4rem;\n  letter-spacing: -0.03rem;\n}\n:root .current .temp {\n  font-family: \"Heebo-Bold\";\n  font-size: 8rem;\n  color: #333333;\n  line-height: 84%;\n}\n:root .current .desc,\n:root .current .forecast .day,\n:root .current .forecast li > div {\n  font-family: \"Heebo-ExtraLight\";\n  color: #333333;\n  font-size: 2.5rem;\n  letter-spacing: -0.06rem;\n  margin-bottom: 0.8rem;\n}\n:root .current .temp-img img {\n  height: auto;\n  width: auto;\n  max-width: 19.125rem;\n  max-height: 13.625rem;\n}\n\n#weather-app {\n  background-color: #f0f0f0;\n}\n#weather-app .weather-app-container {\n  width: 100%;\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(3, max-content);\n  padding: 1.857rem;\n  align-content: center;\n}\n#weather-app .weather-app-container .title-search {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 1.875rem;\n}\n#weather-app .weather-app-container .title-search .input-wrap {\n  align-self: center;\n  justify-self: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search .input-wrap input {\n  border: 0.143rem solid #a0a0a0;\n  border-radius: 2rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-weight: 900;\n}\n#weather-app .weather-app-container .title-search .input-wrap button {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #f0f0f0;\n  height: 3rem;\n  width: 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #333333;\n  cursor: pointer;\n}\n#weather-app .weather-app-container .title-search h1 {\n  align-self: center;\n  justify-self: left;\n  font-family: \"Heebo-Bold\";\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: underline;\n}\n#weather-app .weather-app-container .title-search h1 .logo-sun {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 50%;\n  background-color: #fdef5d;\n  background-image: radial-gradient(at top right, #fdef5d, #ffa557);\n  margin-right: 0.25rem;\n  border: 5px solid #333333;\n}\n#weather-app .weather-app-container .current {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, max-content);\n}\n#weather-app .weather-app-container .current .intro {\n  grid-area: 1/1/2/5;\n  margin-bottom: 3.2rem;\n}\n#weather-app .weather-app-container .current .temp-wrap {\n  grid-area: 2/1/3/3;\n  margin-right: 1.25rem;\n  width: max-content;\n  align-self: start;\n  justify-self: end;\n}\n#weather-app .weather-app-container .current .temp-wrap .desc {\n  text-transform: capitalize;\n}\n#weather-app .weather-app-container .current .temp-img {\n  grid-area: 2/3/3/5;\n  margin-left: 1.25rem;\n  display: flex;\n  justify-content: flex-start;\n}\n#weather-app .weather-app-container .current .desc-1 {\n  grid-area: 3/1/4/5;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  grid-area: 4/1/5/5;\n}\n#weather-app .weather-app-container .current .desc-1,\n#weather-app .weather-app-container .current .desc-2 {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 1.875rem 0;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  gap: 6.563rem;\n}\n#weather-app .weather-app-container .forecast {\n  display: flex;\n  grid-area: 5/1/6/5;\n  margin-top: 1.875rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#weather-app .weather-app-container .forecast li {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: repeat(3, auto);\n}\n#weather-app .weather-app-container .forecast li > div {\n  display: flex;\n  justify-content: center;\n}\n#weather-app .weather-app-container .forecast li > div p:nth-child(2) {\n  color: #a0a0a0;\n}\n#weather-app .weather-app-container .forecast li img {\n  max-width: 7rem;\n  margin: 0 auto;\n}\n#weather-app .weather-app-container .forecast .separate {\n  font-size: 0;\n  height: 130px;\n  background: #fff;\n  width: 6px;\n  color: #ffffff;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n}\n#weather-app .weather-app-container .four-days.forecast .fore:nth-of-type(9),\n#weather-app .weather-app-container .four-days.forecast .separate:nth-of-type(8) {\n  display: none;\n}\n#weather-app .progress-item {\n  display: flex;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  font-size: 0;\n  animation: 0.4s ease-out reverse;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 1.8rem;\n}\n#weather-app .progress-item::after {\n  content: attr(data-value);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10rem;\n  margin: 1rem;\n  border-radius: 50%;\n  background: #ffffff;\n  line-height: 1;\n  padding-top: 0.25rem;\n  font-size: 2.5rem;\n  text-align: center;\n  -webkit-box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n  letter-spacing: -0.06rem;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nbody * {\n  box-sizing: border-box;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n","@import \"./reset.scss\";\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(\"../fonts/static/Heebo-Bold.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(\"../fonts/static/Heebo-Regular.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(\"../fonts/static/Heebo-Light.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(\"../fonts/static/Heebo-ExtraLight.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(\"../fonts/static/Heebo-Thin.ttf\") format(\"woff\");\n}\n\n// Variables\n$black-color: #333333;\n$grey-color: #a0a0a0;\n$bg-color: #f0f0f0;\n$white-color: #ffffff;\n$yellow-color: #fdef5d;\n$orange-color: #ffa557;\n$loading-circle: 10rem;\n$-webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$-webkit-box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: $black-color;\n\n  // Title Main\n  @mixin main-title {\n    font-family: \"Heebo-Thin\";\n    font-size: 4.6rem;\n    letter-spacing: -0.15rem;\n    color: $black-color;\n  }\n\n  // Description Small\n  @mixin small-desc {\n    font-family: \"Heebo-Light\";\n    color: $black-color;\n    font-size: 1.4rem;\n    letter-spacing: -0.03rem;\n  }\n\n  // Description Mid\n  @mixin mid-desc {\n    font-family: \"Heebo-ExtraLight\";\n    color: $black-color;\n    font-size: 2.5rem;\n    letter-spacing: -0.06rem;\n  }\n\n  // Weather Title\n  @mixin temp-title {\n    font-family: \"Heebo-Bold\";\n    // font-size: 9rem;\n    font-size: 8rem;\n    color: $black-color;\n    line-height: 84%;\n  }\n\n  // Degree Symbol\n  .deg-symbol {\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    .minus {\n      position: absolute;\n    }\n  }\n\n  // Styling\n  .current {\n    text-align: center;\n\n    .location {\n      @include main-title;\n      margin-bottom: 0.4rem;\n    }\n    .date,\n    .time,\n    .desc-1 li,\n    .desc-2 li span {\n      @include small-desc;\n    }\n    .temp {\n      @include temp-title;\n    }\n    .desc,\n    .forecast .day,\n    .forecast li > div {\n      @include mid-desc;\n      margin-bottom: 0.8rem;\n    }\n    .temp-img img {\n      height: auto;\n      width: auto;\n      max-width: 19.125rem;\n      max-height: 13.625rem;\n    }\n  }\n}\n\n// Layout styling\n#weather-app {\n  background-color: $bg-color;\n\n  .weather-app-container {\n    width: 100%;\n    max-width: 1440px;\n    min-height: 100vh;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: repeat(3, max-content);\n    padding: 1.857rem;\n    align-content: center;\n\n    .title-search {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      margin-bottom: 1.875rem;\n\n      .input-wrap {\n        align-self: center;\n        justify-self: right;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        input {\n          border: 0.143rem solid $grey-color;\n          border-radius: 2rem;\n          padding: 0.4rem 1rem;\n          font-size: 1rem;\n          font-weight: 900;\n        }\n\n        button {\n          -webkit-transform: rotate(315deg);\n          -moz-transform: rotate(315deg);\n          -o-transform: rotate(315deg);\n          transform: rotate(315deg);\n          font-weight: bold;\n          font-size: 2.5rem;\n          border-radius: 50%;\n          border: none;\n          background-color: $bg-color;\n          height: 3rem;\n          width: 3rem;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          color: $black-color;\n          cursor: pointer;\n        }\n      }\n\n      h1 {\n        align-self: center;\n        justify-self: left;\n        font-family: \"Heebo-Bold\";\n        font-size: 2.5rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-decoration: underline;\n\n        .logo-sun {\n          font-size: 0;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: red;\n          height: 4rem;\n          width: 4rem;\n          border-radius: 50%;\n          background-color: $yellow-color;\n          background-image: radial-gradient(at top right, $yellow-color, $orange-color);\n          margin-right: 0.25rem;\n          border: 5px solid $black-color;\n        }\n      }\n    }\n\n    .current {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(5, max-content);\n\n      .intro {\n        grid-area: 1/1/2/5;\n        margin-bottom: 3.2rem;\n      }\n      .temp-wrap {\n        grid-area: 2/1/3/3;\n        margin-right: 1.25rem;\n        width: max-content;\n        align-self: start;\n        justify-self: end;\n\n        .desc {\n          text-transform: capitalize;\n        }\n      }\n      .temp-img {\n        grid-area: 2/3/3/5;\n        margin-left: 1.25rem;\n        display: flex;\n        justify-content: flex-start;\n      }\n      .desc-1 {\n        grid-area: 3/1/4/5;\n      }\n      .desc-2 {\n        grid-area: 4/1/5/5;\n      }\n\n      .desc-1,\n      .desc-2 {\n        display: grid;\n        grid-template-columns: repeat(3, max-content);\n        justify-content: center;\n        gap: 2.5rem;\n        margin: 1.875rem 0;\n      }\n      .desc-2 {\n        gap: 6.563rem;\n      }\n    }\n\n    .forecast {\n      display: flex;\n      grid-area: 5/1/6/5;\n      margin-top: 1.875rem;\n      justify-content: space-evenly;\n      align-items: center;\n\n      li {\n        display: grid;\n        justify-content: center;\n        align-items: center;\n        grid-template-rows: repeat(3, auto);\n\n        > div {\n          display: flex;\n          justify-content: center;\n\n          p:nth-child(2) {\n            color: $grey-color;\n          }\n        }\n        img {\n          max-width: 7rem;\n          margin: 0 auto;\n        }\n      }\n      .separate {\n        font-size: 0;\n        height: 130px;\n        background: #fff;\n        width: 6px;\n        color: $white-color;\n        -webkit-box-shadow: $-webkit-box-shadow;\n        box-shadow: $box-shadow;\n      }\n    }\n\n    .four-days.forecast {\n      .fore:nth-of-type(9),\n      .separate:nth-of-type(8) {\n        display: none;\n      }\n    }\n  }\n\n  // Loading Circle\n  .progress-item {\n    display: flex;\n    width: $loading-circle;\n    height: $loading-circle;\n    border-radius: 50%;\n    font-size: 0;\n    animation: 0.4s ease-out reverse;\n    -webkit-box-shadow: $-webkit-box-shadow;\n    box-shadow: $box-shadow;\n    margin-bottom: 1.8rem;\n  }\n\n  .progress-item::after {\n    content: attr(data-value);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: $loading-circle;\n    margin: 1rem;\n    border-radius: 50%;\n    background: $white-color;\n    line-height: 1;\n    padding-top: 0.25rem;\n    font-size: 2.5rem;\n    text-align: center;\n    -webkit-box-shadow: $-webkit-box-shadow-inset;\n    box-shadow: $box-shadow-inset;\n    font-family: \"Heebo-Regular\";\n    color: $black-color;\n    letter-spacing: -0.06rem;\n  }\n}\n"],"sourceRoot":""}]);
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
      // requestData(values.todayUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((current) => {
      //   console.log(current);
      //   domManipulation.updateCurrent(current);
      // });
      // Forecast fetch

      requestData(values.foreUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then(function (forecast) {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation.updateForecast(forecast);
      });
    });
  }; // Fetch request function


  function requestData(_x) {
    return _requestData.apply(this, arguments);
  }

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
}();

var cleanData = [[{
  dt: 1660737600,
  main: {
    temp: 23.62,
    feels_like: 23.68,
    temp_min: 23.62,
    temp_max: 23.81,
    pressure: 1011,
    sea_level: 1011,
    grnd_level: 1009,
    humidity: 63,
    temp_kf: -0.19
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10d"
  }],
  clouds: {
    all: 75
  },
  wind: {
    speed: 4.47,
    deg: 53,
    gust: 5.66
  },
  visibility: 6146,
  pop: 0.91,
  rain: {
    "3h": 1.88
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-17 12:00:00"
}, {
  dt: 1660748400,
  main: {
    temp: 23.23,
    feels_like: 23.31,
    temp_min: 22.45,
    temp_max: 23.23,
    pressure: 1011,
    sea_level: 1011,
    grnd_level: 1010,
    humidity: 65,
    temp_kf: 0.78
  },
  weather: [{
    id: 501,
    main: "Rain",
    description: "moderate rain",
    icon: "10d"
  }],
  clouds: {
    all: 82
  },
  wind: {
    speed: 4.04,
    deg: 62,
    gust: 5.65
  },
  visibility: 6135,
  pop: 0.9,
  rain: {
    "3h": 5.69
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-17 15:00:00"
}, {
  dt: 1660759200,
  main: {
    temp: 21.98,
    feels_like: 22.14,
    temp_min: 21.16,
    temp_max: 21.98,
    pressure: 1012,
    sea_level: 1012,
    grnd_level: 1010,
    humidity: 73,
    temp_kf: 0.82
  },
  weather: [{
    id: 501,
    main: "Rain",
    description: "moderate rain",
    icon: "10d"
  }],
  clouds: {
    all: 91
  },
  wind: {
    speed: 2.81,
    deg: 37,
    gust: 5.71
  },
  visibility: 10000,
  pop: 0.89,
  rain: {
    "3h": 3.34
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-17 18:00:00"
}, {
  dt: 1660770000,
  main: {
    temp: 19.33,
    feels_like: 19.51,
    temp_min: 19.33,
    temp_max: 19.33,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1012,
    humidity: 84,
    temp_kf: 0
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10n"
  }],
  clouds: {
    all: 98
  },
  wind: {
    speed: 3.98,
    deg: 38,
    gust: 8.3
  },
  visibility: 10000,
  pop: 0.47,
  rain: {
    "3h": 0.76
  },
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-17 21:00:00"
}], [{
  dt: 1660780800,
  main: {
    temp: 18.06,
    feels_like: 18.25,
    temp_min: 18.06,
    temp_max: 18.06,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 89,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 88
  },
  wind: {
    speed: 3.08,
    deg: 52,
    gust: 7.24
  },
  visibility: 10000,
  pop: 0.27,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-18 00:00:00"
}, {
  dt: 1660791600,
  main: {
    temp: 17.6,
    feels_like: 17.79,
    temp_min: 17.6,
    temp_max: 17.6,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 91,
    temp_kf: 0
  },
  weather: [{
    id: 802,
    main: "Clouds",
    description: "scattered clouds",
    icon: "03n"
  }],
  clouds: {
    all: 50
  },
  wind: {
    speed: 2.39,
    deg: 34,
    gust: 5.17
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-18 03:00:00"
}, {
  dt: 1660802400,
  main: {
    temp: 17.49,
    feels_like: 17.62,
    temp_min: 17.49,
    temp_max: 17.49,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 89,
    temp_kf: 0
  },
  weather: [{
    id: 802,
    main: "Clouds",
    description: "scattered clouds",
    icon: "03d"
  }],
  clouds: {
    all: 50
  },
  wind: {
    speed: 1.79,
    deg: 41,
    gust: 3.25
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-18 06:00:00"
}, {
  dt: 1660813200,
  main: {
    temp: 21.22,
    feels_like: 21.2,
    temp_min: 21.22,
    temp_max: 21.22,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 69,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 61
  },
  wind: {
    speed: 1.05,
    deg: 60,
    gust: 1.25
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-18 09:00:00"
}, {
  dt: 1660824000,
  main: {
    temp: 25.38,
    feels_like: 25.25,
    temp_min: 25.38,
    temp_max: 25.38,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1012,
    humidity: 49,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 61
  },
  wind: {
    speed: 0.51,
    deg: 251,
    gust: 1.33
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-18 12:00:00"
}, {
  dt: 1660834800,
  main: {
    temp: 26.94,
    feels_like: 26.82,
    temp_min: 26.94,
    temp_max: 26.94,
    pressure: 1013,
    sea_level: 1013,
    grnd_level: 1010,
    humidity: 40,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 55
  },
  wind: {
    speed: 2.66,
    deg: 238,
    gust: 3.96
  },
  visibility: 10000,
  pop: 0.06,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-18 15:00:00"
}, {
  dt: 1660845600,
  main: {
    temp: 24.7,
    feels_like: 24.51,
    temp_min: 24.7,
    temp_max: 24.7,
    pressure: 1013,
    sea_level: 1013,
    grnd_level: 1010,
    humidity: 49,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 75
  },
  wind: {
    speed: 3.57,
    deg: 246,
    gust: 5.2
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-18 18:00:00"
}, {
  dt: 1660856400,
  main: {
    temp: 21.8,
    feels_like: 21.68,
    temp_min: 21.8,
    temp_max: 21.8,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 63,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 92
  },
  wind: {
    speed: 3.58,
    deg: 236,
    gust: 8.17
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-18 21:00:00"
}], [{
  dt: 1660867200,
  main: {
    temp: 20.11,
    feels_like: 19.9,
    temp_min: 20.11,
    temp_max: 20.11,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 66,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 94
  },
  wind: {
    speed: 2.44,
    deg: 238,
    gust: 5.36
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-19 00:00:00"
}, {
  dt: 1660878000,
  main: {
    temp: 19.68,
    feels_like: 19.56,
    temp_min: 19.68,
    temp_max: 19.68,
    pressure: 1013,
    sea_level: 1013,
    grnd_level: 1011,
    humidity: 71,
    temp_kf: 0
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10n"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 2.54,
    deg: 244,
    gust: 6.08
  },
  visibility: 10000,
  pop: 0.34,
  rain: {
    "3h": 0.1
  },
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-19 03:00:00"
}, {
  dt: 1660888800,
  main: {
    temp: 19.43,
    feels_like: 19.41,
    temp_min: 19.43,
    temp_max: 19.43,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1012,
    humidity: 76,
    temp_kf: 0
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 2.46,
    deg: 259,
    gust: 5.78
  },
  visibility: 10000,
  pop: 0.24,
  rain: {
    "3h": 0.15
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-19 06:00:00"
}, {
  dt: 1660899600,
  main: {
    temp: 20.96,
    feels_like: 20.7,
    temp_min: 20.96,
    temp_max: 20.96,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 61,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 3.36,
    deg: 283,
    gust: 4.97
  },
  visibility: 10000,
  pop: 0.06,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-19 09:00:00"
}, {
  dt: 1660910400,
  main: {
    temp: 25.01,
    feels_like: 24.61,
    temp_min: 25.01,
    temp_max: 25.01,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 40,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 75
  },
  wind: {
    speed: 3.65,
    deg: 264,
    gust: 5.74
  },
  visibility: 10000,
  pop: 0.2,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-19 12:00:00"
}, {
  dt: 1660921200,
  main: {
    temp: 25.62,
    feels_like: 25.02,
    temp_min: 25.62,
    temp_max: 25.62,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 30,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }],
  clouds: {
    all: 0
  },
  wind: {
    speed: 4.35,
    deg: 299,
    gust: 4.92
  },
  visibility: 10000,
  pop: 0.02,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-19 15:00:00"
}, {
  dt: 1660932000,
  main: {
    temp: 24.08,
    feels_like: 23.25,
    temp_min: 24.08,
    temp_max: 24.08,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1013,
    humidity: 27,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }],
  clouds: {
    all: 0
  },
  wind: {
    speed: 3.91,
    deg: 301,
    gust: 4.72
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-19 18:00:00"
}, {
  dt: 1660942800,
  main: {
    temp: 19.53,
    feels_like: 18.77,
    temp_min: 19.53,
    temp_max: 19.53,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 47,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01n"
  }],
  clouds: {
    all: 0
  },
  wind: {
    speed: 4.56,
    deg: 279,
    gust: 9.19
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-19 21:00:00"
}], [{
  dt: 1660953600,
  main: {
    temp: 17.41,
    feels_like: 16.67,
    temp_min: 17.41,
    temp_max: 17.41,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1015,
    humidity: 56,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01n"
  }],
  clouds: {
    all: 0
  },
  wind: {
    speed: 3.36,
    deg: 288,
    gust: 7.13
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-20 00:00:00"
}, {
  dt: 1660964400,
  main: {
    temp: 15.91,
    feels_like: 15.28,
    temp_min: 15.91,
    temp_max: 15.91,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1015,
    humidity: 66,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01n"
  }],
  clouds: {
    all: 2
  },
  wind: {
    speed: 2.79,
    deg: 269,
    gust: 5.89
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-20 03:00:00"
}, {
  dt: 1660975200,
  main: {
    temp: 15.49,
    feels_like: 15.03,
    temp_min: 15.49,
    temp_max: 15.49,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1015,
    humidity: 74,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }],
  clouds: {
    all: 3
  },
  wind: {
    speed: 3.19,
    deg: 244,
    gust: 6.98
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-20 06:00:00"
}, {
  dt: 1660986000,
  main: {
    temp: 19.8,
    feels_like: 19.32,
    temp_min: 19.8,
    temp_max: 19.8,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1015,
    humidity: 57,
    temp_kf: 0
  },
  weather: [{
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01d"
  }],
  clouds: {
    all: 3
  },
  wind: {
    speed: 4.69,
    deg: 246,
    gust: 7.08
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-20 09:00:00"
}, {
  dt: 1660996800,
  main: {
    temp: 22.7,
    feels_like: 22.17,
    temp_min: 22.7,
    temp_max: 22.7,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 44,
    temp_kf: 0
  },
  weather: [{
    id: 801,
    main: "Clouds",
    description: "few clouds",
    icon: "02d"
  }],
  clouds: {
    all: 22
  },
  wind: {
    speed: 5.58,
    deg: 254,
    gust: 7.93
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-20 12:00:00"
}, {
  dt: 1661007600,
  main: {
    temp: 21.88,
    feels_like: 21.4,
    temp_min: 21.88,
    temp_max: 21.88,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 49,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 4.75,
    deg: 235,
    gust: 8.1
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-20 15:00:00"
}, {
  dt: 1661018400,
  main: {
    temp: 22.43,
    feels_like: 21.93,
    temp_min: 22.43,
    temp_max: 22.43,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 46,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 94
  },
  wind: {
    speed: 3.67,
    deg: 244,
    gust: 7.83
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-20 18:00:00"
}, {
  dt: 1661029200,
  main: {
    temp: 19.64,
    feels_like: 19.12,
    temp_min: 19.64,
    temp_max: 19.64,
    pressure: 1018,
    sea_level: 1018,
    grnd_level: 1015,
    humidity: 56,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 3.81,
    deg: 259,
    gust: 8.38
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-20 21:00:00"
}], [{
  dt: 1661040000,
  main: {
    temp: 17.54,
    feels_like: 17.18,
    temp_min: 17.54,
    temp_max: 17.54,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1015,
    humidity: 70,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 98
  },
  wind: {
    speed: 3.4,
    deg: 252,
    gust: 8.79
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-21 00:00:00"
}, {
  dt: 1661050800,
  main: {
    temp: 16.82,
    feels_like: 16.57,
    temp_min: 16.82,
    temp_max: 16.82,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 77,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04n"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 3.06,
    deg: 248,
    gust: 7.61
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-21 03:00:00"
}, {
  dt: 1661061600,
  main: {
    temp: 16.55,
    feels_like: 16.3,
    temp_min: 16.55,
    temp_max: 16.55,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 78,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 3.38,
    deg: 243,
    gust: 7.16
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-21 06:00:00"
}, {
  dt: 1661072400,
  main: {
    temp: 17.07,
    feels_like: 16.87,
    temp_min: 17.07,
    temp_max: 17.07,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 78,
    temp_kf: 0
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 4.03,
    deg: 229,
    gust: 7.5
  },
  visibility: 10000,
  pop: 0.32,
  rain: {
    "3h": 0.55
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-21 09:00:00"
}, {
  dt: 1661083200,
  main: {
    temp: 16.89,
    feels_like: 16.65,
    temp_min: 16.89,
    temp_max: 16.89,
    pressure: 1017,
    sea_level: 1017,
    grnd_level: 1014,
    humidity: 77,
    temp_kf: 0
  },
  weather: [{
    id: 500,
    main: "Rain",
    description: "light rain",
    icon: "10d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 4.23,
    deg: 241,
    gust: 7.56
  },
  visibility: 10000,
  pop: 0.2,
  rain: {
    "3h": 0.22
  },
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-21 12:00:00"
}, {
  dt: 1661094000,
  main: {
    temp: 20.4,
    feels_like: 19.93,
    temp_min: 20.4,
    temp_max: 20.4,
    pressure: 1016,
    sea_level: 1016,
    grnd_level: 1013,
    humidity: 55,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 93
  },
  wind: {
    speed: 3.59,
    deg: 262,
    gust: 6.67
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-21 15:00:00"
}, {
  dt: 1661104800,
  main: {
    temp: 20.96,
    feels_like: 20.42,
    temp_min: 20.96,
    temp_max: 20.96,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1013,
    humidity: 50,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04d"
  }],
  clouds: {
    all: 82
  },
  wind: {
    speed: 2.25,
    deg: 285,
    gust: 5.14
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-21 18:00:00"
}, {
  dt: 1661115600,
  main: {
    temp: 19.36,
    feels_like: 18.74,
    temp_min: 19.36,
    temp_max: 19.36,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1013,
    humidity: 53,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04n"
  }],
  clouds: {
    all: 72
  },
  wind: {
    speed: 2.01,
    deg: 227,
    gust: 4.23
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-21 21:00:00"
}], [{
  dt: 1661126400,
  main: {
    temp: 18.4,
    feels_like: 17.78,
    temp_min: 18.4,
    temp_max: 18.4,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 57,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04n"
  }],
  clouds: {
    all: 81
  },
  wind: {
    speed: 1.49,
    deg: 239,
    gust: 2.67
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-22 00:00:00"
}, {
  dt: 1661137200,
  main: {
    temp: 16.76,
    feels_like: 16.16,
    temp_min: 16.76,
    temp_max: 16.76,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 64,
    temp_kf: 0
  },
  weather: [{
    id: 803,
    main: "Clouds",
    description: "broken clouds",
    icon: "04n"
  }],
  clouds: {
    all: 71
  },
  wind: {
    speed: 0.97,
    deg: 211,
    gust: 1.1
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n"
  },
  dt_txt: "2022-08-22 03:00:00"
}, {
  dt: 1661148000,
  main: {
    temp: 16.89,
    feels_like: 16.31,
    temp_min: 16.89,
    temp_max: 16.89,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 64,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 85
  },
  wind: {
    speed: 1.02,
    deg: 141,
    gust: 2.02
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-22 06:00:00"
}, {
  dt: 1661158800,
  main: {
    temp: 19.27,
    feels_like: 18.64,
    temp_min: 19.27,
    temp_max: 19.27,
    pressure: 1014,
    sea_level: 1014,
    grnd_level: 1011,
    humidity: 53,
    temp_kf: 0
  },
  weather: [{
    id: 804,
    main: "Clouds",
    description: "overcast clouds",
    icon: "04d"
  }],
  clouds: {
    all: 100
  },
  wind: {
    speed: 2.42,
    deg: 163,
    gust: 4.42
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "d"
  },
  dt_txt: "2022-08-22 09:00:00"
}]]; // console.log(cleanData);
// const todayDate = () => {
//   let today = new Date();
//   let dd = String(today.getDate()).padStart(2, "0");
//   let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//   let yyyy = today.getFullYear();
//   return yyyy + "-" + mm + "-" + dd;
// };
// const _removeToday = (data) => {
//   const remove = data;
//   for (let o = 0; o < remove.length; o++) {
//     if (data[o][0].dt_txt.indexOf(todayDate()) > -1) {
//       remove.splice(o, 1);
//     }
//   }
//   return remove;
// };
// const _numberOfDays = (data) => (data.length === 4 ? console.log("add class to show 4") : console.log("add class to show 5"));
// _numberOfDays(_removeToday(cleanData));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXJCVjtFQXdCRXVGLElBQUksRUFBRTtJQUNKQyxLQUFLLEVBQUUsSUFESDtJQUVKQyxHQUFHLEVBQUUsR0FGRDtJQUdKQyxJQUFJLEVBQUU7RUFIRixDQXhCUjtFQTZCRUMsVUFBVSxFQUFFLEtBN0JkO0VBOEJFQyxHQUFHLEVBQUUsQ0E5QlA7RUErQkUxRyxHQUFHLEVBQUU7SUFDSDRHLEdBQUcsRUFBRTtFQURGLENBL0JQO0VBa0NFbEUsTUFBTSxFQUFFO0FBbENWLENBN0dGLENBbnpDZ0IsQ0FBbEIsRUF1OENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLDBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGxvY2F0aW9uLFxuICB0ZW1wZXJhdHVyZSxcbiAgZGVzY3JpcHRpb24sXG4gIG1pblRlbXAsXG4gIG1heFRlbXAsXG4gIGZlZWxzTGlrZSxcbiAgbG9hZGluZyxcbiAgbG9hZENsb3VkcyxcbiAgbG9hZEh1bWlkLFxuICBsb2FkV2luZCxcbiAgZm9yZWNhc3RzLFxuICBmb3JlV3JhcCxcbn0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XG5cbmNvbnN0IGRvbU1hbmlwdWxhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBjb25zdCB1cGRhdGVDdXJyZW50ID0gKGRhdGEpID0+IHtcbiAgICBfbG9jYXRpb24oZGF0YSk7XG4gICAgX0N1cnJlbnRUZW1wKGRhdGEpO1xuICAgIF9EZXNjcmlwdGlvbihkYXRhKTtcbiAgICBfbWluVGVtcChkYXRhKTtcbiAgICBfbWF4VGVtcChkYXRhKTtcbiAgICBfZmVlbHNMaWtlKGRhdGEpO1xuICAgIF9sb2FkaW5nKGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUZvcmVjYXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBvcmdhbml6ZWREYXRhID0gX3NwbGl0RGF0YUJ5RGF5cyhkYXRhKTtcbiAgICBjb25zdCBjbGVhbkRhdGEgPSBfcmVtb3ZlVG9kYXkob3JnYW5pemVkRGF0YSk7XG4gICAgX251bURheXMoY2xlYW5EYXRhKTtcbiAgICBfZm9yZWNhc3QoY2xlYW5EYXRhKTtcbiAgfTtcblxuICAvLyBET00gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IF9sb2NhdGlvbiA9IChkYXRhKSA9PiAobG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5zeXMuY291bnRyeSk7XG4gIGNvbnN0IF9DdXJyZW50VGVtcCA9IChkYXRhKSA9PiAodGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKSkpO1xuICBjb25zdCBfRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gKGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IF9taW5UZW1wID0gKGRhdGEpID0+IChtaW5UZW1wLmlubmVySFRNTCA9IFwiTWluIFRlbXA6IFwiICsgZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbikpKTtcbiAgY29uc3QgX21heFRlbXAgPSAoZGF0YSkgPT4gKG1heFRlbXAuaW5uZXJIVE1MID0gXCJNYXggVGVtcDogXCIgKyBmb3JtYXRUZW1wQ2VsKE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KSkpO1xuICBjb25zdCBfZmVlbHNMaWtlID0gKGRhdGEpID0+IChmZWVsc0xpa2UuaW5uZXJIVE1MID0gXCJGZWVscyBsaWtlOiBcIiArIGZvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSkpKTtcbiAgY29uc3QgX2xvYWRpbmcgPSAoZGF0YSkgPT4ge1xuICAgIGxvYWRDbG91ZHMuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLmNsb3Vkcy5hbGwpKTtcbiAgICBsb2FkSHVtaWQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpKTtcbiAgICBsb2FkSHVtaWQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpKTtcbiAgICBfbG9hZGluZ0NpcmNsZSgpO1xuICB9O1xuXG4gIGNvbnN0IF9udW1EYXlzID0gKGRhdGEpID0+IChkYXRhLmxlbmd0aCA9PT0gNCA/IChmb3JlV3JhcC5jbGFzc05hbWUgPSBcImZvcmVjYXN0IGZvdXItZGF5c1wiKSA6IChmb3JlV3JhcC5jbGFzc05hbWUgPSBcImZvcmVjYXN0XCIpKTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEZvcm1hdCBDZWxzaXVzXG4gIGNvbnN0IGZvcm1hdFRlbXBDZWwgPSAodGVtcCkgPT4gdGVtcCArICc8c3BhbiBjbGFzcz1cImRlZy1zeW1ib2xcIj4mIzE3Njs8c3BhbiBjbGFzcz1cIm1pbnVzXCI+LTwvc3Bhbj48L3NwYW4+Qyc7XG4gIGNvbnN0IGZvcm1hdFRlbXAgPSAodGVtcCkgPT4gdGVtcCArICc8c3BhbiBjbGFzcz1cImRlZy1zeW1ib2xcIj4mIzE3Njs8c3BhbiBjbGFzcz1cIm1pbnVzXCI+LTwvc3Bhbj48L3NwYW4+JztcbiAgLy8gQW5pbWF0ZSBsb2FkaW5nIGNpcmNsZVxuICBjb25zdCBfbG9hZGluZ0NpcmNsZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudGVycyA9IEFycmF5KGxvYWRpbmcubGVuZ3RoKTtcbiAgICBjb25zdCBpbnRlcnZhbHMgPSBBcnJheShsb2FkaW5nLmxlbmd0aCk7XG4gICAgY291bnRlcnMuZmlsbCgwKTtcbiAgICBsb2FkaW5nLmZvckVhY2goKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICAgIGludGVydmFsc1tpbmRleF0gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjb3VudGVyc1tpbmRleF0gPT0gcGFyc2VJbnQobnVtYmVyLmRhdGFzZXQubnVtKSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxzW2luZGV4XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlcnNbaW5kZXhdICs9IDE7XG4gICAgICAgICAgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJodW1pZFwiKSkge1xuICAgICAgICAgICAgbnVtYmVyLnN0eWxlLmJhY2tncm91bmQgPSBcImNvbmljLWdyYWRpZW50KCNmZGVmNWQsICNmZmE1NTcgY2FsYyhcIiArIGNvdW50ZXJzW2luZGV4XSArIFwiJSksI0ZGRkZGRiAwZGVnKVwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucyhcImNsb3Vkc1wiKSkge1xuICAgICAgICAgICAgbnVtYmVyLnN0eWxlLmJhY2tncm91bmQgPSBcImNvbmljLWdyYWRpZW50KCM5N0RBRjUsICMzMUI4REYgY2FsYyhcIiArIGNvdW50ZXJzW2luZGV4XSArIFwiJSksI0ZGRkZGRiAwZGVnKVwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucyhcIndpbmRcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjRkZGRkZGIDBkZWcpLCAjOTdEQUY1LCAjMzFCOERGIGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBudW1iZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBjb3VudGVyc1tpbmRleF0gKyBcIiVcIik7XG4gICAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGNvdW50ZXJzW2luZGV4XSArIFwiJVwiO1xuICAgICAgICB9XG4gICAgICB9LCAxNSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgX2ZvcmVjYXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGEubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICAvLyBEYXRlIC0gRGF5XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5kYXlcIikuaW5uZXJUZXh0ID0gZGF0YVt4XVswXS5kdF90eHQuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgLy8gTWluIC8gTWF4XG4gICAgICBmb3IgKGNvbnN0IGZvcmUgb2YgZGF0YVt4XSkge1xuICAgICAgICBpZiAobWF4ID09PSBudWxsICYmIG1pbiA9PT0gbnVsbCkge1xuICAgICAgICAgIG1heCA9IGZvcmUubWFpbi50ZW1wX21heDtcbiAgICAgICAgICBtaW4gPSBmb3JlLm1haW4udGVtcF9taW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yZS5tYWluLnRlbXBfbWF4ID4gbWF4ID8gKG1heCA9IGZvcmUubWFpbi50ZW1wX21heCkgOiAobWF4ID0gbWF4KTtcbiAgICAgICAgICBmb3JlLm1haW4udGVtcF9taW4gPCBtaW4gPyAobWluID0gZm9yZS5tYWluLnRlbXBfbWluKSA6IChtaW4gPSBtaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5taW5cIikuaW5uZXJIVE1MID0gXCIvXCIgKyBmb3JtYXRUZW1wKE1hdGgucm91bmQobWluKSk7XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5tYXhcIikuaW5uZXJIVE1MID0gZm9ybWF0VGVtcChNYXRoLnJvdW5kKG1heCkpO1xuICAgIH1cbiAgICAvLyBJbWFnZVxuICB9O1xuXG4gIGNvbnN0IF90b2RheURhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4geXl5eSArIFwiLVwiICsgbW0gKyBcIi1cIiArIGRkO1xuICB9O1xuXG4gIGNvbnN0IF9yZW1vdmVUb2RheSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZGF0YTtcbiAgICBmb3IgKGxldCBvID0gMDsgbyA8IHJlbW92ZS5sZW5ndGg7IG8rKykge1xuICAgICAgaWYgKGRhdGFbb11bMF0uZHRfdHh0LmluZGV4T2YoX3RvZGF5RGF0ZSgpKSA+IC0xKSB7XG4gICAgICAgIHJlbW92ZS5zcGxpY2UobywgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW1vdmU7XG4gIH07XG5cbiAgY29uc3QgX3NwbGl0RGF0YUJ5RGF5cyA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGZvcmVjYXN0RGF5cyA9IFtdO1xuICAgIGxldCBmb3JlY2FzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm9yZWNhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JlY2FzdFswXS5kdF90eHQuaW5kZXhPZihkYXRhLmxpc3RbaV0uZHRfdHh0LnNwbGl0KFwiIFwiKVswXSkgPiAtMSkge1xuICAgICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgICAgZm9yZWNhc3QgPSBbXTtcbiAgICAgICAgICBmb3JlY2FzdC5wdXNoKGRhdGEubGlzdFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5saXN0Lmxlbmd0aCAtIDEgPT09IGkpIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcmVjYXN0RGF5cztcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50LCB1cGRhdGVGb3JlY2FzdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvIC5sb2NhdGlvblwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLnRlbXBcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwIC5kZXNjXCIpO1xuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5taW4tdGVtcFwiKTtcbmNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAubWF4LXRlbXBcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAuZmVlbHMtbGlrZVwiKTtcbmNvbnN0IGxvYWRDbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAuY2xvdWRzXCIpO1xuY29uc3QgbG9hZEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTIgLmh1bWlkXCIpO1xuY29uc3QgbG9hZFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAud2luZFwiKTtcbmNvbnN0IGZvcmVjYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgLmZvcmVcIik7XG5jb25zdCBmb3JlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5sZXQgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtaXRlbVwiKTtcblxuZXhwb3J0IHsgbG9jYXRpb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvbiwgbWluVGVtcCwgbWF4VGVtcCwgZmVlbHNMaWtlLCBsb2FkaW5nLCBsb2FkQ2xvdWRzLCBsb2FkSHVtaWQsIGxvYWRXaW5kLCBmb3JlY2FzdHMsIGZvcmVXcmFwIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1FeHRyYUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSZXNldCBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5ib2R5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbjpyb290IC5kZWctc3ltYm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbjpyb290IC5kZWctc3ltYm9sIC5taW51cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbjpyb290IC5jdXJyZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmxvY2F0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBmb250LXNpemU6IDQuNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNXJlbTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAuZGF0ZSxcXG46cm9vdCAuY3VycmVudCAudGltZSxcXG46cm9vdCAuY3VycmVudCAuZGVzYy0xIGxpLFxcbjpyb290IC5jdXJyZW50IC5kZXNjLTIgbGkgc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC50ZW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxpbmUtaGVpZ2h0OiA4NCU7XFxufVxcbjpyb290IC5jdXJyZW50IC5kZXNjLFxcbjpyb290IC5jdXJyZW50IC5mb3JlY2FzdCAuZGF5LFxcbjpyb290IC5jdXJyZW50IC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLnRlbXAtaW1nIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgbWF4LWhlaWdodDogMTMuNjI1cmVtO1xcbn1cXG5cXG4jd2VhdGhlci1hcHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAgcGFkZGluZzogMS44NTdyZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIGlucHV0IHtcXG4gIGJvcmRlcjogMC4xNDNyZW0gc29saWQgI2EwYTBhMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAgYnV0dG9uIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIGgxIC5sb2dvLXN1biB7XFxuICBmb250LXNpemU6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWY1ZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AgcmlnaHQsICNmZGVmNWQsICNmZmE1NTcpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMzMzMztcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5pbnRybyB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtd3JhcCAuZGVzYyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtaW1nIHtcXG4gIGdyaWQtYXJlYTogMi8zLzMvNTtcXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS81O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0xLFxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyLjVyZW07XFxuICBtYXJnaW46IDEuODc1cmVtIDA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZ2FwOiA2LjU2M3JlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpID4gZGl2IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgaW1nIHtcXG4gIG1heC13aWR0aDogN3JlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgLnNlcGFyYXRlIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDZweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm91ci1kYXlzLmZvcmVjYXN0IC5mb3JlOm50aC1vZi10eXBlKDkpLFxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3VyLWRheXMuZm9yZWNhc3QgLnNlcGFyYXRlOm50aC1vZi10eXBlKDgpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGFuaW1hdGlvbjogMC40cyBlYXNlLW91dCByZXZlcnNlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUFBO0FBQ0E7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFX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a0JBQUE7QUF1R1I7QUFyR007RUFDRSxrQkFBQTtBQXVHUjtBQXBHTTs7RUFFRSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXNHUjtBQXBHTTtFQUNFLGFBQUE7QUFzR1I7QUFsR0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFvR047QUFsR007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBb0dSO0FBbEdRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBb0dWO0FBbEdVO0VBQ0UsY0E1T0M7QUFnVmI7QUFqR1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW1HVjtBQWhHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0F2UE07RUF3UE4sbUVBcFBhO0VBcVBiLDJEQXBQSztBQXNWYjtBQTdGTTs7RUFFRSxhQUFBO0FBK0ZSO0FBekZFO0VBQ0UsYUFBQTtFQUNBLFlBclFhO0VBc1FiLGFBdFFhO0VBdVFiLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUVBelFpQjtFQTBRakIsMkRBelFTO0VBMFFULHFCQUFBO0FBMkZKO0FBeEZFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBcFJhO0VBcVJiLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQTFSVTtFQTJSVixjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBelJ1QjtFQTBSdkIsaUVBelJlO0VBMFJmLDRCQUFBO0VBQ0EsY0FyU1U7RUFzU1Ysd0JBQUE7QUEwRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9yZXNldC5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4vLyBWYXJpYWJsZXNcXG4kYmxhY2stY29sb3I6ICMzMzMzMzM7XFxuJGdyZXktY29sb3I6ICNhMGEwYTA7XFxuJGJnLWNvbG9yOiAjZjBmMGYwO1xcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcXG4keWVsbG93LWNvbG9yOiAjZmRlZjVkO1xcbiRvcmFuZ2UtY29sb3I6ICNmZmE1NTc7XFxuJGxvYWRpbmctY2lyY2xlOiAxMHJlbTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcblxcbiAgLy8gVGl0bGUgTWFpblxcbiAgQG1peGluIG1haW4tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgICBmb250LXNpemU6IDQuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgfVxcblxcbiAgLy8gRGVzY3JpcHRpb24gU21hbGxcXG4gIEBtaXhpbiBzbWFsbC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBNaWRcXG4gIEBtaXhpbiBtaWQtZGVzYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxuXFxuICAvLyBXZWF0aGVyIFRpdGxlXFxuICBAbWl4aW4gdGVtcC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICAgIC8vIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogODQlO1xcbiAgfVxcblxcbiAgLy8gRGVncmVlIFN5bWJvbFxcbiAgLmRlZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLm1pbnVzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFN0eWxpbmdcXG4gIC5jdXJyZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIEBpbmNsdWRlIG1haW4tdGl0bGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICB9XFxuICAgIC5kYXRlLFxcbiAgICAudGltZSxcXG4gICAgLmRlc2MtMSBsaSxcXG4gICAgLmRlc2MtMiBsaSBzcGFuIHtcXG4gICAgICBAaW5jbHVkZSBzbWFsbC1kZXNjO1xcbiAgICB9XFxuICAgIC50ZW1wIHtcXG4gICAgICBAaW5jbHVkZSB0ZW1wLXRpdGxlO1xcbiAgICB9XFxuICAgIC5kZXNjLFxcbiAgICAuZm9yZWNhc3QgLmRheSxcXG4gICAgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gICAgICBAaW5jbHVkZSBtaWQtZGVzYztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLnRlbXAtaW1nIGltZyB7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBMYXlvdXQgc3R5bGluZ1xcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuXFxuICAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgcGFkZGluZzogMS44NTdyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLnRpdGxlLXNlYXJjaCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxuXFxuICAgICAgLmlucHV0LXdyYXAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGJvcmRlcjogMC4xNDNyZW0gc29saWQgJGdyZXktY29sb3I7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbiAgICAgICAgLmxvZ28tc3VuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAkeWVsbG93LWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2stY29sb3I7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcbiAgICAgIC5pbnRybyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLXdyYXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgICAgIC5kZXNjIHtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLWltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTEge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNC8xLzUvNTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2MtMSxcXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdhcDogNi41NjNyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgY29sb3I6ICRncmV5LWNvbG9yO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDdyZW07XFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuc2VwYXJhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm91ci1kYXlzLmZvcmVjYXN0IHtcXG4gICAgICAuZm9yZTpudGgtb2YtdHlwZSg5KSxcXG4gICAgICAuc2VwYXJhdGU6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIExvYWRpbmcgQ2lyY2xlXFxuICAucHJvZ3Jlc3MtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGhlaWdodDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgYW5pbWF0aW9uOiAwLjRzIGVhc2Utb3V0IHJldmVyc2U7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gIH1cXG5cXG4gIC5wcm9ncmVzcy1pdGVtOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctaW5zZXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBkb21NYW5pcHVsYXRpb24gfSBmcm9tIFwiLi9kb20uanNcIjtcbi8vIGltcG9ydCBjaXR5RGF0YSBmcm9tIFwiLi9kYXRhL2NpdHkubGlzdC5qc29uXCI7XG5cbmNvbnN0IHdlYXRoZXJBcHAgPSAoKCkgPT4ge1xuICAvLyBTdG9yZSB2YWx1ZXNcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIGxvYzogbnVsbCxcbiAgICBsaW1pdDogXCI1XCIsXG4gICAgdW5pdHM6IFwiJnVuaXRzPW1ldHJpY1wiLFxuICAgIGFwaUtleTogXCJlMmY4OGE2NGVkYjI2OTA4ZjJjOGE4MzZlMGY4N2MxOVwiLFxuICAgIGNvb3JkVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVwiLFxuICAgIGNvb3JkOiBudWxsLFxuICAgIHRvZGF5VXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD1cIixcbiAgICB0b2RheTogbnVsbCxcbiAgICBmb3JlVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9XCIsXG4gICAgZm9yZTogbnVsbCxcbiAgfTtcblxuICAvLyBJbnB1dCBlbGVtZW50IHRvIGdldCBjbGllbnQgbG9jYXRpb25cbiAgY29uc3QgaW5wdXRFbGVtID0gKCgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtd3JhcCBpbnB1dFwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXdyYXAgYnV0dG9uXCIpO1xuICAgIC8vIFZhbGlkYXRlIHZhbHVlIGJlZm9yZSBtYWtpbmcgQVBJIGNhbGxcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdmFsdWVzLmxvYyA9IGlucHV0LnZhbHVlO1xuICAgICAgZ2V0RGF0YSh2YWx1ZXMubG9jKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaW52YWxpZFwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaW5wdXQudmFsaWRpdHkpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIEZldGNoIHdlYXRoZXIgRGF0YVxuICBjb25zdCBnZXREYXRhID0gKHZhbCkgPT4ge1xuICAgIHJlcXVlc3REYXRhKHZhbHVlcy5jb29yZFVybCArIHZhbCArIFwiJmxpbWl0PVwiICsgdmFsdWVzLmxpbWl0ICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMuYXBpS2V5KS50aGVuKChjb29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coY29vcmQpO1xuICAgICAgdmFsdWVzLmNvb3JkID0gY29vcmRbMF07XG4gICAgICAvLyBDdXJyZW50IGZldGNoXG4gICAgICAvLyByZXF1ZXN0RGF0YSh2YWx1ZXMudG9kYXlVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy5hcGlLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oKGN1cnJlbnQpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAvLyAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyBGb3JlY2FzdCBmZXRjaFxuICAgICAgcmVxdWVzdERhdGEodmFsdWVzLmZvcmVVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy5hcGlLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oKGZvcmVjYXN0KSA9PiB7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBGZXRjaCByZXF1ZXN0IGZ1bmN0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7IC8vIFR5cGVFcnJvcjogZmFpbGVkIHRvIGZldGNoXG4gICAgfVxuICB9XG59KSgpO1xuXG5jb25zdCBjbGVhbkRhdGEgPSBbXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MDczNzYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjMuNjIsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIzLjY4LFxuICAgICAgICB0ZW1wX21pbjogMjMuNjIsXG4gICAgICAgIHRlbXBfbWF4OiAyMy44MSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTEsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxMSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAwOSxcbiAgICAgICAgaHVtaWRpdHk6IDYzLFxuICAgICAgICB0ZW1wX2tmOiAtMC4xOSxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAwLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDc1LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuNDcsXG4gICAgICAgIGRlZzogNTMsXG4gICAgICAgIGd1c3Q6IDUuNjYsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogNjE0NixcbiAgICAgIHBvcDogMC45MSxcbiAgICAgIHJhaW46IHtcbiAgICAgICAgXCIzaFwiOiAxLjg4LFxuICAgICAgfSxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE3IDEyOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDc0ODQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjMuMjMsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIzLjMxLFxuICAgICAgICB0ZW1wX21pbjogMjIuNDUsXG4gICAgICAgIHRlbXBfbWF4OiAyMy4yMyxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTEsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxMSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMCxcbiAgICAgICAgaHVtaWRpdHk6IDY1LFxuICAgICAgICB0ZW1wX2tmOiAwLjc4LFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1MDEsXG4gICAgICAgICAgbWFpbjogXCJSYWluXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibW9kZXJhdGUgcmFpblwiLFxuICAgICAgICAgIGljb246IFwiMTBkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogODIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNC4wNCxcbiAgICAgICAgZGVnOiA2MixcbiAgICAgICAgZ3VzdDogNS42NSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiA2MTM1LFxuICAgICAgcG9wOiAwLjksXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogNS42OSxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xNyAxNTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA3NTkyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIxLjk4LFxuICAgICAgICBmZWVsc19saWtlOiAyMi4xNCxcbiAgICAgICAgdGVtcF9taW46IDIxLjE2LFxuICAgICAgICB0ZW1wX21heDogMjEuOTgsXG4gICAgICAgIHByZXNzdXJlOiAxMDEyLFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTIsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTAsXG4gICAgICAgIGh1bWlkaXR5OiA3MyxcbiAgICAgICAgdGVtcF9rZjogMC44MixcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAxLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm1vZGVyYXRlIHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDkxLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDIuODEsXG4gICAgICAgIGRlZzogMzcsXG4gICAgICAgIGd1c3Q6IDUuNzEsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuODksXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMy4zNCxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xNyAxODowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA3NzAwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjMzLFxuICAgICAgICBmZWVsc19saWtlOiAxOS41MSxcbiAgICAgICAgdGVtcF9taW46IDE5LjMzLFxuICAgICAgICB0ZW1wX21heDogMTkuMzMsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTIsXG4gICAgICAgIGh1bWlkaXR5OiA4NCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAwLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDk4LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuOTgsXG4gICAgICAgIGRlZzogMzgsXG4gICAgICAgIGd1c3Q6IDguMyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC40NyxcbiAgICAgIHJhaW46IHtcbiAgICAgICAgXCIzaFwiOiAwLjc2LFxuICAgICAgfSxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE3IDIxOjAwOjAwXCIsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGR0OiAxNjYwNzgwODAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxOC4wNixcbiAgICAgICAgZmVlbHNfbGlrZTogMTguMjUsXG4gICAgICAgIHRlbXBfbWluOiAxOC4wNixcbiAgICAgICAgdGVtcF9tYXg6IDE4LjA2LFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogODksXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogODgsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy4wOCxcbiAgICAgICAgZGVnOiA1MixcbiAgICAgICAgZ3VzdDogNy4yNCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4yNyxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDAwOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDc5MTYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTcuNixcbiAgICAgICAgZmVlbHNfbGlrZTogMTcuNzksXG4gICAgICAgIHRlbXBfbWluOiAxNy42LFxuICAgICAgICB0ZW1wX21heDogMTcuNixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTQsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMSxcbiAgICAgICAgaHVtaWRpdHk6IDkxLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDIsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzY2F0dGVyZWQgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwM25cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA1MCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjM5LFxuICAgICAgICBkZWc6IDM0LFxuICAgICAgICBndXN0OiA1LjE3LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJuXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMDM6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODAyNDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxNy40OSxcbiAgICAgICAgZmVlbHNfbGlrZTogMTcuNjIsXG4gICAgICAgIHRlbXBfbWluOiAxNy40OSxcbiAgICAgICAgdGVtcF9tYXg6IDE3LjQ5LFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogODksXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMixcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInNjYXR0ZXJlZCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjAzZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDUwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDEuNzksXG4gICAgICAgIGRlZzogNDEsXG4gICAgICAgIGd1c3Q6IDMuMjUsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOCAwNjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA4MTMyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIxLjIyLFxuICAgICAgICBmZWVsc19saWtlOiAyMS4yLFxuICAgICAgICB0ZW1wX21pbjogMjEuMjIsXG4gICAgICAgIHRlbXBfbWF4OiAyMS4yMixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDY5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA2MSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAxLjA1LFxuICAgICAgICBkZWc6IDYwLFxuICAgICAgICBndXN0OiAxLjI1LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMDk6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODI0MDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNS4zOCxcbiAgICAgICAgZmVlbHNfbGlrZTogMjUuMjUsXG4gICAgICAgIHRlbXBfbWluOiAyNS4zOCxcbiAgICAgICAgdGVtcF9tYXg6IDI1LjM4LFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogNDksXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDYxLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDAuNTEsXG4gICAgICAgIGRlZzogMjUxLFxuICAgICAgICBndXN0OiAxLjMzLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMTI6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODM0ODAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNi45NCxcbiAgICAgICAgZmVlbHNfbGlrZTogMjYuODIsXG4gICAgICAgIHRlbXBfbWluOiAyNi45NCxcbiAgICAgICAgdGVtcF9tYXg6IDI2Ljk0LFxuICAgICAgICBwcmVzc3VyZTogMTAxMyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDEzLFxuICAgICAgICBncm5kX2xldmVsOiAxMDEwLFxuICAgICAgICBodW1pZGl0eTogNDAsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDU1LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDIuNjYsXG4gICAgICAgIGRlZzogMjM4LFxuICAgICAgICBndXN0OiAzLjk2LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjA2LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMTU6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODQ1NjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNC43LFxuICAgICAgICBmZWVsc19saWtlOiAyNC41MSxcbiAgICAgICAgdGVtcF9taW46IDI0LjcsXG4gICAgICAgIHRlbXBfbWF4OiAyNC43LFxuICAgICAgICBwcmVzc3VyZTogMTAxMyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDEzLFxuICAgICAgICBncm5kX2xldmVsOiAxMDEwLFxuICAgICAgICBodW1pZGl0eTogNDksXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDc1LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuNTcsXG4gICAgICAgIGRlZzogMjQ2LFxuICAgICAgICBndXN0OiA1LjIsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOCAxODowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA4NTY0MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIxLjgsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIxLjY4LFxuICAgICAgICB0ZW1wX21pbjogMjEuOCxcbiAgICAgICAgdGVtcF9tYXg6IDIxLjgsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA2MyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5MixcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjU4LFxuICAgICAgICBkZWc6IDIzNixcbiAgICAgICAgZ3VzdDogOC4xNyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDIxOjAwOjAwXCIsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGR0OiAxNjYwODY3MjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMC4xMSxcbiAgICAgICAgZmVlbHNfbGlrZTogMTkuOSxcbiAgICAgICAgdGVtcF9taW46IDIwLjExLFxuICAgICAgICB0ZW1wX21heDogMjAuMTEsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA2NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5NCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjQ0LFxuICAgICAgICBkZWc6IDIzOCxcbiAgICAgICAgZ3VzdDogNS4zNixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE5IDAwOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDg3ODAwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTkuNjgsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE5LjU2LFxuICAgICAgICB0ZW1wX21pbjogMTkuNjgsXG4gICAgICAgIHRlbXBfbWF4OiAxOS42OCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTMsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxMyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMSxcbiAgICAgICAgaHVtaWRpdHk6IDcxLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1MDAsXG4gICAgICAgICAgbWFpbjogXCJSYWluXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICAgICAgICAgIGljb246IFwiMTBuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDIuNTQsXG4gICAgICAgIGRlZzogMjQ0LFxuICAgICAgICBndXN0OiA2LjA4LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjM0LFxuICAgICAgcmFpbjoge1xuICAgICAgICBcIjNoXCI6IDAuMSxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAwMzowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA4ODg4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjQzLFxuICAgICAgICBmZWVsc19saWtlOiAxOS40MSxcbiAgICAgICAgdGVtcF9taW46IDE5LjQzLFxuICAgICAgICB0ZW1wX21heDogMTkuNDMsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTIsXG4gICAgICAgIGh1bWlkaXR5OiA3NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAwLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjQ2LFxuICAgICAgICBkZWc6IDI1OSxcbiAgICAgICAgZ3VzdDogNS43OCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4yNCxcbiAgICAgIHJhaW46IHtcbiAgICAgICAgXCIzaFwiOiAwLjE1LFxuICAgICAgfSxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE5IDA2OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDg5OTYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjAuOTYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIwLjcsXG4gICAgICAgIHRlbXBfbWluOiAyMC45NixcbiAgICAgICAgdGVtcF9tYXg6IDIwLjk2LFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogNjEsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuMzYsXG4gICAgICAgIGRlZzogMjgzLFxuICAgICAgICBndXN0OiA0Ljk3LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjA2LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMDk6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwOTEwNDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNS4wMSxcbiAgICAgICAgZmVlbHNfbGlrZTogMjQuNjEsXG4gICAgICAgIHRlbXBfbWluOiAyNS4wMSxcbiAgICAgICAgdGVtcF9tYXg6IDI1LjAxLFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogNDAsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDc1LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuNjUsXG4gICAgICAgIGRlZzogMjY0LFxuICAgICAgICBndXN0OiA1Ljc0LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjIsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAxMjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5MjEyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDI1LjYyLFxuICAgICAgICBmZWVsc19saWtlOiAyNS4wMixcbiAgICAgICAgdGVtcF9taW46IDI1LjYyLFxuICAgICAgICB0ZW1wX21heDogMjUuNjIsXG4gICAgICAgIHByZXNzdXJlOiAxMDE1LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTIsXG4gICAgICAgIGh1bWlkaXR5OiAzMCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNC4zNSxcbiAgICAgICAgZGVnOiAyOTksXG4gICAgICAgIGd1c3Q6IDQuOTIsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuMDIsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAxNTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5MzIwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDI0LjA4LFxuICAgICAgICBmZWVsc19saWtlOiAyMy4yNSxcbiAgICAgICAgdGVtcF9taW46IDI0LjA4LFxuICAgICAgICB0ZW1wX21heDogMjQuMDgsXG4gICAgICAgIHByZXNzdXJlOiAxMDE1LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTMsXG4gICAgICAgIGh1bWlkaXR5OiAyNyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy45MSxcbiAgICAgICAgZGVnOiAzMDEsXG4gICAgICAgIGd1c3Q6IDQuNzIsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAxODowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5NDI4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjUzLFxuICAgICAgICBmZWVsc19saWtlOiAxOC43NyxcbiAgICAgICAgdGVtcF9taW46IDE5LjUzLFxuICAgICAgICB0ZW1wX21heDogMTkuNTMsXG4gICAgICAgIHByZXNzdXJlOiAxMDE3LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTcsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGh1bWlkaXR5OiA0NyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNC41NixcbiAgICAgICAgZGVnOiAyNzksXG4gICAgICAgIGd1c3Q6IDkuMTksXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAyMTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MDk1MzYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTcuNDEsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2LjY3LFxuICAgICAgICB0ZW1wX21pbjogMTcuNDEsXG4gICAgICAgIHRlbXBfbWF4OiAxNy40MSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTgsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxOCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDU2LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDAsXG4gICAgICAgICAgbWFpbjogXCJDbGVhclwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNsZWFyIHNreVwiLFxuICAgICAgICAgIGljb246IFwiMDFuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjM2LFxuICAgICAgICBkZWc6IDI4OCxcbiAgICAgICAgZ3VzdDogNy4xMyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDAwOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDk2NDQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTUuOTEsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE1LjI4LFxuICAgICAgICB0ZW1wX21pbjogMTUuOTEsXG4gICAgICAgIHRlbXBfbWF4OiAxNS45MSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTgsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxOCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDY2LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDAsXG4gICAgICAgICAgbWFpbjogXCJDbGVhclwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNsZWFyIHNreVwiLFxuICAgICAgICAgIGljb246IFwiMDFuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMixcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjc5LFxuICAgICAgICBkZWc6IDI2OSxcbiAgICAgICAgZ3VzdDogNS44OSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDAzOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDk3NTIwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTUuNDksXG4gICAgICAgIGZlZWxzX2xpa2U6IDE1LjAzLFxuICAgICAgICB0ZW1wX21pbjogMTUuNDksXG4gICAgICAgIHRlbXBfbWF4OiAxNS40OSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTgsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxOCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDc0LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDAsXG4gICAgICAgICAgbWFpbjogXCJDbGVhclwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNsZWFyIHNreVwiLFxuICAgICAgICAgIGljb246IFwiMDFkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMyxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjE5LFxuICAgICAgICBkZWc6IDI0NCxcbiAgICAgICAgZ3VzdDogNi45OCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDA2OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDk4NjAwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTkuOCxcbiAgICAgICAgZmVlbHNfbGlrZTogMTkuMzIsXG4gICAgICAgIHRlbXBfbWluOiAxOS44LFxuICAgICAgICB0ZW1wX21heDogMTkuOCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTgsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxOCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDU3LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDAsXG4gICAgICAgICAgbWFpbjogXCJDbGVhclwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImNsZWFyIHNreVwiLFxuICAgICAgICAgIGljb246IFwiMDFkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMyxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiA0LjY5LFxuICAgICAgICBkZWc6IDI0NixcbiAgICAgICAgZ3VzdDogNy4wOCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDA5OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDk5NjgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjIuNyxcbiAgICAgICAgZmVlbHNfbGlrZTogMjIuMTcsXG4gICAgICAgIHRlbXBfbWluOiAyMi43LFxuICAgICAgICB0ZW1wX21heDogMjIuNyxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDQ0LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDEsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJmZXcgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwMmRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAyMixcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiA1LjU4LFxuICAgICAgICBkZWc6IDI1NCxcbiAgICAgICAgZ3VzdDogNy45MyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDEyOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTAwNzYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjEuODgsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIxLjQsXG4gICAgICAgIHRlbXBfbWluOiAyMS44OCxcbiAgICAgICAgdGVtcF9tYXg6IDIxLjg4LFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE0LFxuICAgICAgICBodW1pZGl0eTogNDksXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuNzUsXG4gICAgICAgIGRlZzogMjM1LFxuICAgICAgICBndXN0OiA4LjEsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAxNTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwMTg0MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIyLjQzLFxuICAgICAgICBmZWVsc19saWtlOiAyMS45MyxcbiAgICAgICAgdGVtcF9taW46IDIyLjQzLFxuICAgICAgICB0ZW1wX21heDogMjIuNDMsXG4gICAgICAgIHByZXNzdXJlOiAxMDE3LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTcsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGh1bWlkaXR5OiA0NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5NCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjY3LFxuICAgICAgICBkZWc6IDI0NCxcbiAgICAgICAgZ3VzdDogNy44MyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDE4OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTAyOTIwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTkuNjQsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE5LjEyLFxuICAgICAgICB0ZW1wX21pbjogMTkuNjQsXG4gICAgICAgIHRlbXBfbWF4OiAxOS42NCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTgsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxOCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDU2LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjgxLFxuICAgICAgICBkZWc6IDI1OSxcbiAgICAgICAgZ3VzdDogOC4zOCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIwIDIxOjAwOjAwXCIsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGR0OiAxNjYxMDQwMDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxNy41NCxcbiAgICAgICAgZmVlbHNfbGlrZTogMTcuMTgsXG4gICAgICAgIHRlbXBfbWluOiAxNy41NCxcbiAgICAgICAgdGVtcF9tYXg6IDE3LjU0LFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE1LFxuICAgICAgICBodW1pZGl0eTogNzAsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogOTgsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy40LFxuICAgICAgICBkZWc6IDI1MixcbiAgICAgICAgZ3VzdDogOC43OSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDAwOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTA1MDgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTYuODIsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2LjU3LFxuICAgICAgICB0ZW1wX21pbjogMTYuODIsXG4gICAgICAgIHRlbXBfbWF4OiAxNi44MixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDc3LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjA2LFxuICAgICAgICBkZWc6IDI0OCxcbiAgICAgICAgZ3VzdDogNy42MSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDAzOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTA2MTYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTYuNTUsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2LjMsXG4gICAgICAgIHRlbXBfbWluOiAxNi41NSxcbiAgICAgICAgdGVtcF9tYXg6IDE2LjU1LFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE0LFxuICAgICAgICBodW1pZGl0eTogNzgsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuMzgsXG4gICAgICAgIGRlZzogMjQzLFxuICAgICAgICBndXN0OiA3LjE2LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMjEgMDY6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYxMDcyNDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxNy4wNyxcbiAgICAgICAgZmVlbHNfbGlrZTogMTYuODcsXG4gICAgICAgIHRlbXBfbWluOiAxNy4wNyxcbiAgICAgICAgdGVtcF9tYXg6IDE3LjA3LFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE0LFxuICAgICAgICBodW1pZGl0eTogNzgsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUwMCxcbiAgICAgICAgICBtYWluOiBcIlJhaW5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gICAgICAgICAgaWNvbjogXCIxMGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAxMDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNC4wMyxcbiAgICAgICAgZGVnOiAyMjksXG4gICAgICAgIGd1c3Q6IDcuNSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4zMixcbiAgICAgIHJhaW46IHtcbiAgICAgICAgXCIzaFwiOiAwLjU1LFxuICAgICAgfSxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDA5OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTA4MzIwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTYuODksXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2LjY1LFxuICAgICAgICB0ZW1wX21pbjogMTYuODksXG4gICAgICAgIHRlbXBfbWF4OiAxNi44OSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDc3LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1MDAsXG4gICAgICAgICAgbWFpbjogXCJSYWluXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICAgICAgICAgIGljb246IFwiMTBkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuMjMsXG4gICAgICAgIGRlZzogMjQxLFxuICAgICAgICBndXN0OiA3LjU2LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjIsXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMC4yMixcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAxMjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwOTQwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIwLjQsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE5LjkzLFxuICAgICAgICB0ZW1wX21pbjogMjAuNCxcbiAgICAgICAgdGVtcF9tYXg6IDIwLjQsXG4gICAgICAgIHByZXNzdXJlOiAxMDE2LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTYsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTMsXG4gICAgICAgIGh1bWlkaXR5OiA1NSxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5MyxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjU5LFxuICAgICAgICBkZWc6IDI2MixcbiAgICAgICAgZ3VzdDogNi42NyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDE1OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTEwNDgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjAuOTYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIwLjQyLFxuICAgICAgICB0ZW1wX21pbjogMjAuOTYsXG4gICAgICAgIHRlbXBfbWF4OiAyMC45NixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMyxcbiAgICAgICAgaHVtaWRpdHk6IDUwLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA4MixcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjI1LFxuICAgICAgICBkZWc6IDI4NSxcbiAgICAgICAgZ3VzdDogNS4xNCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDE4OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTExNTYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTkuMzYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE4Ljc0LFxuICAgICAgICB0ZW1wX21pbjogMTkuMzYsXG4gICAgICAgIHRlbXBfbWF4OiAxOS4zNixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMyxcbiAgICAgICAgaHVtaWRpdHk6IDUzLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA3MixcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjAxLFxuICAgICAgICBkZWc6IDIyNyxcbiAgICAgICAgZ3VzdDogNC4yMyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDIxOjAwOjAwXCIsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGR0OiAxNjYxMTI2NDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxOC40LFxuICAgICAgICBmZWVsc19saWtlOiAxNy43OCxcbiAgICAgICAgdGVtcF9taW46IDE4LjQsXG4gICAgICAgIHRlbXBfbWF4OiAxOC40LFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogNTcsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDgxLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDEuNDksXG4gICAgICAgIGRlZzogMjM5LFxuICAgICAgICBndXN0OiAyLjY3LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJuXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMjIgMDA6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYxMTM3MjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxNi43NixcbiAgICAgICAgZmVlbHNfbGlrZTogMTYuMTYsXG4gICAgICAgIHRlbXBfbWluOiAxNi43NixcbiAgICAgICAgdGVtcF9tYXg6IDE2Ljc2LFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDExLFxuICAgICAgICBodW1pZGl0eTogNjQsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMyxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImJyb2tlbiBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDcxLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDAuOTcsXG4gICAgICAgIGRlZzogMjExLFxuICAgICAgICBndXN0OiAxLjEsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMiAwMzowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjExNDgwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE2Ljg5LFxuICAgICAgICBmZWVsc19saWtlOiAxNi4zMSxcbiAgICAgICAgdGVtcF9taW46IDE2Ljg5LFxuICAgICAgICB0ZW1wX21heDogMTYuODksXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA2NCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA4NSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAxLjAyLFxuICAgICAgICBkZWc6IDE0MSxcbiAgICAgICAgZ3VzdDogMi4wMixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIyIDA2OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTE1ODgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTkuMjcsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE4LjY0LFxuICAgICAgICB0ZW1wX21pbjogMTkuMjcsXG4gICAgICAgIHRlbXBfbWF4OiAxOS4yNyxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTQsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMSxcbiAgICAgICAgaHVtaWRpdHk6IDUzLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjQyLFxuICAgICAgICBkZWc6IDE2MyxcbiAgICAgICAgZ3VzdDogNC40MixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIyIDA5OjAwOjAwXCIsXG4gICAgfSxcbiAgXSxcbl07XG5cbi8vIGNvbnNvbGUubG9nKGNsZWFuRGF0YSk7XG5cbi8vIGNvbnN0IHRvZGF5RGF0ZSA9ICgpID0+IHtcbi8vICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbi8vICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuLy8gICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4vLyAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbi8vICAgcmV0dXJuIHl5eXkgKyBcIi1cIiArIG1tICsgXCItXCIgKyBkZDtcbi8vIH07XG5cbi8vIGNvbnN0IF9yZW1vdmVUb2RheSA9IChkYXRhKSA9PiB7XG4vLyAgIGNvbnN0IHJlbW92ZSA9IGRhdGE7XG4vLyAgIGZvciAobGV0IG8gPSAwOyBvIDwgcmVtb3ZlLmxlbmd0aDsgbysrKSB7XG4vLyAgICAgaWYgKGRhdGFbb11bMF0uZHRfdHh0LmluZGV4T2YodG9kYXlEYXRlKCkpID4gLTEpIHtcbi8vICAgICAgIHJlbW92ZS5zcGxpY2UobywgMSk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIHJldHVybiByZW1vdmU7XG4vLyB9O1xuXG4vLyBjb25zdCBfbnVtYmVyT2ZEYXlzID0gKGRhdGEpID0+IChkYXRhLmxlbmd0aCA9PT0gNCA/IGNvbnNvbGUubG9nKFwiYWRkIGNsYXNzIHRvIHNob3cgNFwiKSA6IGNvbnNvbGUubG9nKFwiYWRkIGNsYXNzIHRvIHNob3cgNVwiKSk7XG5cbi8vIF9udW1iZXJPZkRheXMoX3JlbW92ZVRvZGF5KGNsZWFuRGF0YSkpO1xuIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwidGVtcGVyYXR1cmUiLCJkZXNjcmlwdGlvbiIsIm1pblRlbXAiLCJtYXhUZW1wIiwiZmVlbHNMaWtlIiwibG9hZGluZyIsImxvYWRDbG91ZHMiLCJsb2FkSHVtaWQiLCJsb2FkV2luZCIsImZvcmVjYXN0cyIsImZvcmVXcmFwIiwiZG9tTWFuaXB1bGF0aW9uIiwidXBkYXRlQ3VycmVudCIsImRhdGEiLCJfbG9jYXRpb24iLCJfQ3VycmVudFRlbXAiLCJfRGVzY3JpcHRpb24iLCJfbWluVGVtcCIsIl9tYXhUZW1wIiwiX2ZlZWxzTGlrZSIsIl9sb2FkaW5nIiwidXBkYXRlRm9yZWNhc3QiLCJvcmdhbml6ZWREYXRhIiwiX3NwbGl0RGF0YUJ5RGF5cyIsImNsZWFuRGF0YSIsIl9yZW1vdmVUb2RheSIsIl9udW1EYXlzIiwiX2ZvcmVjYXN0IiwiaW5uZXJUZXh0IiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJpbm5lckhUTUwiLCJmb3JtYXRUZW1wQ2VsIiwiTWF0aCIsInJvdW5kIiwibWFpbiIsInRlbXAiLCJ3ZWF0aGVyIiwidGVtcF9taW4iLCJ0ZW1wX21heCIsImZlZWxzX2xpa2UiLCJzZXRBdHRyaWJ1dGUiLCJjbG91ZHMiLCJhbGwiLCJodW1pZGl0eSIsIl9sb2FkaW5nQ2lyY2xlIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwiZm9ybWF0VGVtcCIsImNvdW50ZXJzIiwiQXJyYXkiLCJpbnRlcnZhbHMiLCJmaWxsIiwiZm9yRWFjaCIsIm51bWJlciIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJjbGVhckludGVydmFsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb25zb2xlIiwibG9nIiwieCIsIm1heCIsIm1pbiIsInF1ZXJ5U2VsZWN0b3IiLCJkdF90eHQiLCJzcGxpdCIsImZvcmUiLCJfdG9kYXlEYXRlIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwicmVtb3ZlIiwibyIsImluZGV4T2YiLCJzcGxpY2UiLCJmb3JlY2FzdERheXMiLCJmb3JlY2FzdCIsImkiLCJsaXN0IiwicHVzaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIndlYXRoZXJBcHAiLCJ2YWx1ZXMiLCJsb2MiLCJsaW1pdCIsInVuaXRzIiwiYXBpS2V5IiwiY29vcmRVcmwiLCJjb29yZCIsInRvZGF5VXJsIiwiZm9yZVVybCIsImlucHV0RWxlbSIsImlucHV0IiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiZ2V0RGF0YSIsInZhbCIsInJlcXVlc3REYXRhIiwidGhlbiIsImxhdCIsImxvbiIsInVybCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImFsZXJ0IiwiZHQiLCJwcmVzc3VyZSIsInNlYV9sZXZlbCIsImdybmRfbGV2ZWwiLCJ0ZW1wX2tmIiwiaWQiLCJpY29uIiwid2luZCIsInNwZWVkIiwiZGVnIiwiZ3VzdCIsInZpc2liaWxpdHkiLCJwb3AiLCJyYWluIiwicG9kIl0sInNvdXJjZVJvb3QiOiIifQ==
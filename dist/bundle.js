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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
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
      var min = null;
      var getDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(data[x][0].dt_txt.split(" ")[0])); // Date - Day

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".day").innerText = getDay.toString().split(" ")[0]; // Min / Max

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
  }; // const result = startOfDay(new Date("2022-08-18"));
  // console.log(result);


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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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

var _todayDate = function _todayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!

  var yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsYUFBYSxjQUFjLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsY0FBYyxZQUFZLFdBQVcsWUFBWSwrdUJBQSt1QixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLHdKQUF3SixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUsMkJBQTJCLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsNkRBQTZELGtCQUFrQixrQkFBa0IsR0FBRyxTQUFTLDhCQUE4QixzQkFBc0IsR0FBRyw4REFBOEQsa0JBQWtCLEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLEdBQUcsOEJBQThCLGdCQUFnQixnQ0FBZ0Msa0VBQWtFLEdBQUcsY0FBYyxtQ0FBbUMscUVBQXFFLEdBQUcsY0FBYyxpQ0FBaUMsbUVBQW1FLEdBQUcsY0FBYyxzQ0FBc0Msd0VBQXdFLEdBQUcsY0FBYyxnQ0FBZ0Msa0VBQWtFLEdBQUcsd0NBQXdDLHVCQUF1QixxQkFBcUIsd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHVFQUF1RSwrREFBK0QsbUZBQW1GLDJFQUEyRSxXQUFXLG9CQUFvQixtQ0FBbUMsd0JBQXdCLDBDQUEwQyxrQ0FBa0Msd0JBQXdCLCtCQUErQiwwQkFBMEIsS0FBSyxpREFBaUQsbUNBQW1DLDBCQUEwQix3QkFBd0IsK0JBQStCLEtBQUssNkNBQTZDLHdDQUF3QywwQkFBMEIsd0JBQXdCLCtCQUErQixLQUFLLDZDQUE2QyxrQ0FBa0MseUJBQXlCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLEtBQUssdUNBQXVDLHlCQUF5QiwyQkFBMkIsOEJBQThCLGNBQWMsMkJBQTJCLE9BQU8sS0FBSyw4QkFBOEIseUJBQXlCLG1CQUFtQiw0QkFBNEIsOEJBQThCLE9BQU8sZ0VBQWdFLDRCQUE0QixPQUFPLGFBQWEsNEJBQTRCLE9BQU8sMkRBQTJELDBCQUEwQiw4QkFBOEIsT0FBTyxxQkFBcUIscUJBQXFCLG9CQUFvQiw2QkFBNkIsOEJBQThCLE9BQU8sS0FBSyxHQUFHLHFDQUFxQyxnQ0FBZ0MsOEJBQThCLGtCQUFrQix3QkFBd0Isd0JBQXdCLHFCQUFxQixvQkFBb0IsaURBQWlELHdCQUF3Qiw0QkFBNEIsdUJBQXVCLHNCQUFzQix1Q0FBdUMsZ0NBQWdDLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHdCQUF3QixrQ0FBa0MsOEJBQThCLG1CQUFtQiwrQ0FBK0MsZ0NBQWdDLGlDQUFpQyw0QkFBNEIsNkJBQTZCLFdBQVcsb0JBQW9CLDhDQUE4QywyQ0FBMkMseUNBQXlDLHNDQUFzQyw4QkFBOEIsOEJBQThCLCtCQUErQix5QkFBeUIsd0NBQXdDLHlCQUF5Qix3QkFBd0IsaUNBQWlDLG9DQUFvQyxnQ0FBZ0MsZ0NBQWdDLDRCQUE0QixXQUFXLFNBQVMsY0FBYyw2QkFBNkIsNkJBQTZCLHNDQUFzQyw0QkFBNEIsd0JBQXdCLGtDQUFrQyw4QkFBOEIscUNBQXFDLHVCQUF1Qix5QkFBeUIsaUNBQWlDLG9DQUFvQyxnQ0FBZ0MsNEJBQTRCLHlCQUF5Qix3QkFBd0IsK0JBQStCLDRDQUE0QywwRkFBMEYsa0NBQWtDLDJDQUEyQyxXQUFXLFNBQVMsT0FBTyxrQkFBa0Isc0JBQXNCLDhDQUE4QyxtREFBbUQsa0JBQWtCLDZCQUE2QixnQ0FBZ0MsU0FBUyxvQkFBb0IsNkJBQTZCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLDRCQUE0QixtQkFBbUIsdUNBQXVDLFdBQVcsU0FBUyxtQkFBbUIsNkJBQTZCLCtCQUErQix3QkFBd0Isc0NBQXNDLFNBQVMsaUJBQWlCLDZCQUE2QixTQUFTLGlCQUFpQiw2QkFBNkIsU0FBUyxtQ0FBbUMsd0JBQXdCLHdEQUF3RCxrQ0FBa0Msc0JBQXNCLDZCQUE2QixTQUFTLGlCQUFpQix3QkFBd0IsU0FBUyxPQUFPLG1CQUFtQixzQkFBc0IsMkJBQTJCLDZCQUE2QixzQ0FBc0MsNEJBQTRCLGNBQWMsd0JBQXdCLGtDQUFrQyw4QkFBOEIsOENBQThDLG1CQUFtQiwwQkFBMEIsb0NBQW9DLDhCQUE4QixpQ0FBaUMsYUFBYSxXQUFXLGVBQWUsNEJBQTRCLDJCQUEyQixXQUFXLFNBQVMsbUJBQW1CLHVCQUF1Qix3QkFBd0IsMkJBQTJCLHFCQUFxQiw4QkFBOEIsa0RBQWtELGtDQUFrQyxTQUFTLE9BQU8sNkJBQTZCLCtEQUErRCx3QkFBd0IsU0FBUyxPQUFPLEtBQUssMkNBQTJDLG9CQUFvQiw2QkFBNkIsOEJBQThCLHlCQUF5QixtQkFBbUIsdUNBQXVDLDhDQUE4Qyw4QkFBOEIsNEJBQTRCLEtBQUssNkJBQTZCLGdDQUFnQyxvQkFBb0IsOEJBQThCLDZCQUE2Qiw2QkFBNkIsbUJBQW1CLHlCQUF5QiwrQkFBK0IscUJBQXFCLDJCQUEyQix3QkFBd0IseUJBQXlCLG9EQUFvRCxvQ0FBb0MscUNBQXFDLDBCQUEwQiwrQkFBK0IsS0FBSyxHQUFHLHFCQUFxQjtBQUM5eG5CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OytDQ0NBOzs7Ozs7QUFEQTtDQUdBOztBQUVBLElBQU1DLFVBQVUsR0FBSSxZQUFNO0VBQ3hCO0VBQ0EsSUFBTUMsTUFBTSxHQUFHO0lBQ2JDLEdBQUcsRUFBRSxJQURRO0lBRWJDLEtBQUssRUFBRSxHQUZNO0lBR2JDLEtBQUssRUFBRSxlQUhNO0lBSWJDLE1BQU0sRUFBRSxrQ0FKSztJQUtiQyxRQUFRLEVBQUUsa0RBTEc7SUFNYkMsS0FBSyxFQUFFLElBTk07SUFPYkMsUUFBUSxFQUFFLHNEQVBHO0lBUWI1QixLQUFLLEVBQUUsSUFSTTtJQVNiNkIsT0FBTyxFQUFFLHVEQVRJO0lBVWIvQixJQUFJLEVBQUU7RUFWTyxDQUFmLENBRndCLENBZXhCOztFQUNBLElBQU1nQyxTQUFTLEdBQUksWUFBTTtJQUN2QixJQUFNQyxLQUFLLEdBQUdiLFFBQVEsQ0FBQ3RCLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWQ7SUFDQSxJQUFNb0MsTUFBTSxHQUFHZCxRQUFRLENBQUN0QixhQUFULENBQXVCLG9CQUF2QixDQUFmLENBRnVCLENBR3ZCOztJQUNBb0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO01BQ3JDO01BQ0FaLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhUyxLQUFLLENBQUNHLEtBQW5CO01BQ0FDLE9BQU8sQ0FBQ2QsTUFBTSxDQUFDQyxHQUFSLENBQVAsQ0FIcUMsQ0FJckM7TUFDQTtNQUNBO01BQ0E7SUFDRCxDQVJEO0VBU0QsQ0FiaUIsRUFBbEIsQ0FoQndCLENBK0J4Qjs7O0VBQ0EsSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFTO0lBQ3ZCQyxXQUFXLENBQUNoQixNQUFNLENBQUNLLFFBQVAsR0FBa0JVLEdBQWxCLEdBQXdCLFNBQXhCLEdBQW9DZixNQUFNLENBQUNFLEtBQTNDLEdBQW1ELFNBQW5ELEdBQStERixNQUFNLENBQUNJLE1BQXZFLENBQVgsQ0FBMEZhLElBQTFGLENBQStGLFVBQUNYLEtBQUQsRUFBVztNQUN4R3hDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdUMsS0FBWjtNQUNBTixNQUFNLENBQUNNLEtBQVAsR0FBZUEsS0FBSyxDQUFDLENBQUQsQ0FBcEIsQ0FGd0csQ0FHeEc7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBOztNQUNBVSxXQUFXLENBQUNoQixNQUFNLENBQUNRLE9BQVAsR0FBaUJGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU1ksR0FBMUIsR0FBZ0MsT0FBaEMsR0FBMENaLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2EsR0FBbkQsR0FBeUQsU0FBekQsR0FBcUVuQixNQUFNLENBQUNJLE1BQTVFLEdBQXFGSixNQUFNLENBQUNHLEtBQTdGLENBQVgsQ0FBK0djLElBQS9HLENBQW9ILFVBQUN4QixRQUFELEVBQWM7UUFDaElsRixtRUFBQSxDQUErQmtGLFFBQS9CO01BQ0QsQ0FGRDtJQUdELENBWkQ7RUFhRCxDQWRELENBaEN3QixDQWdEeEI7OztFQWhEd0IsU0FpRFR1QixXQWpEUztJQUFBO0VBQUE7O0VBQUE7SUFBQSwwRUFpRHhCLGlCQUEyQkksR0FBM0I7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Y0FBQTtjQUFBLE9BRTJCQyxLQUFLLENBQUNELEdBQUQsRUFBTTtnQkFBRUUsSUFBSSxFQUFFO2NBQVIsQ0FBTixDQUZoQzs7WUFBQTtjQUVVQyxRQUZWO2NBQUE7Y0FBQSxPQUd1QkEsUUFBUSxDQUFDQyxJQUFULEVBSHZCOztZQUFBO2NBR1UvRyxJQUhWO2NBQUEsaUNBSVdBLElBSlg7O1lBQUE7Y0FBQTtjQUFBO2NBTUlnSCxLQUFLLGFBQUwsQ0FOSixDQU1nQjs7WUFOaEI7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FqRHdCO0lBQUE7RUFBQTtBQTBEekIsQ0ExRGtCLEVBQW5COztBQTREQSxJQUFNL0MsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtFQUN2QixJQUFJQyxLQUFLLEdBQUcsSUFBSVAsSUFBSixFQUFaO0VBQ0EsSUFBSVEsRUFBRSxHQUFHQyxNQUFNLENBQUNGLEtBQUssQ0FBQ0csT0FBTixFQUFELENBQU4sQ0FBd0JDLFFBQXhCLENBQWlDLENBQWpDLEVBQW9DLEdBQXBDLENBQVQ7RUFDQSxJQUFJQyxFQUFFLEdBQUdILE1BQU0sQ0FBQ0YsS0FBSyxDQUFDTSxRQUFOLEtBQW1CLENBQXBCLENBQU4sQ0FBNkJGLFFBQTdCLENBQXNDLENBQXRDLEVBQXlDLEdBQXpDLENBQVQsQ0FIdUIsQ0FHaUM7O0VBQ3hELElBQUlHLElBQUksR0FBR1AsS0FBSyxDQUFDUSxXQUFOLEVBQVg7RUFDQSxPQUFPRCxJQUFJLEdBQUcsR0FBUCxHQUFhRixFQUFiLEdBQWtCLEdBQWxCLEdBQXdCSixFQUEvQjtBQUNELENBTkQsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBsb2NhdGlvbixcbiAgdGVtcGVyYXR1cmUsXG4gIGRlc2NyaXB0aW9uLFxuICBtaW5UZW1wLFxuICBtYXhUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGxvYWRpbmcsXG4gIGxvYWRDbG91ZHMsXG4gIGxvYWRIdW1pZCxcbiAgbG9hZFdpbmQsXG4gIGZvcmVjYXN0cyxcbiAgZm9yZVdyYXAsXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgX2xvY2F0aW9uKGRhdGEpO1xuICAgIF9DdXJyZW50VGVtcChkYXRhKTtcbiAgICBfRGVzY3JpcHRpb24oZGF0YSk7XG4gICAgX21pblRlbXAoZGF0YSk7XG4gICAgX21heFRlbXAoZGF0YSk7XG4gICAgX2ZlZWxzTGlrZShkYXRhKTtcbiAgICBfbG9hZGluZyhkYXRhKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVGb3JlY2FzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemVkRGF0YSA9IF9zcGxpdERhdGFCeURheXMoZGF0YSk7XG4gICAgY29uc3QgY2xlYW5EYXRhID0gX3JlbW92ZVRvZGF5KG9yZ2FuaXplZERhdGEpO1xuICAgIF9udW1EYXlzKGNsZWFuRGF0YSk7XG4gICAgX2ZvcmVjYXN0KGNsZWFuRGF0YSk7XG4gIH07XG5cbiAgLy8gRE9NIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBfbG9jYXRpb24gPSAoZGF0YSkgPT4gKGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubmFtZSArIFwiLCBcIiArIGRhdGEuc3lzLmNvdW50cnkpO1xuICBjb25zdCBfQ3VycmVudFRlbXAgPSAoZGF0YSkgPT4gKHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGZvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCkpKTtcbiAgY29uc3QgX0Rlc2NyaXB0aW9uID0gKGRhdGEpID0+IChkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICBjb25zdCBfbWluVGVtcCA9IChkYXRhKSA9PiAobWluVGVtcC5pbm5lckhUTUwgPSBcIk1pbiBUZW1wOiBcIiArIGZvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pKSk7XG4gIGNvbnN0IF9tYXhUZW1wID0gKGRhdGEpID0+IChtYXhUZW1wLmlubmVySFRNTCA9IFwiTWF4IFRlbXA6IFwiICsgZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkpKTtcbiAgY29uc3QgX2ZlZWxzTGlrZSA9IChkYXRhKSA9PiAoZmVlbHNMaWtlLmlubmVySFRNTCA9IFwiRmVlbHMgbGlrZTogXCIgKyBmb3JtYXRUZW1wQ2VsKE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpKSk7XG4gIGNvbnN0IF9sb2FkaW5nID0gKGRhdGEpID0+IHtcbiAgICBsb2FkQ2xvdWRzLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5jbG91ZHMuYWxsKSk7XG4gICAgbG9hZEh1bWlkLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KSk7XG4gICAgbG9hZEh1bWlkLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KSk7XG4gICAgX2xvYWRpbmdDaXJjbGUoKTtcbiAgfTtcblxuICBjb25zdCBfbnVtRGF5cyA9IChkYXRhKSA9PiAoZGF0YS5sZW5ndGggPT09IDQgPyAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdCBmb3VyLWRheXNcIikgOiAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdFwiKSk7XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBGb3JtYXQgQ2Vsc2l1c1xuICBjb25zdCBmb3JtYXRUZW1wQ2VsID0gKHRlbXApID0+IHRlbXAgKyAnPHNwYW4gY2xhc3M9XCJkZWctc3ltYm9sXCI+JiMxNzY7PHNwYW4gY2xhc3M9XCJtaW51c1wiPi08L3NwYW4+PC9zcGFuPkMnO1xuICBjb25zdCBmb3JtYXRUZW1wID0gKHRlbXApID0+IHRlbXAgKyAnPHNwYW4gY2xhc3M9XCJkZWctc3ltYm9sXCI+JiMxNzY7PHNwYW4gY2xhc3M9XCJtaW51c1wiPi08L3NwYW4+PC9zcGFuPic7XG4gIC8vIEFuaW1hdGUgbG9hZGluZyBjaXJjbGVcbiAgY29uc3QgX2xvYWRpbmdDaXJjbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnRlcnMgPSBBcnJheShsb2FkaW5nLmxlbmd0aCk7XG4gICAgY29uc3QgaW50ZXJ2YWxzID0gQXJyYXkobG9hZGluZy5sZW5ndGgpO1xuICAgIGNvdW50ZXJzLmZpbGwoMCk7XG4gICAgbG9hZGluZy5mb3JFYWNoKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICBpbnRlcnZhbHNbaW5kZXhdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRlcnNbaW5kZXhdID09IHBhcnNlSW50KG51bWJlci5kYXRhc2V0Lm51bSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXJzW2luZGV4XSArPSAxO1xuICAgICAgICAgIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHVtaWRcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjZmRlZjVkLCAjZmZhNTU3IGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG91ZHNcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjOTdEQUY1LCAjMzFCOERGIGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoI0ZGRkZGRiAwZGVnKSwgIzk3REFGNSwgIzMxQjhERiBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbnVtYmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgY291bnRlcnNbaW5kZXhdICsgXCIlXCIpO1xuICAgICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBjb3VudGVyc1tpbmRleF0gKyBcIiVcIjtcbiAgICAgICAgfVxuICAgICAgfSwgMTUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IF9mb3JlY2FzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgY29uc3QgZ2V0RGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZShkYXRhW3hdWzBdLmR0X3R4dC5zcGxpdChcIiBcIilbMF0pKTtcbiAgICAgIC8vIERhdGUgLSBEYXlcbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLmRheVwiKS5pbm5lclRleHQgPSBnZXREYXkudG9TdHJpbmcoKS5zcGxpdChcIiBcIilbMF07XG4gICAgICAvLyBNaW4gLyBNYXhcbiAgICAgIGZvciAoY29uc3QgZm9yZSBvZiBkYXRhW3hdKSB7XG4gICAgICAgIGlmIChtYXggPT09IG51bGwgJiYgbWluID09PSBudWxsKSB7XG4gICAgICAgICAgbWF4ID0gZm9yZS5tYWluLnRlbXBfbWF4O1xuICAgICAgICAgIG1pbiA9IGZvcmUubWFpbi50ZW1wX21pbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JlLm1haW4udGVtcF9tYXggPiBtYXggPyAobWF4ID0gZm9yZS5tYWluLnRlbXBfbWF4KSA6IChtYXggPSBtYXgpO1xuICAgICAgICAgIGZvcmUubWFpbi50ZW1wX21pbiA8IG1pbiA/IChtaW4gPSBmb3JlLm1haW4udGVtcF9taW4pIDogKG1pbiA9IG1pbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLm1pblwiKS5pbm5lckhUTUwgPSBcIi9cIiArIGZvcm1hdFRlbXAoTWF0aC5yb3VuZChtaW4pKTtcbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLm1heFwiKS5pbm5lckhUTUwgPSBmb3JtYXRUZW1wKE1hdGgucm91bmQobWF4KSk7XG4gICAgfVxuICAgIC8vIEltYWdlXG4gIH07XG5cbiAgY29uc3QgX3RvZGF5RGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBsZXQgbW0gPSBTdHJpbmcodG9kYXkuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy9KYW51YXJ5IGlzIDAhXG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiB5eXl5ICsgXCItXCIgKyBtbSArIFwiLVwiICsgZGQ7XG4gIH07XG5cbiAgY29uc3QgX3JlbW92ZVRvZGF5ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCByZW1vdmUgPSBkYXRhO1xuICAgIGZvciAobGV0IG8gPSAwOyBvIDwgcmVtb3ZlLmxlbmd0aDsgbysrKSB7XG4gICAgICBpZiAoZGF0YVtvXVswXS5kdF90eHQuaW5kZXhPZihfdG9kYXlEYXRlKCkpID4gLTEpIHtcbiAgICAgICAgcmVtb3ZlLnNwbGljZShvLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZTtcbiAgfTtcblxuICBjb25zdCBfc3BsaXREYXRhQnlEYXlzID0gKGRhdGEpID0+IHtcbiAgICBsZXQgZm9yZWNhc3REYXlzID0gW107XG4gICAgbGV0IGZvcmVjYXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmb3JlY2FzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLmxpc3RbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcmVjYXN0WzBdLmR0X3R4dC5pbmRleE9mKGRhdGEubGlzdFtpXS5kdF90eHQuc3BsaXQoXCIgXCIpWzBdKSA+IC0xKSB7XG4gICAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLmxpc3RbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcmVjYXN0RGF5cy5wdXNoKGZvcmVjYXN0KTtcbiAgICAgICAgICBmb3JlY2FzdCA9IFtdO1xuICAgICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmxpc3QubGVuZ3RoIC0gMSA9PT0gaSkge1xuICAgICAgICAgIGZvcmVjYXN0RGF5cy5wdXNoKGZvcmVjYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3REYXlzO1xuICB9O1xuXG4gIC8vIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoXCIyMDIyLTA4LTE4XCIpKTtcbiAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50LCB1cGRhdGVGb3JlY2FzdCB9O1xufSkoKTtcblxuZXhwb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmludHJvIC5sb2NhdGlvblwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLnRlbXBcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwIC5kZXNjXCIpO1xuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5taW4tdGVtcFwiKTtcbmNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAubWF4LXRlbXBcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAuZmVlbHMtbGlrZVwiKTtcbmNvbnN0IGxvYWRDbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAuY2xvdWRzXCIpO1xuY29uc3QgbG9hZEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTIgLmh1bWlkXCIpO1xuY29uc3QgbG9hZFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAud2luZFwiKTtcbmNvbnN0IGZvcmVjYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgLmZvcmVcIik7XG5jb25zdCBmb3JlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5sZXQgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtaXRlbVwiKTtcblxuZXhwb3J0IHsgbG9jYXRpb24sIHRlbXBlcmF0dXJlLCBkZXNjcmlwdGlvbiwgbWluVGVtcCwgbWF4VGVtcCwgZmVlbHNMaWtlLCBsb2FkaW5nLCBsb2FkQ2xvdWRzLCBsb2FkSHVtaWQsIGxvYWRXaW5kLCBmb3JlY2FzdHMsIGZvcmVXcmFwIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1FeHRyYUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSZXNldCBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5ib2R5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbjpyb290IC5kZWctc3ltYm9sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbjpyb290IC5kZWctc3ltYm9sIC5taW51cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbjpyb290IC5jdXJyZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmxvY2F0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBmb250LXNpemU6IDQuNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNXJlbTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAuZGF0ZSxcXG46cm9vdCAuY3VycmVudCAudGltZSxcXG46cm9vdCAuY3VycmVudCAuZGVzYy0xIGxpLFxcbjpyb290IC5jdXJyZW50IC5kZXNjLTIgbGkgc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC50ZW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDhyZW07XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxpbmUtaGVpZ2h0OiA4NCU7XFxufVxcbjpyb290IC5jdXJyZW50IC5kZXNjLFxcbjpyb290IC5jdXJyZW50IC5mb3JlY2FzdCAuZGF5LFxcbjpyb290IC5jdXJyZW50IC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLnRlbXAtaW1nIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgbWF4LWhlaWdodDogMTMuNjI1cmVtO1xcbn1cXG5cXG4jd2VhdGhlci1hcHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAgcGFkZGluZzogMS44NTdyZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIGlucHV0IHtcXG4gIGJvcmRlcjogMC4xNDNyZW0gc29saWQgI2EwYTBhMDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAgYnV0dG9uIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIGgxIC5sb2dvLXN1biB7XFxuICBmb250LXNpemU6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZWY1ZDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AgcmlnaHQsICNmZGVmNWQsICNmZmE1NTcpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzMzMzMzMztcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5pbnRybyB7XFxuICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLXdyYXAge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtd3JhcCAuZGVzYyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtaW1nIHtcXG4gIGdyaWQtYXJlYTogMi8zLzMvNTtcXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMSB7XFxuICBncmlkLWFyZWE6IDMvMS80LzU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZ3JpZC1hcmVhOiA0LzEvNS81O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0xLFxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyLjVyZW07XFxuICBtYXJnaW46IDEuODc1cmVtIDA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTIge1xcbiAgZ2FwOiA2LjU2M3JlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpID4gZGl2IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGNvbG9yOiAjYTBhMGEwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgaW1nIHtcXG4gIG1heC13aWR0aDogN3JlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgLnNlcGFyYXRlIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgd2lkdGg6IDZweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm91ci1kYXlzLmZvcmVjYXN0IC5mb3JlOm50aC1vZi10eXBlKDkpLFxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3VyLWRheXMuZm9yZWNhc3QgLnNlcGFyYXRlOm50aC1vZi10eXBlKDgpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGFuaW1hdGlvbjogMC40cyBlYXNlLW91dCByZXZlcnNlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUFBO0FBQ0E7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQUY7O0FERUEsZ0RBQUE7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtBQ0dGOztBRERBOztFQUVFLGdCQUFBO0FDSUY7O0FERkE7O0VBRUUsWUFBQTtBQ0tGOztBREhBOzs7O0VBSUUsV0FBQTtFQUNBLGFBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURMQTs7OztFQUlFLGFBQUE7QUNRRjs7QUROQTtF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RSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBb0dSO0FBbEdRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBb0dWO0FBbEdVO0VBQ0UsY0E1T0M7QUFnVmI7QUFqR1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQW1HVjtBQWhHTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0F2UE07RUF3UE4sbUVBcFBhO0VBcVBiLDJEQXBQSztBQXNWYjtBQTdGTTs7RUFFRSxhQUFBO0FBK0ZSO0FBekZFO0VBQ0UsYUFBQTtFQUNBLFlBclFhO0VBc1FiLGFBdFFhO0VBdVFiLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUVBelFpQjtFQTBRakIsMkRBelFTO0VBMFFULHFCQUFBO0FBMkZKO0FBeEZFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBcFJhO0VBcVJiLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQTFSVTtFQTJSVixjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBelJ1QjtFQTBSdkIsaUVBelJlO0VBMFJmLDRCQUFBO0VBQ0EsY0FyU1U7RUFzU1Ysd0JBQUE7QUEwRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9yZXNldC5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4vLyBWYXJpYWJsZXNcXG4kYmxhY2stY29sb3I6ICMzMzMzMzM7XFxuJGdyZXktY29sb3I6ICNhMGEwYTA7XFxuJGJnLWNvbG9yOiAjZjBmMGYwO1xcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcXG4keWVsbG93LWNvbG9yOiAjZmRlZjVkO1xcbiRvcmFuZ2UtY29sb3I6ICNmZmE1NTc7XFxuJGxvYWRpbmctY2lyY2xlOiAxMHJlbTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcblxcbiAgLy8gVGl0bGUgTWFpblxcbiAgQG1peGluIG1haW4tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgICBmb250LXNpemU6IDQuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgfVxcblxcbiAgLy8gRGVzY3JpcHRpb24gU21hbGxcXG4gIEBtaXhpbiBzbWFsbC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBNaWRcXG4gIEBtaXhpbiBtaWQtZGVzYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxuXFxuICAvLyBXZWF0aGVyIFRpdGxlXFxuICBAbWl4aW4gdGVtcC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICAgIC8vIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogODQlO1xcbiAgfVxcblxcbiAgLy8gRGVncmVlIFN5bWJvbFxcbiAgLmRlZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLm1pbnVzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFN0eWxpbmdcXG4gIC5jdXJyZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIEBpbmNsdWRlIG1haW4tdGl0bGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICB9XFxuICAgIC5kYXRlLFxcbiAgICAudGltZSxcXG4gICAgLmRlc2MtMSBsaSxcXG4gICAgLmRlc2MtMiBsaSBzcGFuIHtcXG4gICAgICBAaW5jbHVkZSBzbWFsbC1kZXNjO1xcbiAgICB9XFxuICAgIC50ZW1wIHtcXG4gICAgICBAaW5jbHVkZSB0ZW1wLXRpdGxlO1xcbiAgICB9XFxuICAgIC5kZXNjLFxcbiAgICAuZm9yZWNhc3QgLmRheSxcXG4gICAgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gICAgICBAaW5jbHVkZSBtaWQtZGVzYztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLnRlbXAtaW1nIGltZyB7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBMYXlvdXQgc3R5bGluZ1xcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuXFxuICAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgcGFkZGluZzogMS44NTdyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLnRpdGxlLXNlYXJjaCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxuXFxuICAgICAgLmlucHV0LXdyYXAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGJvcmRlcjogMC4xNDNyZW0gc29saWQgJGdyZXktY29sb3I7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbiAgICAgICAgLmxvZ28tc3VuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAkeWVsbG93LWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2stY29sb3I7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcbiAgICAgIC5pbnRybyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLXdyYXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgICAgIC5kZXNjIHtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLWltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTEge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNC8xLzUvNTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2MtMSxcXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdhcDogNi41NjNyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgY29sb3I6ICRncmV5LWNvbG9yO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDdyZW07XFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuc2VwYXJhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm91ci1kYXlzLmZvcmVjYXN0IHtcXG4gICAgICAuZm9yZTpudGgtb2YtdHlwZSg5KSxcXG4gICAgICAuc2VwYXJhdGU6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIExvYWRpbmcgQ2lyY2xlXFxuICAucHJvZ3Jlc3MtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGhlaWdodDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgYW5pbWF0aW9uOiAwLjRzIGVhc2Utb3V0IHJldmVyc2U7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gIH1cXG5cXG4gIC5wcm9ncmVzcy1pdGVtOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctaW5zZXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbi8vIGltcG9ydCBjaXR5RGF0YSBmcm9tIFwiLi9kYXRhL2NpdHkubGlzdC5qc29uXCI7XG5cbmNvbnN0IHdlYXRoZXJBcHAgPSAoKCkgPT4ge1xuICAvLyBTdG9yZSB2YWx1ZXNcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIGxvYzogbnVsbCxcbiAgICBsaW1pdDogXCI1XCIsXG4gICAgdW5pdHM6IFwiJnVuaXRzPW1ldHJpY1wiLFxuICAgIGFwaUtleTogXCJlMmY4OGE2NGVkYjI2OTA4ZjJjOGE4MzZlMGY4N2MxOVwiLFxuICAgIGNvb3JkVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVwiLFxuICAgIGNvb3JkOiBudWxsLFxuICAgIHRvZGF5VXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD1cIixcbiAgICB0b2RheTogbnVsbCxcbiAgICBmb3JlVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9XCIsXG4gICAgZm9yZTogbnVsbCxcbiAgfTtcblxuICAvLyBJbnB1dCBlbGVtZW50IHRvIGdldCBjbGllbnQgbG9jYXRpb25cbiAgY29uc3QgaW5wdXRFbGVtID0gKCgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtd3JhcCBpbnB1dFwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXdyYXAgYnV0dG9uXCIpO1xuICAgIC8vIFZhbGlkYXRlIHZhbHVlIGJlZm9yZSBtYWtpbmcgQVBJIGNhbGxcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdmFsdWVzLmxvYyA9IGlucHV0LnZhbHVlO1xuICAgICAgZ2V0RGF0YSh2YWx1ZXMubG9jKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaW52YWxpZFwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaW5wdXQudmFsaWRpdHkpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIEZldGNoIHdlYXRoZXIgRGF0YVxuICBjb25zdCBnZXREYXRhID0gKHZhbCkgPT4ge1xuICAgIHJlcXVlc3REYXRhKHZhbHVlcy5jb29yZFVybCArIHZhbCArIFwiJmxpbWl0PVwiICsgdmFsdWVzLmxpbWl0ICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMuYXBpS2V5KS50aGVuKChjb29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coY29vcmQpO1xuICAgICAgdmFsdWVzLmNvb3JkID0gY29vcmRbMF07XG4gICAgICAvLyBDdXJyZW50IGZldGNoXG4gICAgICAvLyByZXF1ZXN0RGF0YSh2YWx1ZXMudG9kYXlVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy5hcGlLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oKGN1cnJlbnQpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAvLyAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyBGb3JlY2FzdCBmZXRjaFxuICAgICAgcmVxdWVzdERhdGEodmFsdWVzLmZvcmVVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy5hcGlLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oKGZvcmVjYXN0KSA9PiB7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBGZXRjaCByZXF1ZXN0IGZ1bmN0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7IC8vIFR5cGVFcnJvcjogZmFpbGVkIHRvIGZldGNoXG4gICAgfVxuICB9XG59KSgpO1xuXG5jb25zdCBfdG9kYXlEYXRlID0gKCkgPT4ge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4geXl5eSArIFwiLVwiICsgbW0gKyBcIi1cIiArIGRkO1xufTtcbiJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsInRlbXBlcmF0dXJlIiwiZGVzY3JpcHRpb24iLCJtaW5UZW1wIiwibWF4VGVtcCIsImZlZWxzTGlrZSIsImxvYWRpbmciLCJsb2FkQ2xvdWRzIiwibG9hZEh1bWlkIiwibG9hZFdpbmQiLCJmb3JlY2FzdHMiLCJmb3JlV3JhcCIsInN0YXJ0T2ZEYXkiLCJkb21NYW5pcHVsYXRpb24iLCJ1cGRhdGVDdXJyZW50IiwiZGF0YSIsIl9sb2NhdGlvbiIsIl9DdXJyZW50VGVtcCIsIl9EZXNjcmlwdGlvbiIsIl9taW5UZW1wIiwiX21heFRlbXAiLCJfZmVlbHNMaWtlIiwiX2xvYWRpbmciLCJ1cGRhdGVGb3JlY2FzdCIsIm9yZ2FuaXplZERhdGEiLCJfc3BsaXREYXRhQnlEYXlzIiwiY2xlYW5EYXRhIiwiX3JlbW92ZVRvZGF5IiwiX251bURheXMiLCJfZm9yZWNhc3QiLCJpbm5lclRleHQiLCJuYW1lIiwic3lzIiwiY291bnRyeSIsImlubmVySFRNTCIsImZvcm1hdFRlbXBDZWwiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiZmVlbHNfbGlrZSIsInNldEF0dHJpYnV0ZSIsImNsb3VkcyIsImFsbCIsImh1bWlkaXR5IiwiX2xvYWRpbmdDaXJjbGUiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJmb3JtYXRUZW1wIiwiY291bnRlcnMiLCJBcnJheSIsImludGVydmFscyIsImZpbGwiLCJmb3JFYWNoIiwibnVtYmVyIiwiaW5kZXgiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiZGF0YXNldCIsIm51bSIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJ4IiwibWF4IiwibWluIiwiZ2V0RGF5IiwiRGF0ZSIsImR0X3R4dCIsInNwbGl0IiwicXVlcnlTZWxlY3RvciIsInRvU3RyaW5nIiwiZm9yZSIsIl90b2RheURhdGUiLCJ0b2RheSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlbW92ZSIsIm8iLCJpbmRleE9mIiwic3BsaWNlIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3QiLCJpIiwibGlzdCIsInB1c2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3ZWF0aGVyQXBwIiwidmFsdWVzIiwibG9jIiwibGltaXQiLCJ1bml0cyIsImFwaUtleSIsImNvb3JkVXJsIiwiY29vcmQiLCJ0b2RheVVybCIsImZvcmVVcmwiLCJpbnB1dEVsZW0iLCJpbnB1dCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsImdldERhdGEiLCJ2YWwiLCJyZXF1ZXN0RGF0YSIsInRoZW4iLCJsYXQiLCJsb24iLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=
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
    _location(data); // _locationDate();


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
  };

  var updateDateTime = function updateDateTime(data) {
    console.log(data);
  }; // DOM functions ======================================================================================


  var _location = function _location(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.location.innerText = data.name + ", " + data.sys.country;
  }; // const _locationDate = () => (date.innerText = _todaysDate());


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
  };

  var _date = function _date(data) {};

  var _time = function _time(data) {}; // Helper functions ======================================================================================
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
  }; // const _todaysDate = () => {
  //   var options = {
  //     weekday: "short",
  //     year: "numeric",
  //     day: "numeric",
  //     month: "short",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //     hour12: false,
  //   };
  //   let date = new Date().toLocaleTimeString("en-us", options).split(",");
  //   date.splice(date.length - 1, 1);
  //   date[1] = date[1].trim().split(" ").reverse().join(" ");
  //   date[2] = date[2].trim();
  //   date[0] += ",";
  //   date = date.join(" ").trim();
  //   return date;
  // };


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
    updateForecast: updateForecast,
    updateDateTime: updateDateTime
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
/* harmony export */   "date": () => (/* binding */ date),
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
var date = document.querySelector(".intro .date");
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
    weatherKey: "e2f88a64edb26908f2c8a836e0f87c19",
    coordUrl: "https://api.openweathermap.org/geo/1.0/direct?q=",
    coord: null,
    todayUrl: "https://api.openweathermap.org/data/2.5/weather?lat=",
    today: null,
    foreUrl: "https://api.openweathermap.org/data/2.5/forecast?lat=",
    fore: null,
    dateTimeKey: "2d1eb7787762482d96073c2f8eb1addf",
    dateTimeUrl: "https://api.ipgeolocation.io/timezone?apiKey=",
    dateTime: ""
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
    requestData(values.coordUrl + val + "&limit=" + values.limit + "&appid=" + values.weatherKey).then(function (coord) {
      console.log(coord);
      values.coord = coord[0]; // Current fetch

      requestData(values.todayUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.weatherKey + values.units).then(function (current) {
        console.log(current);
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation.updateCurrent(current);
      }); // Forecast fetch

      requestData(values.foreUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.weatherKey + values.units).then(function (forecast) {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation.updateForecast(forecast);
      }); // Location date and time

      requestData(values.dateTimeUrl + values.dateTimeKey + "&lat=" + coord[0].lat + "&long=" + coord[0].lon).then(function (dateTime) {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation.updateDateTime(dateTime);
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sU0FBUyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxZQUFZLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdB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QTJCSyxHQUEzQjtNQUFBO01BQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtjQUFBO2NBQUEsT0FFMkJDLEtBQUssQ0FBQ0QsR0FBRCxFQUFNO2dCQUFFRSxJQUFJLEVBQUU7Y0FBUixDQUFOLENBRmhDOztZQUFBO2NBRVVDLFFBRlY7Y0FBQTtjQUFBLE9BR3VCQSxRQUFRLENBQUNDLElBQVQsRUFIdkI7O1lBQUE7Y0FHVXRILElBSFY7Y0FBQSxpQ0FJV0EsSUFKWDs7WUFBQTtjQUFBO2NBQUE7Y0FNSXVILEtBQUssYUFBTCxDQU5KLENBTWdCOztZQU5oQjtZQUFBO2NBQUE7VUFBQTtRQUFBO01BQUE7SUFBQSxDQTVEd0I7SUFBQTtFQUFBO0FBcUV6QixDQXJFa0IsRUFBbkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBsb2NhdGlvbixcbiAgZGF0ZSxcbiAgdGVtcGVyYXR1cmUsXG4gIGRlc2NyaXB0aW9uLFxuICBtaW5UZW1wLFxuICBtYXhUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGxvYWRpbmcsXG4gIGxvYWRDbG91ZHMsXG4gIGxvYWRIdW1pZCxcbiAgbG9hZFdpbmQsXG4gIGZvcmVjYXN0cyxcbiAgZm9yZVdyYXAsXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgX2xvY2F0aW9uKGRhdGEpO1xuICAgIC8vIF9sb2NhdGlvbkRhdGUoKTtcbiAgICBfQ3VycmVudFRlbXAoZGF0YSk7XG4gICAgX0Rlc2NyaXB0aW9uKGRhdGEpO1xuICAgIF9taW5UZW1wKGRhdGEpO1xuICAgIF9tYXhUZW1wKGRhdGEpO1xuICAgIF9mZWVsc0xpa2UoZGF0YSk7XG4gICAgX2xvYWRpbmcoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXplZERhdGEgPSBfc3BsaXREYXRhQnlEYXlzKGRhdGEpO1xuICAgIGNvbnN0IGNsZWFuRGF0YSA9IF9yZW1vdmVUb2RheShvcmdhbml6ZWREYXRhKTtcbiAgICBfbnVtRGF5cyhjbGVhbkRhdGEpO1xuICAgIF9mb3JlY2FzdChjbGVhbkRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGVUaW1lID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfTtcblxuICAvLyBET00gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IF9sb2NhdGlvbiA9IChkYXRhKSA9PiAobG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5zeXMuY291bnRyeSk7XG4gIC8vIGNvbnN0IF9sb2NhdGlvbkRhdGUgPSAoKSA9PiAoZGF0ZS5pbm5lclRleHQgPSBfdG9kYXlzRGF0ZSgpKTtcbiAgY29uc3QgX0N1cnJlbnRUZW1wID0gKGRhdGEpID0+ICh0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBmb3JtYXRUZW1wQ2VsKE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApKSk7XG4gIGNvbnN0IF9EZXNjcmlwdGlvbiA9IChkYXRhKSA9PiAoZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKTtcbiAgY29uc3QgX21pblRlbXAgPSAoZGF0YSkgPT4gKG1pblRlbXAuaW5uZXJIVE1MID0gXCJNaW4gVGVtcDogXCIgKyBmb3JtYXRUZW1wQ2VsKE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWluKSkpO1xuICBjb25zdCBfbWF4VGVtcCA9IChkYXRhKSA9PiAobWF4VGVtcC5pbm5lckhUTUwgPSBcIk1heCBUZW1wOiBcIiArIGZvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgpKSk7XG4gIGNvbnN0IF9mZWVsc0xpa2UgPSAoZGF0YSkgPT4gKGZlZWxzTGlrZS5pbm5lckhUTUwgPSBcIkZlZWxzIGxpa2U6IFwiICsgZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKSkpO1xuICBjb25zdCBfbG9hZGluZyA9IChkYXRhKSA9PiB7XG4gICAgbG9hZENsb3Vkcy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBNYXRoLnJvdW5kKGRhdGEuY2xvdWRzLmFsbCkpO1xuICAgIGxvYWRIdW1pZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSkpO1xuICAgIGxvYWRIdW1pZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBNYXRoLnJvdW5kKGRhdGEubWFpbi5odW1pZGl0eSkpO1xuICAgIF9sb2FkaW5nQ2lyY2xlKCk7XG4gIH07XG4gIGNvbnN0IF9udW1EYXlzID0gKGRhdGEpID0+IChkYXRhLmxlbmd0aCA9PT0gNCA/IChmb3JlV3JhcC5jbGFzc05hbWUgPSBcImZvcmVjYXN0IGZvdXItZGF5c1wiKSA6IChmb3JlV3JhcC5jbGFzc05hbWUgPSBcImZvcmVjYXN0XCIpKTtcbiAgY29uc3QgX2RhdGUgPSAoZGF0YSkgPT4ge307XG4gIGNvbnN0IF90aW1lID0gKGRhdGEpID0+IHt9O1xuXG4gIC8vIEhlbHBlciBmdW5jdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRm9ybWF0IENlbHNpdXNcbiAgY29uc3QgZm9ybWF0VGVtcENlbCA9ICh0ZW1wKSA9PiB0ZW1wICsgJzxzcGFuIGNsYXNzPVwiZGVnLXN5bWJvbFwiPiYjMTc2OzxzcGFuIGNsYXNzPVwibWludXNcIj4tPC9zcGFuPjwvc3Bhbj5DJztcbiAgY29uc3QgZm9ybWF0VGVtcCA9ICh0ZW1wKSA9PiB0ZW1wICsgJzxzcGFuIGNsYXNzPVwiZGVnLXN5bWJvbFwiPiYjMTc2OzxzcGFuIGNsYXNzPVwibWludXNcIj4tPC9zcGFuPjwvc3Bhbj4nO1xuICAvLyBBbmltYXRlIGxvYWRpbmcgY2lyY2xlXG4gIGNvbnN0IF9sb2FkaW5nQ2lyY2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXJzID0gQXJyYXkobG9hZGluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGludGVydmFscyA9IEFycmF5KGxvYWRpbmcubGVuZ3RoKTtcbiAgICBjb3VudGVycy5maWxsKDApO1xuICAgIGxvYWRpbmcuZm9yRWFjaCgobnVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgaW50ZXJ2YWxzW2luZGV4XSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50ZXJzW2luZGV4XSA9PSBwYXJzZUludChudW1iZXIuZGF0YXNldC5udW0pKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbHNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudGVyc1tpbmRleF0gKz0gMTtcbiAgICAgICAgICBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucyhcImh1bWlkXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoI2ZkZWY1ZCwgI2ZmYTU1NyBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvdWRzXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoIzk3REFGNSwgIzMxQjhERiBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZFwiKSkge1xuICAgICAgICAgICAgbnVtYmVyLnN0eWxlLmJhY2tncm91bmQgPSBcImNvbmljLWdyYWRpZW50KCNGRkZGRkYgMGRlZyksICM5N0RBRjUsICMzMUI4REYgY2FsYyhcIiArIGNvdW50ZXJzW2luZGV4XSArIFwiJSksI0ZGRkZGRiAwZGVnKVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG51bWJlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIGNvdW50ZXJzW2luZGV4XSArIFwiJVwiKTtcbiAgICAgICAgICBudW1iZXIuaW5uZXJIVE1MID0gY291bnRlcnNbaW5kZXhdICsgXCIlXCI7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBfZm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZGF0YS5sZW5ndGg7IHgrKykge1xuICAgICAgbGV0IG1heCA9IG51bGw7XG4gICAgICBsZXQgbWluID0gbnVsbDtcbiAgICAgIGNvbnN0IGdldERheSA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoZGF0YVt4XVswXS5kdF90eHQuc3BsaXQoXCIgXCIpWzBdKSk7XG4gICAgICAvLyBEYXRlIC0gRGF5XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5kYXlcIikuaW5uZXJUZXh0ID0gZ2V0RGF5LnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgLy8gTWluIC8gTWF4XG4gICAgICBmb3IgKGNvbnN0IGZvcmUgb2YgZGF0YVt4XSkge1xuICAgICAgICBpZiAobWF4ID09PSBudWxsICYmIG1pbiA9PT0gbnVsbCkge1xuICAgICAgICAgIG1heCA9IGZvcmUubWFpbi50ZW1wX21heDtcbiAgICAgICAgICBtaW4gPSBmb3JlLm1haW4udGVtcF9taW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yZS5tYWluLnRlbXBfbWF4ID4gbWF4ID8gKG1heCA9IGZvcmUubWFpbi50ZW1wX21heCkgOiAobWF4ID0gbWF4KTtcbiAgICAgICAgICBmb3JlLm1haW4udGVtcF9taW4gPCBtaW4gPyAobWluID0gZm9yZS5tYWluLnRlbXBfbWluKSA6IChtaW4gPSBtaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5taW5cIikuaW5uZXJIVE1MID0gXCIvXCIgKyBmb3JtYXRUZW1wKE1hdGgucm91bmQobWluKSk7XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5tYXhcIikuaW5uZXJIVE1MID0gZm9ybWF0VGVtcChNYXRoLnJvdW5kKG1heCkpO1xuICAgIH1cbiAgICAvLyBJbWFnZVxuICB9O1xuXG4gIGNvbnN0IF90b2RheURhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4geXl5eSArIFwiLVwiICsgbW0gKyBcIi1cIiArIGRkO1xuICB9O1xuXG4gIC8vIGNvbnN0IF90b2RheXNEYXRlID0gKCkgPT4ge1xuICAvLyAgIHZhciBvcHRpb25zID0ge1xuICAvLyAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAvLyAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gIC8vICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAvLyAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgLy8gICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAvLyAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgLy8gICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gIC8vICAgICBob3VyMTI6IGZhbHNlLFxuICAvLyAgIH07XG4gIC8vICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLXVzXCIsIG9wdGlvbnMpLnNwbGl0KFwiLFwiKTtcbiAgLy8gICBkYXRlLnNwbGljZShkYXRlLmxlbmd0aCAtIDEsIDEpO1xuICAvLyAgIGRhdGVbMV0gPSBkYXRlWzFdLnRyaW0oKS5zcGxpdChcIiBcIikucmV2ZXJzZSgpLmpvaW4oXCIgXCIpO1xuICAvLyAgIGRhdGVbMl0gPSBkYXRlWzJdLnRyaW0oKTtcbiAgLy8gICBkYXRlWzBdICs9IFwiLFwiO1xuICAvLyAgIGRhdGUgPSBkYXRlLmpvaW4oXCIgXCIpLnRyaW0oKTtcblxuICAvLyAgIHJldHVybiBkYXRlO1xuICAvLyB9O1xuXG4gIGNvbnN0IF9yZW1vdmVUb2RheSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZGF0YTtcbiAgICBmb3IgKGxldCBvID0gMDsgbyA8IHJlbW92ZS5sZW5ndGg7IG8rKykge1xuICAgICAgaWYgKGRhdGFbb11bMF0uZHRfdHh0LmluZGV4T2YoX3RvZGF5RGF0ZSgpKSA+IC0xKSB7XG4gICAgICAgIHJlbW92ZS5zcGxpY2UobywgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW1vdmU7XG4gIH07XG5cbiAgY29uc3QgX3NwbGl0RGF0YUJ5RGF5cyA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGZvcmVjYXN0RGF5cyA9IFtdO1xuICAgIGxldCBmb3JlY2FzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm9yZWNhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JlY2FzdFswXS5kdF90eHQuaW5kZXhPZihkYXRhLmxpc3RbaV0uZHRfdHh0LnNwbGl0KFwiIFwiKVswXSkgPiAtMSkge1xuICAgICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgICAgZm9yZWNhc3QgPSBbXTtcbiAgICAgICAgICBmb3JlY2FzdC5wdXNoKGRhdGEubGlzdFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5saXN0Lmxlbmd0aCAtIDEgPT09IGkpIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcmVjYXN0RGF5cztcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50LCB1cGRhdGVGb3JlY2FzdCwgdXBkYXRlRGF0ZVRpbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRybyAubG9jYXRpb25cIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRybyAuZGF0ZVwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLnRlbXBcIik7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwIC5kZXNjXCIpO1xuY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5taW4tdGVtcFwiKTtcbmNvbnN0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAubWF4LXRlbXBcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAuZmVlbHMtbGlrZVwiKTtcbmNvbnN0IGxvYWRDbG91ZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAuY2xvdWRzXCIpO1xuY29uc3QgbG9hZEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTIgLmh1bWlkXCIpO1xuY29uc3QgbG9hZFdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAud2luZFwiKTtcbmNvbnN0IGZvcmVjYXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QgLmZvcmVcIik7XG5jb25zdCBmb3JlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RcIik7XG5sZXQgbG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3MtaXRlbVwiKTtcblxuZXhwb3J0IHtcbiAgbG9jYXRpb24sXG4gIGRhdGUsXG4gIHRlbXBlcmF0dXJlLFxuICBkZXNjcmlwdGlvbixcbiAgbWluVGVtcCxcbiAgbWF4VGVtcCxcbiAgZmVlbHNMaWtlLFxuICBsb2FkaW5nLFxuICBsb2FkQ2xvdWRzLFxuICBsb2FkSHVtaWQsXG4gIGxvYWRXaW5kLFxuICBmb3JlY2FzdHMsXG4gIGZvcmVXcmFwLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUV4dHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJlc2V0IENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbmJvZHkgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuOnJvb3QgLmRlZy1zeW1ib2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuOnJvb3QgLmRlZy1zeW1ib2wgLm1pbnVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuOnJvb3QgLmN1cnJlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46cm9vdCAuY3VycmVudCAubG9jYXRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIGZvbnQtc2l6ZTogNC42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC5kYXRlLFxcbjpyb290IC5jdXJyZW50IC50aW1lLFxcbjpyb290IC5jdXJyZW50IC5kZXNjLTEgbGksXFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MtMiBsaSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM3JlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLnRlbXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDg0JTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MsXFxuOnJvb3QgLmN1cnJlbnQgLmZvcmVjYXN0IC5kYXksXFxuOnJvb3QgLmN1cnJlbnQgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAudGVtcC1pbWcgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxOS4xMjVyZW07XFxuICBtYXgtaGVpZ2h0OiAxMy42MjVyZW07XFxufVxcblxcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICBwYWRkaW5nOiAxLjg1N3JlbTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAgaW5wdXQge1xcbiAgYm9yZGVyOiAwLjE0M3JlbSBzb2xpZCAjYTBhMGEwO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCBidXR0b24ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggaDEgLmxvZ28tc3VuIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlZjVkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGF0IHRvcCByaWdodCwgI2ZkZWY1ZCwgI2ZmYTU1Nyk7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmludHJvIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtd3JhcCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC13cmFwIC5kZXNjIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC1pbWcge1xcbiAgZ3JpZC1hcmVhOiAyLzMvMy81O1xcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0xIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvNTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBncmlkLWFyZWE6IDQvMS81LzU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTEsXFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIuNXJlbTtcXG4gIG1hcmdpbjogMS44NzVyZW0gMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBnYXA6IDYuNTYzcmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtYXJlYTogNS8xLzYvNTtcXG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgPiBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSBpbWcge1xcbiAgbWF4LXdpZHRoOiA3cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCAuc2VwYXJhdGUge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3VyLWRheXMuZm9yZWNhc3QgLmZvcmU6bnRoLW9mLXR5cGUoOSksXFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvdXItZGF5cy5mb3JlY2FzdCAuc2VwYXJhdGU6bnRoLW9mLXR5cGUoOCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI3dlYXRoZXItYXBwIC5wcm9ncmVzcy1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYW5pbWF0aW9uOiAwLjRzIGVhc2Utb3V0IHJldmVyc2U7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbTo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTByZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkNBQUE7QUFDQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7O0VBRUUsZ0JBQUE7QUNJRjs7QURGQTs7RUFFRSxZQUFBO0FDS0Y7O0FESEE7Ozs7RUFJRSxXQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ09GOztBRExBOzs7O0VBSUUsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNTRjs7QUFwSkE7RUFDRSx5QkFBQTtFQUNBLDJEQUFBO0FBdUpGO0FBckpBO0VBQ0UsNEJBQUE7RUFDQSwyREFBQTtBQXVKRjtBQXJKQTtFQUNFLDBCQUFBO0VBQ0EsMkRBQUE7QUF1SkY7QUFySkE7RUFDRSwrQkFBQTtFQUNBLDJEQUFBO0FBdUpGO0FBckpBO0VBQ0UseUJBQUE7RUFDQSwyREFBQTtBQXVKRjtBQXZJQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGNBZlk7QUF3SmQ7QUFyR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUF1R0o7QUF0R0k7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UWIsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtRUF6UWlCO0VBMFFqQiwyREF6UVM7RUEwUVQscUJBQUE7QUEyRko7QUF4RkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFwUmE7RUFxUmIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBMVJVO0VBMlJWLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RUF6UnVCO0VBMFJ2QixpRUF6UmU7RUEwUmYsNEJBQUE7RUFDQSxjQXJTVTtFQXNTVix3QkFBQTtBQTBGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5ib2R5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3Jlc2V0LnNjc3NcXFwiO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1FeHRyYUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbi8vIFZhcmlhYmxlc1xcbiRibGFjay1jb2xvcjogIzMzMzMzMztcXG4kZ3JleS1jb2xvcjogI2EwYTBhMDtcXG4kYmctY29sb3I6ICNmMGYwZjA7XFxuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xcbiR5ZWxsb3ctY29sb3I6ICNmZGVmNWQ7XFxuJG9yYW5nZS1jb2xvcjogI2ZmYTU1NztcXG4kbG9hZGluZy1jaXJjbGU6IDEwcmVtO1xcbiQtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiRib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93LWluc2V0OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuXFxuICAvLyBUaXRsZSBNYWluXFxuICBAbWl4aW4gbWFpbi10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNC42cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBTbWFsbFxcbiAgQG1peGluIHNtYWxsLWRlc2Mge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM3JlbTtcXG4gIH1cXG5cXG4gIC8vIERlc2NyaXB0aW9uIE1pZFxcbiAgQG1peGluIG1pZC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIH1cXG5cXG4gIC8vIFdlYXRoZXIgVGl0bGVcXG4gIEBtaXhpbiB0ZW1wLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgLy8gZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGxpbmUtaGVpZ2h0OiA4NCU7XFxuICB9XFxuXFxuICAvLyBEZWdyZWUgU3ltYm9sXFxuICAuZGVnLXN5bWJvbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAubWludXMge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gU3R5bGluZ1xcbiAgLmN1cnJlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC5sb2NhdGlvbiB7XFxuICAgICAgQGluY2x1ZGUgbWFpbi10aXRsZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICAgIH1cXG4gICAgLmRhdGUsXFxuICAgIC50aW1lLFxcbiAgICAuZGVzYy0xIGxpLFxcbiAgICAuZGVzYy0yIGxpIHNwYW4ge1xcbiAgICAgIEBpbmNsdWRlIHNtYWxsLWRlc2M7XFxuICAgIH1cXG4gICAgLnRlbXAge1xcbiAgICAgIEBpbmNsdWRlIHRlbXAtdGl0bGU7XFxuICAgIH1cXG4gICAgLmRlc2MsXFxuICAgIC5mb3JlY2FzdCAuZGF5LFxcbiAgICAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgICAgIEBpbmNsdWRlIG1pZC1kZXNjO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgfVxcbiAgICAudGVtcC1pbWcgaW1nIHtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAxOS4xMjVyZW07XFxuICAgICAgbWF4LWhlaWdodDogMTMuNjI1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIExheW91dCBzdHlsaW5nXFxuI3dlYXRoZXItYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG5cXG4gIC53ZWF0aGVyLWFwcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAgICBwYWRkaW5nOiAxLjg1N3JlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgICAudGl0bGUtc2VhcmNoIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcXG5cXG4gICAgICAuaW5wdXQtd3JhcCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgYm9yZGVyOiAwLjE0M3JlbSBzb2xpZCAkZ3JleS1jb2xvcjtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxuICAgICAgICAubG9nby1zdW4ge1xcbiAgICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3ctY29sb3I7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AgcmlnaHQsICR5ZWxsb3ctY29sb3IsICRvcmFuZ2UtY29sb3IpO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRibGFjay1jb2xvcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XFxuXFxuICAgICAgLmludHJvIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG4gICAgICB9XFxuICAgICAgLnRlbXAtd3JhcCB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgICAgICAgLmRlc2Mge1xcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLnRlbXAtaW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8zLzMvNTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB9XFxuICAgICAgLmRlc2MtMSB7XFxuICAgICAgICBncmlkLWFyZWE6IDMvMS80LzU7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiA0LzEvNS81O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVzYy0xLFxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxuICAgICAgICBtYXJnaW46IDEuODc1cmVtIDA7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZ2FwOiA2LjU2M3JlbTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdyaWQtYXJlYTogNS8xLzYvNTtcXG4gICAgICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG5cXG4gICAgICAgID4gZGl2IHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyZXktY29sb3I7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIG1heC13aWR0aDogN3JlbTtcXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5zZXBhcmF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3VyLWRheXMuZm9yZWNhc3Qge1xcbiAgICAgIC5mb3JlOm50aC1vZi10eXBlKDkpLFxcbiAgICAgIC5zZXBhcmF0ZTpudGgtb2YtdHlwZSg4KSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gTG9hZGluZyBDaXJjbGVcXG4gIC5wcm9ncmVzcy1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgaGVpZ2h0OiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBhbmltYXRpb246IDAuNHMgZWFzZS1vdXQgcmV2ZXJzZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgfVxcblxcbiAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93LWluc2V0O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1pbnNldDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBkb21NYW5pcHVsYXRpb24gfSBmcm9tIFwiLi9kb20uanNcIjtcblxuLy8gaW1wb3J0IGNpdHlEYXRhIGZyb20gXCIuL2RhdGEvY2l0eS5saXN0Lmpzb25cIjtcblxuY29uc3Qgd2VhdGhlckFwcCA9ICgoKSA9PiB7XG4gIC8vIFN0b3JlIHZhbHVlc1xuICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgbG9jOiBudWxsLFxuICAgIGxpbWl0OiBcIjVcIixcbiAgICB1bml0czogXCImdW5pdHM9bWV0cmljXCIsXG4gICAgd2VhdGhlcktleTogXCJlMmY4OGE2NGVkYjI2OTA4ZjJjOGE4MzZlMGY4N2MxOVwiLFxuICAgIGNvb3JkVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVwiLFxuICAgIGNvb3JkOiBudWxsLFxuICAgIHRvZGF5VXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD1cIixcbiAgICB0b2RheTogbnVsbCxcbiAgICBmb3JlVXJsOiBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9XCIsXG4gICAgZm9yZTogbnVsbCxcbiAgICBkYXRlVGltZUtleTogXCIyZDFlYjc3ODc3NjI0ODJkOTYwNzNjMmY4ZWIxYWRkZlwiLFxuICAgIGRhdGVUaW1lVXJsOiBcImh0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vdGltZXpvbmU/YXBpS2V5PVwiLFxuICAgIGRhdGVUaW1lOiBcIlwiLFxuICB9O1xuXG4gIC8vIElucHV0IGVsZW1lbnQgdG8gZ2V0IGNsaWVudCBsb2NhdGlvblxuICBjb25zdCBpbnB1dEVsZW0gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC13cmFwIGlucHV0XCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtd3JhcCBidXR0b25cIik7XG4gICAgLy8gVmFsaWRhdGUgdmFsdWUgYmVmb3JlIG1ha2luZyBBUEkgY2FsbFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgLy8gaWYgKGlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB2YWx1ZXMubG9jID0gaW5wdXQudmFsdWU7XG4gICAgICBnZXREYXRhKHZhbHVlcy5sb2MpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJpbnZhbGlkXCIpO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhpbnB1dC52YWxpZGl0eSk7XG4gICAgICAvLyB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gRmV0Y2ggd2VhdGhlciBEYXRhXG4gIGNvbnN0IGdldERhdGEgPSAodmFsKSA9PiB7XG4gICAgcmVxdWVzdERhdGEodmFsdWVzLmNvb3JkVXJsICsgdmFsICsgXCImbGltaXQ9XCIgKyB2YWx1ZXMubGltaXQgKyBcIiZhcHBpZD1cIiArIHZhbHVlcy53ZWF0aGVyS2V5KS50aGVuKChjb29yZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coY29vcmQpO1xuICAgICAgdmFsdWVzLmNvb3JkID0gY29vcmRbMF07XG4gICAgICAvLyBDdXJyZW50IGZldGNoXG4gICAgICByZXF1ZXN0RGF0YSh2YWx1ZXMudG9kYXlVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy53ZWF0aGVyS2V5ICsgdmFsdWVzLnVuaXRzKS50aGVuKFxuICAgICAgICAoY3VycmVudCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDdXJyZW50KGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgLy8gRm9yZWNhc3QgZmV0Y2hcbiAgICAgIHJlcXVlc3REYXRhKHZhbHVlcy5mb3JlVXJsICsgY29vcmRbMF0ubGF0ICsgXCImbG9uPVwiICsgY29vcmRbMF0ubG9uICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMud2VhdGhlcktleSArIHZhbHVlcy51bml0cykudGhlbihcbiAgICAgICAgKGZvcmVjYXN0KSA9PiB7XG4gICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIC8vIExvY2F0aW9uIGRhdGUgYW5kIHRpbWVcbiAgICAgIHJlcXVlc3REYXRhKHZhbHVlcy5kYXRlVGltZVVybCArIHZhbHVlcy5kYXRlVGltZUtleSArIFwiJmxhdD1cIiArIGNvb3JkWzBdLmxhdCArIFwiJmxvbmc9XCIgKyBjb29yZFswXS5sb24pLnRoZW4oKGRhdGVUaW1lKSA9PiB7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVEYXRlVGltZShkYXRlVGltZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBGZXRjaCByZXF1ZXN0IGZ1bmN0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVycik7IC8vIFR5cGVFcnJvcjogZmFpbGVkIHRvIGZldGNoXG4gICAgfVxuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwiZGF0ZSIsInRlbXBlcmF0dXJlIiwiZGVzY3JpcHRpb24iLCJtaW5UZW1wIiwibWF4VGVtcCIsImZlZWxzTGlrZSIsImxvYWRpbmciLCJsb2FkQ2xvdWRzIiwibG9hZEh1bWlkIiwibG9hZFdpbmQiLCJmb3JlY2FzdHMiLCJmb3JlV3JhcCIsInN0YXJ0T2ZEYXkiLCJkb21NYW5pcHVsYXRpb24iLCJ1cGRhdGVDdXJyZW50IiwiZGF0YSIsIl9sb2NhdGlvbiIsIl9DdXJyZW50VGVtcCIsIl9EZXNjcmlwdGlvbiIsIl9taW5UZW1wIiwiX21heFRlbXAiLCJfZmVlbHNMaWtlIiwiX2xvYWRpbmciLCJ1cGRhdGVGb3JlY2FzdCIsIm9yZ2FuaXplZERhdGEiLCJfc3BsaXREYXRhQnlEYXlzIiwiY2xlYW5EYXRhIiwiX3JlbW92ZVRvZGF5IiwiX251bURheXMiLCJfZm9yZWNhc3QiLCJ1cGRhdGVEYXRlVGltZSIsImNvbnNvbGUiLCJsb2ciLCJpbm5lclRleHQiLCJuYW1lIiwic3lzIiwiY291bnRyeSIsImlubmVySFRNTCIsImZvcm1hdFRlbXBDZWwiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiZmVlbHNfbGlrZSIsInNldEF0dHJpYnV0ZSIsImNsb3VkcyIsImFsbCIsImh1bWlkaXR5IiwiX2xvYWRpbmdDaXJjbGUiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJfZGF0ZSIsIl90aW1lIiwiZm9ybWF0VGVtcCIsImNvdW50ZXJzIiwiQXJyYXkiLCJpbnRlcnZhbHMiLCJmaWxsIiwiZm9yRWFjaCIsIm51bWJlciIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJjbGVhckludGVydmFsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ4IiwibWF4IiwibWluIiwiZ2V0RGF5IiwiRGF0ZSIsImR0X3R4dCIsInNwbGl0IiwicXVlcnlTZWxlY3RvciIsInRvU3RyaW5nIiwiZm9yZSIsIl90b2RheURhdGUiLCJ0b2RheSIsImRkIiwiU3RyaW5nIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInJlbW92ZSIsIm8iLCJpbmRleE9mIiwic3BsaWNlIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3QiLCJpIiwibGlzdCIsInB1c2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3ZWF0aGVyQXBwIiwidmFsdWVzIiwibG9jIiwibGltaXQiLCJ1bml0cyIsIndlYXRoZXJLZXkiLCJjb29yZFVybCIsImNvb3JkIiwidG9kYXlVcmwiLCJmb3JlVXJsIiwiZGF0ZVRpbWVLZXkiLCJkYXRlVGltZVVybCIsImRhdGVUaW1lIiwiaW5wdXRFbGVtIiwiaW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJnZXREYXRhIiwidmFsIiwicmVxdWVzdERhdGEiLCJ0aGVuIiwibGF0IiwibG9uIiwiY3VycmVudCIsInVybCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==
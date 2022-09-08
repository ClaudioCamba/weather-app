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

function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }




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

    _time(data);

    _date(data);
  }; // DOM functions ======================================================================================


  var _location = function _location(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.location.innerText = data.name + ", " + data.sys.country;
  }; // const _locationDate = () => (date.innerText = _todaysDate());


  var _CurrentTemp = function _CurrentTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerHTML = _formatTempCel(Math.round(data.main.temp));
  };

  var _Description = function _Description(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.description.innerText = data.weather[0].description;
  };

  var _minTemp = function _minTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.minTemp.innerHTML = "Min Temp: " + _formatTempCel(Math.round(data.main.temp_min));
  };

  var _maxTemp = function _maxTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.maxTemp.innerHTML = "Max Temp: " + _formatTempCel(Math.round(data.main.temp_max));
  };

  var _feelsLike = function _feelsLike(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.feelsLike.innerHTML = "Feels like: " + _formatTempCel(Math.round(data.main.feels_like));
  };

  var _loading = function _loading(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadClouds.setAttribute("data-num", Math.round(data.clouds.all));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadWind.setAttribute("data-num", _windToPercent(data));

    _loadingCircle();
  }; // Forecast dates


  var _numDays = function _numDays(data) {
    return data.length === 4 ? _variables_js__WEBPACK_IMPORTED_MODULE_0__.foreWrap.className = "forecast four-days" : _variables_js__WEBPACK_IMPORTED_MODULE_0__.foreWrap.className = "forecast";
  }; // Location date


  var _date = function _date(data) {
    var mainDate = data.date_time_txt.split(" ");
    var buildDate = [];
    buildDate.push(mainDate[0].split("").splice(0, 3).join("") + ","); // Day

    buildDate.push(mainDate[2].replace(",", "")); // Date

    buildDate.push(mainDate[1].split("").splice(0, 3).join("")); // Month

    buildDate.push(mainDate[3]); // Month

    _variables_js__WEBPACK_IMPORTED_MODULE_0__.date.innerText = buildDate.join(" ");
  }; // Updated location time


  var _time = function _time(data) {
    var time = data.time_12.toLocaleLowerCase().split(" ");
    time[0] = time[0].split("").splice(0, time[0].length - 3).join("");
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.updatedTime.innerText = "Updated " + time.join("");
  }; // Helper functions ======================================================================================
  // Wind circle loading function


  var _windToPercent = function _windToPercent(data) {
    var windDeg = Math.round(data.wind.deg / (360 / 100));

    if (windDeg === 0) {
      1, _readOnlyError("windDeg");
    } else if (windDeg === 100) {
      99, _readOnlyError("windDeg");
    }

    return windDeg;
  }; // Format Celsius


  var _formatTempCel = function _formatTempCel(temp) {
    return temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';
  };

  var _formatTemp = function _formatTemp(temp) {
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
            number.style.background = "conic-gradient(#FFF calc(" + (counters[index] - 1) + "%), #333 calc(" + (counters[index] - 1) + "%), #333 calc(" + (counters[index] + 1) + "%), #FFF 0deg)";
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

      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".min").innerHTML = "/" + _formatTemp(Math.round(min));
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts[x].querySelector(".max").innerHTML = _formatTemp(Math.round(max));
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
/* harmony export */   "temperature": () => (/* binding */ temperature),
/* harmony export */   "updatedTime": () => (/* binding */ updatedTime)
/* harmony export */ });


var location = document.querySelector(".intro .location");
var date = document.querySelector(".intro .date");
var updatedTime = document.querySelector(".temp-wrap .time");
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\n}\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n}\n:root .deg-symbol {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n:root .deg-symbol .minus {\n  position: absolute;\n}\n:root .current {\n  text-align: center;\n}\n:root .current .location {\n  font-family: \"Heebo-Thin\";\n  font-size: 4.6rem;\n  letter-spacing: -0.15rem;\n  color: #333333;\n  margin-bottom: 0.4rem;\n}\n:root .current .date,\n:root .current .time,\n:root .current .desc-1 li,\n:root .current .desc-2 li span {\n  font-family: \"Heebo-Light\";\n  color: #333333;\n  font-size: 1.4rem;\n  letter-spacing: -0.03rem;\n}\n:root .current .temp {\n  font-family: \"Heebo-Bold\";\n  font-size: 8rem;\n  color: #333333;\n  line-height: 84%;\n}\n:root .current .desc,\n:root .current .forecast .day,\n:root .current .forecast li > div {\n  font-family: \"Heebo-ExtraLight\";\n  color: #333333;\n  font-size: 2.5rem;\n  letter-spacing: -0.06rem;\n  margin-bottom: 0.8rem;\n}\n:root .current .temp-img img {\n  height: auto;\n  width: auto;\n  max-width: 19.125rem;\n  max-height: 13.625rem;\n}\n\n#weather-app {\n  background-color: #f0f0f0;\n}\n#weather-app .weather-app-container {\n  width: 100%;\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(3, max-content);\n  padding: 1.857rem;\n  align-content: center;\n}\n#weather-app .weather-app-container .title-search {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 1.875rem;\n}\n#weather-app .weather-app-container .title-search .input-wrap {\n  align-self: center;\n  justify-self: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search .input-wrap input {\n  border: 0.143rem solid #a0a0a0;\n  border-radius: 2rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-weight: 900;\n}\n#weather-app .weather-app-container .title-search .input-wrap button {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #f0f0f0;\n  height: 3rem;\n  width: 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #333333;\n  cursor: pointer;\n}\n#weather-app .weather-app-container .title-search h1 {\n  align-self: center;\n  justify-self: left;\n  font-family: \"Heebo-Bold\";\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: underline;\n}\n#weather-app .weather-app-container .title-search h1 .logo-sun {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 50%;\n  background-color: #fdef5d;\n  background-image: radial-gradient(at top right, #fdef5d, #ffa557);\n  margin-right: 0.25rem;\n  border: 5px solid #333333;\n}\n#weather-app .weather-app-container .current {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, max-content);\n}\n#weather-app .weather-app-container .current .intro {\n  grid-area: 1/1/2/5;\n  margin-bottom: 3.2rem;\n}\n#weather-app .weather-app-container .current .temp-wrap {\n  grid-area: 2/1/3/3;\n  margin-right: 1.25rem;\n  width: max-content;\n  align-self: start;\n  justify-self: end;\n}\n#weather-app .weather-app-container .current .temp-wrap .desc {\n  text-transform: capitalize;\n}\n#weather-app .weather-app-container .current .temp-img {\n  grid-area: 2/3/3/5;\n  margin-left: 1.25rem;\n  display: flex;\n  justify-content: flex-start;\n}\n#weather-app .weather-app-container .current .desc-1 {\n  grid-area: 3/1/4/5;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  grid-area: 4/1/5/5;\n}\n#weather-app .weather-app-container .current .desc-1,\n#weather-app .weather-app-container .current .desc-2 {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 1.875rem 0;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  gap: 6.563rem;\n}\n#weather-app .weather-app-container .forecast {\n  display: flex;\n  grid-area: 5/1/6/5;\n  margin-top: 1.875rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#weather-app .weather-app-container .forecast li {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: repeat(3, auto);\n}\n#weather-app .weather-app-container .forecast li > div {\n  display: flex;\n  justify-content: center;\n}\n#weather-app .weather-app-container .forecast li > div p:nth-child(2) {\n  color: #a0a0a0;\n}\n#weather-app .weather-app-container .forecast li img {\n  max-width: 7rem;\n  margin: 0 auto;\n}\n#weather-app .weather-app-container .forecast .separate {\n  font-size: 0;\n  height: 130px;\n  background: #fff;\n  width: 6px;\n  color: #ffffff;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n}\n#weather-app .weather-app-container .four-days.forecast .fore:nth-of-type(9),\n#weather-app .weather-app-container .four-days.forecast .separate:nth-of-type(8) {\n  display: none;\n}\n#weather-app .progress-item {\n  display: flex;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  font-size: 0;\n  animation: 0.4s ease-out reverse;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 1.8rem;\n  background-color: #ffffff;\n}\n#weather-app .progress-item::after {\n  content: attr(data-value);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10rem;\n  margin: 1rem;\n  border-radius: 50%;\n  background: #ffffff;\n  line-height: 1;\n  padding-top: 0.25rem;\n  font-size: 2.5rem;\n  text-align: center;\n  -webkit-box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n  letter-spacing: -0.06rem;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nbody * {\n  box-sizing: border-box;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n","@import \"./reset.scss\";\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(\"../fonts/static/Heebo-Bold.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(\"../fonts/static/Heebo-Regular.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(\"../fonts/static/Heebo-Light.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(\"../fonts/static/Heebo-ExtraLight.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(\"../fonts/static/Heebo-Thin.ttf\") format(\"woff\");\n}\n\n// Variables\n$black-color: #333333;\n$grey-color: #a0a0a0;\n$bg-color: #f0f0f0;\n$white-color: #ffffff;\n$yellow-color: #fdef5d;\n$orange-color: #ffa557;\n$loading-circle: 10rem;\n$-webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$-webkit-box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: $black-color;\n\n  // Title Main\n  @mixin main-title {\n    font-family: \"Heebo-Thin\";\n    font-size: 4.6rem;\n    letter-spacing: -0.15rem;\n    color: $black-color;\n  }\n\n  // Description Small\n  @mixin small-desc {\n    font-family: \"Heebo-Light\";\n    color: $black-color;\n    font-size: 1.4rem;\n    letter-spacing: -0.03rem;\n  }\n\n  // Description Mid\n  @mixin mid-desc {\n    font-family: \"Heebo-ExtraLight\";\n    color: $black-color;\n    font-size: 2.5rem;\n    letter-spacing: -0.06rem;\n  }\n\n  // Weather Title\n  @mixin temp-title {\n    font-family: \"Heebo-Bold\";\n    // font-size: 9rem;\n    font-size: 8rem;\n    color: $black-color;\n    line-height: 84%;\n  }\n\n  // Degree Symbol\n  .deg-symbol {\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    .minus {\n      position: absolute;\n    }\n  }\n\n  // Styling\n  .current {\n    text-align: center;\n\n    .location {\n      @include main-title;\n      margin-bottom: 0.4rem;\n    }\n    .date,\n    .time,\n    .desc-1 li,\n    .desc-2 li span {\n      @include small-desc;\n    }\n    .temp {\n      @include temp-title;\n    }\n    .desc,\n    .forecast .day,\n    .forecast li > div {\n      @include mid-desc;\n      margin-bottom: 0.8rem;\n    }\n    .temp-img img {\n      height: auto;\n      width: auto;\n      max-width: 19.125rem;\n      max-height: 13.625rem;\n    }\n  }\n}\n\n// Layout styling\n#weather-app {\n  background-color: $bg-color;\n\n  .weather-app-container {\n    width: 100%;\n    max-width: 1440px;\n    min-height: 100vh;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: repeat(3, max-content);\n    padding: 1.857rem;\n    align-content: center;\n\n    .title-search {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      margin-bottom: 1.875rem;\n\n      .input-wrap {\n        align-self: center;\n        justify-self: right;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        input {\n          border: 0.143rem solid $grey-color;\n          border-radius: 2rem;\n          padding: 0.4rem 1rem;\n          font-size: 1rem;\n          font-weight: 900;\n        }\n\n        button {\n          -webkit-transform: rotate(315deg);\n          -moz-transform: rotate(315deg);\n          -o-transform: rotate(315deg);\n          transform: rotate(315deg);\n          font-weight: bold;\n          font-size: 2.5rem;\n          border-radius: 50%;\n          border: none;\n          background-color: $bg-color;\n          height: 3rem;\n          width: 3rem;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          color: $black-color;\n          cursor: pointer;\n        }\n      }\n\n      h1 {\n        align-self: center;\n        justify-self: left;\n        font-family: \"Heebo-Bold\";\n        font-size: 2.5rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-decoration: underline;\n\n        .logo-sun {\n          font-size: 0;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: red;\n          height: 4rem;\n          width: 4rem;\n          border-radius: 50%;\n          background-color: $yellow-color;\n          background-image: radial-gradient(at top right, $yellow-color, $orange-color);\n          margin-right: 0.25rem;\n          border: 5px solid $black-color;\n        }\n      }\n    }\n\n    .current {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(5, max-content);\n\n      .intro {\n        grid-area: 1/1/2/5;\n        margin-bottom: 3.2rem;\n      }\n      .temp-wrap {\n        grid-area: 2/1/3/3;\n        margin-right: 1.25rem;\n        width: max-content;\n        align-self: start;\n        justify-self: end;\n\n        .desc {\n          text-transform: capitalize;\n        }\n      }\n      .temp-img {\n        grid-area: 2/3/3/5;\n        margin-left: 1.25rem;\n        display: flex;\n        justify-content: flex-start;\n      }\n      .desc-1 {\n        grid-area: 3/1/4/5;\n      }\n      .desc-2 {\n        grid-area: 4/1/5/5;\n      }\n\n      .desc-1,\n      .desc-2 {\n        display: grid;\n        grid-template-columns: repeat(3, max-content);\n        justify-content: center;\n        gap: 2.5rem;\n        margin: 1.875rem 0;\n      }\n      .desc-2 {\n        gap: 6.563rem;\n      }\n    }\n\n    .forecast {\n      display: flex;\n      grid-area: 5/1/6/5;\n      margin-top: 1.875rem;\n      justify-content: space-evenly;\n      align-items: center;\n\n      li {\n        display: grid;\n        justify-content: center;\n        align-items: center;\n        grid-template-rows: repeat(3, auto);\n\n        > div {\n          display: flex;\n          justify-content: center;\n\n          p:nth-child(2) {\n            color: $grey-color;\n          }\n        }\n        img {\n          max-width: 7rem;\n          margin: 0 auto;\n        }\n      }\n      .separate {\n        font-size: 0;\n        height: 130px;\n        background: #fff;\n        width: 6px;\n        color: $white-color;\n        -webkit-box-shadow: $-webkit-box-shadow;\n        box-shadow: $box-shadow;\n      }\n    }\n\n    .four-days.forecast {\n      .fore:nth-of-type(9),\n      .separate:nth-of-type(8) {\n        display: none;\n      }\n    }\n  }\n\n  // Loading Circle\n  .progress-item {\n    display: flex;\n    width: $loading-circle;\n    height: $loading-circle;\n    border-radius: 50%;\n    font-size: 0;\n    animation: 0.4s ease-out reverse;\n    -webkit-box-shadow: $-webkit-box-shadow;\n    box-shadow: $box-shadow;\n    margin-bottom: 1.8rem;\n    background-color: $white-color;\n  }\n\n  .progress-item::after {\n    content: attr(data-value);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: $loading-circle;\n    margin: 1rem;\n    border-radius: 50%;\n    background: $white-color;\n    line-height: 1;\n    padding-top: 0.25rem;\n    font-size: 2.5rem;\n    text-align: center;\n    -webkit-box-shadow: $-webkit-box-shadow-inset;\n    box-shadow: $box-shadow-inset;\n    font-family: \"Heebo-Regular\";\n    color: $black-color;\n    letter-spacing: -0.06rem;\n  }\n}\n"],"sourceRoot":""}]);
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
      // requestData(values.dateTimeUrl + values.dateTimeKey + "&lat=" + coord[0].lat + "&long=" + coord[0].lon).then((dateTime) => {
      //   domManipulation.updateDateTime(dateTime);
      // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFlBQVksTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUs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VTVHOztNQUNBSixXQUFXLENBQUNuQixNQUFNLENBQUNRLE9BQVAsR0FBaUJGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2UsR0FBMUIsR0FBZ0MsT0FBaEMsR0FBMENmLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dCLEdBQW5ELEdBQXlELFNBQXpELEdBQXFFdEIsTUFBTSxDQUFDSSxVQUE1RSxHQUF5RkosTUFBTSxDQUFDRyxLQUFqRyxDQUFYLENBQW1IaUIsSUFBbkgsQ0FDRSxVQUFDMUIsUUFBRCxFQUFjO1FBQ1psRyxtRUFBQSxDQUErQmtHLFFBQS9CO01BQ0QsQ0FISCxFQVg0RyxDQWdCNUc7TUFDQTtNQUNBO01BQ0E7SUFDRCxDQXBCRDtFQXFCRCxDQXRCRCxDQW5Dd0IsQ0EyRHhCOzs7RUEzRHdCLFNBNERUeUIsV0E1RFM7SUFBQTtFQUFBOztFQUFBO0lBQUEsMEVBNER4QixpQkFBMkJLLEdBQTNCO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQSxPQUUyQkMsS0FBSyxDQUFDRCxHQUFELEVBQU07Z0JBQUVFLElBQUksRUFBRTtjQUFSLENBQU4sQ0FGaEM7O1lBQUE7Y0FFVUMsUUFGVjtjQUFBO2NBQUEsT0FHdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUh2Qjs7WUFBQTtjQUdVbEksSUFIVjtjQUFBLGlDQUlXQSxJQUpYOztZQUFBO2NBQUE7Y0FBQTtjQU1JbUksS0FBSyxhQUFMLENBTkosQ0FNZ0I7O1lBTmhCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBNUR3QjtJQUFBO0VBQUE7QUFxRXpCLENBckVrQixFQUFuQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGxvY2F0aW9uLFxuICBkYXRlLFxuICB1cGRhdGVkVGltZSxcbiAgdGVtcGVyYXR1cmUsXG4gIGRlc2NyaXB0aW9uLFxuICBtaW5UZW1wLFxuICBtYXhUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGxvYWRpbmcsXG4gIGxvYWRDbG91ZHMsXG4gIGxvYWRIdW1pZCxcbiAgbG9hZFdpbmQsXG4gIGZvcmVjYXN0cyxcbiAgZm9yZVdyYXAsXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgX2xvY2F0aW9uKGRhdGEpO1xuICAgIC8vIF9sb2NhdGlvbkRhdGUoKTtcbiAgICBfQ3VycmVudFRlbXAoZGF0YSk7XG4gICAgX0Rlc2NyaXB0aW9uKGRhdGEpO1xuICAgIF9taW5UZW1wKGRhdGEpO1xuICAgIF9tYXhUZW1wKGRhdGEpO1xuICAgIF9mZWVsc0xpa2UoZGF0YSk7XG4gICAgX2xvYWRpbmcoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXplZERhdGEgPSBfc3BsaXREYXRhQnlEYXlzKGRhdGEpO1xuICAgIGNvbnN0IGNsZWFuRGF0YSA9IF9yZW1vdmVUb2RheShvcmdhbml6ZWREYXRhKTtcbiAgICBfbnVtRGF5cyhjbGVhbkRhdGEpO1xuICAgIF9mb3JlY2FzdChjbGVhbkRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGVUaW1lID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBfdGltZShkYXRhKTtcbiAgICBfZGF0ZShkYXRhKTtcbiAgfTtcblxuICAvLyBET00gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IF9sb2NhdGlvbiA9IChkYXRhKSA9PiAobG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5zeXMuY291bnRyeSk7XG4gIC8vIGNvbnN0IF9sb2NhdGlvbkRhdGUgPSAoKSA9PiAoZGF0ZS5pbm5lclRleHQgPSBfdG9kYXlzRGF0ZSgpKTtcbiAgY29uc3QgX0N1cnJlbnRUZW1wID0gKGRhdGEpID0+ICh0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBfZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKSkpO1xuICBjb25zdCBfRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gKGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IF9taW5UZW1wID0gKGRhdGEpID0+IChtaW5UZW1wLmlubmVySFRNTCA9IFwiTWluIFRlbXA6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pKSk7XG4gIGNvbnN0IF9tYXhUZW1wID0gKGRhdGEpID0+IChtYXhUZW1wLmlubmVySFRNTCA9IFwiTWF4IFRlbXA6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgpKSk7XG4gIGNvbnN0IF9mZWVsc0xpa2UgPSAoZGF0YSkgPT4gKGZlZWxzTGlrZS5pbm5lckhUTUwgPSBcIkZlZWxzIGxpa2U6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSkpKTtcbiAgY29uc3QgX2xvYWRpbmcgPSAoZGF0YSkgPT4ge1xuICAgIGxvYWRDbG91ZHMuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLmNsb3Vkcy5hbGwpKTtcbiAgICBsb2FkSHVtaWQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpKTtcbiAgICBsb2FkV2luZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBfd2luZFRvUGVyY2VudChkYXRhKSk7XG4gICAgX2xvYWRpbmdDaXJjbGUoKTtcbiAgfTtcblxuICAvLyBGb3JlY2FzdCBkYXRlc1xuICBjb25zdCBfbnVtRGF5cyA9IChkYXRhKSA9PiAoZGF0YS5sZW5ndGggPT09IDQgPyAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdCBmb3VyLWRheXNcIikgOiAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdFwiKSk7XG5cbiAgLy8gTG9jYXRpb24gZGF0ZVxuICBjb25zdCBfZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IG1haW5EYXRlID0gZGF0YS5kYXRlX3RpbWVfdHh0LnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgYnVpbGREYXRlID0gW107XG4gICAgYnVpbGREYXRlLnB1c2gobWFpbkRhdGVbMF0uc3BsaXQoXCJcIikuc3BsaWNlKDAsIDMpLmpvaW4oXCJcIikgKyBcIixcIik7IC8vIERheVxuICAgIGJ1aWxkRGF0ZS5wdXNoKG1haW5EYXRlWzJdLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTsgLy8gRGF0ZVxuICAgIGJ1aWxkRGF0ZS5wdXNoKG1haW5EYXRlWzFdLnNwbGl0KFwiXCIpLnNwbGljZSgwLCAzKS5qb2luKFwiXCIpKTsgLy8gTW9udGhcbiAgICBidWlsZERhdGUucHVzaChtYWluRGF0ZVszXSk7IC8vIE1vbnRoXG4gICAgZGF0ZS5pbm5lclRleHQgPSBidWlsZERhdGUuam9pbihcIiBcIik7XG4gIH07XG5cbiAgLy8gVXBkYXRlZCBsb2NhdGlvbiB0aW1lXG4gIGNvbnN0IF90aW1lID0gKGRhdGEpID0+IHtcbiAgICBsZXQgdGltZSA9IGRhdGEudGltZV8xMi50b0xvY2FsZUxvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcbiAgICB0aW1lWzBdID0gdGltZVswXVxuICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAuc3BsaWNlKDAsIHRpbWVbMF0ubGVuZ3RoIC0gMylcbiAgICAgIC5qb2luKFwiXCIpO1xuICAgIHVwZGF0ZWRUaW1lLmlubmVyVGV4dCA9IFwiVXBkYXRlZCBcIiArIHRpbWUuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFdpbmQgY2lyY2xlIGxvYWRpbmcgZnVuY3Rpb25cbiAgY29uc3QgX3dpbmRUb1BlcmNlbnQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHdpbmREZWcgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5kZWcgLyAoMzYwIC8gMTAwKSk7XG4gICAgaWYgKHdpbmREZWcgPT09IDApIHtcbiAgICAgIHdpbmREZWcgPSAxO1xuICAgIH0gZWxzZSBpZiAod2luZERlZyA9PT0gMTAwKSB7XG4gICAgICB3aW5kRGVnID0gOTk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kRGVnO1xuICB9O1xuXG4gIC8vIEZvcm1hdCBDZWxzaXVzXG4gIGNvbnN0IF9mb3JtYXRUZW1wQ2VsID0gKHRlbXApID0+IHRlbXAgKyAnPHNwYW4gY2xhc3M9XCJkZWctc3ltYm9sXCI+JiMxNzY7PHNwYW4gY2xhc3M9XCJtaW51c1wiPi08L3NwYW4+PC9zcGFuPkMnO1xuICBjb25zdCBfZm9ybWF0VGVtcCA9ICh0ZW1wKSA9PiB0ZW1wICsgJzxzcGFuIGNsYXNzPVwiZGVnLXN5bWJvbFwiPiYjMTc2OzxzcGFuIGNsYXNzPVwibWludXNcIj4tPC9zcGFuPjwvc3Bhbj4nO1xuICAvLyBBbmltYXRlIGxvYWRpbmcgY2lyY2xlXG4gIGNvbnN0IF9sb2FkaW5nQ2lyY2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXJzID0gQXJyYXkobG9hZGluZy5sZW5ndGgpO1xuICAgIGNvbnN0IGludGVydmFscyA9IEFycmF5KGxvYWRpbmcubGVuZ3RoKTtcbiAgICBjb3VudGVycy5maWxsKDApO1xuICAgIGxvYWRpbmcuZm9yRWFjaCgobnVtYmVyLCBpbmRleCkgPT4ge1xuICAgICAgaW50ZXJ2YWxzW2luZGV4XSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50ZXJzW2luZGV4XSA9PSBwYXJzZUludChudW1iZXIuZGF0YXNldC5udW0pKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbHNbaW5kZXhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb3VudGVyc1tpbmRleF0gKz0gMTtcbiAgICAgICAgICBpZiAobnVtYmVyLmNsYXNzTGlzdC5jb250YWlucyhcImh1bWlkXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoI2ZkZWY1ZCwgI2ZmYTU1NyBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvdWRzXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoIzk3REFGNSwgIzMxQjhERiBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZFwiKSkge1xuICAgICAgICAgICAgbnVtYmVyLnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgICBcImNvbmljLWdyYWRpZW50KCNGRkYgY2FsYyhcIiArXG4gICAgICAgICAgICAgIChjb3VudGVyc1tpbmRleF0gLSAxKSArXG4gICAgICAgICAgICAgIFwiJSksICMzMzMgY2FsYyhcIiArXG4gICAgICAgICAgICAgIChjb3VudGVyc1tpbmRleF0gLSAxKSArXG4gICAgICAgICAgICAgIFwiJSksICMzMzMgY2FsYyhcIiArXG4gICAgICAgICAgICAgIChjb3VudGVyc1tpbmRleF0gKyAxKSArXG4gICAgICAgICAgICAgIFwiJSksICNGRkYgMGRlZylcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBudW1iZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBjb3VudGVyc1tpbmRleF0gKyBcIiVcIik7XG4gICAgICAgICAgbnVtYmVyLmlubmVySFRNTCA9IGNvdW50ZXJzW2luZGV4XSArIFwiJVwiO1xuICAgICAgICB9XG4gICAgICB9LCAxNSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgX2ZvcmVjYXN0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGRhdGEubGVuZ3RoOyB4KyspIHtcbiAgICAgIGxldCBtYXggPSBudWxsO1xuICAgICAgbGV0IG1pbiA9IG51bGw7XG4gICAgICBjb25zdCBnZXREYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKGRhdGFbeF1bMF0uZHRfdHh0LnNwbGl0KFwiIFwiKVswXSkpO1xuICAgICAgLy8gRGF0ZSAtIERheVxuICAgICAgZm9yZWNhc3RzW3hdLnF1ZXJ5U2VsZWN0b3IoXCIuZGF5XCIpLmlubmVyVGV4dCA9IGdldERheS50b1N0cmluZygpLnNwbGl0KFwiIFwiKVswXTtcbiAgICAgIC8vIE1pbiAvIE1heFxuICAgICAgZm9yIChjb25zdCBmb3JlIG9mIGRhdGFbeF0pIHtcbiAgICAgICAgaWYgKG1heCA9PT0gbnVsbCAmJiBtaW4gPT09IG51bGwpIHtcbiAgICAgICAgICBtYXggPSBmb3JlLm1haW4udGVtcF9tYXg7XG4gICAgICAgICAgbWluID0gZm9yZS5tYWluLnRlbXBfbWluO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcmUubWFpbi50ZW1wX21heCA+IG1heCA/IChtYXggPSBmb3JlLm1haW4udGVtcF9tYXgpIDogKG1heCA9IG1heCk7XG4gICAgICAgICAgZm9yZS5tYWluLnRlbXBfbWluIDwgbWluID8gKG1pbiA9IGZvcmUubWFpbi50ZW1wX21pbikgOiAobWluID0gbWluKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yZWNhc3RzW3hdLnF1ZXJ5U2VsZWN0b3IoXCIubWluXCIpLmlubmVySFRNTCA9IFwiL1wiICsgX2Zvcm1hdFRlbXAoTWF0aC5yb3VuZChtaW4pKTtcbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLm1heFwiKS5pbm5lckhUTUwgPSBfZm9ybWF0VGVtcChNYXRoLnJvdW5kKG1heCkpO1xuICAgIH1cbiAgICAvLyBJbWFnZVxuICB9O1xuXG4gIGNvbnN0IF90b2RheURhdGUgPSAoKSA9PiB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4geXl5eSArIFwiLVwiICsgbW0gKyBcIi1cIiArIGRkO1xuICB9O1xuXG4gIC8vIGNvbnN0IF90b2RheXNEYXRlID0gKCkgPT4ge1xuICAvLyAgIHZhciBvcHRpb25zID0ge1xuICAvLyAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAvLyAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gIC8vICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAvLyAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgLy8gICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAvLyAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgLy8gICAgIHNlY29uZDogXCIyLWRpZ2l0XCIsXG4gIC8vICAgICBob3VyMTI6IGZhbHNlLFxuICAvLyAgIH07XG4gIC8vICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLXVzXCIsIG9wdGlvbnMpLnNwbGl0KFwiLFwiKTtcbiAgLy8gICBkYXRlLnNwbGljZShkYXRlLmxlbmd0aCAtIDEsIDEpO1xuICAvLyAgIGRhdGVbMV0gPSBkYXRlWzFdLnRyaW0oKS5zcGxpdChcIiBcIikucmV2ZXJzZSgpLmpvaW4oXCIgXCIpO1xuICAvLyAgIGRhdGVbMl0gPSBkYXRlWzJdLnRyaW0oKTtcbiAgLy8gICBkYXRlWzBdICs9IFwiLFwiO1xuICAvLyAgIGRhdGUgPSBkYXRlLmpvaW4oXCIgXCIpLnRyaW0oKTtcblxuICAvLyAgIHJldHVybiBkYXRlO1xuICAvLyB9O1xuXG4gIGNvbnN0IF9yZW1vdmVUb2RheSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZGF0YTtcbiAgICBmb3IgKGxldCBvID0gMDsgbyA8IHJlbW92ZS5sZW5ndGg7IG8rKykge1xuICAgICAgaWYgKGRhdGFbb11bMF0uZHRfdHh0LmluZGV4T2YoX3RvZGF5RGF0ZSgpKSA+IC0xKSB7XG4gICAgICAgIHJlbW92ZS5zcGxpY2UobywgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW1vdmU7XG4gIH07XG5cbiAgY29uc3QgX3NwbGl0RGF0YUJ5RGF5cyA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGZvcmVjYXN0RGF5cyA9IFtdO1xuICAgIGxldCBmb3JlY2FzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZm9yZWNhc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3JlY2FzdFswXS5kdF90eHQuaW5kZXhPZihkYXRhLmxpc3RbaV0uZHRfdHh0LnNwbGl0KFwiIFwiKVswXSkgPiAtMSkge1xuICAgICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgICAgZm9yZWNhc3QgPSBbXTtcbiAgICAgICAgICBmb3JlY2FzdC5wdXNoKGRhdGEubGlzdFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5saXN0Lmxlbmd0aCAtIDEgPT09IGkpIHtcbiAgICAgICAgICBmb3JlY2FzdERheXMucHVzaChmb3JlY2FzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvcmVjYXN0RGF5cztcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGVDdXJyZW50LCB1cGRhdGVGb3JlY2FzdCwgdXBkYXRlRGF0ZVRpbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRybyAubG9jYXRpb25cIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRybyAuZGF0ZVwiKTtcbmNvbnN0IHVwZGF0ZWRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLnRpbWVcIik7XG5jb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwIC50ZW1wXCIpO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtd3JhcCAuZGVzY1wiKTtcbmNvbnN0IG1pblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMSAubWluLXRlbXBcIik7XG5jb25zdCBtYXhUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTEgLm1heC10ZW1wXCIpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTEgLmZlZWxzLWxpa2VcIik7XG5jb25zdCBsb2FkQ2xvdWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTIgLmNsb3Vkc1wiKTtcbmNvbnN0IGxvYWRIdW1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0yIC5odW1pZFwiKTtcbmNvbnN0IGxvYWRXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTIgLndpbmRcIik7XG5jb25zdCBmb3JlY2FzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0IC5mb3JlXCIpO1xuY29uc3QgZm9yZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xubGV0IGxvYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyZXNzLWl0ZW1cIik7XG5cbmV4cG9ydCB7XG4gIGxvY2F0aW9uLFxuICBkYXRlLFxuICB1cGRhdGVkVGltZSxcbiAgdGVtcGVyYXR1cmUsXG4gIGRlc2NyaXB0aW9uLFxuICBtaW5UZW1wLFxuICBtYXhUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGxvYWRpbmcsXG4gIGxvYWRDbG91ZHMsXG4gIGxvYWRIdW1pZCxcbiAgbG9hZFdpbmQsXG4gIGZvcmVjYXN0cyxcbiAgZm9yZVdyYXAsXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCAubWludXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG46cm9vdCAuY3VycmVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbjpyb290IC5jdXJyZW50IC5sb2NhdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgZm9udC1zaXplOiA0LjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmRhdGUsXFxuOnJvb3QgLmN1cnJlbnQgLnRpbWUsXFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MtMSBsaSxcXG46cm9vdCAuY3VycmVudCAuZGVzYy0yIGxpIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzcmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAudGVtcCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBsaW5lLWhlaWdodDogODQlO1xcbn1cXG46cm9vdCAuY3VycmVudCAuZGVzYyxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgLmRheSxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC50ZW1wLWltZyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDE5LjEyNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG59XFxuXFxuI3dlYXRoZXItYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gIHBhZGRpbmc6IDEuODU3cmVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCBpbnB1dCB7XFxuICBib3JkZXI6IDAuMTQzcmVtIHNvbGlkICNhMGEwYTA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCBoMSAubG9nby1zdW4ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGVmNWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAjZmRlZjVkLCAjZmZhNTU3KTtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMzMzMzMzM7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuaW50cm8ge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi81O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC13cmFwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLXdyYXAgLmRlc2Mge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLWltZyB7XFxuICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTEge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvNTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMSxcXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMi41cmVtO1xcbiAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGdhcDogNi41NjNyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiA1LzEvNi81O1xcbiAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiBwOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpIGltZyB7XFxuICBtYXgtd2lkdGg6IDdyZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IC5zZXBhcmF0ZSB7XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHdpZHRoOiA2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvdXItZGF5cy5mb3JlY2FzdCAuZm9yZTpudGgtb2YtdHlwZSg5KSxcXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm91ci1kYXlzLmZvcmVjYXN0IC5zZXBhcmF0ZTpudGgtb2YtdHlwZSg4KSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGhlaWdodDogMTByZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDA7XFxuICBhbmltYXRpb246IDAuNHMgZWFzZS1vdXQgcmV2ZXJzZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbTo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTByZW07XFxuICBtYXJnaW46IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkNBQUE7QUFDQTs7O0NBQUE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURFQSxnREFBQTtBQUNBOzs7Ozs7Ozs7OztFQVdFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7O0FEREE7O0VBRUUsZ0JBQUE7QUNJRjs7QURGQTs7RUFFRSxZQUFBO0FDS0Y7O0FESEE7Ozs7RUFJRSxXQUFBO0VBQ0EsYUFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ09GOztBRExBOzs7O0VBSUUsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNTRjs7QUFwSkE7RUFDRSx5QkFBQTtFQUNBLDJEQUFBO0FBdUpGO0FBckpBO0VBQ0UsNEJBQUE7RUFDQSwyREFBQTtBQXVKRjtBQXJKQTtFQUNFLDBCQUFBO0VBQ0EsMkRBQUE7QUF1SkY7QUFySkE7RUFDRSwrQkFBQTtFQUNBLDJEQUFBO0FBdUpGO0FBckpBO0VBQ0UseUJBQUE7RUFDQSwyREFBQTtBQXVKRjtBQXZJQTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGNBZlk7QUF3SmQ7QUFyR0U7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUF1R0o7QUF0R0k7RUFDRSxrQkFBQTtBQXdHTjtBQW5HRTtFQUNFLGtCQUFBO0FBcUdKO0FBbkdJO0VBN0NBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBdEJVO0VBa0VSLHFCQUFB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QTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFyUmE7RUFzUmIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBM1JVO0VBNFJWLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RUExUnVCO0VBMlJ2QixpRUExUmU7RUEyUmYsNEJBQUE7RUFDQSxjQXRTVTtFQXVTVix3QkFBQTtBQTBGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBSZXNldCBDU1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5ib2R5ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3Jlc2V0LnNjc3NcXFwiO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1FeHRyYUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcblxcbi8vIFZhcmlhYmxlc1xcbiRibGFjay1jb2xvcjogIzMzMzMzMztcXG4kZ3JleS1jb2xvcjogI2EwYTBhMDtcXG4kYmctY29sb3I6ICNmMGYwZjA7XFxuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xcbiR5ZWxsb3ctY29sb3I6ICNmZGVmNWQ7XFxuJG9yYW5nZS1jb2xvcjogI2ZmYTU1NztcXG4kbG9hZGluZy1jaXJjbGU6IDEwcmVtO1xcbiQtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiRib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93LWluc2V0OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuXFxuICAvLyBUaXRsZSBNYWluXFxuICBAbWl4aW4gbWFpbi10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNC42cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBTbWFsbFxcbiAgQG1peGluIHNtYWxsLWRlc2Mge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM3JlbTtcXG4gIH1cXG5cXG4gIC8vIERlc2NyaXB0aW9uIE1pZFxcbiAgQG1peGluIG1pZC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIH1cXG5cXG4gIC8vIFdlYXRoZXIgVGl0bGVcXG4gIEBtaXhpbiB0ZW1wLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgLy8gZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGxpbmUtaGVpZ2h0OiA4NCU7XFxuICB9XFxuXFxuICAvLyBEZWdyZWUgU3ltYm9sXFxuICAuZGVnLXN5bWJvbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAubWludXMge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gU3R5bGluZ1xcbiAgLmN1cnJlbnQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIC5sb2NhdGlvbiB7XFxuICAgICAgQGluY2x1ZGUgbWFpbi10aXRsZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICAgIH1cXG4gICAgLmRhdGUsXFxuICAgIC50aW1lLFxcbiAgICAuZGVzYy0xIGxpLFxcbiAgICAuZGVzYy0yIGxpIHNwYW4ge1xcbiAgICAgIEBpbmNsdWRlIHNtYWxsLWRlc2M7XFxuICAgIH1cXG4gICAgLnRlbXAge1xcbiAgICAgIEBpbmNsdWRlIHRlbXAtdGl0bGU7XFxuICAgIH1cXG4gICAgLmRlc2MsXFxuICAgIC5mb3JlY2FzdCAuZGF5LFxcbiAgICAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgICAgIEBpbmNsdWRlIG1pZC1kZXNjO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG4gICAgfVxcbiAgICAudGVtcC1pbWcgaW1nIHtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgbWF4LXdpZHRoOiAxOS4xMjVyZW07XFxuICAgICAgbWF4LWhlaWdodDogMTMuNjI1cmVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIExheW91dCBzdHlsaW5nXFxuI3dlYXRoZXItYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG5cXG4gIC53ZWF0aGVyLWFwcC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAgICBwYWRkaW5nOiAxLjg1N3JlbTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgICAudGl0bGUtc2VhcmNoIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcXG5cXG4gICAgICAuaW5wdXQtd3JhcCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgYm9yZGVyOiAwLjE0M3JlbSBzb2xpZCAkZ3JleS1jb2xvcjtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICAgIGhlaWdodDogM3JlbTtcXG4gICAgICAgICAgd2lkdGg6IDNyZW07XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgY29sb3I6ICRibGFjay1jb2xvcjtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxuICAgICAgICAubG9nby1zdW4ge1xcbiAgICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR5ZWxsb3ctY29sb3I7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChhdCB0b3AgcmlnaHQsICR5ZWxsb3ctY29sb3IsICRvcmFuZ2UtY29sb3IpO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRibGFjay1jb2xvcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmN1cnJlbnQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtYXgtY29udGVudCk7XFxuXFxuICAgICAgLmludHJvIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG4gICAgICB9XFxuICAgICAgLnRlbXAtd3JhcCB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcblxcbiAgICAgICAgLmRlc2Mge1xcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLnRlbXAtaW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMi8zLzMvNTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB9XFxuICAgICAgLmRlc2MtMSB7XFxuICAgICAgICBncmlkLWFyZWE6IDMvMS80LzU7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiA0LzEvNS81O1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVzYy0xLFxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyLjVyZW07XFxuICAgICAgICBtYXJnaW46IDEuODc1cmVtIDA7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTIge1xcbiAgICAgICAgZ2FwOiA2LjU2M3JlbTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmZvcmVjYXN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdyaWQtYXJlYTogNS8xLzYvNTtcXG4gICAgICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG5cXG4gICAgICAgID4gZGl2IHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICBjb2xvcjogJGdyZXktY29sb3I7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgIG1heC13aWR0aDogN3JlbTtcXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5zZXBhcmF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3VyLWRheXMuZm9yZWNhc3Qge1xcbiAgICAgIC5mb3JlOm50aC1vZi10eXBlKDkpLFxcbiAgICAgIC5zZXBhcmF0ZTpudGgtb2YtdHlwZSg4KSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gTG9hZGluZyBDaXJjbGVcXG4gIC5wcm9ncmVzcy1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgaGVpZ2h0OiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBhbmltYXRpb246IDAuNHMgZWFzZS1vdXQgcmV2ZXJzZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXG4gICAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtY29sb3I7XFxuICB9XFxuXFxuICAucHJvZ3Jlc3MtaXRlbTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICQtd2Via2l0LWJveC1zaGFkb3ctaW5zZXQ7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWluc2V0O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlLnNjc3NcIjtcbmltcG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG4vLyBpbXBvcnQgY2l0eURhdGEgZnJvbSBcIi4vZGF0YS9jaXR5Lmxpc3QuanNvblwiO1xuXG5jb25zdCB3ZWF0aGVyQXBwID0gKCgpID0+IHtcbiAgLy8gU3RvcmUgdmFsdWVzXG4gIGNvbnN0IHZhbHVlcyA9IHtcbiAgICBsb2M6IG51bGwsXG4gICAgbGltaXQ6IFwiNVwiLFxuICAgIHVuaXRzOiBcIiZ1bml0cz1tZXRyaWNcIixcbiAgICB3ZWF0aGVyS2V5OiBcImUyZjg4YTY0ZWRiMjY5MDhmMmM4YTgzNmUwZjg3YzE5XCIsXG4gICAgY29vcmRVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9XCIsXG4gICAgY29vcmQ6IG51bGwsXG4gICAgdG9kYXlVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PVwiLFxuICAgIHRvZGF5OiBudWxsLFxuICAgIGZvcmVVcmw6IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD1cIixcbiAgICBmb3JlOiBudWxsLFxuICAgIGRhdGVUaW1lS2V5OiBcIjJkMWViNzc4Nzc2MjQ4MmQ5NjA3M2MyZjhlYjFhZGRmXCIsXG4gICAgZGF0ZVRpbWVVcmw6IFwiaHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby90aW1lem9uZT9hcGlLZXk9XCIsXG4gICAgZGF0ZVRpbWU6IFwiXCIsXG4gIH07XG5cbiAgLy8gSW5wdXQgZWxlbWVudCB0byBnZXQgY2xpZW50IGxvY2F0aW9uXG4gIGNvbnN0IGlucHV0RWxlbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXdyYXAgaW5wdXRcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC13cmFwIGJ1dHRvblwiKTtcbiAgICAvLyBWYWxpZGF0ZSB2YWx1ZSBiZWZvcmUgbWFraW5nIEFQSSBjYWxsXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHZhbHVlcy5sb2MgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGdldERhdGEodmFsdWVzLmxvYyk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImludmFsaWRcIik7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlucHV0LnZhbGlkaXR5KTtcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyBGZXRjaCB3ZWF0aGVyIERhdGFcbiAgY29uc3QgZ2V0RGF0YSA9ICh2YWwpID0+IHtcbiAgICByZXF1ZXN0RGF0YSh2YWx1ZXMuY29vcmRVcmwgKyB2YWwgKyBcIiZsaW1pdD1cIiArIHZhbHVlcy5saW1pdCArIFwiJmFwcGlkPVwiICsgdmFsdWVzLndlYXRoZXJLZXkpLnRoZW4oKGNvb3JkKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgICB2YWx1ZXMuY29vcmQgPSBjb29yZFswXTtcbiAgICAgIC8vIEN1cnJlbnQgZmV0Y2hcbiAgICAgIHJlcXVlc3REYXRhKHZhbHVlcy50b2RheVVybCArIGNvb3JkWzBdLmxhdCArIFwiJmxvbj1cIiArIGNvb3JkWzBdLmxvbiArIFwiJmFwcGlkPVwiICsgdmFsdWVzLndlYXRoZXJLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oXG4gICAgICAgIChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUN1cnJlbnQoY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICAvLyBGb3JlY2FzdCBmZXRjaFxuICAgICAgcmVxdWVzdERhdGEodmFsdWVzLmZvcmVVcmwgKyBjb29yZFswXS5sYXQgKyBcIiZsb249XCIgKyBjb29yZFswXS5sb24gKyBcIiZhcHBpZD1cIiArIHZhbHVlcy53ZWF0aGVyS2V5ICsgdmFsdWVzLnVuaXRzKS50aGVuKFxuICAgICAgICAoZm9yZWNhc3QpID0+IHtcbiAgICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgLy8gTG9jYXRpb24gZGF0ZSBhbmQgdGltZVxuICAgICAgLy8gcmVxdWVzdERhdGEodmFsdWVzLmRhdGVUaW1lVXJsICsgdmFsdWVzLmRhdGVUaW1lS2V5ICsgXCImbGF0PVwiICsgY29vcmRbMF0ubGF0ICsgXCImbG9uZz1cIiArIGNvb3JkWzBdLmxvbikudGhlbigoZGF0ZVRpbWUpID0+IHtcbiAgICAgIC8vICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZURhdGVUaW1lKGRhdGVUaW1lKTtcbiAgICAgIC8vIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEZldGNoIHJlcXVlc3QgZnVuY3Rpb25cbiAgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERhdGEodXJsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoZXJyKTsgLy8gVHlwZUVycm9yOiBmYWlsZWQgdG8gZmV0Y2hcbiAgICB9XG4gIH1cbn0pKCk7XG4iXSwibmFtZXMiOlsibG9jYXRpb24iLCJkYXRlIiwidXBkYXRlZFRpbWUiLCJ0ZW1wZXJhdHVyZSIsImRlc2NyaXB0aW9uIiwibWluVGVtcCIsIm1heFRlbXAiLCJmZWVsc0xpa2UiLCJsb2FkaW5nIiwibG9hZENsb3VkcyIsImxvYWRIdW1pZCIsImxvYWRXaW5kIiwiZm9yZWNhc3RzIiwiZm9yZVdyYXAiLCJzdGFydE9mRGF5IiwiZG9tTWFuaXB1bGF0aW9uIiwidXBkYXRlQ3VycmVudCIsImRhdGEiLCJfbG9jYXRpb24iLCJfQ3VycmVudFRlbXAiLCJfRGVzY3JpcHRpb24iLCJfbWluVGVtcCIsIl9tYXhUZW1wIiwiX2ZlZWxzTGlrZSIsIl9sb2FkaW5nIiwidXBkYXRlRm9yZWNhc3QiLCJvcmdhbml6ZWREYXRhIiwiX3NwbGl0RGF0YUJ5RGF5cyIsImNsZWFuRGF0YSIsIl9yZW1vdmVUb2RheSIsIl9udW1EYXlzIiwiX2ZvcmVjYXN0IiwidXBkYXRlRGF0ZVRpbWUiLCJjb25zb2xlIiwibG9nIiwiX3RpbWUiLCJfZGF0ZSIsImlubmVyVGV4dCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwiaW5uZXJIVE1MIiwiX2Zvcm1hdFRlbXBDZWwiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXIiLCJ0ZW1wX21pbiIsInRlbXBfbWF4IiwiZmVlbHNfbGlrZSIsInNldEF0dHJpYnV0ZSIsImNsb3VkcyIsImFsbCIsImh1bWlkaXR5IiwiX3dpbmRUb1BlcmNlbnQiLCJfbG9hZGluZ0NpcmNsZSIsImxlbmd0aCIsImNsYXNzTmFtZSIsIm1haW5EYXRlIiwiZGF0ZV90aW1lX3R4dCIsInNwbGl0IiwiYnVpbGREYXRlIiwicHVzaCIsInNwbGljZSIsImpvaW4iLCJyZXBsYWNlIiwidGltZSIsInRpbWVfMTIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIndpbmREZWciLCJ3aW5kIiwiZGVnIiwiX2Zvcm1hdFRlbXAiLCJjb3VudGVycyIsIkFycmF5IiwiaW50ZXJ2YWxzIiwiZmlsbCIsImZvckVhY2giLCJudW1iZXIiLCJpbmRleCIsInNldEludGVydmFsIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwibnVtIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwieCIsIm1heCIsIm1pbiIsImdldERheSIsIkRhdGUiLCJkdF90eHQiLCJxdWVyeVNlbGVjdG9yIiwidG9TdHJpbmciLCJmb3JlIiwiX3RvZGF5RGF0ZSIsInRvZGF5IiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwicmVtb3ZlIiwibyIsImluZGV4T2YiLCJmb3JlY2FzdERheXMiLCJmb3JlY2FzdCIsImkiLCJsaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2VhdGhlckFwcCIsInZhbHVlcyIsImxvYyIsImxpbWl0IiwidW5pdHMiLCJ3ZWF0aGVyS2V5IiwiY29vcmRVcmwiLCJjb29yZCIsInRvZGF5VXJsIiwiZm9yZVVybCIsImRhdGVUaW1lS2V5IiwiZGF0ZVRpbWVVcmwiLCJkYXRlVGltZSIsImlucHV0RWxlbSIsImlucHV0IiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiZ2V0RGF0YSIsInZhbCIsInJlcXVlc3REYXRhIiwidGhlbiIsImxhdCIsImxvbiIsImN1cnJlbnQiLCJ1cmwiLCJmZXRjaCIsIm1vZGUiLCJyZXNwb25zZSIsImpzb24iLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=
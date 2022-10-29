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

          if (number.classList.contains("wind")) {
            var wind = '';

            if (counters[index] >= 0 && counters[index] <= 6.25) {
              wind = 'N';
            } else if (counters[index] > 6.25 && counters[index] <= 12.5) {
              wind = 'NNE';
            } else if (counters[index] > 12.5 && counters[index] <= 18.75) {
              wind = 'NE';
            } else if (counters[index] > 18.75 && counters[index] <= 25) {
              wind = 'ENE';
            } else if (counters[index] > 25 && counters[index] <= 31.25) {
              wind = 'E';
            } else if (counters[index] > 31.25 && counters[index] <= 37.5) {
              wind = 'ESE';
            } else if (counters[index] > 37.5 && counters[index] <= 43.75) {
              wind = 'SE';
            } else if (counters[index] > 43.75 && counters[index] <= 50) {
              wind = 'SSE';
            } else if (counters[index] > 50 && counters[index] <= 56.25) {
              wind = 'S';
            } else if (counters[index] > 56.25 && counters[index] <= 62.5) {
              wind = 'SSW';
            } else if (counters[index] > 62.5 && counters[index] <= 68.75) {
              wind = 'SW';
            } else if (counters[index] > 68.75 && counters[index] <= 75) {
              wind = 'WSW';
            } else if (counters[index] > 75 && counters[index] <= 81.25) {
              wind = 'W';
            } else if (counters[index] > 81.25 && counters[index] <= 87.5) {
              wind = 'WNW';
            } else if (counters[index] > 87.5 && counters[index] <= 93.75) {
              wind = 'NW';
            } else if (counters[index] > 93.75 && counters[index] <= 100) {
              wind = 'NNW';
            }

            number.innerHTML = wind;
            number.setAttribute("data-value", wind);
          } else {
            number.innerHTML = counters[index] + "%";
            number.setAttribute("data-value", counters[index] + "%");
          }
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\n}\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n}\n:root .deg-symbol {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n:root .deg-symbol .minus {\n  position: absolute;\n}\n:root .current {\n  text-align: center;\n}\n:root .current .location {\n  font-family: \"Heebo-Thin\";\n  font-size: 4.6rem;\n  letter-spacing: -0.15rem;\n  color: #333333;\n  margin-bottom: 0.4rem;\n}\n:root .current .date,\n:root .current .time,\n:root .current .desc-1 li,\n:root .current .desc-2 li span {\n  font-family: \"Heebo-Light\";\n  color: #333333;\n  font-size: 1.4rem;\n  letter-spacing: -0.03rem;\n}\n:root .current .temp {\n  font-family: \"Heebo-Bold\";\n  font-size: 8rem;\n  color: #333333;\n  line-height: 84%;\n}\n:root .current .desc,\n:root .current .forecast .day,\n:root .current .forecast li > div {\n  font-family: \"Heebo-ExtraLight\";\n  color: #333333;\n  font-size: 2.5rem;\n  letter-spacing: -0.06rem;\n  margin-bottom: 0.8rem;\n}\n:root .current .temp-img img {\n  height: auto;\n  width: auto;\n  max-width: 19.125rem;\n  max-height: 13.625rem;\n}\n\n#weather-app {\n  background-color: #f0f0f0;\n}\n#weather-app .weather-app-container {\n  width: 100%;\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(3, max-content);\n  padding: 1.857rem;\n  align-content: center;\n}\n#weather-app .weather-app-container .title-search {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 1.875rem;\n}\n#weather-app .weather-app-container .title-search .input-wrap {\n  align-self: center;\n  justify-self: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search .input-wrap input {\n  border: 0.143rem solid #a0a0a0;\n  border-radius: 2rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-weight: 900;\n}\n#weather-app .weather-app-container .title-search .input-wrap button {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #f0f0f0;\n  height: 3rem;\n  width: 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #333333;\n  cursor: pointer;\n}\n#weather-app .weather-app-container .title-search h1 {\n  align-self: center;\n  justify-self: left;\n  font-family: \"Heebo-Bold\";\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: underline;\n}\n#weather-app .weather-app-container .title-search h1 .logo-sun {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 50%;\n  background-color: #fdef5d;\n  background-image: radial-gradient(at top right, #fdef5d, #ffa557);\n  margin-right: 0.25rem;\n  border: 5px solid #333333;\n}\n#weather-app .weather-app-container .current {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, max-content);\n}\n#weather-app .weather-app-container .current .intro {\n  grid-area: 1/1/2/5;\n  margin-bottom: 3.2rem;\n}\n#weather-app .weather-app-container .current .temp-wrap {\n  grid-area: 2/1/3/3;\n  margin-right: 1.25rem;\n  width: max-content;\n  align-self: start;\n  justify-self: end;\n}\n#weather-app .weather-app-container .current .temp-wrap .desc {\n  text-transform: capitalize;\n}\n#weather-app .weather-app-container .current .temp-img {\n  grid-area: 2/3/3/5;\n  margin-left: 1.25rem;\n  display: flex;\n  justify-content: flex-start;\n}\n#weather-app .weather-app-container .current .desc-1 {\n  grid-area: 3/1/4/5;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  grid-area: 4/1/5/5;\n}\n#weather-app .weather-app-container .current .desc-1,\n#weather-app .weather-app-container .current .desc-2 {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 1.875rem 0;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  gap: 6.563rem;\n}\n#weather-app .weather-app-container .forecast {\n  display: flex;\n  grid-area: 5/1/6/5;\n  margin-top: 1.875rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#weather-app .weather-app-container .forecast li {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: repeat(3, auto);\n}\n#weather-app .weather-app-container .forecast li > div {\n  display: flex;\n  justify-content: center;\n}\n#weather-app .weather-app-container .forecast li > div p:nth-child(2) {\n  color: #a0a0a0;\n}\n#weather-app .weather-app-container .forecast li img {\n  max-width: 7rem;\n  margin: 0 auto;\n}\n#weather-app .weather-app-container .forecast .separate {\n  font-size: 0;\n  height: 130px;\n  background: #fff;\n  width: 6px;\n  color: #ffffff;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n}\n#weather-app .weather-app-container .four-days.forecast .fore:nth-of-type(9),\n#weather-app .weather-app-container .four-days.forecast .separate:nth-of-type(8) {\n  display: none;\n}\n#weather-app .progress-item {\n  display: flex;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  font-size: 0;\n  animation: 0.4s ease-out reverse;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 1.8rem;\n  background-color: #ffffff;\n}\n#weather-app .progress-item::after {\n  content: attr(data-value);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10rem;\n  margin: 1rem;\n  border-radius: 50%;\n  background: #ffffff;\n  line-height: 1;\n  padding-top: 0.25rem;\n  font-size: 2rem;\n  text-align: center;\n  -webkit-box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n  letter-spacing: -0.06rem;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nbody * {\n  box-sizing: border-box;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n","@import \"./reset.scss\";\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(\"../fonts/static/Heebo-Bold.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(\"../fonts/static/Heebo-Regular.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(\"../fonts/static/Heebo-Light.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(\"../fonts/static/Heebo-ExtraLight.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(\"../fonts/static/Heebo-Thin.ttf\") format(\"woff\");\n}\n\n// Variables\n$black-color: #333333;\n$grey-color: #a0a0a0;\n$bg-color: #f0f0f0;\n$white-color: #ffffff;\n$yellow-color: #fdef5d;\n$orange-color: #ffa557;\n$loading-circle: 10rem;\n$-webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$-webkit-box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: $black-color;\n\n  // Title Main\n  @mixin main-title {\n    font-family: \"Heebo-Thin\";\n    font-size: 4.6rem;\n    letter-spacing: -0.15rem;\n    color: $black-color;\n  }\n\n  // Description Small\n  @mixin small-desc {\n    font-family: \"Heebo-Light\";\n    color: $black-color;\n    font-size: 1.4rem;\n    letter-spacing: -0.03rem;\n  }\n\n  // Description Mid\n  @mixin mid-desc {\n    font-family: \"Heebo-ExtraLight\";\n    color: $black-color;\n    font-size: 2.5rem;\n    letter-spacing: -0.06rem;\n  }\n\n  // Weather Title\n  @mixin temp-title {\n    font-family: \"Heebo-Bold\";\n    // font-size: 9rem;\n    font-size: 8rem;\n    color: $black-color;\n    line-height: 84%;\n  }\n\n  // Degree Symbol\n  .deg-symbol {\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    .minus {\n      position: absolute;\n    }\n  }\n\n  // Styling\n  .current {\n    text-align: center;\n\n    .location {\n      @include main-title;\n      margin-bottom: 0.4rem;\n    }\n    .date,\n    .time,\n    .desc-1 li,\n    .desc-2 li span {\n      @include small-desc;\n    }\n    .temp {\n      @include temp-title;\n    }\n    .desc,\n    .forecast .day,\n    .forecast li > div {\n      @include mid-desc;\n      margin-bottom: 0.8rem;\n    }\n    .temp-img img {\n      height: auto;\n      width: auto;\n      max-width: 19.125rem;\n      max-height: 13.625rem;\n    }\n  }\n}\n\n// Layout styling\n#weather-app {\n  background-color: $bg-color;\n\n  .weather-app-container {\n    width: 100%;\n    max-width: 1440px;\n    min-height: 100vh;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: repeat(3, max-content);\n    padding: 1.857rem;\n    align-content: center;\n\n    .title-search {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      margin-bottom: 1.875rem;\n\n      .input-wrap {\n        align-self: center;\n        justify-self: right;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        input {\n          border: 0.143rem solid $grey-color;\n          border-radius: 2rem;\n          padding: 0.4rem 1rem;\n          font-size: 1rem;\n          font-weight: 900;\n        }\n\n        button {\n          -webkit-transform: rotate(315deg);\n          -moz-transform: rotate(315deg);\n          -o-transform: rotate(315deg);\n          transform: rotate(315deg);\n          font-weight: bold;\n          font-size: 2.5rem;\n          border-radius: 50%;\n          border: none;\n          background-color: $bg-color;\n          height: 3rem;\n          width: 3rem;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          color: $black-color;\n          cursor: pointer;\n        }\n      }\n\n      h1 {\n        align-self: center;\n        justify-self: left;\n        font-family: \"Heebo-Bold\";\n        font-size: 2.5rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-decoration: underline;\n\n        .logo-sun {\n          font-size: 0;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: red;\n          height: 4rem;\n          width: 4rem;\n          border-radius: 50%;\n          background-color: $yellow-color;\n          background-image: radial-gradient(at top right, $yellow-color, $orange-color);\n          margin-right: 0.25rem;\n          border: 5px solid $black-color;\n        }\n      }\n    }\n\n    .current {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(5, max-content);\n\n      .intro {\n        grid-area: 1/1/2/5;\n        margin-bottom: 3.2rem;\n      }\n      .temp-wrap {\n        grid-area: 2/1/3/3;\n        margin-right: 1.25rem;\n        width: max-content;\n        align-self: start;\n        justify-self: end;\n\n        .desc {\n          text-transform: capitalize;\n        }\n      }\n      .temp-img {\n        grid-area: 2/3/3/5;\n        margin-left: 1.25rem;\n        display: flex;\n        justify-content: flex-start;\n      }\n      .desc-1 {\n        grid-area: 3/1/4/5;\n      }\n      .desc-2 {\n        grid-area: 4/1/5/5;\n      }\n\n      .desc-1,\n      .desc-2 {\n        display: grid;\n        grid-template-columns: repeat(3, max-content);\n        justify-content: center;\n        gap: 2.5rem;\n        margin: 1.875rem 0;\n      }\n      .desc-2 {\n        gap: 6.563rem;\n      }\n    }\n\n    .forecast {\n      display: flex;\n      grid-area: 5/1/6/5;\n      margin-top: 1.875rem;\n      justify-content: space-evenly;\n      align-items: center;\n\n      li {\n        display: grid;\n        justify-content: center;\n        align-items: center;\n        grid-template-rows: repeat(3, auto);\n\n        > div {\n          display: flex;\n          justify-content: center;\n\n          p:nth-child(2) {\n            color: $grey-color;\n          }\n        }\n        img {\n          max-width: 7rem;\n          margin: 0 auto;\n        }\n      }\n      .separate {\n        font-size: 0;\n        height: 130px;\n        background: #fff;\n        width: 6px;\n        color: $white-color;\n        -webkit-box-shadow: $-webkit-box-shadow;\n        box-shadow: $box-shadow;\n      }\n    }\n\n    .four-days.forecast {\n      .fore:nth-of-type(9),\n      .separate:nth-of-type(8) {\n        display: none;\n      }\n    }\n  }\n\n  // Loading Circle\n  .progress-item {\n    display: flex;\n    width: $loading-circle;\n    height: $loading-circle;\n    border-radius: 50%;\n    font-size: 0;\n    animation: 0.4s ease-out reverse;\n    -webkit-box-shadow: $-webkit-box-shadow;\n    box-shadow: $box-shadow;\n    margin-bottom: 1.8rem;\n    background-color: $white-color;\n  }\n\n  .progress-item::after {\n    content: attr(data-value);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: $loading-circle;\n    margin: 1rem;\n    border-radius: 50%;\n    background: $white-color;\n    line-height: 1;\n    padding-top: 0.25rem;\n    font-size: 2rem;\n    text-align: center;\n    -webkit-box-shadow: $-webkit-box-shadow-inset;\n    box-shadow: $box-shadow-inset;\n    font-family: \"Heebo-Regular\";\n    color: $black-color;\n    letter-spacing: -0.06rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxTQUFTLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLFlBQVksTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsYUFBYSxhQUFhLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxhQUFhLGNBQWMsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxhQUFhLGNBQWMsWUFBWSxXQUFXLFlBQVksK3VCQUErdUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyx3SkFBd0osbUJBQW1CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLDJCQUEyQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLDZEQUE2RCxrQkFBa0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsOERBQThELGtCQUFrQixHQUFHLE9BQU8sZ0JBQWdCLGlCQUFpQixHQUFHLDhCQUE4QixnQkFBZ0IsZ0NBQWdDLGtFQUFrRSxHQUFHLGNBQWMsbUNBQW1DLHFFQUFxRSxHQUFHLGNBQWMsaUNBQWlDLG1FQUFtRSxHQUFHLGNBQWMsc0NBQXNDLHdFQUF3RSxHQUFHLGNBQWMsZ0NBQWdDLGtFQUFrRSxHQUFHLHdDQUF3Qyx1QkFBdUIscUJBQXFCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix1RUFBdUUsK0RBQStELG1GQUFtRiwyRUFBMkUsV0FBVyxvQkFBb0IsbUNBQW1DLHdCQUF3QiwwQ0FBMEMsa0NBQWtDLHdCQUF3QiwrQkFBK0IsMEJBQTBCLEtBQUssaURBQWlELG1DQUFtQywwQkFBMEIsd0JBQXdCLCtCQUErQixLQUFLLDZDQUE2Qyx3Q0FBd0MsMEJBQTBCLHdCQUF3QiwrQkFBK0IsS0FBSyw2Q0FBNkMsa0NBQWtDLHlCQUF5QixzQkFBc0IsMEJBQTBCLHVCQUF1QixLQUFLLHVDQUF1Qyx5QkFBeUIsMkJBQTJCLDhCQUE4QixjQUFjLDJCQUEyQixPQUFPLEtBQUssOEJBQThCLHlCQUF5QixtQkFBbUIsNEJBQTRCLDhCQUE4QixPQUFPLGdFQUFnRSw0QkFBNEIsT0FBTyxhQUFhLDRCQUE0QixPQUFPLDJEQUEyRCwwQkFBMEIsOEJBQThCLE9BQU8scUJBQXFCLHFCQUFxQixvQkFBb0IsNkJBQTZCLDhCQUE4QixPQUFPLEtBQUssR0FBRyxxQ0FBcUMsZ0NBQWdDLDhCQUE4QixrQkFBa0Isd0JBQXdCLHdCQUF3QixxQkFBcUIsb0JBQW9CLGlEQUFpRCx3QkFBd0IsNEJBQTRCLHVCQUF1QixzQkFBc0IsdUNBQXVDLGdDQUFnQyx1QkFBdUIsNkJBQTZCLDhCQUE4Qix3QkFBd0Isa0NBQWtDLDhCQUE4QixtQkFBbUIsK0NBQStDLGdDQUFnQyxpQ0FBaUMsNEJBQTRCLDZCQUE2QixXQUFXLG9CQUFvQiw4Q0FBOEMsMkNBQTJDLHlDQUF5QyxzQ0FBc0MsOEJBQThCLDhCQUE4QiwrQkFBK0IseUJBQXlCLHdDQUF3Qyx5QkFBeUIsd0JBQXdCLGlDQUFpQyxvQ0FBb0MsZ0NBQWdDLGdDQUFnQyw0QkFBNEIsV0FBVyxTQUFTLGNBQWMsNkJBQTZCLDZCQUE2QixzQ0FBc0MsNEJBQTRCLHdCQUF3QixrQ0FBa0MsOEJBQThCLHFDQUFxQyx1QkFBdUIseUJBQXlCLGlDQUFpQyxvQ0FBb0MsZ0NBQWdDLDRCQUE0Qix5QkFBeUIsd0JBQXdCLCtCQUErQiw0Q0FBNEMsMEZBQTBGLGtDQUFrQywyQ0FBMkMsV0FBVyxTQUFTLE9BQU8sa0JBQWtCLHNCQUFzQiw4Q0FBOEMsbURBQW1ELGtCQUFrQiw2QkFBNkIsZ0NBQWdDLFNBQVMsb0JBQW9CLDZCQUE2QixnQ0FBZ0MsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsbUJBQW1CLHVDQUF1QyxXQUFXLFNBQVMsbUJBQW1CLDZCQUE2QiwrQkFBK0Isd0JBQXdCLHNDQUFzQyxTQUFTLGlCQUFpQiw2QkFBNkIsU0FBUyxpQkFBaUIsNkJBQTZCLFNBQVMsbUNBQW1DLHdCQUF3Qix3REFBd0Qsa0NBQWtDLHNCQUFzQiw2QkFBNkIsU0FBUyxpQkFBaUIsd0JBQXdCLFNBQVMsT0FBTyxtQkFBbUIsc0JBQXNCLDJCQUEyQiw2QkFBNkIsc0NBQXNDLDRCQUE0QixjQUFjLHdCQUF3QixrQ0FBa0MsOEJBQThCLDhDQUE4QyxtQkFBbUIsMEJBQTBCLG9DQUFvQyw4QkFBOEIsaUNBQWlDLGFBQWEsV0FBVyxlQUFlLDRCQUE0QiwyQkFBMkIsV0FBVyxTQUFTLG1CQUFtQix1QkFBdUIsd0JBQXdCLDJCQUEyQixxQkFBcUIsOEJBQThCLGtEQUFrRCxrQ0FBa0MsU0FBUyxPQUFPLDZCQUE2QiwrREFBK0Qsd0JBQXdCLFNBQVMsT0FBTyxLQUFLLDJDQUEyQyxvQkFBb0IsNkJBQTZCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLHVDQUF1Qyw4Q0FBOEMsOEJBQThCLDRCQUE0QixxQ0FBcUMsS0FBSyw2QkFBNkIsZ0NBQWdDLG9CQUFvQiw4QkFBOEIsNkJBQTZCLDZCQUE2QixtQkFBbUIseUJBQXlCLCtCQUErQixxQkFBcUIsMkJBQTJCLHNCQUFzQix5QkFBeUIsb0RBQW9ELG9DQUFvQyxxQ0FBcUMsMEJBQTBCLCtCQUErQixLQUFLLEdBQUcscUJBQXFCO0FBQ3gybkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBPQUEwTzs7QUFFMU87QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLDRIQUFPLElBQUksbUlBQWMsR0FBRyxtSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7K0NDQ0E7Ozs7OztBQURBO0NBR0E7O0FBRUEsSUFBTUMsVUFBVSxHQUFJLFlBQU07RUFDeEI7RUFDQSxJQUFNQyxNQUFNLEdBQUc7SUFDYkMsR0FBRyxFQUFFLElBRFE7SUFFYkMsS0FBSyxFQUFFLEdBRk07SUFHYkMsS0FBSyxFQUFFLGVBSE07SUFJYkMsVUFBVSxFQUFFLGtDQUpDO0lBS2JDLFFBQVEsRUFBRSxrREFMRztJQU1iQyxLQUFLLEVBQUUsSUFOTTtJQU9iQyxRQUFRLEVBQUUsc0RBUEc7SUFRYjFCLEtBQUssRUFBRSxJQVJNO0lBU2IyQixPQUFPLEVBQUUsdURBVEk7SUFVYjdCLElBQUksRUFBRSxJQVZPO0lBV2I4QixXQUFXLEVBQUUsa0NBWEE7SUFZYkMsV0FBVyxFQUFFLCtDQVpBO0lBYWJDLFFBQVEsRUFBRTtFQWJHLENBQWYsQ0FGd0IsQ0FrQnhCOztFQUNBLElBQU1DLFNBQVMsR0FBSSxZQUFNO0lBQ3ZCLElBQU1DLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ3BCLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWQ7SUFDQSxJQUFNcUMsTUFBTSxHQUFHakIsUUFBUSxDQUFDcEIsYUFBVCxDQUF1QixvQkFBdkIsQ0FBZixDQUZ1QixDQUd2Qjs7SUFDQXFDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtNQUNyQztNQUNBZixNQUFNLENBQUNDLEdBQVAsR0FBYVksS0FBSyxDQUFDRyxLQUFuQjtNQUNBQyxPQUFPLENBQUNqQixNQUFNLENBQUNDLEdBQVIsQ0FBUCxDQUhxQyxDQUlyQztNQUNBO01BQ0E7TUFDQTtJQUNELENBUkQ7RUFTRCxDQWJpQixFQUFsQixDQW5Cd0IsQ0FrQ3hCOzs7RUFDQSxJQUFNZ0IsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRCxFQUFTO0lBQ3ZCQyxXQUFXLENBQUNuQixNQUFNLENBQUNLLFFBQVAsR0FBa0JhLEdBQWxCLEdBQXdCLFNBQXhCLEdBQW9DbEIsTUFBTSxDQUFDRSxLQUEzQyxHQUFtRCxTQUFuRCxHQUErREYsTUFBTSxDQUFDSSxVQUF2RSxDQUFYLENBQThGZ0IsSUFBOUYsQ0FBbUcsVUFBQ2QsS0FBRCxFQUFXO01BQzVHNUYsT0FBTyxDQUFDQyxHQUFSLENBQVkyRixLQUFaO01BQ0FOLE1BQU0sQ0FBQ00sS0FBUCxHQUFlQSxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUY0RyxDQUc1Rzs7TUFDQWEsV0FBVyxDQUFDbkIsTUFBTSxDQUFDTyxRQUFQLEdBQWtCRCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNlLEdBQTNCLEdBQWlDLE9BQWpDLEdBQTJDZixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNnQixHQUFwRCxHQUEwRCxTQUExRCxHQUFzRXRCLE1BQU0sQ0FBQ0ksVUFBN0UsR0FBMEZKLE1BQU0sQ0FBQ0csS0FBbEcsQ0FBWCxDQUFvSGlCLElBQXBILENBQ0UsVUFBQ0csT0FBRCxFQUFhO1FBQ1g3RyxPQUFPLENBQUNDLEdBQVIsQ0FBWTRHLE9BQVo7UUFDQS9ILGtFQUFBLENBQThCK0gsT0FBOUI7TUFDRCxDQUpILEVBSjRHLENBVTVHOztNQUNBSixXQUFXLENBQUNuQixNQUFNLENBQUNRLE9BQVAsR0FBaUJGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2UsR0FBMUIsR0FBZ0MsT0FBaEMsR0FBMENmLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2dCLEdBQW5ELEdBQXlELFNBQXpELEdBQXFFdEIsTUFBTSxDQUFDSSxVQUE1RSxHQUF5RkosTUFBTSxDQUFDRyxLQUFqRyxDQUFYLENBQW1IaUIsSUFBbkgsQ0FDRSxVQUFDMUIsUUFBRCxFQUFjO1FBQ1psRyxtRUFBQSxDQUErQmtHLFFBQS9CO01BQ0QsQ0FISCxFQVg0RyxDQWdCNUc7TUFDQTtNQUNBO01BQ0E7SUFDRCxDQXBCRDtFQXFCRCxDQXRCRCxDQW5Dd0IsQ0EyRHhCOzs7RUEzRHdCLFNBNERUeUIsV0E1RFM7SUFBQTtFQUFBOztFQUFBO0lBQUEsMEVBNER4QixpQkFBMkJLLEdBQTNCO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQSxPQUUyQkMsS0FBSyxDQUFDRCxHQUFELEVBQU07Z0JBQUVFLElBQUksRUFBRTtjQUFSLENBQU4sQ0FGaEM7O1lBQUE7Y0FFVUMsUUFGVjtjQUFBO2NBQUEsT0FHdUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUh2Qjs7WUFBQTtjQUdVbEksSUFIVjtjQUFBLGlDQUlXQSxJQUpYOztZQUFBO2NBQUE7Y0FBQTtjQU1JbUksS0FBSyxhQUFMLENBTkosQ0FNZ0I7O1lBTmhCO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBNUR3QjtJQUFBO0VBQUE7QUFxRXpCLENBckVrQixFQUFuQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGxvY2F0aW9uLFxuICBkYXRlLFxuICB1cGRhdGVkVGltZSxcbiAgdGVtcGVyYXR1cmUsXG4gIGRlc2NyaXB0aW9uLFxuICBtaW5UZW1wLFxuICBtYXhUZW1wLFxuICBmZWVsc0xpa2UsXG4gIGxvYWRpbmcsXG4gIGxvYWRDbG91ZHMsXG4gIGxvYWRIdW1pZCxcbiAgbG9hZFdpbmQsXG4gIGZvcmVjYXN0cyxcbiAgZm9yZVdyYXAsXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBkb21NYW5pcHVsYXRpb24gPSAoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgY29uc3QgdXBkYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgX2xvY2F0aW9uKGRhdGEpO1xuICAgIC8vIF9sb2NhdGlvbkRhdGUoKTtcbiAgICBfQ3VycmVudFRlbXAoZGF0YSk7XG4gICAgX0Rlc2NyaXB0aW9uKGRhdGEpO1xuICAgIF9taW5UZW1wKGRhdGEpO1xuICAgIF9tYXhUZW1wKGRhdGEpO1xuICAgIF9mZWVsc0xpa2UoZGF0YSk7XG4gICAgX2xvYWRpbmcoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXplZERhdGEgPSBfc3BsaXREYXRhQnlEYXlzKGRhdGEpO1xuICAgIGNvbnN0IGNsZWFuRGF0YSA9IF9yZW1vdmVUb2RheShvcmdhbml6ZWREYXRhKTtcbiAgICBfbnVtRGF5cyhjbGVhbkRhdGEpO1xuICAgIF9mb3JlY2FzdChjbGVhbkRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGVUaW1lID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBfdGltZShkYXRhKTtcbiAgICBfZGF0ZShkYXRhKTtcbiAgfTtcblxuICAvLyBET00gZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IF9sb2NhdGlvbiA9IChkYXRhKSA9PiAobG9jYXRpb24uaW5uZXJUZXh0ID0gZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5zeXMuY291bnRyeSk7XG4gIC8vIGNvbnN0IF9sb2NhdGlvbkRhdGUgPSAoKSA9PiAoZGF0ZS5pbm5lclRleHQgPSBfdG9kYXlzRGF0ZSgpKTtcbiAgY29uc3QgX0N1cnJlbnRUZW1wID0gKGRhdGEpID0+ICh0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBfZm9ybWF0VGVtcENlbChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKSkpO1xuICBjb25zdCBfRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gKGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gIGNvbnN0IF9taW5UZW1wID0gKGRhdGEpID0+IChtaW5UZW1wLmlubmVySFRNTCA9IFwiTWluIFRlbXA6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pKSk7XG4gIGNvbnN0IF9tYXhUZW1wID0gKGRhdGEpID0+IChtYXhUZW1wLmlubmVySFRNTCA9IFwiTWF4IFRlbXA6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgpKSk7XG4gIGNvbnN0IF9mZWVsc0xpa2UgPSAoZGF0YSkgPT4gKGZlZWxzTGlrZS5pbm5lckhUTUwgPSBcIkZlZWxzIGxpa2U6IFwiICsgX2Zvcm1hdFRlbXBDZWwoTWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSkpKTtcbiAgY29uc3QgX2xvYWRpbmcgPSAoZGF0YSkgPT4ge1xuICAgIGxvYWRDbG91ZHMuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLmNsb3Vkcy5hbGwpKTtcbiAgICBsb2FkSHVtaWQuc2V0QXR0cmlidXRlKFwiZGF0YS1udW1cIiwgTWF0aC5yb3VuZChkYXRhLm1haW4uaHVtaWRpdHkpKTtcbiAgICBsb2FkV2luZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW51bVwiLCBfd2luZFRvUGVyY2VudChkYXRhKSk7XG4gICAgX2xvYWRpbmdDaXJjbGUoKTtcbiAgfTtcblxuICAvLyBGb3JlY2FzdCBkYXRlc1xuICBjb25zdCBfbnVtRGF5cyA9IChkYXRhKSA9PiAoZGF0YS5sZW5ndGggPT09IDQgPyAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdCBmb3VyLWRheXNcIikgOiAoZm9yZVdyYXAuY2xhc3NOYW1lID0gXCJmb3JlY2FzdFwiKSk7XG5cbiAgLy8gTG9jYXRpb24gZGF0ZVxuICBjb25zdCBfZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IG1haW5EYXRlID0gZGF0YS5kYXRlX3RpbWVfdHh0LnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgYnVpbGREYXRlID0gW107XG4gICAgYnVpbGREYXRlLnB1c2gobWFpbkRhdGVbMF0uc3BsaXQoXCJcIikuc3BsaWNlKDAsIDMpLmpvaW4oXCJcIikgKyBcIixcIik7IC8vIERheVxuICAgIGJ1aWxkRGF0ZS5wdXNoKG1haW5EYXRlWzJdLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTsgLy8gRGF0ZVxuICAgIGJ1aWxkRGF0ZS5wdXNoKG1haW5EYXRlWzFdLnNwbGl0KFwiXCIpLnNwbGljZSgwLCAzKS5qb2luKFwiXCIpKTsgLy8gTW9udGhcbiAgICBidWlsZERhdGUucHVzaChtYWluRGF0ZVszXSk7IC8vIE1vbnRoXG4gICAgZGF0ZS5pbm5lclRleHQgPSBidWlsZERhdGUuam9pbihcIiBcIik7XG4gIH07XG5cbiAgLy8gVXBkYXRlZCBsb2NhdGlvbiB0aW1lXG4gIGNvbnN0IF90aW1lID0gKGRhdGEpID0+IHtcbiAgICBsZXQgdGltZSA9IGRhdGEudGltZV8xMi50b0xvY2FsZUxvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcbiAgICB0aW1lWzBdID0gdGltZVswXVxuICAgICAgLnNwbGl0KFwiXCIpXG4gICAgICAuc3BsaWNlKDAsIHRpbWVbMF0ubGVuZ3RoIC0gMylcbiAgICAgIC5qb2luKFwiXCIpO1xuICAgIHVwZGF0ZWRUaW1lLmlubmVyVGV4dCA9IFwiVXBkYXRlZCBcIiArIHRpbWUuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFdpbmQgY2lyY2xlIGxvYWRpbmcgZnVuY3Rpb25cbiAgY29uc3QgX3dpbmRUb1BlcmNlbnQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHdpbmREZWcgPSBNYXRoLnJvdW5kKGRhdGEud2luZC5kZWcgLyAoMzYwIC8gMTAwKSk7XG4gICAgaWYgKHdpbmREZWcgPT09IDApIHtcbiAgICAgIHdpbmREZWcgPSAxO1xuICAgIH0gZWxzZSBpZiAod2luZERlZyA9PT0gMTAwKSB7XG4gICAgICB3aW5kRGVnID0gOTk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kRGVnO1xuICB9O1xuXG4gIC8vIEZvcm1hdCBDZWxzaXVzXG4gIGNvbnN0IF9mb3JtYXRUZW1wQ2VsID0gKHRlbXApID0+IHRlbXAgKyAnPHNwYW4gY2xhc3M9XCJkZWctc3ltYm9sXCI+JiMxNzY7PHNwYW4gY2xhc3M9XCJtaW51c1wiPi08L3NwYW4+PC9zcGFuPkMnO1xuICBjb25zdCBfZm9ybWF0VGVtcCA9ICh0ZW1wKSA9PiB0ZW1wICsgJzxzcGFuIGNsYXNzPVwiZGVnLXN5bWJvbFwiPiYjMTc2OzxzcGFuIGNsYXNzPVwibWludXNcIj4tPC9zcGFuPjwvc3Bhbj4nO1xuXG4gIC8vIEFuaW1hdGUgbG9hZGluZyBjaXJjbGVcbiAgY29uc3QgX2xvYWRpbmdDaXJjbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnRlcnMgPSBBcnJheShsb2FkaW5nLmxlbmd0aCk7XG4gICAgY29uc3QgaW50ZXJ2YWxzID0gQXJyYXkobG9hZGluZy5sZW5ndGgpO1xuICAgIGNvdW50ZXJzLmZpbGwoMCk7XG4gICAgbG9hZGluZy5mb3JFYWNoKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICBpbnRlcnZhbHNbaW5kZXhdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRlcnNbaW5kZXhdID09IHBhcnNlSW50KG51bWJlci5kYXRhc2V0Lm51bSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXJzW2luZGV4XSArPSAxO1xuICAgICAgICAgIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHVtaWRcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjZmRlZjVkLCAjZmZhNTU3IGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG91ZHNcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjOTdEQUY1LCAjMzFCOERGIGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgIFwiY29uaWMtZ3JhZGllbnQoI0ZGRiBjYWxjKFwiICtcbiAgICAgICAgICAgICAgKGNvdW50ZXJzW2luZGV4XSAtIDEpICtcbiAgICAgICAgICAgICAgXCIlKSwgIzMzMyBjYWxjKFwiICtcbiAgICAgICAgICAgICAgKGNvdW50ZXJzW2luZGV4XSAtIDEpICtcbiAgICAgICAgICAgICAgXCIlKSwgIzMzMyBjYWxjKFwiICtcbiAgICAgICAgICAgICAgKGNvdW50ZXJzW2luZGV4XSArIDEpICtcbiAgICAgICAgICAgICAgXCIlKSwgI0ZGRiAwZGVnKVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2luZFwiKSkge1xuICAgICAgICAgICAgbGV0IHdpbmQgPSAnJztcbiAgICAgICAgICAgIGlmIChjb3VudGVyc1tpbmRleF0gPj0gMCAmJiBjb3VudGVyc1tpbmRleF0gPD0gNi4yNSkge1xuICAgICAgICAgICAgICB3aW5kID0gJ04nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudGVyc1tpbmRleF0gPiA2LjI1ICYmIGNvdW50ZXJzW2luZGV4XSA8PSAxMi41KSB7XG4gICAgICAgICAgICAgIHdpbmQgPSAnTk5FJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlcnNbaW5kZXhdID4gMTIuNSAmJiBjb3VudGVyc1tpbmRleF0gPD0gMTguNzUpIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdORSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXJzW2luZGV4XSA+IDE4Ljc1ICYmIGNvdW50ZXJzW2luZGV4XSA8PSAyNSkge1xuICAgICAgICAgICAgICB3aW5kID0gJ0VORSc7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudGVyc1tpbmRleF0gPiAyNSAmJiBjb3VudGVyc1tpbmRleF0gPD0gMzEuMjUpIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdFJzsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXJzW2luZGV4XSA+IDMxLjI1ICYmIGNvdW50ZXJzW2luZGV4XSA8PSAzNy41KSB7XG4gICAgICAgICAgICAgIHdpbmQgPSAnRVNFJzsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXJzW2luZGV4XSA+IDM3LjUgJiYgY291bnRlcnNbaW5kZXhdIDw9IDQzLjc1KSB7XG4gICAgICAgICAgICAgIHdpbmQgPSAnU0UnOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlcnNbaW5kZXhdID4gNDMuNzUgJiYgY291bnRlcnNbaW5kZXhdIDw9IDUwKSB7XG4gICAgICAgICAgICAgIHdpbmQgPSAnU1NFJzsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXJzW2luZGV4XSA+IDUwICYmIGNvdW50ZXJzW2luZGV4XSA8PSA1Ni4yNSkge1xuICAgICAgICAgICAgICB3aW5kID0gJ1MnOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlcnNbaW5kZXhdID4gNTYuMjUgJiYgY291bnRlcnNbaW5kZXhdIDw9IDYyLjUpIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdTU1cnOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlcnNbaW5kZXhdID4gNjIuNSAmJiBjb3VudGVyc1tpbmRleF0gPD0gNjguNzUpIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdTVyc7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudGVyc1tpbmRleF0gPiA2OC43NSAmJiBjb3VudGVyc1tpbmRleF0gPD0gNzUpIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdXU1cnOyBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRlcnNbaW5kZXhdID4gNzUgJiYgY291bnRlcnNbaW5kZXhdIDw9IDgxLjI1KSB7XG4gICAgICAgICAgICAgIHdpbmQgPSAnVyc7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudGVyc1tpbmRleF0gPiA4MS4yNSAmJiBjb3VudGVyc1tpbmRleF0gPD0gODcuNSkge1xuICAgICAgICAgICAgICB3aW5kID0gJ1dOVyc7IFxuICAgICAgICAgICAgfSBlbHNlIGlmIChjb3VudGVyc1tpbmRleF0gPiA4Ny41ICYmIGNvdW50ZXJzW2luZGV4XSA8PSA5My43NSkge1xuICAgICAgICAgICAgICB3aW5kID0gJ05XJzsgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50ZXJzW2luZGV4XSA+IDkzLjc1ICYmIGNvdW50ZXJzW2luZGV4XSA8PSAxMDApIHtcbiAgICAgICAgICAgICAgd2luZCA9ICdOTlcnOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bWJlci5pbm5lckhUTUwgPSB3aW5kO1xuICAgICAgICAgICAgbnVtYmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgd2luZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBjb3VudGVyc1tpbmRleF0gKyBcIiVcIjtcbiAgICAgICAgICAgIG51bWJlci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIGNvdW50ZXJzW2luZGV4XSArIFwiJVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSwgMTUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IF9mb3JlY2FzdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBkYXRhLmxlbmd0aDsgeCsrKSB7XG4gICAgICBsZXQgbWF4ID0gbnVsbDtcbiAgICAgIGxldCBtaW4gPSBudWxsO1xuICAgICAgY29uc3QgZ2V0RGF5ID0gc3RhcnRPZkRheShuZXcgRGF0ZShkYXRhW3hdWzBdLmR0X3R4dC5zcGxpdChcIiBcIilbMF0pKTtcbiAgICAgIC8vIERhdGUgLSBEYXlcbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLmRheVwiKS5pbm5lclRleHQgPSBnZXREYXkudG9TdHJpbmcoKS5zcGxpdChcIiBcIilbMF07XG4gICAgICAvLyBNaW4gLyBNYXhcbiAgICAgIGZvciAoY29uc3QgZm9yZSBvZiBkYXRhW3hdKSB7XG4gICAgICAgIGlmIChtYXggPT09IG51bGwgJiYgbWluID09PSBudWxsKSB7XG4gICAgICAgICAgbWF4ID0gZm9yZS5tYWluLnRlbXBfbWF4O1xuICAgICAgICAgIG1pbiA9IGZvcmUubWFpbi50ZW1wX21pbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JlLm1haW4udGVtcF9tYXggPiBtYXggPyAobWF4ID0gZm9yZS5tYWluLnRlbXBfbWF4KSA6IChtYXggPSBtYXgpO1xuICAgICAgICAgIGZvcmUubWFpbi50ZW1wX21pbiA8IG1pbiA/IChtaW4gPSBmb3JlLm1haW4udGVtcF9taW4pIDogKG1pbiA9IG1pbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvcmVjYXN0c1t4XS5xdWVyeVNlbGVjdG9yKFwiLm1pblwiKS5pbm5lckhUTUwgPSBcIi9cIiArIF9mb3JtYXRUZW1wKE1hdGgucm91bmQobWluKSk7XG4gICAgICBmb3JlY2FzdHNbeF0ucXVlcnlTZWxlY3RvcihcIi5tYXhcIikuaW5uZXJIVE1MID0gX2Zvcm1hdFRlbXAoTWF0aC5yb3VuZChtYXgpKTtcbiAgICB9XG4gICAgLy8gSW1hZ2VcbiAgfTtcblxuICBjb25zdCBfdG9kYXlEYXRlID0gKCkgPT4ge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGxldCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIHl5eXkgKyBcIi1cIiArIG1tICsgXCItXCIgKyBkZDtcbiAgfTtcblxuICAvLyBjb25zdCBfdG9kYXlzRGF0ZSA9ICgpID0+IHtcbiAgLy8gICB2YXIgb3B0aW9ucyA9IHtcbiAgLy8gICAgIHdlZWtkYXk6IFwic2hvcnRcIixcbiAgLy8gICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAvLyAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgLy8gICAgIG1vbnRoOiBcInNob3J0XCIsXG4gIC8vICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgLy8gICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gIC8vICAgICBzZWNvbmQ6IFwiMi1kaWdpdFwiLFxuICAvLyAgICAgaG91cjEyOiBmYWxzZSxcbiAgLy8gICB9O1xuICAvLyAgIGxldCBkYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi11c1wiLCBvcHRpb25zKS5zcGxpdChcIixcIik7XG4gIC8vICAgZGF0ZS5zcGxpY2UoZGF0ZS5sZW5ndGggLSAxLCAxKTtcbiAgLy8gICBkYXRlWzFdID0gZGF0ZVsxXS50cmltKCkuc3BsaXQoXCIgXCIpLnJldmVyc2UoKS5qb2luKFwiIFwiKTtcbiAgLy8gICBkYXRlWzJdID0gZGF0ZVsyXS50cmltKCk7XG4gIC8vICAgZGF0ZVswXSArPSBcIixcIjtcbiAgLy8gICBkYXRlID0gZGF0ZS5qb2luKFwiIFwiKS50cmltKCk7XG5cbiAgLy8gICByZXR1cm4gZGF0ZTtcbiAgLy8gfTtcblxuICBjb25zdCBfcmVtb3ZlVG9kYXkgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRhdGE7XG4gICAgZm9yIChsZXQgbyA9IDA7IG8gPCByZW1vdmUubGVuZ3RoOyBvKyspIHtcbiAgICAgIGlmIChkYXRhW29dWzBdLmR0X3R4dC5pbmRleE9mKF90b2RheURhdGUoKSkgPiAtMSkge1xuICAgICAgICByZW1vdmUuc3BsaWNlKG8sIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlO1xuICB9O1xuXG4gIGNvbnN0IF9zcGxpdERhdGFCeURheXMgPSAoZGF0YSkgPT4ge1xuICAgIGxldCBmb3JlY2FzdERheXMgPSBbXTtcbiAgICBsZXQgZm9yZWNhc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZvcmVjYXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmb3JlY2FzdC5wdXNoKGRhdGEubGlzdFtpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm9yZWNhc3RbMF0uZHRfdHh0LmluZGV4T2YoZGF0YS5saXN0W2ldLmR0X3R4dC5zcGxpdChcIiBcIilbMF0pID4gLTEpIHtcbiAgICAgICAgICBmb3JlY2FzdC5wdXNoKGRhdGEubGlzdFtpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yZWNhc3REYXlzLnB1c2goZm9yZWNhc3QpO1xuICAgICAgICAgIGZvcmVjYXN0ID0gW107XG4gICAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLmxpc3RbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEubGlzdC5sZW5ndGggLSAxID09PSBpKSB7XG4gICAgICAgICAgZm9yZWNhc3REYXlzLnB1c2goZm9yZWNhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdERheXM7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlQ3VycmVudCwgdXBkYXRlRm9yZWNhc3QsIHVwZGF0ZURhdGVUaW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21NYW5pcHVsYXRpb24gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm8gLmxvY2F0aW9uXCIpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm8gLmRhdGVcIik7XG5jb25zdCB1cGRhdGVkVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC13cmFwIC50aW1lXCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtd3JhcCAudGVtcFwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLmRlc2NcIik7XG5jb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTEgLm1pbi10ZW1wXCIpO1xuY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5tYXgtdGVtcFwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5mZWVscy1saWtlXCIpO1xuY29uc3QgbG9hZENsb3VkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0yIC5jbG91ZHNcIik7XG5jb25zdCBsb2FkSHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAuaHVtaWRcIik7XG5jb25zdCBsb2FkV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0yIC53aW5kXCIpO1xuY29uc3QgZm9yZWNhc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCAuZm9yZVwiKTtcbmNvbnN0IGZvcmVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcbmxldCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1pdGVtXCIpO1xuXG5leHBvcnQge1xuICBsb2NhdGlvbixcbiAgZGF0ZSxcbiAgdXBkYXRlZFRpbWUsXG4gIHRlbXBlcmF0dXJlLFxuICBkZXNjcmlwdGlvbixcbiAgbWluVGVtcCxcbiAgbWF4VGVtcCxcbiAgZmVlbHNMaWtlLFxuICBsb2FkaW5nLFxuICBsb2FkQ2xvdWRzLFxuICBsb2FkSHVtaWQsXG4gIGxvYWRXaW5kLFxuICBmb3JlY2FzdHMsXG4gIGZvcmVXcmFwLFxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUV4dHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJlc2V0IENTUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbmJvZHkgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyxcXG5idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUV4dHJhTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tVGhpblxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuOnJvb3QgLmRlZy1zeW1ib2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuOnJvb3QgLmRlZy1zeW1ib2wgLm1pbnVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuOnJvb3QgLmN1cnJlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG46cm9vdCAuY3VycmVudCAubG9jYXRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIGZvbnQtc2l6ZTogNC42cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC5kYXRlLFxcbjpyb290IC5jdXJyZW50IC50aW1lLFxcbjpyb290IC5jdXJyZW50IC5kZXNjLTEgbGksXFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MtMiBsaSBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wM3JlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLnRlbXAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgbGluZS1oZWlnaHQ6IDg0JTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MsXFxuOnJvb3QgLmN1cnJlbnQgLmZvcmVjYXN0IC5kYXksXFxuOnJvb3QgLmN1cnJlbnQgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA2cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAudGVtcC1pbWcgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxOS4xMjVyZW07XFxuICBtYXgtaGVpZ2h0OiAxMy42MjVyZW07XFxufVxcblxcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICBwYWRkaW5nOiAxLjg1N3JlbTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggLmlucHV0LXdyYXAgaW5wdXQge1xcbiAgYm9yZGVyOiAwLjE0M3JlbSBzb2xpZCAjYTBhMGEwO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCBidXR0b24ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC50aXRsZS1zZWFyY2ggaDEgLmxvZ28tc3VuIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlZjVkO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGF0IHRvcCByaWdodCwgI2ZkZWY1ZCwgI2ZmYTU1Nyk7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmludHJvIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvNTtcXG4gIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLnRlbXAtd3JhcCB7XFxuICBncmlkLWFyZWE6IDIvMS8zLzM7XFxuICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC13cmFwIC5kZXNjIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC1pbWcge1xcbiAgZ3JpZC1hcmVhOiAyLzMvMy81O1xcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0xIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvNTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBncmlkLWFyZWE6IDQvMS81LzU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTEsXFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWF4LWNvbnRlbnQpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIuNXJlbTtcXG4gIG1hcmdpbjogMS44NzVyZW0gMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMiB7XFxuICBnYXA6IDYuNTYzcmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtYXJlYTogNS8xLzYvNTtcXG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuZm9yZWNhc3QgbGkgPiBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSBpbWcge1xcbiAgbWF4LXdpZHRoOiA3cmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCAuc2VwYXJhdGUge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3VyLWRheXMuZm9yZWNhc3QgLmZvcmU6bnRoLW9mLXR5cGUoOSksXFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvdXItZGF5cy5mb3JlY2FzdCAuc2VwYXJhdGU6bnRoLW9mLXR5cGUoOCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI3dlYXRoZXItYXBwIC5wcm9ncmVzcy1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYW5pbWF0aW9uOiAwLjRzIGVhc2Utb3V0IHJldmVyc2U7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyQ0FBQTtBQUNBOzs7Q0FBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREVBLGdEQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QUREQTs7RUFFRSxnQkFBQTtBQ0lGOztBREZBOztFQUVFLFlBQUE7QUNLRjs7QURIQTs7OztF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RSxhQUFBO0FBc0dSO0FBbEdJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBb0dOO0FBbEdNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQW9HUjtBQWxHUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQW9HVjtBQWxHVTtFQUNFLGNBNU9DO0FBZ1ZiO0FBakdRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFtR1Y7QUFoR007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBdlBNO0VBd1BOLG1FQXBQYTtFQXFQYiwyREFwUEs7QUFzVmI7QUE3Rk07O0VBRUUsYUFBQTtBQStGUjtBQXpGRTtFQUNFLGFBQUE7RUFDQSxZQXJRYTtFQXNRYixhQXRRYTtFQXVRYixrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG1FQXpRaUI7RUEwUWpCLDJEQXpRUztFQTBRVCxxQkFBQTtFQUNBLHlCQWhSVTtBQTJXZDtBQXhGRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQXJSYTtFQXNSYixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkEzUlU7RUE0UlYsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUVBMVJ1QjtFQTJSdkIsaUVBMVJlO0VBMlJmLDRCQUFBO0VBQ0EsY0F0U1U7RUF1U1Ysd0JBQUE7QUEwRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9yZXNldC5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4vLyBWYXJpYWJsZXNcXG4kYmxhY2stY29sb3I6ICMzMzMzMzM7XFxuJGdyZXktY29sb3I6ICNhMGEwYTA7XFxuJGJnLWNvbG9yOiAjZjBmMGYwO1xcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcXG4keWVsbG93LWNvbG9yOiAjZmRlZjVkO1xcbiRvcmFuZ2UtY29sb3I6ICNmZmE1NTc7XFxuJGxvYWRpbmctY2lyY2xlOiAxMHJlbTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcblxcbiAgLy8gVGl0bGUgTWFpblxcbiAgQG1peGluIG1haW4tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgICBmb250LXNpemU6IDQuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgfVxcblxcbiAgLy8gRGVzY3JpcHRpb24gU21hbGxcXG4gIEBtaXhpbiBzbWFsbC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBNaWRcXG4gIEBtaXhpbiBtaWQtZGVzYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxuXFxuICAvLyBXZWF0aGVyIFRpdGxlXFxuICBAbWl4aW4gdGVtcC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICAgIC8vIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogODQlO1xcbiAgfVxcblxcbiAgLy8gRGVncmVlIFN5bWJvbFxcbiAgLmRlZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLm1pbnVzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFN0eWxpbmdcXG4gIC5jdXJyZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIEBpbmNsdWRlIG1haW4tdGl0bGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICB9XFxuICAgIC5kYXRlLFxcbiAgICAudGltZSxcXG4gICAgLmRlc2MtMSBsaSxcXG4gICAgLmRlc2MtMiBsaSBzcGFuIHtcXG4gICAgICBAaW5jbHVkZSBzbWFsbC1kZXNjO1xcbiAgICB9XFxuICAgIC50ZW1wIHtcXG4gICAgICBAaW5jbHVkZSB0ZW1wLXRpdGxlO1xcbiAgICB9XFxuICAgIC5kZXNjLFxcbiAgICAuZm9yZWNhc3QgLmRheSxcXG4gICAgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gICAgICBAaW5jbHVkZSBtaWQtZGVzYztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLnRlbXAtaW1nIGltZyB7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBMYXlvdXQgc3R5bGluZ1xcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuXFxuICAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgcGFkZGluZzogMS44NTdyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLnRpdGxlLXNlYXJjaCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxuXFxuICAgICAgLmlucHV0LXdyYXAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGJvcmRlcjogMC4xNDNyZW0gc29saWQgJGdyZXktY29sb3I7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbiAgICAgICAgLmxvZ28tc3VuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAkeWVsbG93LWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2stY29sb3I7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcbiAgICAgIC5pbnRybyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLXdyYXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgICAgIC5kZXNjIHtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLWltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTEge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNC8xLzUvNTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2MtMSxcXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdhcDogNi41NjNyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgY29sb3I6ICRncmV5LWNvbG9yO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDdyZW07XFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAuc2VwYXJhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICB3aWR0aDogNnB4O1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZm91ci1kYXlzLmZvcmVjYXN0IHtcXG4gICAgICAuZm9yZTpudGgtb2YtdHlwZSg5KSxcXG4gICAgICAuc2VwYXJhdGU6bnRoLW9mLXR5cGUoOCkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIExvYWRpbmcgQ2lyY2xlXFxuICAucHJvZ3Jlc3MtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIGhlaWdodDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgYW5pbWF0aW9uOiAwLjRzIGVhc2Utb3V0IHJldmVyc2U7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdztcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgfVxcblxcbiAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gICAgY29udGVudDogYXR0cihkYXRhLXZhbHVlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAkbG9hZGluZy1jaXJjbGU7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDtcXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctaW5zZXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5cbi8vIGltcG9ydCBjaXR5RGF0YSBmcm9tIFwiLi9kYXRhL2NpdHkubGlzdC5qc29uXCI7XG5cbmNvbnN0IHdlYXRoZXJBcHAgPSAoKCkgPT4ge1xuICAvLyBTdG9yZSB2YWx1ZXNcbiAgY29uc3QgdmFsdWVzID0ge1xuICAgIGxvYzogbnVsbCxcbiAgICBsaW1pdDogXCI1XCIsXG4gICAgdW5pdHM6IFwiJnVuaXRzPW1ldHJpY1wiLFxuICAgIHdlYXRoZXJLZXk6IFwiZTJmODhhNjRlZGIyNjkwOGYyYzhhODM2ZTBmODdjMTlcIixcbiAgICBjb29yZFVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT1cIixcbiAgICBjb29yZDogbnVsbCxcbiAgICB0b2RheVVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9XCIsXG4gICAgdG9kYXk6IG51bGwsXG4gICAgZm9yZVVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PVwiLFxuICAgIGZvcmU6IG51bGwsXG4gICAgZGF0ZVRpbWVLZXk6IFwiMmQxZWI3Nzg3NzYyNDgyZDk2MDczYzJmOGViMWFkZGZcIixcbiAgICBkYXRlVGltZVVybDogXCJodHRwczovL2FwaS5pcGdlb2xvY2F0aW9uLmlvL3RpbWV6b25lP2FwaUtleT1cIixcbiAgICBkYXRlVGltZTogXCJcIixcbiAgfTtcblxuICAvLyBJbnB1dCBlbGVtZW50IHRvIGdldCBjbGllbnQgbG9jYXRpb25cbiAgY29uc3QgaW5wdXRFbGVtID0gKCgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtd3JhcCBpbnB1dFwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXdyYXAgYnV0dG9uXCIpO1xuICAgIC8vIFZhbGlkYXRlIHZhbHVlIGJlZm9yZSBtYWtpbmcgQVBJIGNhbGxcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdmFsdWVzLmxvYyA9IGlucHV0LnZhbHVlO1xuICAgICAgZ2V0RGF0YSh2YWx1ZXMubG9jKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiaW52YWxpZFwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coaW5wdXQudmFsaWRpdHkpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIC8vIEZldGNoIHdlYXRoZXIgRGF0YVxuICBjb25zdCBnZXREYXRhID0gKHZhbCkgPT4ge1xuICAgIHJlcXVlc3REYXRhKHZhbHVlcy5jb29yZFVybCArIHZhbCArIFwiJmxpbWl0PVwiICsgdmFsdWVzLmxpbWl0ICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMud2VhdGhlcktleSkudGhlbigoY29vcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcbiAgICAgIHZhbHVlcy5jb29yZCA9IGNvb3JkWzBdO1xuICAgICAgLy8gQ3VycmVudCBmZXRjaFxuICAgICAgcmVxdWVzdERhdGEodmFsdWVzLnRvZGF5VXJsICsgY29vcmRbMF0ubGF0ICsgXCImbG9uPVwiICsgY29vcmRbMF0ubG9uICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMud2VhdGhlcktleSArIHZhbHVlcy51bml0cykudGhlbihcbiAgICAgICAgKGN1cnJlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcbiAgICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ3VycmVudChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIC8vIEZvcmVjYXN0IGZldGNoXG4gICAgICByZXF1ZXN0RGF0YSh2YWx1ZXMuZm9yZVVybCArIGNvb3JkWzBdLmxhdCArIFwiJmxvbj1cIiArIGNvb3JkWzBdLmxvbiArIFwiJmFwcGlkPVwiICsgdmFsdWVzLndlYXRoZXJLZXkgKyB2YWx1ZXMudW5pdHMpLnRoZW4oXG4gICAgICAgIChmb3JlY2FzdCkgPT4ge1xuICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICAvLyBMb2NhdGlvbiBkYXRlIGFuZCB0aW1lXG4gICAgICAvLyByZXF1ZXN0RGF0YSh2YWx1ZXMuZGF0ZVRpbWVVcmwgKyB2YWx1ZXMuZGF0ZVRpbWVLZXkgKyBcIiZsYXQ9XCIgKyBjb29yZFswXS5sYXQgKyBcIiZsb25nPVwiICsgY29vcmRbMF0ubG9uKS50aGVuKChkYXRlVGltZSkgPT4ge1xuICAgICAgLy8gICBkb21NYW5pcHVsYXRpb24udXBkYXRlRGF0ZVRpbWUoZGF0ZVRpbWUpO1xuICAgICAgLy8gfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRmV0Y2ggcmVxdWVzdCBmdW5jdGlvblxuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0RGF0YSh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpOyAvLyBUeXBlRXJyb3I6IGZhaWxlZCB0byBmZXRjaFxuICAgIH1cbiAgfVxufSkoKTtcbiJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsImRhdGUiLCJ1cGRhdGVkVGltZSIsInRlbXBlcmF0dXJlIiwiZGVzY3JpcHRpb24iLCJtaW5UZW1wIiwibWF4VGVtcCIsImZlZWxzTGlrZSIsImxvYWRpbmciLCJsb2FkQ2xvdWRzIiwibG9hZEh1bWlkIiwibG9hZFdpbmQiLCJmb3JlY2FzdHMiLCJmb3JlV3JhcCIsInN0YXJ0T2ZEYXkiLCJkb21NYW5pcHVsYXRpb24iLCJ1cGRhdGVDdXJyZW50IiwiZGF0YSIsIl9sb2NhdGlvbiIsIl9DdXJyZW50VGVtcCIsIl9EZXNjcmlwdGlvbiIsIl9taW5UZW1wIiwiX21heFRlbXAiLCJfZmVlbHNMaWtlIiwiX2xvYWRpbmciLCJ1cGRhdGVGb3JlY2FzdCIsIm9yZ2FuaXplZERhdGEiLCJfc3BsaXREYXRhQnlEYXlzIiwiY2xlYW5EYXRhIiwiX3JlbW92ZVRvZGF5IiwiX251bURheXMiLCJfZm9yZWNhc3QiLCJ1cGRhdGVEYXRlVGltZSIsImNvbnNvbGUiLCJsb2ciLCJfdGltZSIsIl9kYXRlIiwiaW5uZXJUZXh0IiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJpbm5lckhUTUwiLCJfZm9ybWF0VGVtcENlbCIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwid2VhdGhlciIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJmZWVsc19saWtlIiwic2V0QXR0cmlidXRlIiwiY2xvdWRzIiwiYWxsIiwiaHVtaWRpdHkiLCJfd2luZFRvUGVyY2VudCIsIl9sb2FkaW5nQ2lyY2xlIiwibGVuZ3RoIiwiY2xhc3NOYW1lIiwibWFpbkRhdGUiLCJkYXRlX3RpbWVfdHh0Iiwic3BsaXQiLCJidWlsZERhdGUiLCJwdXNoIiwic3BsaWNlIiwiam9pbiIsInJlcGxhY2UiLCJ0aW1lIiwidGltZV8xMiIsInRvTG9jYWxlTG93ZXJDYXNlIiwid2luZERlZyIsIndpbmQiLCJkZWciLCJfZm9ybWF0VGVtcCIsImNvdW50ZXJzIiwiQXJyYXkiLCJpbnRlcnZhbHMiLCJmaWxsIiwiZm9yRWFjaCIsIm51bWJlciIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJjbGVhckludGVydmFsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ4IiwibWF4IiwibWluIiwiZ2V0RGF5IiwiRGF0ZSIsImR0X3R4dCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b1N0cmluZyIsImZvcmUiLCJfdG9kYXlEYXRlIiwidG9kYXkiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJyZW1vdmUiLCJvIiwiaW5kZXhPZiIsImZvcmVjYXN0RGF5cyIsImZvcmVjYXN0IiwiaSIsImxpc3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3ZWF0aGVyQXBwIiwidmFsdWVzIiwibG9jIiwibGltaXQiLCJ1bml0cyIsIndlYXRoZXJLZXkiLCJjb29yZFVybCIsImNvb3JkIiwidG9kYXlVcmwiLCJmb3JlVXJsIiwiZGF0ZVRpbWVLZXkiLCJkYXRlVGltZVVybCIsImRhdGVUaW1lIiwiaW5wdXRFbGVtIiwiaW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJnZXREYXRhIiwidmFsIiwicmVxdWVzdERhdGEiLCJ0aGVuIiwibGF0IiwibG9uIiwiY3VycmVudCIsInVybCIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlIiwianNvbiIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==
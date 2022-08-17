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

    _minTemp(data);

    _maxTemp(data);

    _feelsLike(data);

    _loading(data);
  };

  var updateForecast = function updateForecast(data) {
    var cleanData = _splitDataByDays(data);

    _lowHighTemp(cleanData);
  }; // DOM functions ======================================================================================


  var _location = function _location(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.location.innerText = data.name + ", " + data.sys.country;
  };

  var _CurrentTemp = function _CurrentTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerHTML = formatTemp(Math.round(data.main.temp));
  };

  var _Description = function _Description(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.description.innerText = data.weather[0].description;
  };

  var _minTemp = function _minTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.minTemp.innerHTML = "Min Temp: " + formatTemp(Math.round(data.main.temp_min));
  };

  var _maxTemp = function _maxTemp(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.maxTemp.innerHTML = "Max Temp: " + formatTemp(Math.round(data.main.temp_max));
  };

  var _feelsLike = function _feelsLike(data) {
    return _variables_js__WEBPACK_IMPORTED_MODULE_0__.feelsLike.innerHTML = "Feels like: " + formatTemp(Math.round(data.main.feels_like));
  };

  var _loading = function _loading(data) {
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadClouds.setAttribute("data-num", Math.round(data.clouds.all));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.loadHumid.setAttribute("data-num", Math.round(data.main.humidity));

    _loadingCircle();
  }; // Helper functions ======================================================================================
  // Format Celsius


  var formatTemp = function formatTemp(temp) {
    return temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';
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

  var _lowHighTemp = function _lowHighTemp(data) {
    console.log(data);
    console.log(_variables_js__WEBPACK_IMPORTED_MODULE_0__.forecasts);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nbody * {\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n}\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\");\n}\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n}\n:root .deg-symbol {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n}\n:root .deg-symbol .minus {\n  position: absolute;\n}\n:root .current {\n  text-align: center;\n}\n:root .current .location {\n  font-family: \"Heebo-Thin\";\n  font-size: 4.6rem;\n  letter-spacing: -0.15rem;\n  color: #333333;\n  margin-bottom: 0.4rem;\n}\n:root .current .date,\n:root .current .time,\n:root .current .desc-1 li,\n:root .current .desc-2 li span {\n  font-family: \"Heebo-Light\";\n  color: #333333;\n  font-size: 1.4rem;\n  letter-spacing: -0.03rem;\n}\n:root .current .temp {\n  font-family: \"Heebo-Bold\";\n  font-size: 8rem;\n  color: #333333;\n  line-height: 84%;\n}\n:root .current .desc,\n:root .current .forecast .day,\n:root .current .forecast li > div {\n  font-family: \"Heebo-ExtraLight\";\n  color: #333333;\n  font-size: 2.5rem;\n  letter-spacing: -0.06rem;\n  margin-bottom: 0.8rem;\n}\n:root .current .temp-img img {\n  height: auto;\n  width: auto;\n  max-width: 19.125rem;\n  max-height: 13.625rem;\n}\n\n#weather-app {\n  background-color: #f0f0f0;\n}\n#weather-app .weather-app-container {\n  width: 100%;\n  max-width: 1440px;\n  min-height: 100vh;\n  margin: 0 auto;\n  display: grid;\n  grid-template-rows: repeat(3, max-content);\n  padding: 1.857rem;\n  align-content: center;\n}\n#weather-app .weather-app-container .title-search {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: 1.875rem;\n}\n#weather-app .weather-app-container .title-search .input-wrap {\n  align-self: center;\n  justify-self: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#weather-app .weather-app-container .title-search .input-wrap input {\n  border: 0.143rem solid #a0a0a0;\n  border-radius: 2rem;\n  padding: 0.4rem 1rem;\n  font-size: 1rem;\n  font-weight: 900;\n}\n#weather-app .weather-app-container .title-search .input-wrap button {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n  font-weight: bold;\n  font-size: 2.5rem;\n  border-radius: 50%;\n  border: none;\n  background-color: #f0f0f0;\n  height: 3rem;\n  width: 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  color: #333333;\n  cursor: pointer;\n}\n#weather-app .weather-app-container .title-search h1 {\n  align-self: center;\n  justify-self: left;\n  font-family: \"Heebo-Bold\";\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: underline;\n}\n#weather-app .weather-app-container .title-search h1 .logo-sun {\n  font-size: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: red;\n  height: 4rem;\n  width: 4rem;\n  border-radius: 50%;\n  background-color: #fdef5d;\n  background-image: radial-gradient(at top right, #fdef5d, #ffa557);\n  margin-right: 0.25rem;\n  border: 5px solid #333333;\n}\n#weather-app .weather-app-container .current {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, max-content);\n}\n#weather-app .weather-app-container .current .intro {\n  grid-area: 1/1/2/5;\n  margin-bottom: 3.2rem;\n}\n#weather-app .weather-app-container .current .temp-wrap {\n  grid-area: 2/1/3/3;\n  margin-right: 1.25rem;\n  width: max-content;\n  align-self: start;\n  justify-self: end;\n}\n#weather-app .weather-app-container .current .temp-wrap .desc {\n  text-transform: capitalize;\n}\n#weather-app .weather-app-container .current .temp-img {\n  grid-area: 2/3/3/5;\n  margin-left: 1.25rem;\n  display: flex;\n  justify-content: flex-start;\n}\n#weather-app .weather-app-container .current .desc-1 {\n  grid-area: 3/1/4/5;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  grid-area: 4/1/5/5;\n}\n#weather-app .weather-app-container .current .desc-1,\n#weather-app .weather-app-container .current .desc-2 {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  justify-content: center;\n  gap: 2.5rem;\n  margin: 1.875rem 0;\n}\n#weather-app .weather-app-container .current .desc-2 {\n  gap: 6.563rem;\n}\n#weather-app .weather-app-container .forecast {\n  display: flex;\n  grid-area: 5/1/6/5;\n  margin-top: 1.875rem;\n  justify-content: space-evenly;\n  align-items: center;\n}\n#weather-app .weather-app-container .forecast li {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-rows: repeat(3, auto);\n}\n#weather-app .weather-app-container .forecast li > div {\n  display: flex;\n  justify-content: center;\n}\n#weather-app .weather-app-container .forecast li > div p:nth-child(2) {\n  color: #a0a0a0;\n}\n#weather-app .weather-app-container .forecast li img {\n  max-width: 7rem;\n}\n#weather-app .weather-app-container .forecast .separate {\n  font-size: 0;\n  height: 130px;\n  background: #fff;\n  width: 6px;\n  color: #ffffff;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n}\n#weather-app .progress-item {\n  display: flex;\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  font-size: 0;\n  animation: 0.4s ease-out reverse;\n  -webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  margin-bottom: 1.8rem;\n}\n#weather-app .progress-item::after {\n  content: attr(data-value);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 10rem;\n  margin: 1rem;\n  border-radius: 50%;\n  background: #ffffff;\n  line-height: 1;\n  padding-top: 0.25rem;\n  font-size: 2.5rem;\n  text-align: center;\n  -webkit-box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  box-shadow: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n  font-family: \"Heebo-Regular\";\n  color: #333333;\n  letter-spacing: -0.06rem;\n}", "",{"version":3,"sources":["webpack://./src/style/reset.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"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","sourcesContent":["/* Reset CSS ============================ */\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nbody * {\n  box-sizing: border-box;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n  outline: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n","@import \"./reset.scss\";\n\n@font-face {\n  font-family: \"Heebo-Bold\";\n  src: url(\"../fonts/static/Heebo-Bold.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Regular\";\n  src: url(\"../fonts/static/Heebo-Regular.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Light\";\n  src: url(\"../fonts/static/Heebo-Light.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-ExtraLight\";\n  src: url(\"../fonts/static/Heebo-ExtraLight.ttf\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Heebo-Thin\";\n  src: url(\"../fonts/static/Heebo-Thin.ttf\") format(\"woff\");\n}\n\n// Variables\n$black-color: #333333;\n$grey-color: #a0a0a0;\n$bg-color: #f0f0f0;\n$white-color: #ffffff;\n$yellow-color: #fdef5d;\n$orange-color: #ffa557;\n$loading-circle: 10rem;\n$-webkit-box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow: 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$-webkit-box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n$box-shadow-inset: inset 0.125rem 0.313rem 0.625rem 0 rgba(0, 0, 0, 0.3);\n\n:root {\n  font-size: 14px;\n  font-family: \"Heebo-Regular\";\n  color: $black-color;\n\n  // Title Main\n  @mixin main-title {\n    font-family: \"Heebo-Thin\";\n    font-size: 4.6rem;\n    letter-spacing: -0.15rem;\n    color: $black-color;\n  }\n\n  // Description Small\n  @mixin small-desc {\n    font-family: \"Heebo-Light\";\n    color: $black-color;\n    font-size: 1.4rem;\n    letter-spacing: -0.03rem;\n  }\n\n  // Description Mid\n  @mixin mid-desc {\n    font-family: \"Heebo-ExtraLight\";\n    color: $black-color;\n    font-size: 2.5rem;\n    letter-spacing: -0.06rem;\n  }\n\n  // Weather Title\n  @mixin temp-title {\n    font-family: \"Heebo-Bold\";\n    // font-size: 9rem;\n    font-size: 8rem;\n    color: $black-color;\n    line-height: 84%;\n  }\n\n  // Degree Symbol\n  .deg-symbol {\n    position: relative;\n    display: inline-flex;\n    justify-content: center;\n    .minus {\n      position: absolute;\n    }\n  }\n\n  // Styling\n  .current {\n    text-align: center;\n\n    .location {\n      @include main-title;\n      margin-bottom: 0.4rem;\n    }\n    .date,\n    .time,\n    .desc-1 li,\n    .desc-2 li span {\n      @include small-desc;\n    }\n    .temp {\n      @include temp-title;\n    }\n    .desc,\n    .forecast .day,\n    .forecast li > div {\n      @include mid-desc;\n      margin-bottom: 0.8rem;\n    }\n    .temp-img img {\n      height: auto;\n      width: auto;\n      max-width: 19.125rem;\n      max-height: 13.625rem;\n    }\n  }\n}\n\n// Layout styling\n#weather-app {\n  background-color: $bg-color;\n\n  .weather-app-container {\n    width: 100%;\n    max-width: 1440px;\n    min-height: 100vh;\n    margin: 0 auto;\n    display: grid;\n    grid-template-rows: repeat(3, max-content);\n    padding: 1.857rem;\n    align-content: center;\n\n    .title-search {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      margin-bottom: 1.875rem;\n\n      .input-wrap {\n        align-self: center;\n        justify-self: right;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        input {\n          border: 0.143rem solid $grey-color;\n          border-radius: 2rem;\n          padding: 0.4rem 1rem;\n          font-size: 1rem;\n          font-weight: 900;\n        }\n\n        button {\n          -webkit-transform: rotate(315deg);\n          -moz-transform: rotate(315deg);\n          -o-transform: rotate(315deg);\n          transform: rotate(315deg);\n          font-weight: bold;\n          font-size: 2.5rem;\n          border-radius: 50%;\n          border: none;\n          background-color: $bg-color;\n          height: 3rem;\n          width: 3rem;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          color: $black-color;\n          cursor: pointer;\n        }\n      }\n\n      h1 {\n        align-self: center;\n        justify-self: left;\n        font-family: \"Heebo-Bold\";\n        font-size: 2.5rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-decoration: underline;\n\n        .logo-sun {\n          font-size: 0;\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background: red;\n          height: 4rem;\n          width: 4rem;\n          border-radius: 50%;\n          background-color: $yellow-color;\n          background-image: radial-gradient(at top right, $yellow-color, $orange-color);\n          margin-right: 0.25rem;\n          border: 5px solid $black-color;\n        }\n      }\n    }\n\n    .current {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: repeat(5, max-content);\n\n      .intro {\n        grid-area: 1/1/2/5;\n        margin-bottom: 3.2rem;\n      }\n      .temp-wrap {\n        grid-area: 2/1/3/3;\n        margin-right: 1.25rem;\n        width: max-content;\n        align-self: start;\n        justify-self: end;\n\n        .desc {\n          text-transform: capitalize;\n        }\n      }\n      .temp-img {\n        grid-area: 2/3/3/5;\n        margin-left: 1.25rem;\n        display: flex;\n        justify-content: flex-start;\n      }\n      .desc-1 {\n        grid-area: 3/1/4/5;\n      }\n      .desc-2 {\n        grid-area: 4/1/5/5;\n      }\n\n      .desc-1,\n      .desc-2 {\n        display: grid;\n        grid-template-columns: repeat(3, max-content);\n        justify-content: center;\n        gap: 2.5rem;\n        margin: 1.875rem 0;\n      }\n      .desc-2 {\n        gap: 6.563rem;\n      }\n    }\n\n    .forecast {\n      display: flex;\n      grid-area: 5/1/6/5;\n      margin-top: 1.875rem;\n      justify-content: space-evenly;\n      align-items: center;\n\n      li {\n        display: grid;\n        justify-content: center;\n        align-items: center;\n        grid-template-rows: repeat(3, auto);\n\n        > div {\n          display: flex;\n          justify-content: center;\n\n          p:nth-child(2) {\n            color: $grey-color;\n          }\n        }\n        img {\n          max-width: 7rem;\n        }\n      }\n      .separate {\n        font-size: 0;\n        height: 130px;\n        background: #fff;\n        width: 6px;\n        color: $white-color;\n        -webkit-box-shadow: $-webkit-box-shadow;\n        box-shadow: $box-shadow;\n      }\n    }\n  }\n\n  // Loading Circle\n  .progress-item {\n    display: flex;\n    width: $loading-circle;\n    height: $loading-circle;\n    border-radius: 50%;\n    font-size: 0;\n    animation: 0.4s ease-out reverse;\n    -webkit-box-shadow: $-webkit-box-shadow;\n    box-shadow: $box-shadow;\n    margin-bottom: 1.8rem;\n  }\n\n  .progress-item::after {\n    content: attr(data-value);\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: $loading-circle;\n    margin: 1rem;\n    border-radius: 50%;\n    background: $white-color;\n    line-height: 1;\n    padding-top: 0.25rem;\n    font-size: 2.5rem;\n    text-align: center;\n    -webkit-box-shadow: $-webkit-box-shadow-inset;\n    box-shadow: $box-shadow-inset;\n    font-family: \"Heebo-Regular\";\n    color: $black-color;\n    letter-spacing: -0.06rem;\n  }\n}\n"],"sourceRoot":""}]);
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
}]];
console.log(cleanData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sU0FBUyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxZQUFZLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFB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RSxLQURGO0lBRUpJLFVBQVUsRUFBRSxLQUZSO0lBR0pGLFFBQVEsRUFBRSxLQUhOO0lBSUpDLFFBQVEsRUFBRSxLQUpOO0lBS0ptRSxRQUFRLEVBQUUsSUFMTjtJQU1KQyxTQUFTLEVBQUUsSUFOUDtJQU9KQyxVQUFVLEVBQUUsSUFQUjtJQVFKaEUsUUFBUSxFQUFFLEVBUk47SUFTSmlFLE9BQU8sRUFBRTtFQVRMLENBRlI7RUFhRXhFLE9BQU8sRUFBRSxDQUNQO0lBQ0V5RSxFQUFFLEVBQUUsR0FETjtJQUVFM0UsSUFBSSxFQUFFLFFBRlI7SUFHRS9CLFdBQVcsRUFBRSxpQkFIZjtJQUlFMkcsSUFBSSxFQUFFO0VBSlIsQ0FETyxDQWJYO0VBcUJFckUsTUFBTSxFQUFFO0lBQ05DLEdBQUcsRUFBRTtFQURDLENBckJWO0VBd0JFcUUsSUFBSSxFQUFFO0lBQ0pDLEtBQUssRUFBRSxJQURIO0lBRUpDLEdBQUcsRUFBRSxHQUZEO0lBR0pDLElBQUksRUFBRTtFQUhGLENBeEJSO0VBNkJFQyxVQUFVLEVBQUUsS0E3QmQ7RUE4QkVDLEdBQUcsRUFBRSxDQTlCUDtFQStCRXhGLEdBQUcsRUFBRTtJQUNIMEYsR0FBRyxFQUFFO0VBREYsQ0EvQlA7RUFrQ0VqRCxNQUFNLEVBQUU7QUFsQ1YsQ0E3R0YsQ0FuekNnQixDQUFsQjtBQXU4Q0FQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeEMsU0FBWixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGxvY2F0aW9uLFxuICB0ZW1wZXJhdHVyZSxcbiAgZGVzY3JpcHRpb24sXG4gIG1pblRlbXAsXG4gIG1heFRlbXAsXG4gIGZlZWxzTGlrZSxcbiAgbG9hZGluZyxcbiAgbG9hZENsb3VkcyxcbiAgbG9hZEh1bWlkLFxuICBsb2FkV2luZCxcbiAgZm9yZWNhc3RzLFxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcblxuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG4gIGNvbnN0IHVwZGF0ZUN1cnJlbnQgPSAoZGF0YSkgPT4ge1xuICAgIF9sb2NhdGlvbihkYXRhKTtcbiAgICBfQ3VycmVudFRlbXAoZGF0YSk7XG4gICAgX0Rlc2NyaXB0aW9uKGRhdGEpO1xuICAgIF9taW5UZW1wKGRhdGEpO1xuICAgIF9tYXhUZW1wKGRhdGEpO1xuICAgIF9mZWVsc0xpa2UoZGF0YSk7XG4gICAgX2xvYWRpbmcoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNsZWFuRGF0YSA9IF9zcGxpdERhdGFCeURheXMoZGF0YSk7XG4gICAgX2xvd0hpZ2hUZW1wKGNsZWFuRGF0YSk7XG4gIH07XG5cbiAgLy8gRE9NIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCBfbG9jYXRpb24gPSAoZGF0YSkgPT4gKGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubmFtZSArIFwiLCBcIiArIGRhdGEuc3lzLmNvdW50cnkpO1xuICBjb25zdCBfQ3VycmVudFRlbXAgPSAoZGF0YSkgPT4gKHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGZvcm1hdFRlbXAoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCkpKTtcbiAgY29uc3QgX0Rlc2NyaXB0aW9uID0gKGRhdGEpID0+IChkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICBjb25zdCBfbWluVGVtcCA9IChkYXRhKSA9PiAobWluVGVtcC5pbm5lckhUTUwgPSBcIk1pbiBUZW1wOiBcIiArIGZvcm1hdFRlbXAoTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pKSk7XG4gIGNvbnN0IF9tYXhUZW1wID0gKGRhdGEpID0+IChtYXhUZW1wLmlubmVySFRNTCA9IFwiTWF4IFRlbXA6IFwiICsgZm9ybWF0VGVtcChNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heCkpKTtcbiAgY29uc3QgX2ZlZWxzTGlrZSA9IChkYXRhKSA9PiAoZmVlbHNMaWtlLmlubmVySFRNTCA9IFwiRmVlbHMgbGlrZTogXCIgKyBmb3JtYXRUZW1wKE1hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpKSk7XG4gIGNvbnN0IF9sb2FkaW5nID0gKGRhdGEpID0+IHtcbiAgICBsb2FkQ2xvdWRzLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5jbG91ZHMuYWxsKSk7XG4gICAgbG9hZEh1bWlkLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KSk7XG4gICAgbG9hZEh1bWlkLnNldEF0dHJpYnV0ZShcImRhdGEtbnVtXCIsIE1hdGgucm91bmQoZGF0YS5tYWluLmh1bWlkaXR5KSk7XG4gICAgX2xvYWRpbmdDaXJjbGUoKTtcbiAgfTtcblxuICAvLyBIZWxwZXIgZnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEZvcm1hdCBDZWxzaXVzXG4gIGNvbnN0IGZvcm1hdFRlbXAgPSAodGVtcCkgPT4gdGVtcCArICc8c3BhbiBjbGFzcz1cImRlZy1zeW1ib2xcIj4mIzE3Njs8c3BhbiBjbGFzcz1cIm1pbnVzXCI+LTwvc3Bhbj48L3NwYW4+Qyc7XG4gIC8vIEFuaW1hdGUgbG9hZGluZyBjaXJjbGVcbiAgY29uc3QgX2xvYWRpbmdDaXJjbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnRlcnMgPSBBcnJheShsb2FkaW5nLmxlbmd0aCk7XG4gICAgY29uc3QgaW50ZXJ2YWxzID0gQXJyYXkobG9hZGluZy5sZW5ndGgpO1xuICAgIGNvdW50ZXJzLmZpbGwoMCk7XG4gICAgbG9hZGluZy5mb3JFYWNoKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICBpbnRlcnZhbHNbaW5kZXhdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRlcnNbaW5kZXhdID09IHBhcnNlSW50KG51bWJlci5kYXRhc2V0Lm51bSkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXJzW2luZGV4XSArPSAxO1xuICAgICAgICAgIGlmIChudW1iZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaHVtaWRcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjZmRlZjVkLCAjZmZhNTU3IGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJjbG91ZHNcIikpIHtcbiAgICAgICAgICAgIG51bWJlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJjb25pYy1ncmFkaWVudCgjOTdEQUY1LCAjMzFCOERGIGNhbGMoXCIgKyBjb3VudGVyc1tpbmRleF0gKyBcIiUpLCNGRkZGRkYgMGRlZylcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKG51bWJlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ3aW5kXCIpKSB7XG4gICAgICAgICAgICBudW1iZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiY29uaWMtZ3JhZGllbnQoI0ZGRkZGRiAwZGVnKSwgIzk3REFGNSwgIzMxQjhERiBjYWxjKFwiICsgY291bnRlcnNbaW5kZXhdICsgXCIlKSwjRkZGRkZGIDBkZWcpXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbnVtYmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgY291bnRlcnNbaW5kZXhdICsgXCIlXCIpO1xuICAgICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBjb3VudGVyc1tpbmRleF0gKyBcIiVcIjtcbiAgICAgICAgfVxuICAgICAgfSwgMTUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IF9sb3dIaWdoVGVtcCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2coZm9yZWNhc3RzKTtcbiAgfTtcblxuICBjb25zdCBfc3BsaXREYXRhQnlEYXlzID0gKGRhdGEpID0+IHtcbiAgICBsZXQgZm9yZWNhc3REYXlzID0gW107XG4gICAgbGV0IGZvcmVjYXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmb3JlY2FzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLmxpc3RbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvcmVjYXN0WzBdLmR0X3R4dC5pbmRleE9mKGRhdGEubGlzdFtpXS5kdF90eHQuc3BsaXQoXCIgXCIpWzBdKSA+IC0xKSB7XG4gICAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLmxpc3RbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcmVjYXN0RGF5cy5wdXNoKGZvcmVjYXN0KTtcbiAgICAgICAgICBmb3JlY2FzdCA9IFtdO1xuICAgICAgICAgIGZvcmVjYXN0LnB1c2goZGF0YS5saXN0W2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhLmxpc3QubGVuZ3RoIC0gMSA9PT0gaSkge1xuICAgICAgICAgIGZvcmVjYXN0RGF5cy5wdXNoKGZvcmVjYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm9yZWNhc3REYXlzO1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZUN1cnJlbnQsIHVwZGF0ZUZvcmVjYXN0IH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21NYW5pcHVsYXRpb24gfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW50cm8gLmxvY2F0aW9uXCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtd3JhcCAudGVtcFwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLXdyYXAgLmRlc2NcIik7XG5jb25zdCBtaW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjLTEgLm1pbi10ZW1wXCIpO1xuY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5tYXgtdGVtcFwiKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0xIC5mZWVscy1saWtlXCIpO1xuY29uc3QgbG9hZENsb3VkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0yIC5jbG91ZHNcIik7XG5jb25zdCBsb2FkSHVtaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2MtMiAuaHVtaWRcIik7XG5jb25zdCBsb2FkV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzYy0yIC53aW5kXCIpO1xuY29uc3QgZm9yZWNhc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JlY2FzdCAuZm9yZVwiKTtcbmxldCBsb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzcy1pdGVtXCIpO1xuXG5leHBvcnQgeyBsb2NhdGlvbiwgdGVtcGVyYXR1cmUsIGRlc2NyaXB0aW9uLCBtaW5UZW1wLCBtYXhUZW1wLCBmZWVsc0xpa2UsIGxvYWRpbmcsIGxvYWRDbG91ZHMsIGxvYWRIdW1pZCwgbG9hZFdpbmQsIGZvcmVjYXN0cyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tTGlnaHRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1UaGluXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG46cm9vdCAuZGVnLXN5bWJvbCAubWludXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG46cm9vdCAuY3VycmVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbjpyb290IC5jdXJyZW50IC5sb2NhdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgZm9udC1zaXplOiA0LjZyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTVyZW07XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuOnJvb3QgLmN1cnJlbnQgLmRhdGUsXFxuOnJvb3QgLmN1cnJlbnQgLnRpbWUsXFxuOnJvb3QgLmN1cnJlbnQgLmRlc2MtMSBsaSxcXG46cm9vdCAuY3VycmVudCAuZGVzYy0yIGxpIHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzcmVtO1xcbn1cXG46cm9vdCAuY3VycmVudCAudGVtcCB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUJvbGRcXFwiO1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBsaW5lLWhlaWdodDogODQlO1xcbn1cXG46cm9vdCAuY3VycmVudCAuZGVzYyxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgLmRheSxcXG46cm9vdCAuY3VycmVudCAuZm9yZWNhc3QgbGkgPiBkaXYge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxufVxcbjpyb290IC5jdXJyZW50IC50ZW1wLWltZyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXgtd2lkdGg6IDE5LjEyNXJlbTtcXG4gIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG59XFxuXFxuI3dlYXRoZXItYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gIHBhZGRpbmc6IDEuODU3cmVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCAuaW5wdXQtd3JhcCBpbnB1dCB7XFxuICBib3JkZXI6IDAuMTQzcmVtIHNvbGlkICNhMGEwYTA7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIC5pbnB1dC13cmFwIGJ1dHRvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAudGl0bGUtc2VhcmNoIGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLnRpdGxlLXNlYXJjaCBoMSAubG9nby1zdW4ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGVmNWQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAjZmRlZjVkLCAjZmZhNTU3KTtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMzMzMzMzM7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuaW50cm8ge1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi81O1xcbiAgbWFyZ2luLWJvdHRvbTogMy4ycmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAudGVtcC13cmFwIHtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMztcXG4gIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLXdyYXAgLmRlc2Mge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC50ZW1wLWltZyB7XFxuICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5jdXJyZW50IC5kZXNjLTEge1xcbiAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGdyaWQtYXJlYTogNC8xLzUvNTtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmN1cnJlbnQgLmRlc2MtMSxcXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMi41cmVtO1xcbiAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbn1cXG4jd2VhdGhlci1hcHAgLndlYXRoZXItYXBwLWNvbnRhaW5lciAuY3VycmVudCAuZGVzYy0yIHtcXG4gIGdhcDogNi41NjNyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1hcmVhOiA1LzEvNi81O1xcbiAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCBsaSA+IGRpdiBwOm50aC1jaGlsZCgyKSB7XFxuICBjb2xvcjogI2EwYTBhMDtcXG59XFxuI3dlYXRoZXItYXBwIC53ZWF0aGVyLWFwcC1jb250YWluZXIgLmZvcmVjYXN0IGxpIGltZyB7XFxuICBtYXgtd2lkdGg6IDdyZW07XFxufVxcbiN3ZWF0aGVyLWFwcCAud2VhdGhlci1hcHAtY29udGFpbmVyIC5mb3JlY2FzdCAuc2VwYXJhdGUge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICB3aWR0aDogNnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbiN3ZWF0aGVyLWFwcCAucHJvZ3Jlc3MtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAxMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGFuaW1hdGlvbjogMC40cyBlYXNlLW91dCByZXZlcnNlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaGFkb3c6IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS44cmVtO1xcbn1cXG4jd2VhdGhlci1hcHAgLnByb2dyZXNzLWl0ZW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWx1ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJDQUFBO0FBQ0E7OztDQUFBO0FBS0E7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d0JBQUE7QUE2RkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUmVzZXQgQ1NTID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuYm9keSAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuaW5wdXQ6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi9yZXNldC5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvc3RhdGljL0hlZWJvLUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1FeHRyYUxpZ2h0XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9mb250cy9zdGF0aWMvSGVlYm8tRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2ZvbnRzL3N0YXRpYy9IZWViby1UaGluLnR0ZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbn1cXG5cXG4vLyBWYXJpYWJsZXNcXG4kYmxhY2stY29sb3I6ICMzMzMzMzM7XFxuJGdyZXktY29sb3I6ICNhMGEwYTA7XFxuJGJnLWNvbG9yOiAjZjBmMGYwO1xcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcXG4keWVsbG93LWNvbG9yOiAjZmRlZjVkO1xcbiRvcmFuZ2UtY29sb3I6ICNmZmE1NTc7XFxuJGxvYWRpbmctY2lyY2xlOiAxMHJlbTtcXG4kLXdlYmtpdC1ib3gtc2hhZG93OiAwLjEyNXJlbSAwLjMxM3JlbSAwLjYyNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4kYm94LXNoYWRvdzogMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJC13ZWJraXQtYm94LXNoYWRvdy1pbnNldDogaW5zZXQgMC4xMjVyZW0gMC4zMTNyZW0gMC42MjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuJGJveC1zaGFkb3ctaW5zZXQ6IGluc2V0IDAuMTI1cmVtIDAuMzEzcmVtIDAuNjI1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tUmVndWxhclxcXCI7XFxuICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcblxcbiAgLy8gVGl0bGUgTWFpblxcbiAgQG1peGluIG1haW4tdGl0bGUge1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVRoaW5cXFwiO1xcbiAgICBmb250LXNpemU6IDQuNnJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgfVxcblxcbiAgLy8gRGVzY3JpcHRpb24gU21hbGxcXG4gIEBtaXhpbiBzbWFsbC1kZXNjIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1MaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNyZW07XFxuICB9XFxuXFxuICAvLyBEZXNjcmlwdGlvbiBNaWRcXG4gIEBtaXhpbiBtaWQtZGVzYyB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tRXh0cmFMaWdodFxcXCI7XFxuICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxuXFxuICAvLyBXZWF0aGVyIFRpdGxlXFxuICBAbWl4aW4gdGVtcC10aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSGVlYm8tQm9sZFxcXCI7XFxuICAgIC8vIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsaW5lLWhlaWdodDogODQlO1xcbiAgfVxcblxcbiAgLy8gRGVncmVlIFN5bWJvbFxcbiAgLmRlZy1zeW1ib2wge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLm1pbnVzIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFN0eWxpbmdcXG4gIC5jdXJyZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAubG9jYXRpb24ge1xcbiAgICAgIEBpbmNsdWRlIG1haW4tdGl0bGU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbiAgICB9XFxuICAgIC5kYXRlLFxcbiAgICAudGltZSxcXG4gICAgLmRlc2MtMSBsaSxcXG4gICAgLmRlc2MtMiBsaSBzcGFuIHtcXG4gICAgICBAaW5jbHVkZSBzbWFsbC1kZXNjO1xcbiAgICB9XFxuICAgIC50ZW1wIHtcXG4gICAgICBAaW5jbHVkZSB0ZW1wLXRpdGxlO1xcbiAgICB9XFxuICAgIC5kZXNjLFxcbiAgICAuZm9yZWNhc3QgLmRheSxcXG4gICAgLmZvcmVjYXN0IGxpID4gZGl2IHtcXG4gICAgICBAaW5jbHVkZSBtaWQtZGVzYztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICAgIH1cXG4gICAgLnRlbXAtaW1nIGltZyB7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1heC13aWR0aDogMTkuMTI1cmVtO1xcbiAgICAgIG1heC1oZWlnaHQ6IDEzLjYyNXJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBMYXlvdXQgc3R5bGluZ1xcbiN3ZWF0aGVyLWFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuXFxuICAud2VhdGhlci1hcHAtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIG1heC1jb250ZW50KTtcXG4gICAgcGFkZGluZzogMS44NTdyZW07XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgLnRpdGxlLXNlYXJjaCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XFxuXFxuICAgICAgLmlucHV0LXdyYXAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGJvcmRlcjogMC4xNDNyZW0gc29saWQgJGdyZXktY29sb3I7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XFxuICAgICAgICAgIHdpZHRoOiAzcmVtO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiAkYmxhY2stY29sb3I7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJIZWViby1Cb2xkXFxcIjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcblxcbiAgICAgICAgLmxvZ28tc3VuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93LWNvbG9yO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoYXQgdG9wIHJpZ2h0LCAkeWVsbG93LWNvbG9yLCAkb3JhbmdlLWNvbG9yKTtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkYmxhY2stY29sb3I7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jdXJyZW50IHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcbiAgICAgIC5pbnRybyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEvMS8yLzU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLXdyYXAge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXG4gICAgICAgIC5kZXNjIHtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC50ZW1wLWltZyB7XFxuICAgICAgICBncmlkLWFyZWE6IDIvMy8zLzU7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgfVxcbiAgICAgIC5kZXNjLTEge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAzLzEvNC81O1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNC8xLzUvNTtcXG4gICAgICB9XFxuXFxuICAgICAgLmRlc2MtMSxcXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtYXgtY29udGVudCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMi41cmVtO1xcbiAgICAgICAgbWFyZ2luOiAxLjg3NXJlbSAwO1xcbiAgICAgIH1cXG4gICAgICAuZGVzYy0yIHtcXG4gICAgICAgIGdhcDogNi41NjNyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5mb3JlY2FzdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBncmlkLWFyZWE6IDUvMS82LzU7XFxuICAgICAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxuXFxuICAgICAgICA+IGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgY29sb3I6ICRncmV5LWNvbG9yO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBtYXgtd2lkdGg6IDdyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIC5zZXBhcmF0ZSB7XFxuICAgICAgICBmb250LXNpemU6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxuICAgICAgICBjb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkLXdlYmtpdC1ib3gtc2hhZG93O1xcbiAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAvLyBMb2FkaW5nIENpcmNsZVxcbiAgLnByb2dyZXNzLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogJGxvYWRpbmctY2lyY2xlO1xcbiAgICBoZWlnaHQ6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmb250LXNpemU6IDA7XFxuICAgIGFuaW1hdGlvbjogMC40cyBlYXNlLW91dCByZXZlcnNlO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICQtd2Via2l0LWJveC1zaGFkb3c7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjhyZW07XFxuICB9XFxuXFxuICAucHJvZ3Jlc3MtaXRlbTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdmFsdWUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6ICRsb2FkaW5nLWNpcmNsZTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICQtd2Via2l0LWJveC1zaGFkb3ctaW5zZXQ7XFxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWluc2V0O1xcbiAgICBmb250LWZhbWlseTogXFxcIkhlZWJvLVJlZ3VsYXJcXFwiO1xcbiAgICBjb2xvcjogJGJsYWNrLWNvbG9yO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDZyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG4vLyBpbXBvcnQgY2l0eURhdGEgZnJvbSBcIi4vZGF0YS9jaXR5Lmxpc3QuanNvblwiO1xuXG5jb25zdCB3ZWF0aGVyQXBwID0gKCgpID0+IHtcbiAgLy8gU3RvcmUgdmFsdWVzXG4gIGNvbnN0IHZhbHVlcyA9IHtcbiAgICBsb2M6IG51bGwsXG4gICAgbGltaXQ6IFwiNVwiLFxuICAgIHVuaXRzOiBcIiZ1bml0cz1tZXRyaWNcIixcbiAgICBhcGlLZXk6IFwiZTJmODhhNjRlZGIyNjkwOGYyYzhhODM2ZTBmODdjMTlcIixcbiAgICBjb29yZFVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT1cIixcbiAgICBjb29yZDogbnVsbCxcbiAgICB0b2RheVVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9XCIsXG4gICAgdG9kYXk6IG51bGwsXG4gICAgZm9yZVVybDogXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PVwiLFxuICAgIGZvcmU6IG51bGwsXG4gIH07XG5cbiAgLy8gSW5wdXQgZWxlbWVudCB0byBnZXQgY2xpZW50IGxvY2F0aW9uXG4gIGNvbnN0IGlucHV0RWxlbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXdyYXAgaW5wdXRcIik7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC13cmFwIGJ1dHRvblwiKTtcbiAgICAvLyBWYWxpZGF0ZSB2YWx1ZSBiZWZvcmUgbWFraW5nIEFQSSBjYWxsXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvLyBpZiAoaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHZhbHVlcy5sb2MgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGdldERhdGEodmFsdWVzLmxvYyk7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImludmFsaWRcIik7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGlucHV0LnZhbGlkaXR5KTtcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyBGZXRjaCB3ZWF0aGVyIERhdGFcbiAgY29uc3QgZ2V0RGF0YSA9ICh2YWwpID0+IHtcbiAgICByZXF1ZXN0RGF0YSh2YWx1ZXMuY29vcmRVcmwgKyB2YWwgKyBcIiZsaW1pdD1cIiArIHZhbHVlcy5saW1pdCArIFwiJmFwcGlkPVwiICsgdmFsdWVzLmFwaUtleSkudGhlbigoY29vcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcbiAgICAgIHZhbHVlcy5jb29yZCA9IGNvb3JkWzBdO1xuICAgICAgLy8gQ3VycmVudCBmZXRjaFxuICAgICAgLy8gcmVxdWVzdERhdGEodmFsdWVzLnRvZGF5VXJsICsgY29vcmRbMF0ubGF0ICsgXCImbG9uPVwiICsgY29vcmRbMF0ubG9uICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMuYXBpS2V5ICsgdmFsdWVzLnVuaXRzKS50aGVuKChjdXJyZW50KSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICAgICAgLy8gICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ3VycmVudChjdXJyZW50KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gRm9yZWNhc3QgZmV0Y2hcbiAgICAgIHJlcXVlc3REYXRhKHZhbHVlcy5mb3JlVXJsICsgY29vcmRbMF0ubGF0ICsgXCImbG9uPVwiICsgY29vcmRbMF0ubG9uICsgXCImYXBwaWQ9XCIgKyB2YWx1ZXMuYXBpS2V5ICsgdmFsdWVzLnVuaXRzKS50aGVuKChmb3JlY2FzdCkgPT4ge1xuICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gRmV0Y2ggcmVxdWVzdCBmdW5jdGlvblxuICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0RGF0YSh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIpOyAvLyBUeXBlRXJyb3I6IGZhaWxlZCB0byBmZXRjaFxuICAgIH1cbiAgfVxufSkoKTtcblxuY29uc3QgY2xlYW5EYXRhID0gW1xuICBbXG4gICAge1xuICAgICAgZHQ6IDE2NjA3Mzc2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIzLjYyLFxuICAgICAgICBmZWVsc19saWtlOiAyMy42OCxcbiAgICAgICAgdGVtcF9taW46IDIzLjYyLFxuICAgICAgICB0ZW1wX21heDogMjMuODEsXG4gICAgICAgIHByZXNzdXJlOiAxMDExLFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMDksXG4gICAgICAgIGh1bWlkaXR5OiA2MyxcbiAgICAgICAgdGVtcF9rZjogLTAuMTksXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUwMCxcbiAgICAgICAgICBtYWluOiBcIlJhaW5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gICAgICAgICAgaWNvbjogXCIxMGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA3NSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiA0LjQ3LFxuICAgICAgICBkZWc6IDUzLFxuICAgICAgICBndXN0OiA1LjY2LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDYxNDYsXG4gICAgICBwb3A6IDAuOTEsXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMS44OCxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xNyAxMjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA3NDg0MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIzLjIzLFxuICAgICAgICBmZWVsc19saWtlOiAyMy4zMSxcbiAgICAgICAgdGVtcF9taW46IDIyLjQ1LFxuICAgICAgICB0ZW1wX21heDogMjMuMjMsXG4gICAgICAgIHByZXNzdXJlOiAxMDExLFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTAsXG4gICAgICAgIGh1bWlkaXR5OiA2NSxcbiAgICAgICAgdGVtcF9rZjogMC43OCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAxLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm1vZGVyYXRlIHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDgyLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuMDQsXG4gICAgICAgIGRlZzogNjIsXG4gICAgICAgIGd1c3Q6IDUuNjUsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogNjEzNSxcbiAgICAgIHBvcDogMC45LFxuICAgICAgcmFpbjoge1xuICAgICAgICBcIjNoXCI6IDUuNjksXG4gICAgICB9LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTcgMTU6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwNzU5MjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMS45OCxcbiAgICAgICAgZmVlbHNfbGlrZTogMjIuMTQsXG4gICAgICAgIHRlbXBfbWluOiAyMS4xNixcbiAgICAgICAgdGVtcF9tYXg6IDIxLjk4LFxuICAgICAgICBwcmVzc3VyZTogMTAxMixcbiAgICAgICAgc2VhX2xldmVsOiAxMDEyLFxuICAgICAgICBncm5kX2xldmVsOiAxMDEwLFxuICAgICAgICBodW1pZGl0eTogNzMsXG4gICAgICAgIHRlbXBfa2Y6IDAuODIsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUwMSxcbiAgICAgICAgICBtYWluOiBcIlJhaW5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJtb2RlcmF0ZSByYWluXCIsXG4gICAgICAgICAgaWNvbjogXCIxMGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5MSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjgxLFxuICAgICAgICBkZWc6IDM3LFxuICAgICAgICBndXN0OiA1LjcxLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjg5LFxuICAgICAgcmFpbjoge1xuICAgICAgICBcIjNoXCI6IDMuMzQsXG4gICAgICB9LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTcgMTg6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwNzcwMDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxOS4zMyxcbiAgICAgICAgZmVlbHNfbGlrZTogMTkuNTEsXG4gICAgICAgIHRlbXBfbWluOiAxOS4zMyxcbiAgICAgICAgdGVtcF9tYXg6IDE5LjMzLFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogODQsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUwMCxcbiAgICAgICAgICBtYWluOiBcIlJhaW5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gICAgICAgICAgaWNvbjogXCIxMG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA5OCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjk4LFxuICAgICAgICBkZWc6IDM4LFxuICAgICAgICBndXN0OiA4LjMsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuNDcsXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMC43NixcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xNyAyMTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MDc4MDgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTguMDYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE4LjI1LFxuICAgICAgICB0ZW1wX21pbjogMTguMDYsXG4gICAgICAgIHRlbXBfbWF4OiAxOC4wNixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDg5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDg4LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuMDgsXG4gICAgICAgIGRlZzogNTIsXG4gICAgICAgIGd1c3Q6IDcuMjQsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuMjcsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOCAwMDowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA3OTE2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE3LjYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE3Ljc5LFxuICAgICAgICB0ZW1wX21pbjogMTcuNixcbiAgICAgICAgdGVtcF9tYXg6IDE3LjYsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA5MSxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAyLFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwic2NhdHRlcmVkIGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDNuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogNTAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi4zOSxcbiAgICAgICAgZGVnOiAzNCxcbiAgICAgICAgZ3VzdDogNS4xNyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDAzOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDgwMjQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTcuNDksXG4gICAgICAgIGZlZWxzX2xpa2U6IDE3LjYyLFxuICAgICAgICB0ZW1wX21pbjogMTcuNDksXG4gICAgICAgIHRlbXBfbWF4OiAxNy40OSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDg5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDIsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzY2F0dGVyZWQgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwM2RcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA1MCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAxLjc5LFxuICAgICAgICBkZWc6IDQxLFxuICAgICAgICBndXN0OiAzLjI1LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMDY6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODEzMjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMS4yMixcbiAgICAgICAgZmVlbHNfbGlrZTogMjEuMixcbiAgICAgICAgdGVtcF9taW46IDIxLjIyLFxuICAgICAgICB0ZW1wX21heDogMjEuMjIsXG4gICAgICAgIHByZXNzdXJlOiAxMDE1LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTIsXG4gICAgICAgIGh1bWlkaXR5OiA2OSxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAzLFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYnJva2VuIGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogNjEsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMS4wNSxcbiAgICAgICAgZGVnOiA2MCxcbiAgICAgICAgZ3VzdDogMS4yNSxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDA5OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDgyNDAwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjUuMzgsXG4gICAgICAgIGZlZWxzX2xpa2U6IDI1LjI1LFxuICAgICAgICB0ZW1wX21pbjogMjUuMzgsXG4gICAgICAgIHRlbXBfbWF4OiAyNS4zOCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTQsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDQ5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA2MSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAwLjUxLFxuICAgICAgICBkZWc6IDI1MSxcbiAgICAgICAgZ3VzdDogMS4zMyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDEyOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDgzNDgwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjYuOTQsXG4gICAgICAgIGZlZWxzX2xpa2U6IDI2LjgyLFxuICAgICAgICB0ZW1wX21pbjogMjYuOTQsXG4gICAgICAgIHRlbXBfbWF4OiAyNi45NCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTMsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxMyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMCxcbiAgICAgICAgaHVtaWRpdHk6IDQwLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA1NSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjY2LFxuICAgICAgICBkZWc6IDIzOCxcbiAgICAgICAgZ3VzdDogMy45NixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4wNixcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE4IDE1OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDg0NTYwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjQuNyxcbiAgICAgICAgZmVlbHNfbGlrZTogMjQuNTEsXG4gICAgICAgIHRlbXBfbWluOiAyNC43LFxuICAgICAgICB0ZW1wX21heDogMjQuNyxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTMsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxMyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMCxcbiAgICAgICAgaHVtaWRpdHk6IDQ5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA3NSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjU3LFxuICAgICAgICBkZWc6IDI0NixcbiAgICAgICAgZ3VzdDogNS4yLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTggMTg6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODU2NDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMS44LFxuICAgICAgICBmZWVsc19saWtlOiAyMS42OCxcbiAgICAgICAgdGVtcF9taW46IDIxLjgsXG4gICAgICAgIHRlbXBfbWF4OiAyMS44LFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDExLFxuICAgICAgICBodW1pZGl0eTogNjMsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogOTIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy41OCxcbiAgICAgICAgZGVnOiAyMzYsXG4gICAgICAgIGd1c3Q6IDguMTcsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOCAyMTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MDg2NzIwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjAuMTEsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE5LjksXG4gICAgICAgIHRlbXBfbWluOiAyMC4xMSxcbiAgICAgICAgdGVtcF9tYXg6IDIwLjExLFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDExLFxuICAgICAgICBodW1pZGl0eTogNjYsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogOTQsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi40NCxcbiAgICAgICAgZGVnOiAyMzgsXG4gICAgICAgIGd1c3Q6IDUuMzYsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAwMDowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA4NzgwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjY4LFxuICAgICAgICBmZWVsc19saWtlOiAxOS41NixcbiAgICAgICAgdGVtcF9taW46IDE5LjY4LFxuICAgICAgICB0ZW1wX21heDogMTkuNjgsXG4gICAgICAgIHByZXNzdXJlOiAxMDEzLFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTMsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA3MSxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAwLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAyLjU0LFxuICAgICAgICBkZWc6IDI0NCxcbiAgICAgICAgZ3VzdDogNi4wOCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4zNCxcbiAgICAgIHJhaW46IHtcbiAgICAgICAgXCIzaFwiOiAwLjEsXG4gICAgICB9LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJuXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMDM6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwODg4ODAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxOS40MyxcbiAgICAgICAgZmVlbHNfbGlrZTogMTkuNDEsXG4gICAgICAgIHRlbXBfbWluOiAxOS40MyxcbiAgICAgICAgdGVtcF9tYXg6IDE5LjQzLFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogNzYsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDUwMCxcbiAgICAgICAgICBtYWluOiBcIlJhaW5cIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJsaWdodCByYWluXCIsXG4gICAgICAgICAgaWNvbjogXCIxMGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAxMDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi40NixcbiAgICAgICAgZGVnOiAyNTksXG4gICAgICAgIGd1c3Q6IDUuNzgsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuMjQsXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMC4xNSxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0xOSAwNjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA4OTk2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIwLjk2LFxuICAgICAgICBmZWVsc19saWtlOiAyMC43LFxuICAgICAgICB0ZW1wX21pbjogMjAuOTYsXG4gICAgICAgIHRlbXBfbWF4OiAyMC45NixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDYxLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjM2LFxuICAgICAgICBkZWc6IDI4MyxcbiAgICAgICAgZ3VzdDogNC45NyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4wNixcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTE5IDA5OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MDkxMDQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMjUuMDEsXG4gICAgICAgIGZlZWxzX2xpa2U6IDI0LjYxLFxuICAgICAgICB0ZW1wX21pbjogMjUuMDEsXG4gICAgICAgIHRlbXBfbWF4OiAyNS4wMSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDQwLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA3NSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjY1LFxuICAgICAgICBkZWc6IDI2NCxcbiAgICAgICAgZ3VzdDogNS43NCxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4yLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMTI6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwOTIxMjAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNS42MixcbiAgICAgICAgZmVlbHNfbGlrZTogMjUuMDIsXG4gICAgICAgIHRlbXBfbWluOiAyNS42MixcbiAgICAgICAgdGVtcF9tYXg6IDI1LjYyLFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEyLFxuICAgICAgICBodW1pZGl0eTogMzAsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMCxcbiAgICAgICAgICBtYWluOiBcIkNsZWFyXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiY2xlYXIgc2t5XCIsXG4gICAgICAgICAgaWNvbjogXCIwMWRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuMzUsXG4gICAgICAgIGRlZzogMjk5LFxuICAgICAgICBndXN0OiA0LjkyLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLjAyLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMTU6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwOTMyMDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyNC4wOCxcbiAgICAgICAgZmVlbHNfbGlrZTogMjMuMjUsXG4gICAgICAgIHRlbXBfbWluOiAyNC4wOCxcbiAgICAgICAgdGVtcF9tYXg6IDI0LjA4LFxuICAgICAgICBwcmVzc3VyZTogMTAxNSxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE1LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEzLFxuICAgICAgICBodW1pZGl0eTogMjcsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMCxcbiAgICAgICAgICBtYWluOiBcIkNsZWFyXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiY2xlYXIgc2t5XCIsXG4gICAgICAgICAgaWNvbjogXCIwMWRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuOTEsXG4gICAgICAgIGRlZzogMzAxLFxuICAgICAgICBndXN0OiA0LjcyLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMTg6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYwOTQyODAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxOS41MyxcbiAgICAgICAgZmVlbHNfbGlrZTogMTguNzcsXG4gICAgICAgIHRlbXBfbWluOiAxOS41MyxcbiAgICAgICAgdGVtcF9tYXg6IDE5LjUzLFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE0LFxuICAgICAgICBodW1pZGl0eTogNDcsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwMCxcbiAgICAgICAgICBtYWluOiBcIkNsZWFyXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiY2xlYXIgc2t5XCIsXG4gICAgICAgICAgaWNvbjogXCIwMW5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuNTYsXG4gICAgICAgIGRlZzogMjc5LFxuICAgICAgICBndXN0OiA5LjE5LFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJuXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMTkgMjE6MDA6MDBcIixcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgZHQ6IDE2NjA5NTM2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE3LjQxLFxuICAgICAgICBmZWVsc19saWtlOiAxNi42NyxcbiAgICAgICAgdGVtcF9taW46IDE3LjQxLFxuICAgICAgICB0ZW1wX21heDogMTcuNDEsXG4gICAgICAgIHByZXNzdXJlOiAxMDE4LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTgsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGh1bWlkaXR5OiA1NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy4zNixcbiAgICAgICAgZGVnOiAyODgsXG4gICAgICAgIGd1c3Q6IDcuMTMsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAwMDowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5NjQ0MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE1LjkxLFxuICAgICAgICBmZWVsc19saWtlOiAxNS4yOCxcbiAgICAgICAgdGVtcF9taW46IDE1LjkxLFxuICAgICAgICB0ZW1wX21heDogMTUuOTEsXG4gICAgICAgIHByZXNzdXJlOiAxMDE4LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTgsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGh1bWlkaXR5OiA2NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi43OSxcbiAgICAgICAgZGVnOiAyNjksXG4gICAgICAgIGd1c3Q6IDUuODksXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAwMzowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5NzUyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE1LjQ5LFxuICAgICAgICBmZWVsc19saWtlOiAxNS4wMyxcbiAgICAgICAgdGVtcF9taW46IDE1LjQ5LFxuICAgICAgICB0ZW1wX21heDogMTUuNDksXG4gICAgICAgIHByZXNzdXJlOiAxMDE4LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTgsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGh1bWlkaXR5OiA3NCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDMsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy4xOSxcbiAgICAgICAgZGVnOiAyNDQsXG4gICAgICAgIGd1c3Q6IDYuOTgsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAwNjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5ODYwMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjgsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE5LjMyLFxuICAgICAgICB0ZW1wX21pbjogMTkuOCxcbiAgICAgICAgdGVtcF9tYXg6IDE5LjgsXG4gICAgICAgIHByZXNzdXJlOiAxMDE4LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTgsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGh1bWlkaXR5OiA1NyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAwLFxuICAgICAgICAgIG1haW46IFwiQ2xlYXJcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJjbGVhciBza3lcIixcbiAgICAgICAgICBpY29uOiBcIjAxZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDMsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNC42OSxcbiAgICAgICAgZGVnOiAyNDYsXG4gICAgICAgIGd1c3Q6IDcuMDgsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAwOTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjA5OTY4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIyLjcsXG4gICAgICAgIGZlZWxzX2xpa2U6IDIyLjE3LFxuICAgICAgICB0ZW1wX21pbjogMjIuNyxcbiAgICAgICAgdGVtcF9tYXg6IDIyLjcsXG4gICAgICAgIHByZXNzdXJlOiAxMDE3LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTcsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGh1bWlkaXR5OiA0NCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAxLFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiZmV3IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDJkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMjIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogNS41OCxcbiAgICAgICAgZGVnOiAyNTQsXG4gICAgICAgIGd1c3Q6IDcuOTMsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAxMjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwMDc2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIxLjg4LFxuICAgICAgICBmZWVsc19saWtlOiAyMS40LFxuICAgICAgICB0ZW1wX21pbjogMjEuODgsXG4gICAgICAgIHRlbXBfbWF4OiAyMS44OCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDQ5LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiA0Ljc1LFxuICAgICAgICBkZWc6IDIzNSxcbiAgICAgICAgZ3VzdDogOC4xLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMjAgMTU6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYxMDE4NDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMi40MyxcbiAgICAgICAgZmVlbHNfbGlrZTogMjEuOTMsXG4gICAgICAgIHRlbXBfbWluOiAyMi40MyxcbiAgICAgICAgdGVtcF9tYXg6IDIyLjQzLFxuICAgICAgICBwcmVzc3VyZTogMTAxNyxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE3LFxuICAgICAgICBncm5kX2xldmVsOiAxMDE0LFxuICAgICAgICBodW1pZGl0eTogNDYsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogOTQsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy42NyxcbiAgICAgICAgZGVnOiAyNDQsXG4gICAgICAgIGd1c3Q6IDcuODMsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAxODowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwMjkyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjY0LFxuICAgICAgICBmZWVsc19saWtlOiAxOS4xMixcbiAgICAgICAgdGVtcF9taW46IDE5LjY0LFxuICAgICAgICB0ZW1wX21heDogMTkuNjQsXG4gICAgICAgIHByZXNzdXJlOiAxMDE4LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTgsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGh1bWlkaXR5OiA1NixcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAxMDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy44MSxcbiAgICAgICAgZGVnOiAyNTksXG4gICAgICAgIGd1c3Q6IDguMzgsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMCAyMTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MTA0MDAwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTcuNTQsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE3LjE4LFxuICAgICAgICB0ZW1wX21pbjogMTcuNTQsXG4gICAgICAgIHRlbXBfbWF4OiAxNy41NCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNSxcbiAgICAgICAgaHVtaWRpdHk6IDcwLFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0blwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDk4LFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDMuNCxcbiAgICAgICAgZGVnOiAyNTIsXG4gICAgICAgIGd1c3Q6IDguNzksXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAwMDowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwNTA4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE2LjgyLFxuICAgICAgICBmZWVsc19saWtlOiAxNi41NyxcbiAgICAgICAgdGVtcF9taW46IDE2LjgyLFxuICAgICAgICB0ZW1wX21heDogMTYuODIsXG4gICAgICAgIHByZXNzdXJlOiAxMDE3LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTcsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGh1bWlkaXR5OiA3NyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAxMDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy4wNixcbiAgICAgICAgZGVnOiAyNDgsXG4gICAgICAgIGd1c3Q6IDcuNjEsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAwMzowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwNjE2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE2LjU1LFxuICAgICAgICBmZWVsc19saWtlOiAxNi4zLFxuICAgICAgICB0ZW1wX21pbjogMTYuNTUsXG4gICAgICAgIHRlbXBfbWF4OiAxNi41NSxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDc4LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDQsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcbiAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAzLjM4LFxuICAgICAgICBkZWc6IDI0MyxcbiAgICAgICAgZ3VzdDogNy4xNixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiZFwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIxIDA2OjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTA3MjQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTcuMDcsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2Ljg3LFxuICAgICAgICB0ZW1wX21pbjogMTcuMDcsXG4gICAgICAgIHRlbXBfbWF4OiAxNy4wNyxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTcsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNyxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxNCxcbiAgICAgICAgaHVtaWRpdHk6IDc4LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA1MDAsXG4gICAgICAgICAgbWFpbjogXCJSYWluXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibGlnaHQgcmFpblwiLFxuICAgICAgICAgIGljb246IFwiMTBkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogMTAwLFxuICAgICAgfSxcbiAgICAgIHdpbmQ6IHtcbiAgICAgICAgc3BlZWQ6IDQuMDMsXG4gICAgICAgIGRlZzogMjI5LFxuICAgICAgICBndXN0OiA3LjUsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAuMzIsXG4gICAgICByYWluOiB7XG4gICAgICAgIFwiM2hcIjogMC41NSxcbiAgICAgIH0sXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAwOTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjEwODMyMDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE2Ljg5LFxuICAgICAgICBmZWVsc19saWtlOiAxNi42NSxcbiAgICAgICAgdGVtcF9taW46IDE2Ljg5LFxuICAgICAgICB0ZW1wX21heDogMTYuODksXG4gICAgICAgIHByZXNzdXJlOiAxMDE3LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTcsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGh1bWlkaXR5OiA3NyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNTAwLFxuICAgICAgICAgIG1haW46IFwiUmFpblwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImxpZ2h0IHJhaW5cIixcbiAgICAgICAgICBpY29uOiBcIjEwZFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGNsb3Vkczoge1xuICAgICAgICBhbGw6IDEwMCxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiA0LjIzLFxuICAgICAgICBkZWc6IDI0MSxcbiAgICAgICAgZ3VzdDogNy41NixcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMC4yLFxuICAgICAgcmFpbjoge1xuICAgICAgICBcIjNoXCI6IDAuMjIsXG4gICAgICB9LFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJkXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMjEgMTI6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYxMDk0MDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAyMC40LFxuICAgICAgICBmZWVsc19saWtlOiAxOS45MyxcbiAgICAgICAgdGVtcF9taW46IDIwLjQsXG4gICAgICAgIHRlbXBfbWF4OiAyMC40LFxuICAgICAgICBwcmVzc3VyZTogMTAxNixcbiAgICAgICAgc2VhX2xldmVsOiAxMDE2LFxuICAgICAgICBncm5kX2xldmVsOiAxMDEzLFxuICAgICAgICBodW1pZGl0eTogNTUsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogOTMsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMy41OSxcbiAgICAgICAgZGVnOiAyNjIsXG4gICAgICAgIGd1c3Q6IDYuNjcsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAxNTowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjExMDQ4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDIwLjk2LFxuICAgICAgICBmZWVsc19saWtlOiAyMC40MixcbiAgICAgICAgdGVtcF9taW46IDIwLjk2LFxuICAgICAgICB0ZW1wX21heDogMjAuOTYsXG4gICAgICAgIHByZXNzdXJlOiAxMDE1LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTMsXG4gICAgICAgIGh1bWlkaXR5OiA1MCxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAzLFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYnJva2VuIGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogODIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi4yNSxcbiAgICAgICAgZGVnOiAyODUsXG4gICAgICAgIGd1c3Q6IDUuMTQsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAxODowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjExMTU2MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjM2LFxuICAgICAgICBmZWVsc19saWtlOiAxOC43NCxcbiAgICAgICAgdGVtcF9taW46IDE5LjM2LFxuICAgICAgICB0ZW1wX21heDogMTkuMzYsXG4gICAgICAgIHByZXNzdXJlOiAxMDE1LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTUsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTMsXG4gICAgICAgIGh1bWlkaXR5OiA1MyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODAzLFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiYnJva2VuIGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogNzIsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi4wMSxcbiAgICAgICAgZGVnOiAyMjcsXG4gICAgICAgIGd1c3Q6IDQuMjMsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcIm5cIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMSAyMTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICBkdDogMTY2MTEyNjQwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTguNCxcbiAgICAgICAgZmVlbHNfbGlrZTogMTcuNzgsXG4gICAgICAgIHRlbXBfbWluOiAxOC40LFxuICAgICAgICB0ZW1wX21heDogMTguNCxcbiAgICAgICAgcHJlc3N1cmU6IDEwMTUsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNSxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMixcbiAgICAgICAgaHVtaWRpdHk6IDU3LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA4MSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAxLjQ5LFxuICAgICAgICBkZWc6IDIzOSxcbiAgICAgICAgZ3VzdDogMi42NyxcbiAgICAgIH0sXG4gICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcbiAgICAgIHBvcDogMCxcbiAgICAgIHN5czoge1xuICAgICAgICBwb2Q6IFwiblwiLFxuICAgICAgfSxcbiAgICAgIGR0X3R4dDogXCIyMDIyLTA4LTIyIDAwOjAwOjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkdDogMTY2MTEzNzIwMCxcbiAgICAgIG1haW46IHtcbiAgICAgICAgdGVtcDogMTYuNzYsXG4gICAgICAgIGZlZWxzX2xpa2U6IDE2LjE2LFxuICAgICAgICB0ZW1wX21pbjogMTYuNzYsXG4gICAgICAgIHRlbXBfbWF4OiAxNi43NixcbiAgICAgICAgcHJlc3N1cmU6IDEwMTQsXG4gICAgICAgIHNlYV9sZXZlbDogMTAxNCxcbiAgICAgICAgZ3JuZF9sZXZlbDogMTAxMSxcbiAgICAgICAgaHVtaWRpdHk6IDY0LFxuICAgICAgICB0ZW1wX2tmOiAwLFxuICAgICAgfSxcbiAgICAgIHdlYXRoZXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA4MDMsXG4gICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJicm9rZW4gY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNG5cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiA3MSxcbiAgICAgIH0sXG4gICAgICB3aW5kOiB7XG4gICAgICAgIHNwZWVkOiAwLjk3LFxuICAgICAgICBkZWc6IDIxMSxcbiAgICAgICAgZ3VzdDogMS4xLFxuICAgICAgfSxcbiAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxuICAgICAgcG9wOiAwLFxuICAgICAgc3lzOiB7XG4gICAgICAgIHBvZDogXCJuXCIsXG4gICAgICB9LFxuICAgICAgZHRfdHh0OiBcIjIwMjItMDgtMjIgMDM6MDA6MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGR0OiAxNjYxMTQ4MDAwLFxuICAgICAgbWFpbjoge1xuICAgICAgICB0ZW1wOiAxNi44OSxcbiAgICAgICAgZmVlbHNfbGlrZTogMTYuMzEsXG4gICAgICAgIHRlbXBfbWluOiAxNi44OSxcbiAgICAgICAgdGVtcF9tYXg6IDE2Ljg5LFxuICAgICAgICBwcmVzc3VyZTogMTAxNCxcbiAgICAgICAgc2VhX2xldmVsOiAxMDE0LFxuICAgICAgICBncm5kX2xldmVsOiAxMDExLFxuICAgICAgICBodW1pZGl0eTogNjQsXG4gICAgICAgIHRlbXBfa2Y6IDAsXG4gICAgICB9LFxuICAgICAgd2VhdGhlcjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDgwNCxcbiAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxuICAgICAgICAgIGljb246IFwiMDRkXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgY2xvdWRzOiB7XG4gICAgICAgIGFsbDogODUsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMS4wMixcbiAgICAgICAgZGVnOiAxNDEsXG4gICAgICAgIGd1c3Q6IDIuMDIsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMiAwNjowMDowMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZHQ6IDE2NjExNTg4MDAsXG4gICAgICBtYWluOiB7XG4gICAgICAgIHRlbXA6IDE5LjI3LFxuICAgICAgICBmZWVsc19saWtlOiAxOC42NCxcbiAgICAgICAgdGVtcF9taW46IDE5LjI3LFxuICAgICAgICB0ZW1wX21heDogMTkuMjcsXG4gICAgICAgIHByZXNzdXJlOiAxMDE0LFxuICAgICAgICBzZWFfbGV2ZWw6IDEwMTQsXG4gICAgICAgIGdybmRfbGV2ZWw6IDEwMTEsXG4gICAgICAgIGh1bWlkaXR5OiA1MyxcbiAgICAgICAgdGVtcF9rZjogMCxcbiAgICAgIH0sXG4gICAgICB3ZWF0aGVyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogODA0LFxuICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXG4gICAgICAgICAgaWNvbjogXCIwNGRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbG91ZHM6IHtcbiAgICAgICAgYWxsOiAxMDAsXG4gICAgICB9LFxuICAgICAgd2luZDoge1xuICAgICAgICBzcGVlZDogMi40MixcbiAgICAgICAgZGVnOiAxNjMsXG4gICAgICAgIGd1c3Q6IDQuNDIsXG4gICAgICB9LFxuICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXG4gICAgICBwb3A6IDAsXG4gICAgICBzeXM6IHtcbiAgICAgICAgcG9kOiBcImRcIixcbiAgICAgIH0sXG4gICAgICBkdF90eHQ6IFwiMjAyMi0wOC0yMiAwOTowMDowMFwiLFxuICAgIH0sXG4gIF0sXG5dO1xuXG5jb25zb2xlLmxvZyhjbGVhbkRhdGEpO1xuIl0sIm5hbWVzIjpbImxvY2F0aW9uIiwidGVtcGVyYXR1cmUiLCJkZXNjcmlwdGlvbiIsIm1pblRlbXAiLCJtYXhUZW1wIiwiZmVlbHNMaWtlIiwibG9hZGluZyIsImxvYWRDbG91ZHMiLCJsb2FkSHVtaWQiLCJsb2FkV2luZCIsImZvcmVjYXN0cyIsImRvbU1hbmlwdWxhdGlvbiIsInVwZGF0ZUN1cnJlbnQiLCJkYXRhIiwiX2xvY2F0aW9uIiwiX0N1cnJlbnRUZW1wIiwiX0Rlc2NyaXB0aW9uIiwiX21pblRlbXAiLCJfbWF4VGVtcCIsIl9mZWVsc0xpa2UiLCJfbG9hZGluZyIsInVwZGF0ZUZvcmVjYXN0IiwiY2xlYW5EYXRhIiwiX3NwbGl0RGF0YUJ5RGF5cyIsIl9sb3dIaWdoVGVtcCIsImlubmVyVGV4dCIsIm5hbWUiLCJzeXMiLCJjb3VudHJ5IiwiaW5uZXJIVE1MIiwiZm9ybWF0VGVtcCIsIk1hdGgiLCJyb3VuZCIsIm1haW4iLCJ0ZW1wIiwid2VhdGhlciIsInRlbXBfbWluIiwidGVtcF9tYXgiLCJmZWVsc19saWtlIiwic2V0QXR0cmlidXRlIiwiY2xvdWRzIiwiYWxsIiwiaHVtaWRpdHkiLCJfbG9hZGluZ0NpcmNsZSIsImNvdW50ZXJzIiwiQXJyYXkiLCJsZW5ndGgiLCJpbnRlcnZhbHMiLCJmaWxsIiwiZm9yRWFjaCIsIm51bWJlciIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJudW0iLCJjbGVhckludGVydmFsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb25zb2xlIiwibG9nIiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3QiLCJpIiwibGlzdCIsInB1c2giLCJkdF90eHQiLCJpbmRleE9mIiwic3BsaXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2VhdGhlckFwcCIsInZhbHVlcyIsImxvYyIsImxpbWl0IiwidW5pdHMiLCJhcGlLZXkiLCJjb29yZFVybCIsImNvb3JkIiwidG9kYXlVcmwiLCJ0b2RheSIsImZvcmVVcmwiLCJmb3JlIiwiaW5wdXRFbGVtIiwiaW5wdXQiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwidmFsdWUiLCJnZXREYXRhIiwidmFsIiwicmVxdWVzdERhdGEiLCJ0aGVuIiwibGF0IiwibG9uIiwidXJsIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwiYWxlcnQiLCJkdCIsInByZXNzdXJlIiwic2VhX2xldmVsIiwiZ3JuZF9sZXZlbCIsInRlbXBfa2YiLCJpZCIsImljb24iLCJ3aW5kIiwic3BlZWQiLCJkZWciLCJndXN0IiwidmlzaWJpbGl0eSIsInBvcCIsInJhaW4iLCJwb2QiXSwic291cmNlUm9vdCI6IiJ9
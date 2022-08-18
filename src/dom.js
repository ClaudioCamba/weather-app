import {
  location,
  date,
  temperature,
  description,
  minTemp,
  maxTemp,
  feelsLike,
  loading,
  loadClouds,
  loadHumid,
  loadWind,
  forecasts,
  foreWrap,
} from "./variables.js";
import { startOfDay } from "date-fns";

const domManipulation = (function () {
  "use strict";
  const updateCurrent = (data) => {
    _location(data);
    _locationDate();
    _CurrentTemp(data);
    _Description(data);
    _minTemp(data);
    _maxTemp(data);
    _feelsLike(data);
    _loading(data);
  };

  const updateForecast = (data) => {
    const organizedData = _splitDataByDays(data);
    const cleanData = _removeToday(organizedData);
    _numDays(cleanData);
    _forecast(cleanData);
  };

  // DOM functions ======================================================================================
  const _location = (data) => (location.innerText = data.name + ", " + data.sys.country);
  const _locationDate = () => (date.innerText = _todaysDate());
  const _CurrentTemp = (data) => (temperature.innerHTML = formatTempCel(Math.round(data.main.temp)));
  const _Description = (data) => (description.innerText = data.weather[0].description);
  const _minTemp = (data) => (minTemp.innerHTML = "Min Temp: " + formatTempCel(Math.round(data.main.temp_min)));
  const _maxTemp = (data) => (maxTemp.innerHTML = "Max Temp: " + formatTempCel(Math.round(data.main.temp_max)));
  const _feelsLike = (data) => (feelsLike.innerHTML = "Feels like: " + formatTempCel(Math.round(data.main.feels_like)));
  const _loading = (data) => {
    loadClouds.setAttribute("data-num", Math.round(data.clouds.all));
    loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    _loadingCircle();
  };

  const _numDays = (data) => (data.length === 4 ? (foreWrap.className = "forecast four-days") : (foreWrap.className = "forecast"));

  // Helper functions ======================================================================================
  // Format Celsius
  const formatTempCel = (temp) => temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';
  const formatTemp = (temp) => temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>';
  // Animate loading circle
  const _loadingCircle = () => {
    const counters = Array(loading.length);
    const intervals = Array(loading.length);
    counters.fill(0);
    loading.forEach((number, index) => {
      intervals[index] = setInterval(() => {
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

  const _forecast = (data) => {
    console.log(data);
    for (let x = 0; x < data.length; x++) {
      let max = null;
      let min = null;
      const getDay = startOfDay(new Date(data[x][0].dt_txt.split(" ")[0]));
      // Date - Day
      forecasts[x].querySelector(".day").innerText = getDay.toString().split(" ")[0];
      // Min / Max
      for (const fore of data[x]) {
        if (max === null && min === null) {
          max = fore.main.temp_max;
          min = fore.main.temp_min;
        } else {
          fore.main.temp_max > max ? (max = fore.main.temp_max) : (max = max);
          fore.main.temp_min < min ? (min = fore.main.temp_min) : (min = min);
        }
      }
      forecasts[x].querySelector(".min").innerHTML = "/" + formatTemp(Math.round(min));
      forecasts[x].querySelector(".max").innerHTML = formatTemp(Math.round(max));
    }
    // Image
  };

  const _todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  const _todaysDate = () => {
    var options = {
      weekday: "short",
      year: "numeric",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    let date = new Date().toLocaleTimeString("en-us", options).split(",");
    date.splice(date.length - 1, 1);
    date[1] = date[1].trim().split(" ").reverse().join(" ");
    date[2] = date[2].trim();
    date[0] += ",";
    date = date.join(" ").trim();

    return date;
  };

  const _removeToday = (data) => {
    const remove = data;
    for (let o = 0; o < remove.length; o++) {
      if (data[o][0].dt_txt.indexOf(_todayDate()) > -1) {
        remove.splice(o, 1);
      }
    }
    return remove;
  };

  const _splitDataByDays = (data) => {
    let forecastDays = [];
    let forecast = [];
    for (let i = 0; i < data.list.length; i++) {
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

  return { updateCurrent, updateForecast };
})();

export { domManipulation };

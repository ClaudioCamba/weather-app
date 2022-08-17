import {
  location,
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
} from "./variables.js";

const domManipulation = (function () {
  "use strict";
  const updateCurrent = (data) => {
    _location(data);
    _CurrentTemp(data);
    _Description(data);
    _minTemp(data);
    _maxTemp(data);
    _feelsLike(data);
    _loading(data);
  };

  const updateForecast = (data) => {
    const cleanData = _splitDataByDays(data);
    _lowHighTemp(cleanData);
  };

  // DOM functions ======================================================================================
  const _location = (data) => (location.innerText = data.name + ", " + data.sys.country);
  const _CurrentTemp = (data) => (temperature.innerHTML = formatTemp(Math.round(data.main.temp)));
  const _Description = (data) => (description.innerText = data.weather[0].description);
  const _minTemp = (data) => (minTemp.innerHTML = "Min Temp: " + formatTemp(Math.round(data.main.temp_min)));
  const _maxTemp = (data) => (maxTemp.innerHTML = "Max Temp: " + formatTemp(Math.round(data.main.temp_max)));
  const _feelsLike = (data) => (feelsLike.innerHTML = "Feels like: " + formatTemp(Math.round(data.main.feels_like)));
  const _loading = (data) => {
    loadClouds.setAttribute("data-num", Math.round(data.clouds.all));
    loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    loadHumid.setAttribute("data-num", Math.round(data.main.humidity));
    _loadingCircle();
  };

  // Helper functions ======================================================================================
  // Format Celsius
  const formatTemp = (temp) => temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';
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

  const _lowHighTemp = (data) => {
    console.log(data);
    console.log(forecasts);
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

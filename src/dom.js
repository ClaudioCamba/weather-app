import { location, temperature, description, minTemp, maxTemp, feelsLike } from "./variables.js";

const domManipulation = (function () {
  "use strict";
  const updateCurrent = (data) => {
    _location(data);
    _CurrentTemp(data);
    _Description(data);
    _minTemp(data);
    _maxTemp(data);
    _feelsLike(data);
  };

  // DOM functions
  const _location = (data) => {
    location.innerText = data.name + ", " + data.sys.country;
  };
  const _CurrentTemp = (data) => {
    temperature.innerHTML = formatTemp(Math.round(data.main.temp));
  };
  const _Description = (data) => {
    description.innerText = data.weather[0].description;
  };
  const _minTemp = (data) => {
    minTemp.innerHTML = "Min Temp: " + formatTemp(Math.round(data.main.temp_min));
  };
  const _maxTemp = (data) => {
    maxTemp.innerHTML = "Max Temp: " + formatTemp(Math.round(data.main.temp_max));
  };
  const _feelsLike = (data) => {
    feelsLike.innerHTML = "Feels like: " + formatTemp(Math.round(data.main.feels_like));
  };

  // Helper functions
  const formatTemp = (temp) => temp + '<span class="deg-symbol">&#176;<span class="minus">-</span></span>C';

  return { updateCurrent };
})();

export { domManipulation };

import { location, temperature, description } from "./variables.js";

const domManipulation = (function () {
  "use strict";
  const updateCurrent = (data) => {
    _location(data);
    _CurrentTemp(data);
    _Description(data);
  };

  const _location = (data) => {
    location.innerText = data.name + ", " + data.sys.country;
  };
  const _CurrentTemp = (data) => {
    temperature.innerText = Math.round(data.main.temp);
  };
  const _Description = (data) => {
    description.innerText = data.weather[0].description;
  };

  return { updateCurrent };
})();

export { domManipulation };

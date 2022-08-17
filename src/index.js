import "./style/style.scss";
import { domManipulation } from "./dom.js";

// import cityData from "./data/city.list.json";

const weatherApp = (() => {
  // Store values
  const values = {
    loc: null,
    limit: "5",
    units: "&units=metric",
    apiKey: "e2f88a64edb26908f2c8a836e0f87c19",
    coordUrl: "https://api.openweathermap.org/geo/1.0/direct?q=",
    coord: null,
    todayUrl: "https://api.openweathermap.org/data/2.5/weather?lat=",
    today: null,
    foreUrl: "https://api.openweathermap.org/data/2.5/forecast?lat=",
    fore: null,
  };

  // Input element to get client location
  const inputElem = (() => {
    const input = document.querySelector(".input-wrap input");
    const button = document.querySelector(".input-wrap button");
    // Validate value before making API call
    button.addEventListener("click", () => {
      // if (input.validity.valid) {
      values.loc = input.value;
      getData(values.loc);
      // } else {
      //   console.log("invalid");
      //   console.log(input.validity);
      // }
    });
  })();

  // Fetch weather Data
  const getData = (val) => {
    requestData(values.coordUrl + val + "&limit=" + values.limit + "&appid=" + values.apiKey).then((coord) => {
      console.log(coord);
      values.coord = coord[0];
      // Current fetch
      // requestData(values.todayUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((current) => {
      //   console.log(current);
      //   domManipulation.updateCurrent(current);
      // });
      // Forecast fetch
      requestData(values.foreUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((forecast) => {
        domManipulation.updateForecast(forecast);
      });
    });
  };

  // Fetch request function
  async function requestData(url) {
    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      return data;
    } catch (err) {
      alert(err); // TypeError: failed to fetch
    }
  }
})();

const _todayDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

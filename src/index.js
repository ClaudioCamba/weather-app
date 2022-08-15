import "./style/style.scss";

const weatherApp = (() => {
  // Store values
  const values = {
    loc: null,
    limit: 1,
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
    const appWrap = document.querySelector("#weather-app");
    const elemWrap = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    elemWrap.className = "input-wrap";
    input.type = "text";
    input.pattern = "[a-z-A-Z]+";
    input.required = true;

    elemWrap.append(input, button);
    appWrap.querySelector(".title-search").appendChild(elemWrap);

    // Validate value before making API call
    button.addEventListener("click", () => {
      if (input.validity.valid) {
        values.loc = input.value;
        getData(values.loc);
      } else {
        console.log("invalid");
        console.log(input.validity);
      }
    });
  })();

  // Fetch weather Data
  const getData = (val) => {
    requestData(values.coordUrl + val + "&appid=" + values.apiKey).then((coord) => {
      values.coord = coord[0];
      // Current fetch
      requestData(values.todayUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((fore) => {
        console.log("current");
        console.log(fore);
      });
      // Forecast fetch
      requestData(values.foreUrl + coord[0].lat + "&lon=" + coord[0].lon + "&appid=" + values.apiKey + values.units).then((fore) => {
        console.log("forecast");
        console.log(fore);
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

  // Testing
  // document.querySelector(".current .img img").setAttribute("src", testImg);
})();

// Loading circle

let items = document.querySelectorAll(".progress-item");
const counters = Array(items.length);
const intervals = Array(items.length);
counters.fill(0);
items.forEach((number, index) => {
  intervals[index] = setInterval(() => {
    if (counters[index] == parseInt(number.dataset.num)) {
      clearInterval(intervals[index]);
    } else {
      counters[index] += 1;
      number.style.background = "conic-gradient(#97DAF5, #31B8DF calc(" + counters[index] + "%),#FFFFFF 0deg)";
      number.setAttribute("data-value", counters[index] + "%");
      number.innerHTML = counters[index] + "%";
    }
  }, 15);
});

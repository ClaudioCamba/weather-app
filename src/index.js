import "./style.scss";

// Get client location
const inputElem = (() => {
  const appWrap = document.createElement("div");
  const elemWrap = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");

  appWrap.id = "weather-app";
  elemWrap.className = "input-wrap";

  input.type = "text";
  input.setAttribute("required", true);

  elemWrap.append(input, button);
  appWrap.appendChild(elemWrap);

  document.body.appendChild(appWrap);

  // Validate value before making API call
  button.addEventListener("click", () => {
    validateInput(input);
  });
})();

// Validate input
const validateInput = (elem) => {
  if (elem.validity.valid) {
    getData(elem.value);
  } else {
    console.log("invalid");
  }
};

// function doubleAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x * 2);
//     }, 100);
//   });
// }

// async function addAsync(x) {
//   const a = await doubleAfter2Seconds(10);
//   const b = await doubleAfter2Seconds(20);
//   const c = await doubleAfter2Seconds(30);
//   return x + a + b + c;
// }

// console.log(
//   addAsync(10).then((sum) => {
//     console.log(sum);
//   })
// );

// Calling and cleaning data
const getData = (val) => {
  const values = {
    location: val,
    limit: 1,
    apiKey: "e2f88a64edb26908f2c8a836e0f87c19",
    coordUrl: "https://api.openweathermap.org/geo/1.0/direct?q=",
    coord: "",
    foreUrl: "https://api.openweathermap.org/data/2.5/forecast/daily?lat=",
    fore: "",
  };

  // requestData(values.coordUrl + values.location + "&appid=" + values.apiKey).then(function (result) {
  //   values.coord = result;
  //   console.log(result);
  //   // requestData(values.foreUrl + result[0].lat + "&lon=" + result[0].lon + "&cnt=7&appid=" + values.apiKey).then(function (result) {
  //   //   console.log(result);
  //   // });
  // });
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  requestData("https://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=e2f88a64edb26908f2c8a836e0f87c19").then(
    function (result) {
      console.log(result);
    }
  );
};

// Get location input
async function requestData(url) {
  let data;
  try {
    const response = await fetch(url, { mode: "cors" });
    return (data = await response.json());
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

// Sort Data
const sortData = (data) => {
  console.log(data);
};

// getWeatherData(url);
// 51.5073219
// -0.1276474

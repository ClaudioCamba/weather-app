import "./style.scss";

const loc = "Islington";
const key = "e2f88a64edb26908f2c8a836e0f87c19";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&lang=gb&appid=${key}`;

// // Get client location
// const getLoc

// Get location input
async function getWeatherData(loc) {
  try {
    const response = await fetch(loc, { mode: "cors" });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

getWeatherData(url);

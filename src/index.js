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

const cleanData = [
  [
    {
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
        temp_kf: -0.19,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 4.47,
        deg: 53,
        gust: 5.66,
      },
      visibility: 6146,
      pop: 0.91,
      rain: {
        "3h": 1.88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-17 12:00:00",
    },
    {
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
        temp_kf: 0.78,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 4.04,
        deg: 62,
        gust: 5.65,
      },
      visibility: 6135,
      pop: 0.9,
      rain: {
        "3h": 5.69,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-17 15:00:00",
    },
    {
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
        temp_kf: 0.82,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.81,
        deg: 37,
        gust: 5.71,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        "3h": 3.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-17 18:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.98,
        deg: 38,
        gust: 8.3,
      },
      visibility: 10000,
      pop: 0.47,
      rain: {
        "3h": 0.76,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-17 21:00:00",
    },
  ],
  [
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 3.08,
        deg: 52,
        gust: 7.24,
      },
      visibility: 10000,
      pop: 0.27,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-18 00:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 2.39,
        deg: 34,
        gust: 5.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-18 03:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 1.79,
        deg: 41,
        gust: 3.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-18 06:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 1.05,
        deg: 60,
        gust: 1.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-18 09:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 61,
      },
      wind: {
        speed: 0.51,
        deg: 251,
        gust: 1.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-18 12:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 2.66,
        deg: 238,
        gust: 3.96,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-18 15:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 3.57,
        deg: 246,
        gust: 5.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-18 18:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 3.58,
        deg: 236,
        gust: 8.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-18 21:00:00",
    },
  ],
  [
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 2.44,
        deg: 238,
        gust: 5.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-19 00:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.54,
        deg: 244,
        gust: 6.08,
      },
      visibility: 10000,
      pop: 0.34,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-19 03:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.46,
        deg: 259,
        gust: 5.78,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-19 06:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.36,
        deg: 283,
        gust: 4.97,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-19 09:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 3.65,
        deg: 264,
        gust: 5.74,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-19 12:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.35,
        deg: 299,
        gust: 4.92,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-19 15:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.91,
        deg: 301,
        gust: 4.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-19 18:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.56,
        deg: 279,
        gust: 9.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-19 21:00:00",
    },
  ],
  [
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.36,
        deg: 288,
        gust: 7.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-20 00:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.79,
        deg: 269,
        gust: 5.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-20 03:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.19,
        deg: 244,
        gust: 6.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-20 06:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.69,
        deg: 246,
        gust: 7.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-20 09:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 5.58,
        deg: 254,
        gust: 7.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-20 12:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.75,
        deg: 235,
        gust: 8.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-20 15:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 3.67,
        deg: 244,
        gust: 7.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-20 18:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.81,
        deg: 259,
        gust: 8.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-20 21:00:00",
    },
  ],
  [
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.4,
        deg: 252,
        gust: 8.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-21 00:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.06,
        deg: 248,
        gust: 7.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-21 03:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.38,
        deg: 243,
        gust: 7.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-21 06:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.03,
        deg: 229,
        gust: 7.5,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-21 09:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.23,
        deg: 241,
        gust: 7.56,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.22,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-21 12:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 3.59,
        deg: 262,
        gust: 6.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-21 15:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 2.25,
        deg: 285,
        gust: 5.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-21 18:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 2.01,
        deg: 227,
        gust: 4.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-21 21:00:00",
    },
  ],
  [
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 1.49,
        deg: 239,
        gust: 2.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-22 00:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 0.97,
        deg: 211,
        gust: 1.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-22 03:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 85,
      },
      wind: {
        speed: 1.02,
        deg: 141,
        gust: 2.02,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-22 06:00:00",
    },
    {
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
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.42,
        deg: 163,
        gust: 4.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-22 09:00:00",
    },
  ],
];

// console.log(cleanData);

// const todayDate = () => {
//   let today = new Date();
//   let dd = String(today.getDate()).padStart(2, "0");
//   let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//   let yyyy = today.getFullYear();
//   return yyyy + "-" + mm + "-" + dd;
// };

// const _removeToday = (data) => {
//   const remove = data;
//   for (let o = 0; o < remove.length; o++) {
//     if (data[o][0].dt_txt.indexOf(todayDate()) > -1) {
//       remove.splice(o, 1);
//     }
//   }
//   return remove;
// };

// const _numberOfDays = (data) => (data.length === 4 ? console.log("add class to show 4") : console.log("add class to show 5"));

// _numberOfDays(_removeToday(cleanData));

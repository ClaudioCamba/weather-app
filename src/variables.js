"use strict";

const location = document.querySelector(".intro .location");
const temperature = document.querySelector(".temp-wrap .temp");
const description = document.querySelector(".temp-wrap .desc");
const minTemp = document.querySelector(".desc-1 .min-temp");
const maxTemp = document.querySelector(".desc-1 .max-temp");
const feelsLike = document.querySelector(".desc-1 .feels-like");
const loadClouds = document.querySelector(".desc-2 .clouds");
const loadHumid = document.querySelector(".desc-2 .humid");
const loadWind = document.querySelector(".desc-2 .wind");
let loading = document.querySelectorAll(".progress-item");

export { location, temperature, description, minTemp, maxTemp, feelsLike, loading, loadClouds, loadHumid, loadWind };

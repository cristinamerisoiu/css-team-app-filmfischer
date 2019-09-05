import { getLocation, setLocation } from "./user.js";

// Define constants/variables
const buttonCologne = document.querySelector(".cologne-btn");
const buttonBonn = document.querySelector(".bonn-btn");
const buttonDdorf = document.querySelector(".ddorf-btn");
const buttonShowAll = document.querySelector(".show-all-btn");
const cologneCinemas = document.querySelectorAll(".cologne");
const bonnCinemas = document.querySelectorAll(".bonn");
const ddorfCinemas = document.querySelectorAll(".ddorf");
const allCinemas = document.querySelectorAll(".cinemasection");

// Functions to add or remove the class .hide
export function hideCity(city) {
  city.classList.add("hide");
}
export function showCity(city) {
  city.classList.remove("hide");
}

export function generateFilterCity(city) {
  const filterCity = function() {
    allCinemas.forEach(hideCity);
    city.forEach(showCity);
  };
  return filterCity;
}

const filterAllCinemas = generateFilterCity(allCinemas);
const filterCologneCinemas = generateFilterCity(cologneCinemas);
const filterBonnCinemas = generateFilterCity(bonnCinemas);
const filterDdorfCinemas = generateFilterCity(ddorfCinemas);

// Initial loading function
export function initLoading() {
  const location = getLocation();
  if (location === "cologneCinemas") {
    filterCologneCinemas();
  } else if (location === "bonnCinemas") {
    filterBonnCinemas();
  } else if (location === "ddorfCinemas") {
    filterDdorfCinemas();
  } else {
    filterAllCinemas();
  }
}

export function initLocation() {
  buttonShowAll.addEventListener("click", function() {
    filterAllCinemas();
    setLocation("allCinemas");
  });
  buttonCologne.addEventListener("click", function() {
    filterCologneCinemas();
    setLocation("cologneCinemas");
  });
  buttonBonn.addEventListener("click", function() {
    filterBonnCinemas();
    setLocation("bonnCinemas");
  });
  buttonDdorf.addEventListener("click", function() {
    filterDdorfCinemas();
    setLocation("ddorfCinemas");
  });
}

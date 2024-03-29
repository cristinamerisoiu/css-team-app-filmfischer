"use strict";

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
function hideCity(city) {
  city.classList.add("hide");
}
function showCity(city) {
  city.classList.remove("hide");
}

function generateFilterCity(city) {
  const filterCity = function() {
    allCinemas.forEach(hideCity);
    city.forEach(showCity);
  };
  return cinemaCity;
}

// Buttons
buttonShowAll.addEventListener("click", generateFilterCity(allCinemas));
buttonCologne.addEventListener("click", generateFilterCity(cologneCinemas));
buttonBonn.addEventListener("click", generateFilterCity(bonnCinemas));
buttonDdorf.addEventListener("click", generateFilterCity(ddorfCinemas));

// Initial loading function
allCinemas.forEach(showCity);

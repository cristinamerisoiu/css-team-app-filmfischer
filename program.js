"use strict";

const allMovies = document.querySelectorAll(".cardprogram");
const fsk0 = document.querySelectorAll(".fsk-0");
const fsk6 = document.querySelectorAll(".fsk-6");
const fsk12 = document.querySelectorAll(".fsk-12");
const fsk18 = document.querySelectorAll(".fsk-18");

const age = parseInt(prompt("How old are you?", "12"));

if (age < 6) {
  allMovies.classList.add("hide");
  fsk0.classList.remove("hide");
} else if (age.value > 6 && age.value > 12) {
  allMovies.classList.add("hide");
  fsk6.classList.remove("hide");
}

function hideMovie(movie) {
  movie.classList.add(hide);
}

function showMovie(movie) {
  movie.classList.remove("hide");
}

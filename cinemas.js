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
function toggleAdd(city) {
  city.classList.add("hide");
}
function toggleHide(city) {
  city.classList.remove("hide");
}

// Individual functions for each Button
function toggleCologne() {
  allCinemas.forEach(toggleAdd);
  cologneCinemas.forEach(toggleHide);
}

function toggleBonn() {
  allCinemas.forEach(toggleAdd);
  bonnCinemas.forEach(toggleHide);
}

function toggleDdorf() {
  allCinemas.forEach(toggleAdd);
  ddorfCinemas.forEach(toggleHide);
}

function toggleAll() {
  allCinemas.forEach(toggleHide);
}

// Buttons
buttonShowAll.addEventListener("click", toggleAll);
buttonCologne.addEventListener("click", toggleCologne);
buttonBonn.addEventListener("click", toggleBonn);
buttonDdorf.addEventListener("click", toggleDdorf);

// Initial loading function
allCinemas.forEach(toggleHide);

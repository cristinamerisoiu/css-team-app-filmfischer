import { setItem, getItem } from "./storage.js";

const storageData = getItem("userData") || {
  location: "allCinemas",
  age: "21"
};

export function setLocation(sectionvalue) {
  storageData.location = sectionvalue;
  log();
  setItem("userData", storageData);
}

export function getLocation() {
  return storageData.location;
}

function log() {
  console.log(storageData);
}

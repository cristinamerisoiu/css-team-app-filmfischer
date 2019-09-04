import { setItem, getItem } from "./storage.js";

const storageData = getItem("userData") || {
  location: "allCinemas",
  age: "21"
};

export function setLocation(value) {
  storageData.location = value;
  log();
  setItem("userData", storageData);
}

export function getLocation() {
  return storageData.location;
}

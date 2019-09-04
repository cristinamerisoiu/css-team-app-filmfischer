import {
  initLoading,
  hideCity,
  showCity,
  generateFilterCity,
  initLocation
} from "./components/cinemas.js";
// import { setItem, getItem } from "./components/storage.js";
import { setLocation, getLocation } from "./components/user.js";

initLoading();
initLocation();
getLocation();
